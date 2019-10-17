<template>
  <div class="all_body">
    <el-row>
      <el-col :span="24">
        <div class="top_bg">
          <div class="top_bg_con">
            <div class="logo" @click="goHome"><img src="../assets/imgs/heard/pinggu20190820_09.png" /></div>
            <div class="menu">
              <ul>
                <li class="hover" @click="AssociatedMedia">
                  <a :class="(navState ==false)?'active':''">
                    <span><img src="../assets/imgs/heard/pinggu20190820_04.png" /></span>传播力分析</a>
                </li>
                <li @click="ThematicAnalysis">
                  <a :class="(navState ==true)?'active':''">
                    <span><img src="../assets/imgs/heard/pinggu20190820_06.png" /></span>专题分析</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>

import fetchUtil from "@/api/fetch";

export default {
  name: "home",
  data() {
    return {
      navState: false,//头部导航栏状态
    };
  },
  watch: {
    '$route'() {
      if( this.$route.path.indexOf("manuscriptLibrary")>-1){
        this.navState=true;
      }
    }
  },
  methods: {
    AssociatedMedia: function() {
      this.navState = false;
      this.$router.push("/");
    },
    ThematicAnalysis: function() {
      this.navState = true;
      this.$router.push("/manuscriptLibrary");
    },
    goHome: function() {
      this.$router.push("/");
    }



  }
};
</script>

<style scoped lang="scss">
.all_body {
  height: 100%;
  .top_bg {
    // width: 100%;
    background: #27326b url(../assets/imgs/heard/pinggu20190820_01.png) left center no-repeat;
    .top_bg_con {
      min-width: 1200px;
      margin: 0 auto;
      position: relative;
      height: 88px;
      padding: 8px 0;
      .logo {
        float: left;
        padding: 28px 0 0 80px;
        width: 660px;
        cursor: pointer;
        img {
          height: 40px;
        }
      }
      .menu {
        width: 290px;
        float: right;
        height: 68px;
        display: inline;
        li {
          float: left;
          width: 108px;
          text-align: center;
          font-size: 18px;
          line-height: 28px;
          height: 78px;
          margin: 0 15px 0 0;
          a {
            color: #fff;
            display: block;
            padding: 4px 0;
            width: 104px;
            span {
              display: block;
              img {
                height: 40px;
              }
            }
          } // &:hover {
          //   border: 2px solid #fff;
          //   border-radius: 5px;
          // }
          .active {
            border: 2px solid #fff;
            border-radius: 5px;
          }
        }
      }
    }
  }

  .main_body {
    position: relative;
    overflow: hidden;
    height: calc(100% - 94px);
  }
}






// .top_bg_con .top_bg_con .menu ul .top_bg_con .menu ul li .top_bg_con .menu ul li a .top_bg_con .menu ul li.hover a {
//   border: 2px solid #fff;
//   border-radius: 5px;
// }
</style>
