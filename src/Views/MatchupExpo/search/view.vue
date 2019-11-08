<template>
<Layout title="Search Detail">
    <div class="searchDetail">
        <van-skeleton title avatar :row="20" :loading="skeletonLoading">
            <div class="baseInfo">
                <img :src="classData.Img" alt="">
                <h5 class="title">{{classData.Name}}</h5>
                <p><span>Description:</span>{{classData.Description}}</p>
                <p><span>Company:</span>{{classData.SupplyName}}</p>
                <p><span>Role</span>:{{classData.IsExhibitor == 0 ? 'Visitors' : 'Exhibitors'}}</p>
                <p v-if="classData.IsExhibitor == 1">Booth:{{classData.BoothNum}}</p>

                <p><span>Mobile phone</span> : {{classData.ManPhone}}</p>
                <p><span>Contact Person</span> : {{classData.ManName}}</p>
                <p><span>Website</span> : {{classData.WebSite}}</p>
                <p>
                    <span>
                        {{classData.ManWeChat?'WeChat' : classData.ManFacebook?'FaceBook' : 'Whatsapp'}}
                    </span> :
                    {{classData.ManWeChat || classData.ManFacebook || classData.ManWhatsapp}}
                </p>
            </div>
            <div class="btns">
                <van-button round hairline size="small" type="info" @click="nextContact(dropdownList.value)">Contact Company</van-button>
                <van-button round hairline size="small" type="warning" @click="nextInvitation(dropdownList.value)">Meet Company</van-button>
            </div>
            <div class="detailInfo" v-html="classData.Summary"></div>
        </van-skeleton>
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
            classData: {},
            skeletonLoading: true
        }
    },
    created() {
        customRequest({
            method: 'get',
            url: '/b2b' + this.$route.query.type + '/get',
            params: {
                id: this.$route.query.id,
            }
        }).then(result => {
            this.skeletonLoading = false
            this.classData = result.data[0]
        })
    },
    methods: {
        next(url) {
            this.$router.push(url + '?id=' + this.classData.ID + '&name=' + this.classData.Name)
        },
        // nextSupplyID() {
        //     this.$router.push('/MatchupExpo/search/view?id=' + this.classData.SupplyID + '&type=supply')
        // },
        // 发送站内信
        nextContact(item) {
            this.$router.push({
                name: 'MatchupExpo_contact',
                query: {
                    id: item.UserID
                }
            })
        },
        // 邀约
        nextInvitation(item) {
            this.$router.push({
                name: 'MatchupExpo_invitation',
                query: {
                    id: item.UserID,
                    Booth: item.BoothNum
                }
            })
        }
    },
}
</script>

<style scoped lang="scss">
.searchDetail {
    padding: 0.15rem;
    .baseInfo {
        padding: 0.15rem;
        background: #fff;
        font-size: .28rem;
        .title {
            text-align: center;
            font-size: 0.32rem;
        }
    }
    .btns {
        margin: 0.15rem 0;
        padding: 0.15rem 15%;
        display: flex;
        justify-content: space-between;
        background: #fff;
    }
    .detailInfo {
        min-height: 150px;
        padding: 0.15rem;
        background: #fff;
        font-size: .3rem;
    }
}
</style>
