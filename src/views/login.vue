<template>
  <div class="logintop_bg">
    <div class="qn_login_con">
      <el-form :model="form" :rules="rulesform" ref="form" label-width="100%" status-icon>
        <div class="tit">
          <img src="../assets/imgs/login/login20190823_03.png" />
        </div>

        <p>
          <el-form-item label prop="username" style="margin-bottom:0px;" :label-width="widthN">
            <input
              type="text"
              v-model="form.username"
              class="form_input"
              placeholder="用户名"
              @keyup.enter="show($event)"
            />
          </el-form-item>
        </p>
        <p class="password">
          <el-form-item label prop="password" style="margin-bottom:0px;" :label-width="widthN">
            <input
              type="password"
              v-model="form.password"
              class="form_input"
              placeholder="密码"
              @keyup.enter="show($event)"
            />
          </el-form-item>
        </p>
        <div class="btn">
          <a class="mmbg" href target="_blank">忘记密码</a>
          <input name="remember" v-model="checked" type="checkbox" value />记住用户名和密码
        </div>
        <div class="dengru">
          <el-form-item :label-width="widthN">
            <button type="button" @click="submitForm()" class="form_input_bnt">
              <span>登 录</span>
            </button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="footer">
      <div class="footer_con">Copyright @ 2019 All right Reserved</div>
    </div>
  </div>
</template>

<script>
import fetchUtil from "@/api/fetch";
import Qs from "qs";
export default {
  name: "Login",
  data() {
    return {
      checked: true,
      ckeckInfo: "复选框没有被选中",
      widthN: "0px",
      form: {
        username: "",
        password: ""
      },

      rulesform: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      logining: false
    };
  },
  //页面加载调用获取cookie值
  mounted() {
    this.getCookie();
  },
  methods: {
    submitForm() {
     
      var _this = this;
      if (this.form.username == "") {
        _this.$message.error("提交失败，用户名不能为空！");
      } else if (this.form.password == "") {
        _this.$message.error("提交失败，密码不能为空！");
      } else {
        this.logining = true;
        var loginParams = {
          user: this.form.username,
          password: this.form.password
        };
        fetchUtil({
          method: "post",
          url: "/casindex/login/doLogin",
          params: Qs.stringify(loginParams)
        }).then(
          response => {
            console.log("success");
            if (response.ISSUCCESS == "true") {
               this.handleSaveUserInfo(); //调用保存用户信息，在那里用，就在那里调
       
              _this.$router.push("/");
            } else {
              _this.logining = false;
              console.log("我失败了");
              _this.$message.error(response.REPORTS.DETAIL);
            }
          },
          response => {
            this.logining = false;
            _this.$message.error("提交失败，请重试！");
          }
        );
      }
    },
    show: function(ev) {
      if (ev.keyCode == 13) {
        this.submitForm();
      }
    },
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.form.username = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.form.password = arr2[1];
          }
        }
      }
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    },
    handleSaveUserInfo() {
      //保存用户信息
      const self = this;
      //判断复选框是否被勾选 勾选则调用配置cookie方法
      if (self.checked == true) {
        console.log("checked == true");
        //传入账号名，密码，和保存天数3个参数
        self.setCookie(self.form.username, self.form.password, 7);
      } else {
        console.log("清空Cookie");
        //清空Cookie
        self.clearCookie();
      }
    }
  }
};
</script>

<style scoped lang="scss">
/****登录页***/

.logintop_bg {
  width: 100%;
  min-height: 100%;
  background: url(../assets/imgs/login/loginbg20190823.jpg) center top no-repeat;
  background-size: 100% 100%;
  position: relative;
  .qn_login_con {
    float: right;
    width: 23%;
    padding: 70px 40px 40px 40px;
    background: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 50%;
    margin-top: -200px;
    right: 150px;
    .tit {
      margin: 0 0 40px 0;
      text-align: center;
      img {
        width: 100%;
      }
    }
    p {
      border: 1px solid #dfdfdf;
      height: 48px;
      line-height: 48px;
      margin: 0 0 15px 0;
      padding: 0 0 0 60px;
      background: #fff url(../assets/imgs/login/login20190823_07.png) 20px
        center no-repeat;

      input {
        color: #5d5d5d;
        font-size: 16px;
        border: none;
        background: none;
        height: 48px;
        line-height: 48px;
        float: left;
        width: 100%;
      }
    }
    .password {
      background-image: url(../assets/imgs/login/login20190823_10.png);
    }
    .btn {
      width: 100%;
      margin: 0 auto;
      padding: 15px 0;
      overflow: hidden;
      color: #888;
      font-size: 16px;
      height: 28px;
      line-height: 28px;
      text-align: left;
      a {
        display: inline;
        width: 70px;
        float: left;
        color: #4259a3;
      }
      .mmbg {
        float: right;
      }
    }
    .dengru a {
      display: block;
      height: 47px;
      line-height: 47px;
      margin: 0 auto;
      background: #4259a3;
      color: #fff;
      text-align: center;
      font-size: 22px;
    }
  }
}

.form_input_bnt {
  display: block;
  width: 100%;
  height: 47px;
  line-height: 47px;
  margin: 0 auto;
  background: #4259a3;
  color: #fff;
  text-align: center;
  font-size: 22px;
  border: none;
}

/******底部样式******/

.footer {
  width: 100%;
  position: absolute;
  bottom: 20px;
}

.footer_con {
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 24px;
  margin: 0 30px;
}
</style>
