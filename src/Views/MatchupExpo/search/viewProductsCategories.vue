<template>
<div class="view-wrap">
    <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/MatchupExpo' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/MatchupExpo/search?section=0&key=' }">Company</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/MatchupExpo/search/view?id='+$route.query.id+'&type=supply' }">{{$route.query.name}}</el-breadcrumb-item>
            <el-breadcrumb-item>Products Categories</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <h2 v-html="$route.query.name"></h2>
    <div class="home-search-list">
        <div class="home-search-list-view">
            <div class="head-item">
                <div class="head-item-view">
                    <div class="head-item-view-center">
                        <ul>
                            <li v-for="(item, index) in categories" v-html="item.Name" @click="nextInvitation(item)"></li>
                        </ul>
                        <div v-if="dataSize==0" id="none">Sorry! No matches were found</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    getProductsCategories
} from "@/assets/api/api";

export default {
    name: "viewProductsCategories",
    data() {
        return {
            categories: [],
            dataSize: 1
        }
    },
    created() {
        getProductsCategories({
                SupplyID: this.$route.query.id
            })
            .then(result => {
                console.log(result)
                this.categories = result.data
                this.dataSize = this.categories.length
            })
    },
    methods: {
        nextInvitation(item) {
            console.log(item)
            this.$router.push('/MatchupExpo/search?key=' + item.Name + '&page=1&type=product&section=1&id=' + item.ID)
        }
    }
}
</script>

<style scoped lang="scss">
.view-wrap {
    background: rgba(245, 245, 245, 1);
    width: 100%;
    overflow: hidden;
    h2 {
        text-align: center;
    }
    .home-search-list {
        width: 100%;
        background: rgba(245,245,245,1);
        overflow: hidden;
        .home-search-list-view {
            width: 1200px;
            margin: 20px auto;
            background: rgba(255,255,255,1);
            border: 1px solid rgba(224,224,235,1);
            .home-search-list-head {
                width: 1140px;
                margin: 0 auto;
                height: 70px;
                line-height: 70px;
                border-bottom: 1px solid rgba(224,224,224,1);
                .home-search-list-head-ul {
                    float: left;
                    width: calc(25% - 30px);
                    text-align: center;
                    padding-left: 30px;
                    li {
                        float: left;
                        font-size: 14px;
                        color: rgba(51,51,51,1);
                        margin: 0 12px;
                    }
                }
            }
            .head-item {
                width: 1140px;
                margin: 0 auto;
                overflow: hidden;
                .head-item-view {
                    margin: 50px 0;
                    overflow: hidden;
                }
                .head-item-view-center {
                    width: 100%;
                    margin: 0 auto;
                    ul {
                        width: 100%;
                        overflow: hidden;
                        li {
                            float: left;
                            padding: 0 15px;
                            line-height: 60px;
                            width: calc(33.33% - 30px);
                            text-align: center;
                        }
                    }
                }
                .head-item-view-left {
                    float: left;
                    width: 124px;
                    min-height: 100px;
                    text-align: center;
                    h3 {
                        margin: 0;
                    }
                }
                .head-item-view-right {
                    float: left;
                    min-height: 100px;
                    width: calc(100% - 124px);
                    ul {
                        width: 100%;
                        overflow: hidden;
                        li {
                            float: left;
                            padding: 0 15px;
                        }
                    }
                }
            }
        }
    }
}
</style>
