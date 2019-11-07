<template>
<div class="search wrap">
    <div class="search-title">
        <h2>Matchup Expo</h2>
    </div>
    <div class="search-search">
        <div style="margin-top: 15px;display: flex;">
            <el-button icon="el-icon-menu" @click="backHome">Categories</el-button>
            <el-input placeholder="Enter a keyword to search" v-model="keyword" @keyup.enter.native="sendKeyWord" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="Keywords">
                    <el-option label="Products" value="product"></el-option>
                    <el-option label="Offers" value="offer"></el-option>
                    <el-option label="Companies" value="supply"></el-option>
                    <el-option label="All" value=""></el-option>
                </el-select>
                <el-button class="search-search-button" slot="append" icon="el-icon-search" @click="sendKeyWord"></el-button>
            </el-input>
        </div>
    </div>
    <router-view />
</div>
</template>

<script>
// import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

export default {
    data() {
        return {
            keyword: this.$route.query.key || '',
            select: this.$route.query.type || 'product'
        }
    },
    created() {
        // if (this.$i18n.locale == 'es') {
        //     this.$i18n.locale = 'en'
        //     Util.setsessionStorage('lang','en')
        // }
    },
    methods: {
        sendKeyWord(key) {
            // if (this.keyword == '') {
            //     this.$message({
            //         message: 'Please enter a Keyword at least for your search.',
            //         type: 'warning'
            //     })
            //     return
            // }
            if (this.keyword == this.$route.query.key && this.select == this.$route.query.type) {
                location.reload()
            } else {
                this.$router.push('/MatchupExpo/search?key=' + this.keyword + '&page=1&type=' + this.select + '&section=0')
            }
        },
        backHome() {
            this.$router.push('/MatchupExpo')
        }
    },
    watch: {
        '$route'() {
            this.select = this.$route.query.type
        },
        '$i18n.locale'() {
            if (this.$i18n.locale == 'es') {
                this.$i18n.locale = 'en'
                Util.setsessionStorage('lang','en')
            }
        }
    }
}
</script>

<style scoped lang="scss">
.search {
    .search-title {
        width: 100%;
        text-align: center;
    }
    .search-search {
        max-width: 1200px;
        margin: 50px auto;
    }
}
</style>
