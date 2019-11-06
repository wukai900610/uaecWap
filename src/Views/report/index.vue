<template>
<Layout>
    <div class="report">
        <h2>{{title}}</h2>
        <div class="report-view">
            <div class="report-view-item" v-for="(item,index) in classData" @click="next(item)">
                <p>{{item.Title}}</p>
                <div class="smallText" :style="{color:$store.getters.skin.background}" v-html="item.Summary"></div>
                <p class="time">{{item.AddTime | dateTime}}</p>
            </div>
            <div class="report-page">
                <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="size" :current-page.sync="page" :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</Layout>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

import Layout from "@/components/Layout";

export default {
    data() {
        return {
            page: Number(this.$route.query.page || 1),
            size: 10,
            count: 0,
            classData: [],
            loading: true,
            lan: Util.getsessionStorage('lang'),
            title: ''
        }
    },
    created() {
        this.getData()
        this.getListTitle()
    },
    methods: {
        getListTitle() {
            if (this.lan == 'zh') {
                if (this.$route.query.kind == 'news') {
                    this.title = '站内新闻'
                } else {
                    this.title = '国内外纺织品相关行业新闻报道'
                }
            } else if (this.lan == 'en') {
                this.title = 'news'
            } else {
                this.title = 'Noticias'
            }
        },
        go() {
            this.$router.replace('/newView/')
        },
        getData() {
            customRequest({
                method: 'get',
                url: '/WebNews/Getlist',
                params: {
                    page: this.page,
                    size: this.size,
                    kind: this.$route.query.kind,
                    lan: this.lan
                }
            }).then(result => {
                this.classData = result.data
                this.count = result.count
                this.page = Number(this.page)
            })
        },
        next(item) {
            this.$router.push('/reportDetails?id=' + item.ID)
        },
        handleCurrentChange(val) {
            this.page = val
            this.getData()
        }
    },
    watch: {
        '$route'() {
            this.loading = true
            this.page = 1
            this.getListTitle()
            this.getData()
        },
        '$i18n.locale'() {
            this.lan = Util.getsessionStorage('lang')
            this.getListTitle()
            this.getData()
        }
    },
    components:{
        Layout,
    }
}
</script>

<style scoped lang="scss">
.report {
    width: 100%;
    overflow: hidden;
    h2 {
        width: 1200px;
        margin: 50px auto;
    }
    .report-view {
        width: 100%;
        background-color: #eee;
        overflow: hidden;
        .report-view-item {
            width: 1200px;
            margin: 20px auto;
            padding: 10px 0;
            background-color: #fff;
            box-shadow: 2px 4px 4px rgba(0,0,0,.3);
            line-height: 40px !important;
            p {
                text-indent: 20px;
            }
            .smallText {
                overflow: hidden;
                margin: 0 20px;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 20px;

            }
            .time {
                text-indent: 20px;
                color: rgb(82, 82, 82);
                font-size: 12px;
            }
        }
        .report-page {
            text-align: center;
        }
    }
}
</style>
<style lang="scss">
.report {
    p {
        line-height: 40px !important;
        // width: 1100px;
        // margin: 0 auto;
        // width: 100%;
        // overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
    }
    .smallText {
        max-height: 200px;
        img {
            max-height: 200px;
        }
        p {
            margin: 0;
        }
    }
}
</style>
