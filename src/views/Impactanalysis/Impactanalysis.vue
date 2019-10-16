<template>
  <div id="main_body_content" class="main_body_content">
    <div class="tac">
      <div class="left_menu">
        <el-menu :default-active="this.$route.path" router @open="handleOpen" @close="handleClose" background-color="#f0f1f5" text-color="#888" active-text-color="#4259a3">
          <!-- <el-submenu index="/">
                    <template slot="title">
                      <span>合作媒体</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item v-for="(item,index) in menuList" :key="item.mddiaCode" :index="'/meidiaList?meidiaId='+item.mddiaCode+'&meidiaName=' + item.mediaName">{{item.mediaName}}</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu> -->
          <el-menu-item :index='worTogetherMeidia'>
            <span slot="title" :class="(currentRoute=='/')?'active':''">合作媒体</span>
          </el-menu-item>
          <el-menu-item index="/manuscriptLibrary">
            <span slot="title">通讯稿件分析</span>
          </el-menu-item>
        </el-menu>
      </div>
      <!-- 主页面 -->
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
      currentRoute: '',
      worTogetherMeidia: '/meidiaList?meidiaId=' + '' + '&meidiaName=' + '',

    };
  },
  created: function() {
    this.currentRoute = this.$route.path
  },
  watch: {
    "$route"() {
      console.log(this.$route.path);   
      this.currentRoute = this.$route.path
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, "999", keyPath);
      this.$router.push(key);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(key);

    },
    getMenuList: function() {
      fetchUtil({
        method: 'get',
        url: "/casindex/mediaStatistics/getAllMedia",
      }).then((response) => {
        console.log(response, "menuList");
        this.menuList = response.result;

      });

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
    width: 100%;
    height: 100%;
    background-color: #f0f1f5;
    .left_menu {
      width: 14.5%;
      float: left;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
      height: 100%;
      .el-menu {
        border-right: none;
        .active {
          color: #4259a3
        }
      }
    }
    .impactanalysis_main {
      // padding: 0 0 0 10px;
      width: 85%;
      float: right;
      height: 100%;
    }
  }
}
</style>
