<template>
    <div class="meidia_analysis_cont">
        <div style="width:100%" class="tit">
            <a>传播力分析></a>
            <a>合作媒体分析></a>
            <a>媒体报道</a>
        </div>
        <div class="toptextC">
            <div class="toptit">
                <span :title="InfDetails.title">{{InfDetails.title}}</span>
                <div class="toptit_btn">

                    <a @click="scrollTo">查看正文</a>
                </div>
            </div>
            <div class="cont">
                <p v-if="InfDetails.ceiIndex">
                    影响力指数：
                    <span>
                        <a>{{InfDetails.ceiIndex}}</a>
                    </span>
                </p>
                <p>
                    该稿件共被转载
                    <span>
                        <a>{{aweasdf.REPRINTS}}</a>次，
                    </span>
                    <span> 其中包括核心媒体
                        <a>{{aweasdf.COREREPRINTS}}</a>次、
                    </span>
                    <!-- <span>外部转载{{}}次、</span> -->
                    <span>一级媒体
                        <a>{{aweasdf.LV1REPTINTS}}</a>次、
                    </span>
                    <span >二级媒体
                        <a>{{aweasdf.LV2REPTINTS}}</a>
                    </span>次
                </p>
                <p>
                    有
                    <span>
                        <a>{{allMediaNum}}</a>
                    </span> 家媒体转载该稿件，其中包括核心媒体头条
                    <!-- <span>
                                <a>{{topMeidaNum}}</a>
                            </span> 家、 核心媒体 -->
                    <span>
                        <a>{{heartMeidaNum}}</a>
                    </span> 家、 一级媒体
                    <span>
                        <a>{{oneLeveiMediaNum}}</a>
                    </span> 家、 二级媒体
                    <span>
                        <a>{{twoLeveiMediaNum}}</a>
                    </span> 家。
                </p>
            </div>
        </div>
        <div class="toptextC">
            <div class="toptit">
                <span class="bg2">外部媒体转载</span>
                <h1 class="bg2_img">
                    <a>
                        <img @click="syshixiana" src="../../../assets/imgs/meidiaAnalaysis/pinggu220190820_09.jpg" />
                    </a>
                    <!-- <a href target="_blank">
                                <img src="../../../assets/imgs/meidiaAnalaysis/pinggu220190820_11.jpg" />
                            </a> -->
                </h1>
            </div>
            <div class="cont reprint">
                <table border="0" cellpadding="0" cellspacing="0">
                    <!-- <tr>
                                <td class="tou">核心媒体头条</td>
                                <td class="media_list" style="display: block;">
                                    <p>共 {{topMeidaNum}} 家媒体转载{{topMeidaReprintNum}}次
                                        <a class="zhankai">[展开全部]</a>
                                        <a class="shouqi">[收起部分]</a>
                                    </p>
                                    <span class="media_name" v-for="(area,index) in outSideTopMedia" :key="index" @click="goToUrl(area.url)">{{area.aa}};</span>
                                </td>
                            </tr> -->
                    <tr>
                        <td class="tou">核心媒体</td>
                        <td class="media_list" style="display: block;">
                            <p>
                                共 {{heartMeidaNum}} 家媒体转载{{heartMeidaReprintNum}}次
                                <a class="zhankai">[展开全部]</a>
                                <a class="shouqi">[收起部分]</a>
                            </p>
                            <p>
                                <span class="media_name" v-for="(area,index) in outSideHeartMedia" :key="index" @click="goToUrl(area.url)">{{area.aa}};</span>
                            </p>
                        </td>
                    </tr>
                    <tr class="odd">
                        <td class="tou">一级媒体</td>
                        <td class="media_list" style="display: block;">
                            <p>共{{oneLeveiMediaNum}} 家媒体转载{{oneLeveiMediaReprintNum}}次
                                <a class="zhankai">[展开全部]</a>
                                <a class="shouqi">[收起部分]</a>
                            </p>
                            <p>
                                <span class="media_name" v-for="(area,index) in outSideOneLevelMedia" :key="index" @click="goToUrl(area.url)">{{area.aa}};</span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="tou">二级媒体</td>
                        <td class="media_list" style="display: block;">
                            <p>共 {{twoLeveiMediaNum}}家媒体转载{{twoLeveiMediaReprintNum}} 次
                                <a class="zhankai">[展开全部]</a>
                                <a class="shouqi">[收起部分]</a>
                            </p>
                            <p>
                                <span class="media_name" v-for="(area,index) in outSideTwoLeveMedia" :key="index" @click="goToUrl(area.url)">{{area.aa}};</span>
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="toptextC">
            <div class="toptit">
                <span class="bg3">稿件影响力路径图</span>
            </div>
            <div class="cont cont2 five-echar">
                <Pathecharts :optionJsons="optionJsons" />
            </div>
        </div>
        <!-- <div class="toptextC">
                    <div class="cont cont2">
                        <p>新华社消息，15日下午，习近平总书记来到内蒙古赤峰市喀喇沁旗马鞍山林场考察。沿着崎岖的护林小道，习近平步行进入林区察看林木长势，同正在作业的护林员们亲切交谈，了解林场建设发展情况。大家告诉总书记，现在生态好了，在上山巡护的时候，时常碰到狍子、野兔、山鸡、野猪等野生动物，来旅游的人也多了，山野菜不愁卖了，山货也特别多，老百姓切切实实得到了好处，更加深刻地认识到绿水青山就是金山银山。习近平对大家说：“护林员很重要，种树多不容易啊！建设祖国北方和首都生态安全屏障是战略性的任务，是我们要世世代代做下去的事情。”</p>
                    </div>
                </div> -->
    </div>
</template>

<script>
import pagination from "@/components/pagination";
import fetchUtil from "@/api/fetch";
import Pathecharts from '@/components/Pathecharts'
import * as common from "@/assets/js/common";
export default {
    name: "analysisDetaile",
    data() {
        return {
            id: '',
            mediaUnitName: '',
            contentURL: "",//查看原文链接
            aweasdf: '',
            InfDetails: {},
            outSideMediaData: {},
            outSideTopMedia: [],//集团外部转载核心媒体头条
            outSideHeartMedia: [],//集团外部转载核心媒体
            outSideOneLevelMedia: [], //集团外部转载一级媒体
            outSideTwoLeveMedia: [], //集团外部转载二级媒体
            topMeidaNum: '',//核心媒体头条
            heartMeidaNum: '',//核心媒体
            oneLeveiMediaNum: '', //一级媒体
            twoLeveiMediaNum: '',//二级媒体
            allMediaNum: '',//转载媒体总数
            topMeidaReprintNum: "",//核心媒体转载数
            heartMeidaReprintNum: "",//核心媒体转载数
            oneLeveiMediaReprintNum: '', //一级媒体
            twoLeveiMediaReprintNum: '',//二级媒体
            optionJsons: {}

        };
    },

    created: function() {
        // $(".toptextC tr:odd").addClass("odd");

        this.id = this.$route.query.id;
        this.mediaUnitName = this.$route.query.mediaUnitName;

        //获取稿件基本数据
        this.queryDocumentDetail();
        this.queryHexinOutsideData();
        this.getExReprintMaualsBySid();
    },

    methods: {
        syshixiana: function() {
            $(".reprint").slideToggle();
        },
        queryDocumentDetail: function() {
            var that = this;
            var submitparams = {
                sid: this.id
            }
            fetchUtil({
                method: 'get',
                url: "/casindex/articleIndexSearch/SearchOne",
                params: submitparams
            }).then((response) => {
                console.log(this.response)
                this.aweasdf = response;
                //文字链接（查看原文链接）
                this.contentURL = response.URL;
                this.InfDetails = {
                    pubTime: response.PUBTIME,
                    author: response.AUTHORS,
                    ceiIndex: response.CEIINDEX,
                    websiteUV: response.WEBSITEUV,
                    wxUV: response.WEIXINUV,
                    appUV: response.APPUV,
                    websiteComment: response.WEIBOCOMMENTS,
                    appComment: response.APPCOMMENTS,
                    wxPraises: response.WEIXINPRAISES,
                    appPraises: response.APPPRAISES,
                    wxShares: response.WEIXINSHARES,
                    appShares: response.APPSHARES,
                    title: response.TITLE,
                    contribOfRead: response.CONTRIBOFREAD,
                    contribOfReprint: response.CONTRIBOFREPRINT,
                    contribOfInteract: response.CONTRIBOFINTERACT,
                    content: response.CONTENT
                }
            }, (response) => {
                that.$message.error('请求失败，请重试！');
                console.log(response, "我失败了")
            });
        },
        //获取集团外部转载数据
        queryHexinOutsideData: function() {
            this.queryHexinData(1)
        },

        queryHexinData: function(type) {
            var that = this;
            var params = {
                sid: this.id,
                mediaUnitName: this.mediaUnitName,
                typeflag: type,
            };
            fetchUtil({
                method: 'get',
                url: "casindex/articleReprintSearch/getAllLev",
                params: params
            }).then((response) => {
                console.log(response, "00000")
                that.outSideMediaData = response.data;
                //集团外部转载核心媒体头条
                that.outSideTopMedia = [];
                //集团外部转载核心媒体
                that.outSideHeartMedia = [];
                //集团外部转载一级媒体
                that.outSideOneLevelMedia = [];
                //集团外部转载二级媒体
                that.outSideTwoLeveMedia = [];
                //核心媒体头条家数
                that.topMeidaNum = that.outSideMediaData.topLev.topLevNums0 +
                    that.outSideMediaData.topLev.topLevNums1 +
                    that.outSideMediaData.topLev.topLevNums2 +
                    that.outSideMediaData.topLev.topLevNums3 +
                    that.outSideMediaData.topLev.topLevNums4 +
                    that.outSideMediaData.topLev.topLevNums5;
                //核心媒体头条转载数
                that.topMeidaReprintNum = that.outSideMediaData.topLev.topLevNums0 + that.outSideMediaData.topLev.topLevNums2 + that.outSideMediaData.topLev.topLevNums3 + that.outSideMediaData.topLev.topLevNums4 + that.outSideMediaData.topLev.topLevNums5;
                //核心媒体
                console.log(that.outSideMediaData.hexinLev.hexinLevNums0, that.heartMeidaNum);
                that.heartMeidaNum = that.outSideMediaData.hexinLev.hexinLevNums0 +
                    that.outSideMediaData.hexinLev.hexinLevNums1 +
                    that.outSideMediaData.hexinLev.hexinLevNums2 +
                    that.outSideMediaData.hexinLev.hexinLevNums3 +
                    that.outSideMediaData.hexinLev.hexinLevNums4 +
                    that.outSideMediaData.hexinLev.hexinLevNums5;
                //核心媒体转载数
                that.heartMeidaReprintNum = that.outSideMediaData.hexinLev.hexinLevNums0 + that.outSideMediaData.hexinLev.hexinLevNums3 + that.outSideMediaData.hexinLev.hexinLevNums2 + that.outSideMediaData.hexinLev.hexinLevNums4 + that.outSideMediaData.hexinLev.hexinLevNums5;

                //一级媒体
                that.oneLeveiMediaNum =
                    that.outSideMediaData.yijiLev.yijiLevNums0 +
                    that.outSideMediaData.yijiLev.yijiLevNums1 +
                    that.outSideMediaData.yijiLev.yijiLevNums2 +
                    that.outSideMediaData.yijiLev.yijiLevNums3 +
                    that.outSideMediaData.yijiLev.yijiLevNums4 +
                    that.outSideMediaData.yijiLev.yijiLevNums5;
                //一级媒体转载数
                that.oneLeveiMediaReprintNum = that.outSideMediaData.yijiLev.yijiLevNums0 + that.outSideMediaData.yijiLev.yijiLevNums3 + that.outSideMediaData.yijiLev.yijiLevNums2 + that.outSideMediaData.yijiLev.yijiLevNums4 + that.outSideMediaData.yijiLev.yijiLevNums5;
                //二级媒体
                that.twoLeveiMediaNum =
                    that.outSideMediaData.erjiLev.erjiLevNums0 +
                    that.outSideMediaData.erjiLev.erjiLevNums1 +
                    that.outSideMediaData.erjiLev.erjiLevNums2 +
                    that.outSideMediaData.erjiLev.erjiLevNums3 +
                    that.outSideMediaData.erjiLev.erjiLevNums4 +
                    that.outSideMediaData.erjiLev.erjiLevNums5;
                //二级媒体转载数
                that.twoLeveiMediaReprintNum = that.outSideMediaData.erjiLev.erjiLevNums0 + that.outSideMediaData.erjiLev.erjiLevNums3 + that.outSideMediaData.erjiLev.erjiLevNums2 + that.outSideMediaData.erjiLev.erjiLevNums4 + that.outSideMediaData.erjiLev.erjiLevNums5;
                //转载媒体总数
                // that.allMediaNum = that.topMeidaNum + that.heartMeidaNum + that.oneLeveiMediaNum + that.twoLeveiMediaNum;
                that.allMediaNum = that.heartMeidaNum + that.oneLeveiMediaNum + that.twoLeveiMediaNum;
                if (that.outSideMediaData.erjiLev.erjiLevMediaSc0 != "") {
                    for (var i = 0; i < that.outSideMediaData.erjiLev.erjiLevMediaSc0.length; i++) {
                        that.outSideTwoLeveMedia.push({ aa: that.outSideMediaData.erjiLev.erjiLevMediaSc0[i].sitenamechannel, url: that.outSideMediaData.erjiLev.erjiLevMediaSc0[i].url })
                    }
                }
                if (that.outSideMediaData.erjiLev.erjiLevMediaSc1 != "") {
                    for (var i = 0; i < that.outSideMediaData.erjiLev.erjiLevMediaSc1.length; i++) {
                        that.outSideTwoLeveMedia.push({ aa: that.outSideMediaData.erjiLev.erjiLevMediaSc1[i].sitenamechannel, url: that.outSideMediaData.erjiLev.erjiLevMediaSc1[i].url })
                    }
                }
                if (that.outSideMediaData.erjiLev.erjiLevMediaSc2 != "") {
                    for (var i = 0; i < that.outSideMediaData.erjiLev.erjiLevMediaSc2.length; i++) {
                        that.outSideTwoLeveMedia.push({ aa: that.outSideMediaData.erjiLev.erjiLevMediaSc2[i].sitenamechannel, url: that.outSideMediaData.erjiLev.erjiLevMediaSc2[i].url })
                    }
                }
                if (that.outSideMediaData.erjiLev.erjiLevMediaSc3 != "") {
                    for (var i = 0; i < that.outSideMediaData.erjiLev.erjiLevMediaSc3.length; i++) {
                        that.outSideTwoLeveMedia.push({ aa: that.outSideMediaData.erjiLev.erjiLevMediaSc3[i].sitenamechannel, url: that.outSideMediaData.erjiLev.erjiLevMediaSc3[i].url })
                    }
                }
                if (that.outSideMediaData.erjiLev.erjiLevMediaSc4 != "") {
                    for (var i = 0; i < that.outSideMediaData.erjiLev.erjiLevMediaSc4.length; i++) {
                        that.outSideTwoLeveMedia.push({ aa: that.outSideMediaData.erjiLev.erjiLevMediaSc4[i].sitenamechannel, url: that.outSideMediaData.erjiLev.erjiLevMediaSc4[i].url })
                    }

                }
                if (that.outSideMediaData.erjiLev.erjiLevMediaSc5 != "") {
                    for (var i = 0; i < that.outSideMediaData.erjiLev.erjiLevMediaSc5.length; i++) {
                        that.outSideTwoLeveMedia.push({ aa: that.outSideMediaData.erjiLev.erjiLevMediaSc5[i].sitenamechannel, url: that.outSideMediaData.erjiLev.erjiLevMediaSc5[i].url })
                    }
                }

                if (that.outSideMediaData.hexinLev.hexinLevMediaSc0 != "") {
                    for (var i = 0; i < that.outSideMediaData.hexinLev.hexinLevMediaSc0.length; i++) {
                        that.outSideHeartMedia.push({ aa: that.outSideMediaData.hexinLev.hexinLevMediaSc0[i].sitenamechannel, url: that.outSideMediaData.hexinLev.hexinLevMediaSc0[i].url })
                    }
                }
                if (that.outSideMediaData.hexinLev.hexinLevMediaSc1 != "") {
                    for (var i = 0; i < that.outSideMediaData.hexinLev.hexinLevMediaSc1.length; i++) {
                        that.outSideHeartMedia.push({ aa: that.outSideMediaData.hexinLev.hexinLevMediaSc1[i].sitenamechannel, url: that.outSideMediaData.hexinLev.hexinLevMediaSc1[i].url })
                    }
                }
                if (that.outSideMediaData.hexinLev.hexinLevMediaSc2 != "") {
                    for (var i = 0; i < that.outSideMediaData.hexinLev.hexinLevMediaSc2.length; i++) {
                        that.outSideHeartMedia.push({ aa: that.outSideMediaData.hexinLev.hexinLevMediaSc2[i].sitenamechannel, url: that.outSideMediaData.hexinLev.hexinLevMediaSc2[i].url })
                    }
                }
                if (that.outSideMediaData.hexinLev.hexinLevMediaSc3 != "") {
                    for (var i = 0; i < that.outSideMediaData.hexinLev.hexinLevMediaSc3.length; i++) {
                        that.outSideHeartMedia.push({ aa: that.outSideMediaData.hexinLev.hexinLevMediaSc3[i].sitenamechannel, url: that.outSideMediaData.hexinLev.hexinLevMediaSc3[i].url })
                    }

                }
                if (that.outSideMediaData.hexinLev.hexinLevMediaSc4 != "") {
                    for (var i = 0; i < that.outSideMediaData.hexinLev.hexinLevMediaSc4.length; i++) {
                        that.outSideHeartMedia.push({ aa: that.outSideMediaData.hexinLev.hexinLevMediaSc4[i].sitenamechannel, url: that.outSideMediaData.hexinLev.hexinLevMediaSc4[i].url })
                    }

                }
                if (that.outSideMediaData.hexinLev.hexinLevMediaSc5 != "") {
                    for (var i = 0; i < that.outSideMediaData.hexinLev.hexinLevMediaSc5.length; i++) {
                        that.outSideHeartMedia.push({ aa: that.outSideMediaData.hexinLev.hexinLevMediaSc5[i].sitenamechannel, url: that.outSideMediaData.hexinLev.hexinLevMediaSc5[i].url })
                    }

                }

                if (that.outSideMediaData.yijiLev.yijiLevMediaSc0 != "") {
                    for (var i = 0; i < that.outSideMediaData.yijiLev.yijiLevMediaSc0.length; i++) {
                        that.outSideOneLevelMedia.push({ aa: that.outSideMediaData.yijiLev.yijiLevMediaSc0[i].sitenamechannel, url: that.outSideMediaData.yijiLev.yijiLevMediaSc0[i].url })
                    }

                }
                if (that.outSideMediaData.yijiLev.yijiLevMediaSc1 != "") {
                    for (var i = 0; i < that.outSideMediaData.yijiLev.yijiLevMediaSc1.length; i++) {
                        that.outSideOneLevelMedia.push({ aa: that.outSideMediaData.yijiLev.yijiLevMediaSc1[i].sitenamechannel, url: that.outSideMediaData.yijiLev.yijiLevMediaSc1[i].url })
                    }
                }
                if (that.outSideMediaData.yijiLev.yijiLevMediaSc2 != "") {
                    for (var i = 0; i < that.outSideMediaData.yijiLev.yijiLevMediaSc2.length; i++) {
                        that.outSideOneLevelMedia.push({ aa: that.outSideMediaData.yijiLev.yijiLevMediaSc2[i].sitenamechannel, url: that.outSideMediaData.yijiLev.yijiLevMediaSc2[i].url })
                    }
                }
                if (that.outSideMediaData.yijiLev.yijiLevMediaSc3 != "") {
                    for (var i = 0; i < that.outSideMediaData.yijiLev.yijiLevMediaSc3.length; i++) {
                        that.outSideOneLevelMedia.push({ aa: that.outSideMediaData.yijiLev.yijiLevMediaSc3[i].sitenamechannel, url: that.outSideMediaData.yijiLev.yijiLevMediaSc3[i].url })
                    }
                }
                if (that.outSideMediaData.yijiLev.yijiLevMediaSc4 != "") {
                    for (var i = 0; i < that.outSideMediaData.yijiLev.yijiLevMediaSc4.length; i++) {
                        that.outSideOneLevelMedia.push({ aa: that.outSideMediaData.yijiLev.yijiLevMediaSc4[i].sitenamechannel, url: that.outSideMediaData.yijiLev.yijiLevMediaSc4[i].url })
                    }
                }
                if (that.outSideMediaData.yijiLev.yijiLevMediaSc5 != "") {
                    for (var i = 0; i < that.outSideMediaData.yijiLev.yijiLevMediaSc5.length; i++) {
                        that.outSideOneLevelMedia.push({ aa: that.outSideMediaData.yijiLev.yijiLevMediaSc5[i].sitenamechannel, url: that.outSideMediaData.yijiLev.yijiLevMediaSc5[i].url })
                    }
                }
                //核心媒体头条媒体列表
                if (that.outSideMediaData.topLev.topLevMediaSc0 != "") {
                    for (var i = 0; i < that.outSideMediaData.topLev.topLevMediaSc0.length; i++) {
                        that.that.outSideTopMedia.push({ aa: that.outSideMediaData.topLev.topLevMediaSc0[i].sitenamechannel, url: that.outSideMediaData.topLev.topLevMediaSc0[i].url })
                    }
                }
                if (that.outSideMediaData.topLev.topLevMediaSc1 != "") {
                    for (var i = 0; i < that.outSideMediaData.topLev.topLevMediaSc1.length; i++) {
                        that.that.outSideTopMedia.push({ aa: that.outSideMediaData.topLev.topLevMediaSc1[i].sitenamechannel, url: that.outSideMediaData.topLev.topLevMediaSc1[i].url })
                    }
                }
                if (that.outSideMediaData.topLev.topLevMediaSc2 != "") {
                    for (var i = 0; i < that.outSideMediaData.topLev.topLevMediaSc2.length; i++) {
                        that.that.outSideTopMedia.push({ aa: that.outSideMediaData.topLev.topLevMediaSc2[i].sitenamechannel, url: that.outSideMediaData.topLev.topLevMediaSc2[i].url })
                    }
                }
                if (that.outSideMediaData.topLev.topLevMediaSc3 != "") {
                    for (var i = 0; i < that.outSideMediaData.topLev.topLevMediaSc3.length; i++) {
                        that.that.outSideTopMedia.push({ aa: that.outSideMediaData.topLev.topLevMediaSc3[i].sitenamechannel, url: that.outSideMediaData.topLev.topLevMediaSc3[i].url })
                    }
                }
                if (that.outSideMediaData.topLev.topLevMediaSc4 != "") {
                    for (var i = 0; i < that.outSideMediaData.topLev.topLevMediaSc4.length; i++) {
                        that.that.outSideTopMedia.push({ aa: that.outSideMediaData.topLev.topLevMediaSc4[i].sitenamechannel, url: that.outSideMediaData.topLev.topLevMediaSc4[i].url })
                    }
                }
                if (that.outSideMediaData.topLev.topLevMediaSc5 != "") {
                    for (var i = 0; i < that.outSideMediaData.topLev.topLevMediaSc5.length; i++) {
                        that.that.outSideTopMedia.push({ aa: that.outSideMediaData.topLev.topLevMediaSc5[i].sitenamechannel, url: that.outSideMediaData.topLev.topLevMediaSc5[i].url })
                    }
                }
                console.log(that.outSideTwoLeveMedia, "一级媒体")
                setTimeout(function() {
                    $(".media_list").each(function() {
                        if ($(this).height() * 1 > 146) {
                            $(this).height("146px");
                            $(this).css("display", "block");
                            $(this).find('.zhankai').show();
                        } else {
                            $(this).find('.zhankai').hide();
                            $(this).find('.shouqi').hide();
                        }
                    });
                    $(".zhankai").click(function() {
                        $(this).parent().parent().height("");
                        $(this).hide();
                        $(this).next('.shouqi').show();
                    })
                    $(".shouqi").click(function() {
                        $(this).parent().parent().height("146");
                        $(this).parent().children(".zhankai").show();
                        $(this).hide();
                    })
                });
            }, (response) => {
                that.$message.error('请求失败，请重试！');
                console.log(response, "我失败了")
            });


        },
        getExReprintMaualsBySid: function() {
            var params = {
                sid: this.id,
            };
            fetchUtil({
                method: 'get',
                url: "/casindex/articleReprintSearch/getExReprintMaualsBySid",
                params: params
            }).then((response) => {
                console.log(response, "888999")
                this.optionJsons = response;


            }, (response) => {
                that.$message.error('请求失败，请重试！');
                console.log(response, "我失败了")
            });
        },
        goToUrl: function(url) {
            window.open(url)
        },
        //查看原文
        scrollTo: function() {
            var url = this.contentURL;
            console.log(url)
            if (url.indexOf("http") < 0 && url.indexOf("https") < 0) {
                url = "http://" + url;
            }
            window.open(url)
        }

    },
    components: {
        Pathecharts

    }

};
</script>

<style scoped lang="scss">
.meidia_analysis_cont {
    background: #f8f8f8;
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    padding: 0 20px;
    height: calc(100% - 94px); // height: 100%;
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
    .toptextC {
        background: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        line-height: 30px;
        font-size: 16px;
        color: #555;
        padding: 0 0 20px 0;
        margin: 0 0 20px 0;
        .toptit {
            height: 56px;
            line-height: 56px;
            border-bottom: 2px solid #eee;
            color: #222;
            font-size: 20px;
            padding: 0 20px;
            margin: 0 0 20px 0;
            span {
                background: url(../../../assets/imgs/meidiaAnalaysis/pinggu220190820_03.jpg) left center no-repeat;
                padding: 0 0 0 40px;
                float: left;
                width: 80%;
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .bg2 {
                background-image: url(../../../assets/imgs/meidiaAnalaysis/pinggu220190820_06.jpg);
            }
            .bg2_img {
                float: right;
                width: 60px;
                height: 22px;
                margin: 10px 0;
                cursor: pointer;
                a {
                    margin: 0 0 0 10px;
                }
            }
            .bg3 {
                background-image: url(../../../assets/imgs/meidiaAnalaysis/pinggu220190820_16.jpg);
            }
            .toptit_btn {
                float: right;
                width: 10%;
                a {
                    background: #bfbfbf;
                    height: 32px;
                    line-height: 32px;
                    padding: 0 15px;
                    border-radius: 5px;
                    color: #fff;
                    font-size: 18px;
                    display: inline-block;
                    margin: 0 0 0 10px;
                    cursor: pointer;
                    &:hover {
                        background: #5162ba;
                        text-decoration: none;
                    }
                }
            }
        }
        .cont {
            padding: 0 20px;
            text-align: left;
            span {
                a {
                    color: #f19149;
                    font-size: 20px;
                    font-family: numberZ;
                    letter-spacing: -1px;
                    padding: 0 5px;
                }
            }
            table {
                width: 100%;
                tr {
                    background: #fbfcfc;
                    td {
                        border: 5px solid #fff;
                        padding: 16px 20px;
                    }
                    .tou {
                        font-weight: bold;
                        text-align: center;
                        width: 10%;
                    }
                    .media_list {
                        vertical-align: middle;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        .shouqi {
                            display: none;
                            cursor: pointer;
                            color: #0097D2;
                        }
                        .zhankai {
                            display: none;
                            cursor: pointer;
                            color: #0097D2;
                        }
                        .media_name {
                            cursor: pointer
                        }
                    }
                }
                .odd {
                    background: #eef3f6;
                }
            }
        }
        .five-echar {
            height: 500px; // width: 100%;
            overflow: hidden; // position: relative;
            width: 80%;
            position: relative;
            margin: auto;
        }
    }
}
</style>
