<template>
    <div class="logintop_bg">
        <div class="qn_login_con">
            <el-form :model="form" :rules="rulesform" ref="form" label-width="100%" status-icon>
                <div class="tit"><img src="../assets/imgs/login/login20190823_03.png" /></div>

                <p>
                    <el-form-item label="" prop="username" style="margin-bottom:0px;" :label-width="widthN">
                        <input type="text" v-model="form.username" class="form_input" placeholder="用户名" @keyup.enter="show($event)" />
                    </el-form-item>

                </p>
                <p class="password">
                    <el-form-item label="" prop="password" style="margin-bottom:0px;" :label-width="widthN">
                        <input type="text" v-model="form.password" class="form_input" placeholder="密码" @keyup.enter="show($event)" />
                    </el-form-item>
                </p>
                <div class="btn">
                    <a class="mmbg" href="" target="_blank">忘记密码</a>
                    <input name="remember" type="checkbox" value="" />记住用户名和密码
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
            <div class="footer_con">
                Copyright @ 2019 All right Reserved
            </div>
        </div>
    </div>
</template>

<script>
import fetchUtil from "@/api/fetch";
import Qs from 'qs'
export default {
    name: 'Login',
    data() {
        return {
            widthN: "0px",
            form: {
                username: '',
                password: ''
            },

            rulesform: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],

            },
            logining: false,
        }
    },
    methods: {
        submitForm() {
            var _this = this;
            if (this.form.username == '') {
                _this.$message.error('提交失败，用户名不能为空！');
            } else if (this.form.password == '') {
                _this.$message.error('提交失败，密码不能为空！');
            } else {
                this.logining = true;
                var loginParams = {
                    user: this.form.username,
                    password: this.form.password,

                }
                fetchUtil({
                    method: 'post',
                    url: "/casindex/login/doLogin",
                    params: Qs.stringify(loginParams)
                }).then((response) => {
                    console.log('success');
                    if (response.code == 1) {
                        _this.$message({
                            message: '恭喜你，登录成功！',
                            type: 'success'
                        });
                        localStorage.userName = response.data.username;
                        localStorage.realName = response.data.realname;
                        localStorage.userid = response.data.userId;
                        localStorage.roleValue = response.data.roleValue;
                        _this.$router.push('/Desktop');
                    } else if (response.ISSUCCESS == 'true') {//登录成功
                        console.log("我成功了")
                        _this.$router.push('/');
                    } else {
                        _this.logining = false;
                        console.log("我失败了")
                        _this.$message.error(response.REPORTS.DETAIL);

                    }
                }, (response) => {
                    this.logining = false;
                    _this.$message.error('提交失败，请重试！');
                });

            }


        },
        show: function(ev) {
            if (ev.keyCode == 13) {
                this.submitForm();
            }
        },
    }

}
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
        background: rgba(255, 255, 255, .9);
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
            background: #fff url(../assets/imgs/login/login20190823_07.png) 20px center no-repeat;

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
