<template>
  <div class="right_cont">
    <el-row :span="24" class="tit">
      <a>传播力分析></a>
      <a>合作媒体分析</a>
    </el-row>
    <el-row :span="24" class="">
      <div class="meiti_time" @click="changeSearch(1)">媒体共发布稿件{{articleTotalNumber.dayNowNumber}}篇。</div>
      <div class="meiti_time meiti_timeBg2" @click="changeSearch(7)">媒体共发布稿件{{articleTotalNumber.daySevenNumber}}篇。</div>
      <div class="meiti_time meiti_timeBg3" @click="changeSearch(15)"> 媒体共发布稿件{{articleTotalNumber.dayFifteenNumber}}篇。</div>
    </el-row>
    <el-row :span="24" class="">
      <div class="meitiLeftc">
        <!-- <div id="chartyc"></div> -->
        <div id="myChart" :style="{width: '100%', height: '600px'}"></div>
        <!-- <img src="../../../assets/imgs/associated/pinggu20190820_36.jpg" /> -->
      </div>
      <div class="meitiRightc">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(itemList,index) in mediaInformationList" :key="index">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr class="tou">
                  <td>序号</td>
                  <td>媒体名称</td>
                  <td>发稿数量</td>
                  <td>总传播力指数</td>
                </tr>
                <tr v-for="(item,index_x) in itemList" :key="index_x">
                  <td>{{index*9+index_x+1}}</td>
                  <td>{{item.mediaName}}</td>
                  <td v-if="searchDay==1">{{item.dayNowNumber}}</td>
                  <td v-if="searchDay==7">{{item.daySevenNumber}}</td>
                  <td v-if="searchDay==15">{{item.dayFifteenNumber}}</td>

                  <td v-if="searchDay==1">{{item.dayNowCei}}</td>
                  <td v-if="searchDay==7">{{item.daySevenCei}}</td>
                  <td v-if="searchDay==15">{{item.dayFifteenCei}}</td>
                </tr>

              </table>
            </div>

          </div>

          <div class="swiper-pagination"></div>
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
      searchDay: '',
      articleTotalNumber: '',
      mediaInformationData: '',
      mediaInformationList: [],
      echartsData: {
        color: ['#5377ff', '#00a0ea', '#88d899', '#f9bd65', '#d6f28c', '#ec7aad', '#88d2f5', '#eb6a42', '#fff45c', '#fff562', '#5377ff', '#00a0ea', '#88d899', '#f9bd65', '#d6f28c', '#ec7aad', '#88d2f5', '#eb6a42', '#fff45c', '#fff562', '#5377ff', '#00a0ea', '#88d899', '#f9bd65', '#d6f28c', '#ec7aad', '#88d2f5', '#eb6a42', '#fff45c', '#fff562'],
        data: [],
        name:[]
      }
    };
  },
  watch: {
    searchDay(newName, oldName) {
      if (newName != oldName) {
        this.echartsData.data = []
        for (var i = 0; i < this.mediaInformationData.length; i++) {
          this.echartsData.name.push(this.mediaInformationData[i].mediaName);
          if (newName == 1) {
             this.echartsData.data.push({ value: this.mediaInformationData[i].dayNowNumber, name: this.mediaInformationData[i].mediaName })
          }
          if (newName == 7) {
             this.echartsData.data.push({ value: this.mediaInformationData[i].daySevenNumber, name: this.mediaInformationData[i].mediaName })
          }
          if (newName == 15) {
             this.echartsData.data.push({ value: this.mediaInformationData[i].dayFifteenNumber, name: this.mediaInformationData[i].mediaName })
          }
        }
          this.getEchartData(this.echartsData)
      }

    }
  },
  mounted() {
    //获取今天7天15天稿件数
    this.getMediaArticleTotalNumber();
    //获取echarts，列表轮播数据
    this.getMediaInformationList();
    //轮播
    var navSwiper = new Swiper(".swiper-container", {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay: 3000,
      spaceBetween: 30
    });

    //echarts
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
      this.searchDay = day;
    },

    getMediaInformationList() {
      fetchUtil({
        method: 'post',
        url: "/casindex/mediaStatistics/getMediaInformationList",
      }).then((response) => {
        this.mediaInformationData = response.result;
        this.searchDay=1;
        for (var i = 0; i < this.mediaInformationData.length; i += 9) {
          this.mediaInformationList.push(this.mediaInformationData.slice(i, i + 9));
        }

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
          formatter: "{a} <br/>{b} : {c} ({d}%)"
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
            }
          }
        ]
      };
      myChart.setOption(option)
      window.addEventListener('resize', function() {
        myChart.resize()
      })
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
    float: left;
    background: url(../../../assets/imgs/associated/pinggu20190820_20.png) 20px center no-repeat;
    background-size: 52px;
    height: 40px;
    line-height: 40px;
    color: #333;
    font-size: 18px;
    text-indent: 90px;
    overflow: hidden;
    display: inline;
    text-align: left;
  }
  .meiti_timeBg2 {
    background-image: url(../../../assets/imgs/associated/pinggu20190820_23.png);
  }
  .meiti_timeBg3 {
    background-image: url(../../../assets/imgs/associated/pinggu20190820_29.png);
  }
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
