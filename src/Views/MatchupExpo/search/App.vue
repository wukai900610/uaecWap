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
import Util from "@/assets/service/customUtil";

export default {
    name: "App",
    data() {
        return {
            keyword: this.$route.query.key || '',
            select: this.$route.query.type || 'product'
        }
    },
    created() {
        if (this.$i18n.locale == 'es') {
            this.$i18n.locale = 'en'
            Util.setsessionStorage('lang','en')
        }
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
        /*.search-search-button:nth-child(1){*/
        /*background: #FAAB23;*/
        /*color:#fff;*/
        /*}*/
    }
}
</style>

<style lang='scss'>
.search {
    .el-select .el-input {
        width: 130px;
        color: #000;
    }
    .el-input-group__append,
    .el-input-group__prepend {
        background: #fff;
    }
    /*.el-input-group__append .el-button, .el-input-group__prepend .el-button{*/
    /*background:#FAAB23;*/
    /*color:#fff;*/
    /*}*/
    .el-breadcrumb {
        margin: 30px 0;
    }
    .el-pagination {
        width: 1200px;
        margin: 20px auto;
        text-align: center;
    }
    .el-pagination.is-background .btn-next,
    .el-pagination.is-background .btn-prev,
    .el-pagination.is-background .el-pager li {
        background: #fff;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active {
        /*background:rgba(250,171,35,1);*/
        /*border:1px solid rgba(200, 200, 200, 1);*/
    }
}
</style>
