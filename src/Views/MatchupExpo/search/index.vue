<template>
<Layout title="Search List">
    <div class="searchList">
        <div class="search">
            <van-dropdown-menu class="searchMenu">
                <van-dropdown-item v-model="dropdownList.value" :options="dropdownList.data" />
            </van-dropdown-menu>
            <van-search class="searchInput" :placeholder="$t('page.index.placeholder')" show-action shape="round" v-model="keyword">
                <van-button slot="action" type="info" size="small" @click="onSearch">{{$t('page.index.search')}}</van-button>
            </van-search>
        </div>

        <div class="searchContent" ref="searchList">
            <List :list="$store.state.app.page.searchList.data" :loading="$store.state.app.page.searchList.loading" :finished="$store.state.app.page.searchList.finished" :onLoad="onLoad">
                <template slot-scope="slotProps">
                    <van-cell v-for="item in slotProps.cList" :key="item.ID" @click="toDetail(item)">
                        <van-card style="background:#fff" :thumb="item.Img">
                            <h5 slot="title">{{item.Name}}</h5>
                            <div slot="desc">
                                <p>{{item.Description}}</p>
                                <div class="info">
                                    <van-button round hairline size="small" type="info" @click.stop="nextContact(dropdownList.value)">Contact Company</van-button>
                                    <van-button round hairline size="small" type="warning" @click.stop="nextInvitation(dropdownList.value)">Meet Company</van-button>
                                </div>
                            </div>
                        </van-card>
                    </van-cell>
                </template>
            </List>
            <!-- <van-list :immediate-check="false" v-model="list.loading" :finished="list.finished" finished-text="No More" @load="onLoad">
                <van-cell v-for="item in list.data" :key="item.ID" @click="toDetail(item)">
                    <van-card style="background:#fff" :thumb="item.Img">
                        <h5 slot="title">{{item.Name}}</h5>
                        <div slot="desc">
                            <p>{{item.Description}}</p>
                            <div class="info">
                                <van-button round hairline size="small" type="info" @click.stop="nextContact(dropdownList.value)">Contact Company</van-button>
                                <van-button round hairline size="small" type="warning" @click.stop="nextInvitation(dropdownList.value)">Meet Company</van-button>
                            </div>
                        </div>
                    </van-card>
                </van-cell>
            </van-list> -->
        </div>
    </div>
</Layout>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

import Layout from "@/components/Layout";
import List from "@/components/List";

export default {
    components: {
        Layout,
        List
    },
    data() {
        return {
            keyword: this.$route.query.keyword || '',
            mode: '',
            dropdownList: {
                value: this.$route.query.type || 'product',
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
            // list: {
            //     data: [],
            //     loading: false,
            //     finished: false,
            //     pageCount: 1,
            //     page: 1,
            //     size: 10,
            // }
        }
    },
    methods: {
        toDetail(item){
            this.$router.push({
                name:'MatchupExpo_view',
                query:{
                    type:this.dropdownList.value,
                    id:item.ID,
                }
            })
        },
        onSearch() {
            // this.list.page = 1
            // this.list.data = []
            // this.list.finished = false
            this.$store.commit('searchListInit')
            this.mode = 'keyword'
            this.getData()
        },
        onLoad() {
            this.getData()
        },
        getData() {
            // this.list.loading = true
            this.$store.commit('searchListLoad')

            let params = {}
            let url = ''
            if (this.$route.query.section == 1 && this.mode != 'keyword') {
                // 来自目录
                url = '/B2BKeyWords/GetByCatelogID'
                params = {
                    CatelogID: this.$route.query.id,
                    CLevel: this.$route.query.CLevel,
                    type: this.dropdownList.value,
                    page: this.$store.state.app.page.searchList.page,
                    size: this.$store.state.app.page.searchList.size
                }
            } else {
                // 来自关键词
                url = '/B2BKeyWords/Get'
                params = {
                    KeyWords: this.keyword,
                    type: this.dropdownList.value,
                    page: this.$store.state.app.page.searchList.page,
                    size: this.$store.state.app.page.searchList.size
                }
            }

            customRequest({
                method: 'get',
                url: url,
                params: params
            }).then(result => {
                if (result.data.length < this.$store.state.app.page.searchList.size) {
                    // this.list.finished = true
                    this.$store.commit('searchListFinished')
                }
                // this.list.data = this.list.data.concat(result.data)
                // this.list.pageCount = result.count
                // this.list.loading = false
                // this.list.page++
                this.$store.commit('searchListSuccess',result)
            })
        },
        // 发送站内信
        nextContact(item) {
            this.$router.push({
                name:'MatchupExpo_contact',
                query:{
                    id:item.UserID
                }
            })
        },
        // 邀约
        nextInvitation(item) {
            this.$router.push({
                name:'MatchupExpo_invitation',
                query:{
                    id:item.UserID,
                    Booth:item.BoothNum
                }
            })
        }
    },
    created() {
        if(this.$store.state.app.page.searchList.data ===0){
            this.getData()
        }
    },
    beforeRouteLeave(to, from, next){
        let searchListTop = this.$refs.searchList.scrollTop;
        Util.setsessionStorage('searchListTop',searchListTop)
        next()
    },
    mounted(){
        var searchListTop = Util.getsessionStorage('searchListTop')
        this.$refs.searchList.scrollTo(0,searchListTop)
    }
}
</script>

<style scoped lang="scss">
.searchList {
    display: flex;
    flex-direction: column;
    height: 100%;
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
    .searchContent {
        flex: 1;
        overflow: auto;
    }
}
</style>
