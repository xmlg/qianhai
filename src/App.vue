<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;
  background: #fff;
  height: 100%;
}

body {
  height: 100%;
}








/* 全局重置CSS */

body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
dd {
  margin: 0;
  font-size: 12px;
}

p {
  margin: 0;
}

ul,
ol,
li {
  padding-left: 0;
  list-style-type: none;
}

img {
  border: 0;
}








/*包含以下四种的链接*/

a {
  text-decoration: none;
}



/*正常的未被访问过的链接*/

a:link {
  text-decoration: none;
}



/*已经访问过的链接*/

a:visited {
  text-decoration: none;
}



/*鼠标划过(停留)的链接*/

a:hover {
  cursor: pointer;
  text-decoration: none;
}



/* 正在点击的链接*/

a:active {
  text-decoration: none;
}



/***消除img默认边框*****/

a {
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  /*滚动条的hover样式*/
  background-color: rgba(116, 185, 255, 0.8);
}

::-webkit-scrollbar-thumb:hover {
  /*滚动条的hover样式*/
  background-color: rgba(116, 185, 255, 0.8);
}



/*定义滚动条的轨道，内阴影及圆角*/

::-webkit-scrollbar-track {
  //-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  border-radius: 10px; //background-color: #e9ecef;
  background-color: transparent;
  color: transparent;
  filter: alpha(opacity=0);
}



/*定义滑块，内阴影及圆角*/

::-webkit-scrollbar-thumb {
  /*width: 10px;*/
  height: 20px;
  border-radius: 10px; // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: transparent;
  color: transparent;
}




/*滚动条透明*/


/*鼠标在链接上出下划线,为手势形态 */

table {
  border-collapse: collapse;
}








/*细线表格*/

em {
  font-style: normal;
}

html {
  overflow-y: auto;
  height: 100%;
}








/***默认让所有浏览器出现右边滚动条****/

.clear {
  font-size: 0;
  line-height: 0;
  height: 0;
  clear: both;
  overflow: hidden;
  display: block;
}

:focus {
  outline: 0;
}








/***默认清除浮动****/


/***element-ui 菜单栏样式****/

#main_body_content {
  .el-submenu__title {
    font-size: 20px !important;
    &:active {
      background-color: #4259a3 !important;
      color: #ffffff !important;
    }
    &:hover {
      background-color: #4259a3 !important;
      color: #ffffff !important;
    }
  }
  .el-menu-item {
    font-size: 18px !important;
    padding: 0 10px;
    min-width: 170px;
    &:active {
      background-color: #4259a3 !important;
      color: #ffffff !important;
    }
    &:hover {
      background-color: #4259a3 !important;
      color: #ffffff !important;
    }
  }
  .swiper-container {
    padding: 0 0 20px 0;
    .swiper-pagination-bullet-active {
      background: #27326b;
    }
  }
  .el-table {
    .multiple {
      overflow: hidden;
      text-overflow: ellipsis; //文本溢出显示省略号
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  } //下拉框选择器
  // .el-select {
  //   float: left;
  //   margin-right: 20px;
  //   .el-input__inner {
  //     height: 36px;
  //     line-height: 36px;
  //     width: 160px;
  //   }
  // } 
  //合作媒体稿件列表时间选择器
  .el-range-editor.el-input__inner {
    float: left;
    width: 26%;
    height: 36px;
    margin-right: 3%;
  }
  
}
</style>
