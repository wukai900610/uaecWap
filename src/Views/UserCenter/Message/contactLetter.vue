<template>
<div class="user-contactLetter">
    <h2>{{$t('tabel.SentBox')}}</h2>
    <div class="user-contactLetter-item" v-for="(item,index) in viewData">
        <div class="user-contactLetter-view">
            <div class="user-contactLetter-item-head">
                <p v-html="$t('tabel.Subject')+':'+item.Subject"></p>
            </div>
            <div class="user-contactLetter-item-view">
                <div class="user-contactLetter-item-view-head">
                    <div class="user-contactLetter-item-view-head-left" v-html="$t('tabel.FromCompany')+':'+item.SupplyNameFrom"></div>
                    <div class="user-contactLetter-item-view-head-right">
                        {{item.AddTime | dateTime}}
                    </div>
                </div>
                <div class="user-contactLetter-item-view-center">
                    <p>{{$t('tabel.From')}}:{{item.ManFirstNameFrom+item.ManLastNameFrom}}</p>
                    <p v-html="$t('tabel.Content')+':'+item.Message">Dear Sir,</p>
                </div>
                <div class="user-contactLetter-item-view-view">
                    <p>{{$t('tabel.ToCompany')+':'+item.SupplyNameTo}}</p>
                    <p>{{$t('tabel.ToUser')}}:{{item.ManFirstNameTo+item.ManLastNameTo}}</p>
                </div>
                <!--<div class="user-contactLetter-item-view-fotter">-->
                <!--<p>{{$t('prompt.Clickhereto')}}<span @click="replay"> {{$t('tabel.Replay')}}</span></p>-->
                <!--</div>-->
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    getMessage
} from "@/assets/api/api";
export default {
    name: "contactLetter",
    data() {
        return {
            viewData: []
        }
    },
    created() {
        getMessage({
                id: this.$route.query.id,
                type: this.$route.query.type
            })
            .then(result => {
                this.viewData = result.data
            })
    },
    methods: {
        replay() {
            this.$router.push('/MatchupExpo/contact?id=' + this.$route.query.id)
        }
    }
}
</script>

<style scoped lang="scss">
.user-contactLetter {
    h2 {
        text-align: center;
        background: #fff;
        margin: 5px;
        width: 100%;
        line-height: 60px;
    }
    .user-contactLetter-item {
        background: #fff;
        width: 100%;
        overflow: hidden;
        margin: 5px;
        p {
            margin: 0 0 20px;
        }
        .user-contactLetter-view {
            width: 95%;
            margin: 0 auto;
            .user-contactLetter-item-head {
                line-height: 40px;
                font-size: 24px;
                color: rgba(51,51,51,1);
                border-bottom: 1px solid rgba(224,224,224,1);
                p {
                    margin: 10px 0;
                }
            }
            .user-contactLetter-item-view-head {
                width: 100%;
                overflow: hidden;
                line-height: 40px;
                .user-contactLetter-item-view-head-left {
                    text-align: left;
                    float: left;
                }
                .user-contactLetter-item-view-head-right {
                    text-align: right;
                    float: right;
                }
            }
            .user-contactLetter-item-view-center {
                border-bottom: 1px solid rgba(224,224,224,1);
            }
            .user-contactLetter-item-view-view {
                border-bottom: 1px solid rgba(224,224,224,1);
                p {
                    margin: 10px 0;
                }
            }
            .user-contactLetter-item-view-fotter {
                span {
                    color: #CA8714;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>
