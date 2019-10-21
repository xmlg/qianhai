<template>
  <div class="right_cont">
    <el-row :span="24" class="tit">
      <a>传播力分析></a>
      <a>合作媒体分析</a>
    </el-row>
    <el-row :span="24" class="">
      <div class="meiti_time" @click="changeSearch(1)" :class="(searchDay==1) ? 'active':''">
        <a :class="(searchDay==1) ? 'active1':''">今天</a>媒体共发布稿件{{articleTotalNumber.dayNowNumber}}篇。</div>
      <div class="meiti_time meiti_timeBg2" :class="(searchDay==7) ? 'active':''" @click="changeSearch(7)">
        <a :class="(searchDay==7) ? 'active1':''">7天</a>媒体共发布稿件{{articleTotalNumber.daySevenNumber}}篇。</div>
      <div class="meiti_time meiti_timeBg3" :class="(searchDay==15) ? 'active':''" @click="changeSearch(15)">
        <a :class="(searchDay==15) ? 'active1':''">15天</a> 媒体共发布稿件{{articleTotalNumber.dayFifteenNumber}}篇。</div>
    </el-row>
    <el-row :span="24" class="">
      <div class="meitiLeftc">
        <!-- <div id="chartyc"></div> -->
        <div id="myChart" :style="{width: '100%', height: '600px'}"></div>
        <!-- <img src="../../../assets/imgs/associated/pinggu20190820_36.jpg" /> -->
      </div>
      <div class="meitiRightc">
        <div class="swiper-container">
          <el-carousel :interval="50000" arrow="always">
            <el-carousel-item v-for="(itemList,index) in mediaInformationList" :key="itemList">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr class="tou">
                  <td>序号</td>
                  <td>媒体名称</td>
                  <td>发稿数量</td>
                  <td>总传播力指数</td>
                </tr>
                <tr v-for="(item,index_x) in itemList" :key="index_x">
                  <td>{{index*9+index_x+1}}</td>
                  <td @click="openMeidiaDetails(item)" style="cursor: pointer;">{{item.mediaName}}</td>
                  <td v-if="searchDay==1">{{item.dayNowNumber}}</td>
                  <td v-if="searchDay==7">{{item.daySevenNumber}}</td>
                  <td v-if="searchDay==15">{{item.dayFifteenNumber}}</td>

                  <td v-if="searchDay==1">{{item.dayNowCei}}</td>
                  <td v-if="searchDay==7">{{item.daySevenCei}}</td>
                  <td v-if="searchDay==15">{{item.dayFifteenCei}}</td>
                </tr>

              </table>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

    </el-row>

  </div>
</template>

<script>
import fetchUtil from "@/api/fetch";

export default {
  name: "associatedMedia",
  data() {
    return {
      searchDay: 7,
      articleTotalNumber: '',
      mediaInformationData: '',
      mediaInformationList: [],
      echartsData: {
        color: ['#5377ff', '#00a0ea', '#88d899', '#f9bd65', '#d6f28c', '#ec7aad', '#88d2f5', '#eb6a42', '#fff45c', '#fff562', '#5377ff', '#00a0ea', '#88d899', '#f9bd65', '#d6f28c', '#ec7aad', '#88d2f5', '#eb6a42', '#fff45c', '#fff562', '#5377ff', '#00a0ea', '#88d899', '#f9bd65', '#d6f28c', '#ec7aad', '#88d2f5', '#eb6a42', '#fff45c', '#fff562'],
        data: [],
        name: []
      }
    };
  },
  // watch: {
  //   searchDay(newName, oldName) {
  //     if (newName != oldName) {
  //       this.echartsData.data = []
  //       for (var i = 0; i < this.mediaInformationData.length; i++) {
  //         this.echartsData.name.push(this.mediaInformationData[i].mediaName);

  //         if (newName == 1) {
  //           if (this.mediaInformationData[i].dayNowNumber != 0) {
  //             this.echartsData.data.push({ value: this.mediaInformationData[i].dayNowNumber, name: this.mediaInformationData[i].mediaName })
  //           }
  //         }
  //         if (newName == 7) {
  //           if (this.mediaInformationData[i].daySevenNumber != 0) {
  //             this.echartsData.data.push({ value: this.mediaInformationData[i].daySevenNumber, name: this.mediaInformationData[i].mediaName })
  //           }
  //         }
  //         if (newName == 15) {
  //           if (this.mediaInformationData[i].dayFifteenNumber != 0) {
  //             this.echartsData.data.push({ value: this.mediaInformationData[i].dayFifteenNumber, name: this.mediaInformationData[i].mediaName })
  //           }

  //         }
  //       }
  //     }
  //     this.getEchartData(this.echartsData)
  //   }
  // },
  mounted() {
    //获取今天7天15天稿件数
    this.getMediaArticleTotalNumber();
    //获取echarts，列表轮播数据
    this.getMediaInformationList();
  },


  methods: {
    getMediaArticleTotalNumber() {
      fetchUtil({
        method: 'post',
        url: "/casindex/mediaStatistics/getMediaArticleTotalNumber",
      }).then((response) => {
        console.log(response);
        this.articleTotalNumber = response.result;
      }, (response) => {
        console.log('response');

      });
    },
    changeSearch(day) {
      if (this.searchDay != day) {
        this.searchDay = day;
        this.getMediaInformationList()

      }


    },

    getMediaInformationList() {
      var submitparams = {
        timeScope: this.searchDay
      }
      fetchUtil({
        method: 'get',
        url: "/casindex/mediaStatistics/getMediaInformationList",
        params:submitparams
      }).then((response) => {
        this.mediaInformationData = response.result;
        this.mediaInformationList =[];
        for (var i = 0; i < this.mediaInformationData.length; i += 9) {
          this.mediaInformationList.push(this.mediaInformationData.slice(i, i + 9));
        }

        this.echartsData.data = [];
        this.echartsData.name=[];
        for (var i = 0; i < this.mediaInformationData.length; i++) {
          this.echartsData.name.push(this.mediaInformationData[i].mediaName);

          if (this.searchDay == 1) {
            if (this.mediaInformationData[i].dayNowNumber != 0) {
              this.echartsData.data.push({ value: this.mediaInformationData[i].dayNowNumber, name: this.mediaInformationData[i].mediaName })
            }
          }
          if (this.searchDay == 7) {
            if (this.mediaInformationData[i].daySevenNumber != 0) {
              this.echartsData.data.push({ value: this.mediaInformationData[i].daySevenNumber, name: this.mediaInformationData[i].mediaName })
            }
          }
          if (this.searchDay == 15) {
            if (this.mediaInformationData[i].dayFifteenNumber != 0) {
              this.echartsData.data.push({ value: this.mediaInformationData[i].dayFifteenNumber, name: this.mediaInformationData[i].mediaName })
            }

          }
        }

        this.getEchartData(this.echartsData)

      }, (response) => {
        console.log('response');

      });

    },


    getEchartData(DATA) {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      var option = {
        // title: {
        //   text: '天气情况统计',
        //   subtext: '虚构数据',
        //   left: 'center'
        // },
        tooltip: {
          trigger: 'item',
          formatter: "{b} : {c} ({d}%)"
        },
        //color: ['#507bee', '#ffbb56', '#07de65', '#f05396', '#0f9ad3'],
        color: DATA.color,
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          bottom: 30,
          left: 'center',
          data: DATA.name,
        },
        series: [

          {
            type: 'pie',
            radius: ['38%', '52%'],
            center: ['50%', '40%'],
            selectedMode: 'single',
            data: DATA.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            // labelLine: {
            //   normal: {
            //     length: 10,  // 改变标示线的长度
            //     lineStyle: {
            //       color: "#000"  // 改变标示线的颜色
            //     }
            //   },
            // },
            // label: {
            //   normal: {
            //     textStyle: {
            //        color: "#000"  // 改变标示文字的颜色
            //     }
            //   }
            // }
          }
        ]
      };
      myChart.setOption(option)
      window.addEventListener('resize', function() {
        myChart.resize()
      })
    },
    openMeidiaDetails(item) {
      console.log(item)
      this.$router.push({ path: '/meidiaList', query: { meidiaId: item.mediaCode, meidiaName: item.mediaName } })
    }
  },


}
</script>

<style scoped lang="scss">
.right_cont {
  position: relative;
  z-index: 8;
  background: #fff;
  padding: 0 16px;
  height: 100%;
  overflow-y: scroll;
  .tit {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    padding: 0 0 0 20px;
    background: url(../../../assets/imgs/associated/pinggu20190820_16.png) left center no-repeat;

    color: #555;
    margin: 0 0 10px 0;
    a {
      color: #555;
      padding: 0 8px;
      float: left;
    }
  }
  .meiti_time {
    width: 32%;
    margin: 0 0.83% 16px 0.5%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    float: left; // background: url(../../../assets/imgs/associated/pinggu20190820_20.png) 20px center no-repeat;
    // background-size: 52px;
    height: 40px;
    line-height: 40px;
    color: #b8b2ad;
    font-size: 18px; // text-indent: 90px;
    text-indent: 10px;
    overflow: hidden;
    display: inline;
    text-align: left;
    cursor: pointer;
    a {
      color: #b8b2ad;
      font-family: numberZ;
      padding-right: 10px;
    }

    .active1 {
      color: #615fd6;
    }
  }
  .active {
    color: #333;
  } // .meiti_timeBg2 {
  //   background-image: url(../../../assets/imgs/associated/pinggu20190820_23.png);
  // }
  // .meiti_timeBg3 {
  //   background-image: url(../../../assets/imgs/associated/pinggu20190820_29.png);
  // }
  .meitiLeftc {
    width: 48%;
    float: left;
    text-align: center;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    height: 625px;
    display: inline;
    margin: 0 0 0 0.5%;
  }
  .meitiRightc {
    width: 48%;
    float: right;
    text-align: center;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    height: 625px;
    display: inline;
    margin: 0 0.83% 0 0;
    .swiper-container {
      padding: 0 0 20px 0;
      .swiper-pagination-bullet-active {
        background: #27326b !important;
      }
      table {
        margin: 3%;
        width: 94%;
        tr {
          td {
            font-size: 18px;
            color: #666;
            text-align: center;
            border: 1px solid #f0f1f5;
            line-height: 34px;
            padding: 10px;
          }

          .tou {
            td {
              background: #f0f1f5;
            }
          }
        }
      }
    }
  }
}
</style>
