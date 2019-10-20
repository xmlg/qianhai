<template>
  <div id="main_body_content" class="main_body_content">
    <!-- <el-row class="tac"> -->
    <div style="width:100%;" class="tac">
      <div class="left_menu">
        <el-menu
          :default-active="this.$route.path"
          router
          @open="handleOpen"
          @close="handleClose"
          background-color="#f0f1f5"
          text-color="#888"
          active-text-color="#4259a3"
          :router="true"
          :default-openeds="[allMeidia]"
        >
          <el-submenu :index="allMeidia" :key="""">
            <template slot="title">
              <span>合作媒体</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(item,index) in menuList"
                :id="'mddiaCode_'+item.mddiaCode"
                :key="item.mddiaCode"
                :index="'/meidiaList?meidiaId='+item.mddiaCode+'&meidiaName=' + item.mediaName"
                :class="(currentRoute== ('/meidiaList?meidiaId='+item.mddiaCode))?'active':''"
              >{{item.mediaName}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <!-- 主页面 -->
      <!-- <el-col class="impactanalysis_main" :span="20" background-color="#b2b2b2;">
                                    <router-view></router-view>
      </el-col>-->
      <div class="impactanalysis_main" background-color="#b2b2b2;">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import fetchUtil from "@/api/fetch";
export default {
  name: "impactanalysis",
  data() {
    return {
      menuList: [],
      allMeidia: "/meidiaList?meidiaId=" + "" + "&meidiaName=" + "",
      currentRoute: this.$route.fullPath.split("&meidiaName")[0] //获取路由（/meidiaList?meidiaId=21）
    };
  },
  watch: {
    $route() {
      console.log(this.$route);
      this.currentRoute = this.$route.fullPath.split("&meidiaName")[0];
    }
  },
created:function(){
    console.log(this.currentRoute, "刚开始的路由");
    this.getMenuList();
},
// mounted() {
//     this.$nextTick(function(){
//         var mddiaCode = "#mddiaCode_" + this.$route.query.meidiaId;
//         var anchor = this.$el.querySelector(mddiaCode);
//         // document.documentElement.scrollTop = anchor.offsetTop

//     })
    
    
// },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, "999", keyPath);
      this.$router.push({ path: key });
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({ path: key });
    },
    getMenuList: function() {
      fetchUtil({
        method: "get",
        url: "/casindex/mediaStatistics/getAllMedia"
      }).then(
        response => {
          console.log(response, "menuList");
          this.menuList = response.result;
          this.$nextTick(function(){
            if(!!this.$route.query.meidiaId){
                  var mddiaCode = "mddiaCode_" + this.$route.query.meidiaId;
        var element = document.getElementById(mddiaCode);
        element.scrollIntoView(true);

              }
      

    })
        },
        response => {
          console.log("response");
        }
      );
    }
  }
};
</script>

<style scoped lang="scss">
.main_body_content {
  position: relative;
  overflow: hidden;
  height: calc(100% - 94px); // height: 100%;
  .tac {
    height: 100%;
    background-color: #f0f1f5;
    .left_menu {
      width: 14.5%;
      float: left;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
      height: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
      .el-menu {
        border-right: none;
        .active {
          color: #4259a3 !important;
        }
      }
    }
    .impactanalysis_main {
      width: 85%;
      float: right; // padding: 0 0 0 10px;
      height: 100%;
    }
  }
}
</style>
