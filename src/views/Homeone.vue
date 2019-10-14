<template>


  <div class="home">
    <img alt="Vue logo"  :src='`${publicPath}images/logo.png`' >
    <HelloWorld msg="Welcome to Your Vue.js App"/>
   <Pathecharts  :optionJsons="optionJsons" />
  </div>
</template>

<script>
// @ is an alias to /src
// import $ from 'jquery'
import HelloWorld from '@/components/HelloWorld.vue'
import Pathecharts from '@/components/Pathecharts'
export default {
  name: 'homeone',
  data() {
    return {
      publicPath: process.env.BASE_URL,
      
      optionJsons: {
  "nodes": [
    {
      "name": "凤凰新闻客户端",
      "id": "凤凰新闻客户端",
      "url": "http://api.iclient.ifeng.com/getNewsDocs?aid=ucms_7phLYl2DVB2&channelId=%810%8A4%810%826%810%816%A8%A8%810%857%810%844&category=%A8%A8%810%857%810%844%810%8A4%810%863%810%825&imId=195742775&channelKey=",
      "sid": "15117322282563815236",
      "group": "7",
      "index": 0,
      "x": 2771.6380298046593,
      "y": 1595.466364514528,
      "vy": 0.00005650922651456069,
      "vx": -0.0005019296656270193
    },
    {
      "name": "证券时报客户端",
      "id": "证券时报客户端",
      "url": "http://www.stcn.com/common/mobile/api/v2/20190905/656256.json",
      "sid": "3968087971519820797",
      "group": "7",
      "index": 1,
      "x": 2677.4217512409605,
      "y": 1540.2330543196008,
      "vy": -0.0008143159713686667,
      "vx": -0.0010761680567897504
    },
    {
      "name": "中新经纬客户端",
      "id": "中新经纬客户端",
      "url": "http://jw.jwview.com/jwview/newsContent?id=256587",
      "sid": "2039235483967123590",
      "group": "7",
      "index": 2,
      "x": 2893.5878976456574,
      "y": 1529.5489234882855,
      "vy": -0.0024224248554397276,
      "vx": 0.0005810519744133321
    },
    {
      "name": "东方财富网",
      "id": "东方财富网",
      "url": "http://finance.eastmoney.com/a/201909051228281786.html",
      "sid": "8236032129819358376",
      "group": "1",
      "index": 3,
      "x": 2821.0338180652216,
      "y": 1606.5125384264404,
      "vy": -0.00007470914251208608,
      "vx": -0.0002716481714557852
    },
    {
      "name": "券商中国",
      "id": "券商中国",
      "url": "http://mp.weixin.qq.com/s?__biz=MzA3NjM5MjIwOQ==&mid=2651782343&idx=5&sn=186f8b31ab5069a2c6ca112bd804aaac&chksm=849baeb9b3ec27af91beab5a4836ba7a509435439e039d010e1f5085027b8254f2ae5b539bf4",
      "sid": "12796758027811871041",
      "group": "8",
      "index": 4,
      "x": 2630.5627180350452,
      "y": 1475.0217253826272,
      "vy": -0.0022860199694986903,
      "vx": -0.00035087599202732455
    },
    {
      "name": "腾讯新闻客户端",
      "id": "腾讯新闻客户端",
      "url": "https://view.inews.qq.com/getWXNewsContent?id=20190905A00MWM00&path=a&tbkt=D",
      "sid": "4508599652817260754",
      "group": "7",
      "index": 5,
      "x": 2847.5825119713154,
      "y": 1567.4327817898024,
      "vy": 0.003692958138826232,
      "vx": 0.0010820595947888694
    },
    {
      "name": "证券时报网",
      "id": "证券时报网",
      "url": "http://finance.stcn.com/2019/0905/15375937.shtml",
      "sid": "15739602139799625082",
      "group": "1",
      "index": 6,
      "x": 2724.6932179824958,
      "y": 1587.6954907564505,
      "vy": 0.00006104395396320038,
      "vx": -0.000005639788511475104
    },
    {
      "name": "一点资讯客户端",
      "id": "一点资讯客户端",
      "url": "https://a1.go2yd.com/Website/contents/content?vertical_card=true&platform=1&related_docs=true&docid=0N8HK7Nw&appid=yidian&related_navigations=true&bottom_channels=true&cv=3.9.8.0&distribution=as.baidu.com&related_wemedia=true&net=wifi",
      "sid": "5116781886679714161",
      "group": "7",
      "index": 7,
      "x": 2545.6464300636603,
      "y": 1382.8996201753969,
      "vy": -0.00008827629656914879,
      "vx": -0.002985447011347926
    },
    {
      "name": "中新经纬",
      "id": "中新经纬",
      "url": "http://www.jwview.com/jingwei/html/09-05/256587.shtml",
      "sid": "9356706779823712270",
      "group": "1",
      "index": 8,
      "x": 2907.4151855683767,
      "y": 1467.5851687264746,
      "vy": -0.0016387490910527423,
      "vx": -0.0005623179349793497
    },
    {
      "name": "东方头条网",
      "id": "东方头条网",
      "url": "http://mini.eastday.com/a/190904172506774.html",
      "sid": "8144963434123107763",
      "group": "1",
      "index": 9,
      "x": 2671.390597761854,
      "y": 1415.6990848838548,
      "vy": -0.0018875818246228337,
      "vx": 0.000698355287047878
    },
    {
      "name": "旺角资讯",
      "id": "旺角资讯",
      "url": "http://www.wangjiaozixun.com/html/zx20/2019/0904/1081352.html",
      "sid": "18398334326295088948",
      "group": "1",
      "index": 10,
      "x": 2890.393315436896,
      "y": 1408.234228337747,
      "vy": -0.0014481170376439791,
      "vx": -0.0013841180672014431
    },
    {
      "name": "中金在线",
      "id": "中金在线",
      "url": "http://fund.cnfol.com/jijindongtai/20190904/27671152.shtml",
      "sid": "13747771527991976014",
      "group": "1",
      "index": 11,
      "x": 2809.825496038426,
      "y": 1734.119756458399,
      "vy": 0.0002858470013502955,
      "vx": 0.0019527398020491443
    },
    {
      "name": "搜狐网",
      "id": "搜狐网",
      "url": "http://www.sohu.com/a/338699631_177992",
      "sid": "5337496452868112616",
      "group": "1",
      "index": 12,
      "x": 2505.6007007180856,
      "y": 1496.1995119579685,
      "vy": 0.00005237183851920681,
      "vx": -0.00007654882902052493
    },
    {
      "name": "证券日报网",
      "id": "证券日报网",
      "url": "http://www.zqrb.cn/fund/jijindongtai/2019-09-05/A1567619458702.html",
      "sid": "10759321599467286507",
      "group": "1",
      "index": 13,
      "x": 2840.783198291699,
      "y": 1360.4521200869558,
      "vy": -0.0006818213019285396,
      "vx": -0.001940706727064468
    },
    {
      "name": "新浪网",
      "id": "新浪网",
      "url": "https://finance.sina.com.cn/money/fund/jjyj/2019-09-04/doc-iicezzrq3445574.shtml",
      "sid": "2600317031920981465",
      "group": "1",
      "index": 14,
      "x": 2681.544327777328,
      "y": 1361.1350304530952,
      "vy": -0.00407796986276494,
      "vx": -0.004285324444898521
    },
    {
      "name": "证券时报",
      "id": "证券时报",
      "url": "http://epaper.stcn.com/paper/zqsb/html/epaper/index/content_1364175.htm",
      "sid": "9583644110446542985",
      "group": "5",
      "index": 15,
      "x": 2780.871155538658,
      "y": 1471.7534196301508,
      "vy": 0.00009064297109005859,
      "vx": -0.0005215416268667326
    }
  ],
  "links": [
    {
      "source": {
        "name": "证券时报",
        "id": "证券时报",
        "url": "http://epaper.stcn.com/paper/zqsb/html/epaper/index/content_1364175.htm",
        "sid": "9583644110446542985",
        "group": "5",
        "index": 15,
        "x": 2780.871155538658,
        "y": 1471.7534196301508,
        "vy": 0.00009064297109005859,
        "vx": -0.0005215416268667326
      },
      "value": "1",
      "target": {
        "name": "凤凰新闻客户端",
        "id": "凤凰新闻客户端",
        "url": "http://api.iclient.ifeng.com/getNewsDocs?aid=ucms_7phLYl2DVB2&channelId=%810%8A4%810%826%810%816%A8%A8%810%857%810%844&category=%A8%A8%810%857%810%844%810%8A4%810%863%810%825&imId=195742775&channelKey=",
        "sid": "15117322282563815236",
        "group": "7",
        "index": 0,
        "x": 2771.6380298046593,
        "y": 1595.466364514528,
        "vy": 0.00005650922651456069,
        "vx": -0.0005019296656270193
      },
      "index": 0
    },
    {
      "source": {
        "name": "证券时报",
        "id": "证券时报",
        "url": "http://epaper.stcn.com/paper/zqsb/html/epaper/index/content_1364175.htm",
        "sid": "9583644110446542985",
        "group": "5",
        "index": 15,
        "x": 2780.871155538658,
        "y": 1471.7534196301508,
        "vy": 0.00009064297109005859,
        "vx": -0.0005215416268667326
      },
      "value": "1",
      "target": {
        "name": "证券时报客户端",
        "id": "证券时报客户端",
        "url": "http://www.stcn.com/common/mobile/api/v2/20190905/656256.json",
        "sid": "3968087971519820797",
        "group": "7",
        "index": 1,
        "x": 2677.4217512409605,
        "y": 1540.2330543196008,
        "vy": -0.0008143159713686667,
        "vx": -0.0010761680567897504
      },
      "index": 1
    },
    {
      "source": {
        "name": "证券时报",
        "id": "证券时报",
        "url": "http://epaper.stcn.com/paper/zqsb/html/epaper/index/content_1364175.htm",
        "sid": "9583644110446542985",
        "group": "5",
        "index": 15,
        "x": 2780.871155538658,
        "y": 1471.7534196301508,
        "vy": 0.00009064297109005859,
        "vx": -0.0005215416268667326
      },
      "value": "1",
      "target": {
        "name": "中新经纬客户端",
        "id": "中新经纬客户端",
        "url": "http://jw.jwview.com/jwview/newsContent?id=256587",
        "sid": "2039235483967123590",
        "group": "7",
        "index": 2,
        "x": 2893.5878976456574,
        "y": 1529.5489234882855,
        "vy": -0.0024224248554397276,
        "vx": 0.0005810519744133321
      },
      "index": 2
    },
    {
      "source": {
        "name": "证券时报",
        "id": "证券时报",
        "url": "http://epaper.stcn.com/paper/zqsb/html/epaper/index/content_1364175.htm",
        "sid": "9583644110446542985",
        "group": "5",
        "index": 15,
        "x": 2780.871155538658,
        "y": 1471.7534196301508,
        "vy": 0.00009064297109005859,
        "vx": -0.0005215416268667326
      },
      "value": "1",
      "target": {
        "name": "东方财富网",
        "id": "东方财富网",
        "url": "http://finance.eastmoney.com/a/201909051228281786.html",
        "sid": "8236032129819358376",
        "group": "1",
        "index": 3,
        "x": 2821.0338180652216,
        "y": 1606.5125384264404,
        "vy": -0.00007470914251208608,
        "vx": -0.0002716481714557852
      },
      "index": 3
    },
    {
      "source": {
        "name": "证券时报",
        "id": "证券时报",
        "url": "http://epaper.stcn.com/paper/zqsb/html/epaper/index/content_1364175.htm",
        "sid": "9583644110446542985",
        "group": "5",
        "index": 15,
        "x": 2780.871155538658,
        "y": 1471.7534196301508,
        "vy": 0.00009064297109005859,
        "vx": -0.0005215416268667326
      },
      "value": "1",
      "target": {
        "name": "券商中国",
        "id": "券商中国",
        "url": "http://mp.weixin.qq.com/s?__biz=MzA3NjM5MjIwOQ==&mid=2651782343&idx=5&sn=186f8b31ab5069a2c6ca112bd804aaac&chksm=849baeb9b3ec27af91beab5a4836ba7a509435439e039d010e1f5085027b8254f2ae5b539bf4",
        "sid": "12796758027811871041",
        "group": "8",
        "index": 4,
        "x": 2630.5627180350452,
        "y": 1475.0217253826272,
        "vy": -0.0022860199694986903,
        "vx": -0.00035087599202732455
      },
      "index": 4
    },
    {
      "source": {
        "name": "证券时报网",
        "id": "证券时报网",
        "url": "http://finance.stcn.com/2019/0905/15375937.shtml",
        "sid": "15739602139799625082",
        "group": "1",
        "index": 6,
        "x": 2724.6932179824958,
        "y": 1587.6954907564505,
        "vy": 0.00006104395396320038,
        "vx": -0.000005639788511475104
      },
      "value": "1",
      "target": {
        "name": "腾讯新闻客户端",
        "id": "腾讯新闻客户端",
        "url": "https://view.inews.qq.com/getWXNewsContent?id=20190905A00MWM00&path=a&tbkt=D",
        "sid": "4508599652817260754",
        "group": "7",
        "index": 5,
        "x": 2847.5825119713154,
        "y": 1567.4327817898024,
        "vy": 0.003692958138826232,
        "vx": 0.0010820595947888694
      },
      "index": 5
    },
    {
      "source": {
        "name": "证券时报",
        "id": "证券时报",
        "url": "http://epaper.stcn.com/paper/zqsb/html/epaper/index/content_1364175.htm",
        "sid": "9583644110446542985",
        "group": "5",
        "index": 15,
        "x": 2780.871155538658,
        "y": 1471.7534196301508,
        "vy": 0.00009064297109005859,
        "vx": -0.0005215416268667326
      },
      "value": "1",
      "target": {
        "name": "证券时报网",
        "id": "证券时报网",
        "url": "http://finance.stcn.com/2019/0905/15375937.shtml",
        "sid": "15739602139799625082",
        "group": "1",
        "index": 6,
        "x": 2724.6932179824958,
        "y": 1587.6954907564505,
        "vy": 0.00006104395396320038,
        "vx": -0.000005639788511475104
      },
      "index": 6
    },
    {
      "source": {
        "name": "券商中国",
        "id": "券商中国",
        "url": "http://mp.weixin.qq.com/s?__biz=MzA3NjM5MjIwOQ==&mid=2651782343&idx=5&sn=186f8b31ab5069a2c6ca112bd804aaac&chksm=849baeb9b3ec27af91beab5a4836ba7a509435439e039d010e1f5085027b8254f2ae5b539bf4",
        "sid": "12796758027811871041",
        "group": "8",
        "index": 4,
        "x": 2630.5627180350452,
        "y": 1475.0217253826272,
        "vy": -0.0022860199694986903,
        "vx": -0.00035087599202732455
      },
      "value": "1",
      "target": {
        "name": "一点资讯客户端",
        "id": "一点资讯客户端",
        "url": "https://a1.go2yd.com/Website/contents/content?vertical_card=true&platform=1&related_docs=true&docid=0N8HK7Nw&appid=yidian&related_navigations=true&bottom_channels=true&cv=3.9.8.0&distribution=as.baidu.com&related_wemedia=true&net=wifi",
        "sid": "5116781886679714161",
        "group": "7",
        "index": 7,
        "x": 2545.6464300636603,
        "y": 1382.8996201753969,
        "vy": -0.00008827629656914879,
        "vx": -0.002985447011347926
      },
      "index": 7
    },
    {
      "source": {
        "name": "证券时报",
        "id": "证券时报",
        "url": "http://epaper.stcn.com/paper/zqsb/html/epaper/index/content_1364175.htm",
        "sid": "9583644110446542985",
        "group": "5",
        "index": 15,
        "x": 2780.871155538658,
        "y": 1471.7534196301508,
        "vy": 0.00009064297109005859,
        "vx": -0.0005215416268667326
      },
      "value": "1",
      "target": {
        "name": "中新经纬",
        "id": "中新经纬",
        "url": "http://www.jwview.com/jingwei/html/09-05/256587.shtml",
        "sid": "9356706779823712270",
        "group": "1",
        "index": 8,
        "x": 2907.4151855683767,
        "y": 1467.5851687264746,
        "vy": -0.0016387490910527423,
        "vx": -0.0005623179349793497
      },
      "index": 8
    },
    {
      "source": {
        "name": "证券时报",
        "id": "证券时报",
        "url": "http://epaper.stcn.com/paper/zqsb/html/epaper/index/content_1364175.htm",
        "sid": "9583644110446542985",
        "group": "5",
        "index": 15,
        "x": 2780.871155538658,
        "y": 1471.7534196301508,
        "vy": 0.00009064297109005859,
        "vx": -0.0005215416268667326
      },
      "value": "1",
      "target": {
        "name": "东方头条网",
        "id": "东方头条网",
        "url": "http://mini.eastday.com/a/190904172506774.html",
        "sid": "8144963434123107763",
        "group": "1",
        "index": 9,
        "x": 2671.390597761854,
        "y": 1415.6990848838548,
        "vy": -0.0018875818246228337,
        "vx": 0.000698355287047878
      },
      "index": 9
    },
    {
      "source": {
        "name": "证券时报",
        "id": "证券时报",
        "url": "http://epaper.stcn.com/paper/zqsb/html/epaper/index/content_1364175.htm",
        "sid": "9583644110446542985",
        "group": "5",
        "index": 15,
        "x": 2780.871155538658,
        "y": 1471.7534196301508,
        "vy": 0.00009064297109005859,
        "vx": -0.0005215416268667326
      },
      "value": "1",
      "target": {
        "name": "旺角资讯",
        "id": "旺角资讯",
        "url": "http://www.wangjiaozixun.com/html/zx20/2019/0904/1081352.html",
        "sid": "18398334326295088948",
        "group": "1",
        "index": 10,
        "x": 2890.393315436896,
        "y": 1408.234228337747,
        "vy": -0.0014481170376439791,
        "vx": -0.0013841180672014431
      },
      "index": 10
    },
    {
      "source": {
        "name": "东方财富网",
        "id": "东方财富网",
        "url": "http://finance.eastmoney.com/a/201909051228281786.html",
        "sid": "8236032129819358376",
        "group": "1",
        "index": 3,
        "x": 2821.0338180652216,
        "y": 1606.5125384264404,
        "vy": -0.00007470914251208608,
        "vx": -0.0002716481714557852
      },
      "value": "1",
      "target": {
        "name": "中金在线",
        "id": "中金在线",
        "url": "http://fund.cnfol.com/jijindongtai/20190904/27671152.shtml",
        "sid": "13747771527991976014",
        "group": "1",
        "index": 11,
        "x": 2809.825496038426,
        "y": 1734.119756458399,
        "vy": 0.0002858470013502955,
        "vx": 0.0019527398020491443
      },
      "index": 11
    },
    {
      "source": {
        "name": "券商中国",
        "id": "券商中国",
        "url": "http://mp.weixin.qq.com/s?__biz=MzA3NjM5MjIwOQ==&mid=2651782343&idx=5&sn=186f8b31ab5069a2c6ca112bd804aaac&chksm=849baeb9b3ec27af91beab5a4836ba7a509435439e039d010e1f5085027b8254f2ae5b539bf4",
        "sid": "12796758027811871041",
        "group": "8",
        "index": 4,
        "x": 2630.5627180350452,
        "y": 1475.0217253826272,
        "vy": -0.0022860199694986903,
        "vx": -0.00035087599202732455
      },
      "value": "1",
      "target": {
        "name": "搜狐网",
        "id": "搜狐网",
        "url": "http://www.sohu.com/a/338699631_177992",
        "sid": "5337496452868112616",
        "group": "1",
        "index": 12,
        "x": 2505.6007007180856,
        "y": 1496.1995119579685,
        "vy": 0.00005237183851920681,
        "vx": -0.00007654882902052493
      },
      "index": 12
    },
    {
      "source": {
        "name": "证券时报",
        "id": "证券时报",
        "url": "http://epaper.stcn.com/paper/zqsb/html/epaper/index/content_1364175.htm",
        "sid": "9583644110446542985",
        "group": "5",
        "index": 15,
        "x": 2780.871155538658,
        "y": 1471.7534196301508,
        "vy": 0.00009064297109005859,
        "vx": -0.0005215416268667326
      },
      "value": "1",
      "target": {
        "name": "证券日报网",
        "id": "证券日报网",
        "url": "http://www.zqrb.cn/fund/jijindongtai/2019-09-05/A1567619458702.html",
        "sid": "10759321599467286507",
        "group": "1",
        "index": 13,
        "x": 2840.783198291699,
        "y": 1360.4521200869558,
        "vy": -0.0006818213019285396,
        "vx": -0.001940706727064468
      },
      "index": 13
    },
    {
      "source": {
        "name": "券商中国",
        "id": "券商中国",
        "url": "http://mp.weixin.qq.com/s?__biz=MzA3NjM5MjIwOQ==&mid=2651782343&idx=5&sn=186f8b31ab5069a2c6ca112bd804aaac&chksm=849baeb9b3ec27af91beab5a4836ba7a509435439e039d010e1f5085027b8254f2ae5b539bf4",
        "sid": "12796758027811871041",
        "group": "8",
        "index": 4,
        "x": 2630.5627180350452,
        "y": 1475.0217253826272,
        "vy": -0.0022860199694986903,
        "vx": -0.00035087599202732455
      },
      "value": "1",
      "target": {
        "name": "新浪网",
        "id": "新浪网",
        "url": "https://finance.sina.com.cn/money/fund/jjyj/2019-09-04/doc-iicezzrq3445574.shtml",
        "sid": "2600317031920981465",
        "group": "1",
        "index": 14,
        "x": 2681.544327777328,
        "y": 1361.1350304530952,
        "vy": -0.00407796986276494,
        "vx": -0.004285324444898521
      },
      "index": 14
    },
    {
      "source": {
        "name": "证券时报",
        "id": "证券时报",
        "url": "http://epaper.stcn.com/paper/zqsb/html/epaper/index/content_1364175.htm",
        "sid": "9583644110446542985",
        "group": "5",
        "index": 15,
        "x": 2780.871155538658,
        "y": 1471.7534196301508,
        "vy": 0.00009064297109005859,
        "vx": -0.0005215416268667326
      },
      "value": "1",
      "target": {
        "name": "证券时报",
        "id": "证券时报",
        "url": "http://epaper.stcn.com/paper/zqsb/html/epaper/index/content_1364175.htm",
        "sid": "9583644110446542985",
        "group": "5",
        "index": 15,
        "x": 2780.871155538658,
        "y": 1471.7534196301508,
        "vy": 0.00009064297109005859,
        "vx": -0.0005215416268667326
      },
      "index": 15
    }
  ]
    }



  }},
   mounted() {
        this.getData(); 
        // this.drawLine();     
    },
  methods: {
    getData() {
      // let defer = $.Deferred();
    
   
  },
    // drawLine(){
    //         let myChart = this.$echarts.init(document.getElementById('myChart'))
 
    //         var option = {
    //                 title: {
    //                     text: 'ECharts 入门示例'
    //                 },
    //                 tooltip: {},
    //                 legend: {
    //                     data:['销量']
    //                 },
    //                 xAxis: {
    //                     data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //                 },
    //                 yAxis: {},
    //                 series: [{
    //                     name: '销量',
    //                     type: 'bar',
    //                     data: [5, 20, 36, 10, 10, 20]
    //                 }]
    //             };
    //              myChart.setOption(option);
    //            }
  
},
  components: {
    HelloWorld,Pathecharts
    
  }
}
</script>
