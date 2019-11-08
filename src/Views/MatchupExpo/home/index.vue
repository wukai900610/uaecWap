<template>
<Layout title="Matchup Expo">
    <div class="matchupExop">
        <div class="search">
            <van-dropdown-menu class="searchMenu">
                <van-dropdown-item v-model="dropdownList.value" :options="dropdownList.data" />
            </van-dropdown-menu>
            <van-search class="searchInput" :placeholder="$t('page.index.placeholder')" show-action shape="round" v-model="keyword">
                <van-button slot="action" type="info" size="small" @click="onSearch">{{$t('page.index.search')}}</van-button>
            </van-search>
        </div>
        <div class="preview">
            <h2 class="title">All Categories</h2>
            <van-skeleton title avatar :row="20" :loading="skeletonLoading">
                <div class="categoryBox">
                    <div :class="'category1 categoryBoxIndex'+index" v-for="(item, index) in category.data" :key="index">
                        <h5 class="category1Name">
                            {{item.Name}}
                            <span v-if="item.num" style=" color:#000">
                                [{{item.num}}]
                            </span>
                        </h5>
                        <div class="category2">
                            <div class="category2Box" @click="nextCategory(item2)" v-for="(item2, index2) in item.children" :key="index2">
                                <p :class="item2.children.length == 0 || item2.children[0].Name == 'N/A' ? 'canClick' : ''">
                                    {{item2.Name}}
                                    <span v-if="item2.num" style=" color:#1686cc">
                                        [{{item2.num}}]
                                    </span>
                                </p>
                                <ul class="category3Box">
                                    <li v-if="item3.length != 0 && item3.Name != 'N/A'" v-for="(item3, index3) in item2.children" :key="index3" @click="nextInvitation(item3)">
                                        {{item3.Name}}
                                        <span v-if="item3.num" style=" color:#ff7419">
                                            [{{item3.num}}]
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </van-skeleton>
        </div>
    </div>
</Layout>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

import Layout from "@/components/Layout";

export default {
    components: {
        Layout,
    },
    data() {
        return {
            dropdownList: {
                value: 'product',
                data: [{
                        text: 'Products',
                        value: 'product'
                    },
                    {
                        text: 'Offers',
                        value: 'offer'
                    },
                    {
                        text: 'Companies',
                        value: 'supply'
                    }
                ]
            },
            keyword: '' || this.$route.query.keyword,
            skeletonLoading: true,
            category: {
                // active: 0,
                // fixedNav: false,
                categoryNav: [],
                data: []
            },
        }
    },
    methods: {
        onSearch() {
            this.$router.push('/MatchupExpo/search?keyword=' + this.keyword + '&page=1&type=' + this.dropdownList.value + '&section=0')
        },
        nextCategory(item) {
            if (item.children.length == 0 || item.children[0].Name == 'N/A') {
                this.nextInvitation(item)
            }
        },
        nextInvitation(item) {
            this.$router.push('/MatchupExpo/search?page=1&type=' + this.dropdownList.value + '&section=1&id=' + item.ID + '&CLevel=' + item.CLevel)
        }
    },
    created() {
        let that = this

        let get = function(level) {
            return new Promise((resolve, reject) => {
                customRequest({
                    method: 'get',
                    url: '/B2BCategory/GetListWithNum',
                    params: {
                        CLevel: level
                    }
                }).then(result => {
                    resolve(result.data)
                })
            })
        }

        Promise.all([get(1), get(2), get(3)]).then(function(values) {
            let level1 = values[0].list
            let num1 = values[0].num
            let level2 = values[1].list
            let num2 = values[1].num
            let level3 = values[2].list
            let num3 = values[2].num
            let tempData = []

            // 匹配数据
            for (var i in num1) {
                level1.map(function(item) {
                    if (item.ID == i) {
                        item.num = num1[i]
                    }
                })
            }
            for (var i in num2) {
                level2.map(function(item) {
                    if (item.ID == i) {
                        item.num = num2[i]
                    }
                })
            }
            for (var i in num3) {
                level3.map(function(item) {
                    if (item.ID == i) {
                        item.num = num3[i]
                    }
                })
            }

            // 三级目录合成到二级目录
            level2.map((item) => {
                item.children = []
                level3.map((item2) => {
                    if (item.ID == item2.ParentID) {
                        item.children.push(item2)
                    }
                })
            })
            // 二级目录合成到一级目录
            level1.map((item) => {
                item.children = []
                level2.map((item2) => {
                    if (item.ID == item2.ParentID) {
                        item.children.push(item2)
                    }
                })
            })

            that.category.data = level1
            that.category.data.map((item, index) => {
                // 控制是否显示更多
                item.viewMore = true
                // 大类导航
                let newIndex = Math.ceil((index + 1) / 6) - 1
                if (!that.category.categoryNav[newIndex]) {
                    that.category.categoryNav[newIndex] = []
                }
                that.category.categoryNav[newIndex].push(item)
                // 控制显示更多按钮状态
                // 单个三级分类超过7行
                let isShowBtn = item.children && item.children.some((item2) => {
                    return item2.children.length / 2 > 7
                })
                // 累计超过10行的
                let allLevel3Length = 0
                item.children && item.children.map((item2) => {
                    if (item2.children) {
                        allLevel3Length = allLevel3Length + Math.ceil(item2.children.length / 2)
                    }
                })
                // console.log(allLevel3Length);
                if (isShowBtn || allLevel3Length > 8) {
                    item.isShowBtn = true
                } else {
                    item.isShowBtn = false
                }
            })

            that.skeletonLoading = false;
        });
    },
}
</script>

<style scoped lang='scss'>
.matchupExop {
    .search {
        display: flex;
        .searchMenu {
            width: 80px;
            height: 54px;
        }
        .searchInput {
            flex: 1;
        }
    }
    .preview {
        background: #fff;
        .title {
            padding-left: 0.2rem;
            text-align: center;
            font-size: 0.35rem;
        }
        .categoryBox {
            padding: 0.2rem;
            .category1 {
                // padding-bottom: .1rem;
                .category1Name {
                    margin: 0;
                    padding: 0 0 0.2rem;
                    font-size: 0.3rem;
                }
                .category2 {
                    overflow: hidden;
                    padding-left: 0.2rem;
                    display: flex;
                    flex-wrap: wrap;
                    .category2Box {
                        flex: 0 0 100%;
                        margin-bottom: 0.15rem;
                        p {
                            margin: 0 0 0.1rem;
                            color: #1686cc;
                            cursor: default;
                            font-weight: bold;
                            font-size: 0.26rem;
                            &.canClick {
                                cursor: pointer;
                                &:hover {
                                    color: #ff7419;
                                    text-decoration: underline;
                                }
                            }
                        }
                        .category3Box {
                            overflow: auto;
                            li {
                                float: left;
                                width: 50%;
                                // height: 20px;
                                // line-height: 20px;
                                font-size: 0.24rem;
                                &:hover {
                                    color: #ff7419;
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
