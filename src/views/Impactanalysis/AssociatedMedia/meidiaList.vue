<template>
    <div class="right_cont">
        <div style="width:100%" class="tit">
            <a>传播力分析></a>
            <a>合作媒体分析></a>
            <a>媒体报道</a>
        </div>
        <div style="width:100%">
            <div class="cont_search">
                <!-- <el-select v-model="submit.searchflag" clearable placeholder="请选择">
                                                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                        </el-option>
            </el-select>-->
                <input class="searchword" type="text" v-model="submit.searchword" placeholder="请输入关键词" onfocus="this.placeholder=''" onblur="this.placeholder='请输入关键词'" />
                <el-date-picker value-format="yyyyMMdd" v-model="submit.searchTime" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" style="cursor: pointer;"></el-date-picker>

                <input type="text" class="min" v-model="submit.startreprints" placeholder="最小影响力" onfocus="this.placeholder=''" onblur="this.placeholder='最小影响力'" />
                <span>至</span>
                <input type="text" class="max" v-model="submit.endreprints" placeholder="最大影响力" onfocus="this.placeholder=''" onblur="this.placeholder='最大影响力'" />
                <button class="btn2" @click="getAll" :class=" (submit.startreprints !='' ||submit.endreprints !='') ? 'empty':''">全部</button>
                <button class="btn" @click="getSearch">查询</button>
            </div>
        </div>
        <div style="width:100%">
            <div class="cont_list">
                <el-table :data="tableData" @sort-change="changeSort" :default-sort="{prop:'PUBDATE',order:'descending'}" style="width:100%" @row-click="openDetails">
                    <el-table-column type="index" label="序号" min-width="5%"></el-table-column>
                    <el-table-column prop="TITLE" label="标题" class="multiple" min-width="20%"></el-table-column>
                    <el-table-column prop="PUBDATE" label="发稿日期" sortable :sort-orders="['ascending', 'descending']" min-width="10%" align="center"></el-table-column>
                    <el-table-column prop="WEBSITEREPRINTS" label="网站" min-width="5%" align="center"></el-table-column>
                    <el-table-column prop="APPREPTINTS" label="APP" min-width="5%" align="center"></el-table-column>
                    <el-table-column prop="WEIXINREPRINTS" label="微信" min-width="5%" align="center"></el-table-column>
                    <el-table-column prop="WEIBOREPTINTS" label="微博" min-width="5%" align="center"></el-table-column>
                    <el-table-column prop="EPAPERREPRINTS" label="电子报" min-width="5%" align="center"></el-table-column>
                    <el-table-column prop="PLATEFORMREPRINTS" label="自媒体" min-width="5%" align="center"></el-table-column>
                    <el-table-column prop="REPRINTS" label="总转载" sortable :sort-orders="['ascending', 'descending']" min-width="10%" align="center"></el-table-column>
                    <el-table-column prop="CEIINDEX" label="影响力指数" sortable :sort-orders="['ascending', 'descending']" min-width="10%" align="center"></el-table-column>
                </el-table>

                <div style="width:100%">
                    <div class="el-col row-bg" style="margin-top:5px;">
                        <el-row>
                            <pagination :total="PageTotal" :size="submit.pageSize" :page="submit.pageNo" @UpdatePage="UpdatePage" style="text-align: center; padding-top:20px"></pagination>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pagination from "@/components/pagination";
import fetchUtil from "@/api/fetch";
import * as common from "@/assets/js/common";
export default {
    name: "mediaList",
    data() {
        return {
            submit: {
                startreprints: "", //影响力范围
                endreprints: "", //影响力范围
                searchTime: [
                    common.format(new Date() - 3600 * 1000 * 24 * 30, "yyyyMMdd"),
                    common.format(new Date(), "yyyyMMdd")
                ],
                pageNo: 1, //页数
                pageSize: 20, //每页的数据条数
                searchflag: "", //标题或者正文检索
                searchword: "", //排序形式
                mode: "", //排序依据
                orderBy: "", //排序依据
                type: "" //渠道过滤
            },
            meidiaId: "",
            meidiaName: "",
            PageTotal: 0,

            //检索范围：标题或者正文检索
            options: [
                {
                    value: "标题",
                    label: "标题"
                },
                {
                    value: "正文检索",
                    label: "正文检索"
                }
            ],
            //时间选择器
            pickerOptions2: {
                disabledDate(time) {
                    return time.getTime() > Date.now() - 8.64e6;
                },
                shortcuts: [
                    {
                        text: "最近一周",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit("pick", [start, end]);
                        }
                    },
                    {
                        text: "最近一个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit("pick", [start, end]);
                        }
                    },
                    {
                        text: "最近三个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit("pick", [start, end]);
                        }
                    }
                ]
            },
            tableData: []
        };
    },
    mounted() {
        this.init();
        // this.getDetailList()
        console.log(this.meidiaName, this.meidiaId);
    },

    created: function() {
        this.init();
    },

    watch: {
        $route(to, from) {
            this.init();
        }
    },
    methods: {
        init: function() {
            this.meidiaId = this.$route.query.meidiaId;
            this.meidiaName = this.$route.query.meidiaName;
            console.log(this.$route);
            this.getDetailList();
        },
        changeSort(val) {
            console.log(val, "根据当前排序重新获取后台数据,"); // column: {…} order: "ascending" prop: "date"
            // 根据当前排序重新获取后台数据,一般后台会需要一个排序的参数
        },
        UpdatePage: function(page, size) {
            this.submit.pageNo = page;
            this.submit.pageSize = size;
            // this.areaMsgSearchGet();
            console.log(this.submit.pageNo, this.submit.pageSize, "333");
            this.getDetailList();
        },
        //当前媒体下的所有列表
        getAll: function() {
            this.submit.startreprints = "";
            this.submit.endreprints = "";
            this.getDetailList();
        },
        //经过搜索的列表
        getSearch: function() {
            console.log(this.submit, "我是时间啊啊啊", this.submit.searchTime);
            this.getDetailList();
        },
        getDetailList: function() {
            var _this = this;
            var submitparams = {
                startreprints: this.submit.startreprints,
                endreprints: this.submit.endreprints,
                starttime: this.submit.searchTime[0],
                endtime: this.submit.searchTime[1],
                pageNo: this.submit.pageNo - 1,
                pageSize: this.submit.pageSize,
                searchflag: this.submit.searchflag,
                searchword: this.submit.searchword,
                mode: this.submit.mode,
                orderBy: this.submit.orderBy,
                type: this.submit.type,
                sitename: this.meidiaName
            };
            fetchUtil({
                method: "get",
                url: "/casindex/articleIndexSearch/SearchList",
                // params: Qs.stringify(loginParams)
                params: submitparams
            }).then(
                response => {
                    console.log("我成功了呀", response);
                    this.PageTotal = response.TOTALITEMCOUNT;
                    console.log(response.TOTALITEMCOUNT, "ppppp");
                    for (var i = 0; i < response.PAGEITEMS.length; i++) {
                        response.PAGEITEMS[i].PUBDATE = common.format(
                            response.PAGEITEMS[i].PUBDATE,
                            "yyyy-MM-dd"
                        );
                    }
                    this.tableData = response.PAGEITEMS;
                    console.log(this.tableData, "888888");
                },
                response => {
                    _this.$message.error("提交失败，请重试！");
                    console.log(response, "我失败了");
                }
                );
        },
        openDetails(row) {
            this.$router.push({
                path: "/analysisDetaile",
                query: { id: row.SID, mediaUnitName: row.SITENAME }
            });
        }
    },
    components: {
        pagination
    },
    filters: {
        ellipsis(value) {
            if (!value) return "";
            if (value.length > 30) {
                return value.slice(0, 30) + "...";
            }
            return value;
        }
    }
};
</script>

<style scoped lang="scss">
.right_cont {
    position: relative;
    z-index: 8;
    background: #fff;
    padding: 0 16px;
    height: 100%; //
    overflow-y: scroll;
    overflow-x: hidden;

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
    .cont_search {
        height: 36px;
        line-height: 36px;
        overflow: hidden;
        span {
            float: left;
            padding: 0 10px 0 0;
            font-size: 18px;
            color: #606266;
        }
        input {
            height: 32px;
            line-height: 32px;
            border: 1px solid #d6d6d6;
            border-radius: 5px;
            float: left;
            width: 20%;
            display: inline;
            margin: 0 3% 0 0; // color: #aaa;
            // font-size: 18px;
            font-size: 14px;
            color: #606266;
            text-indent: 10px;
        }
        .searchword {
            width: 20%;
            margin: 0 3% 0 0; // color: #aaa;
            cursor: pointer;
        }
        .min,
        .max {
            width: 10%;
            text-align: center;
            margin: 0 1% 0 0; // color: #aaa;
            cursor: pointer;
        }

        select {
            height: 28px;
            line-height: 28px;
            border: 1px solid #c4c4c4;
            float: left;
            width: 150px;
        }
        .btn {
            background: #4259a3;
            width: 9%;
            height: 36px;
            color: #fff;
            font-size: 18px;
            float: left;
            display: inline;
            margin: 0 0 0 4%;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .btn2 {
            background: #c9c9c9;
            width: 8%;
            height: 36px;
            color: #fff;
            font-size: 18px;
            float: left;
            display: inline;
            margin: 0;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .empty {
            background: #4259a3;
        }
    }
    .cont_list {
        height: initial;
        min-height: 900px;
        width: 100%;
        margin: 20px 0px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        clear: both;
    }
}
</style>
