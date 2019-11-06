<template>
<div class="home wrap">
    <div class="carousel">
        <img :src="banner" height="600px" alt="">
    </div>
    <div class="home-title">
        <h2>Matchup Expo</h2>
    </div>
    <div class="home-search">
        <div style="margin-top: 15px;display: flex;">
            <el-input placeholder="Enter Keywords to Search" v-model="keyword" @keyup.enter.native="sendKeyWord" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="Keywords">
                    <el-option label="Products" value="product"></el-option>
                    <el-option label="Offers" value="offer"></el-option>
                    <el-option label="Companies" value="supply"></el-option>
                    <el-option label="All" value=""></el-option>
                </el-select>
                <el-button @click="sendKeyWord" slot="append" icon="el-icon-search" type="primary"></el-button>
            </el-input>
        </div>
    </div>
    <div class="home-search-list">
        <div class="home-search-list-view">
            <ul :class="category.fixedNav ? 'categoryNav fixed' : 'categoryNav hide'">
                <li @click="scrollPage(index)" :class="index == category.active ? 'active item' : 'item'" v-for="(item, index) in category.data" :key="index"><a class="ellipsis">{{item.Name}}</a></li>
            </ul>
            <!-- 克隆 -->
            <ul class="categoryNav">
                <li @click="scrollPage(index)" :class="index == category.active ? 'active item' : 'item'" v-for="(item, index) in category.data" :key="index"><a class="ellipsis">{{item.Name}}</a></li>
            </ul>

            <div class="categoryBox">
                <div :class="'category1 categoryBoxIndex'+index" v-for="(item, index) in category.data" :key="index">
                    <h5 class="category1Name">
                        {{item.Name}}
                        <span v-if="item.num" style=" color:#000">
                            [{{item.num}}]
                        </span>
                    </h5>
                    <div :class="!item.viewMore ? 'category2 show' : 'category2'">
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

                    <div class="control" v-if="item.isShowBtn">
                        <span v-if="item.viewMore" class="viewMore" @click="toggle(index,'viewMore')">View More</span>
                        <span v-if="!item.viewMore" class="less" @click="toggle(index,'less')">Less</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import {
    getCategories
} from "@/assets/api/api";
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";
import {
    getBanner
} from "@/assets/api/api";

export default {
    data() {
        return {
            keyword: '',
            select: 'product',
            category: {
                active: 0,
                fixedNav: false,
                categoryNav: [],
                data: []
            },
            classType: 0,
            className: '',
            loading: true,
            dataSize: 1,
            banner: ''
        }
    },
    created() {
        let that = this
        getBanner()
            .then(result => {
                this.banner = result.data.Banner2
            })

        if (this.$i18n.locale == 'es') {
            this.$i18n.locale = 'en'
            Util.setsessionStorage('lang','en')
        }

        let get = function (level) {
            return new Promise((resolve, reject)=>{
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
            for(var i in num1){
                level1.map(function (item) {
                    if(item.ID == i){
                        item.num = num1[i]
                    }
                })
            }
            for(var i in num2){
                level2.map(function (item) {
                    if(item.ID == i){
                        item.num = num2[i]
                    }
                })
            }
            for(var i in num3){
                level3.map(function (item) {
                    if(item.ID == i){
                        item.num = num3[i]
                    }
                })
            }

            // 三级目录合成到二级目录
            level2.map((item)=>{
              item.children = []
              level3.map((item2)=>{
                    if(item.ID == item2.ParentID){
                        item.children.push(item2)
                    }
                })
            })
            // 二级目录合成到一级目录
            level1.map((item)=>{
              item.children = []
              level2.map((item2)=>{
                    if(item.ID == item2.ParentID){
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
                let isShowBtn = item.children && item.children.some((item2)=>{
                    return item2.children.length / 2 > 7
                })
                // 累计超过10行的
                let allLevel3Length = 0
                item.children && item.children.map((item2)=>{
                    if(item2.children){
                        allLevel3Length = allLevel3Length + Math.ceil(item2.children.length / 2)
                    }
                })
                // console.log(allLevel3Length);
                if(isShowBtn || allLevel3Length > 8){
                    item.isShowBtn = true
                }else{
                    item.isShowBtn = false
                }
            })
        });

        // 侦听页面滚动
        window.addEventListener("scroll", function(e) {
            that.category.fixedNav = document.documentElement.scrollTop > 910 ? true : false
        });
    },
    methods: {
        // 目录导航
        scrollPage(index) {
            let target = document.querySelector('.categoryBoxIndex' + index)
            let scroll = target.offsetTop - 135
            window.scrollTo(0, scroll)

            this.category.active = index
        },
        // 切换显示更多
        toggle(index,type){
            if(type == 'viewMore'){
                this.category.data[index].viewMore = false
            }else{
                this.category.data[index].viewMore = true
            }
            this.$set(this.category.data,index,this.category.data[index])
        },
        sendKeyWord(key) {
            // if (this.keyword == '') {
            //     this.$message({
            //         message: 'Please enter a keyword at least for your search.',
            //         type: 'warning'
            //     })
            //     return
            // }
            // this.$router.push('/MatchupExpo/search?key=' + this.keyword + '&page=1&type=' + (this.select || 'product') + '&section=0')
            this.$router.push('/MatchupExpo/search?key=' + this.keyword + '&page=1&type=' + this.select + '&section=0')
        },
        nextCategory(item){
            if(item.children.length == 0 || item.children[0].Name == 'N/A'){
                this.nextInvitation(item)
            }
        },
        nextInvitation(item) {
            this.$router.push('/MatchupExpo/search?key=' + item.Name + '&page=1&type=' + this.select + '&section=1&id=' + item.ID + '&CLevel='+item.CLevel)
        }
    },
}
</script>

<stylescoped lang='scss'>
.home {
    .home-title {
        width: 100%;
        text-align: center;
    }
    .home-search {
        max-width: 1200px;
        margin: 50px auto;
    }
    .carousel {
        img {
            width: 100%;
        }
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
            display: flex;
            flex-direction: column;
            .categoryNav {
                display: flex;
                flex-wrap: wrap;
                margin: 20px;
                border-top: 1px solid #e8e8e8;
                border-left: 1px solid #e8e8e8;
                &.hide {
                    display: none;
                }
                &.fixed {
                    position: fixed;
                    left: 50%;
                    top: 60px;
                    display: flex;
                    margin: 0;
                    width: 1160px;
                    transform: translate(-50%,0);
                    background: #fff;
                    z-index: 1;
                }
                .item {
                    position: relative;
                    padding: 0 0 0 20px;
                    flex: 0 0 16.666%;
                    width: 0;
                    height: 54px;
                    line-height: 54px;
                    border-bottom: 1px solid #e8e8e8;
                    border-right: 1px solid #e8e8e8;
                    a{
                        display: block;
                        // width: 100px;
                        color: #333;
                        cursor: pointer;
                    }
                    &.active {
                        border-bottom: 2px solid #ff7419;
                        border-right: 2px solid #ff7419;
                        &::before {
                            content: ' ';
                            position: absolute;
                            left: -1px;
                            top: -1px;
                            width: 100%;
                            height: 100%;
                            border-top: 2px solid #ff7419;
                            border-left: 2px solid #ff7419;
                        }
                        a{
                            color: #ff7419;
                        }
                    }
                }
            }
            .categoryBox {
                padding: 30px;
                .category1 {
                    padding-bottom: 10px;
                    .category1Name {
                        margin: 0;
                        padding: 0 0 20px;
                        font-size: 22px;
                    }
                    .category2 {
                        overflow: hidden;
                        padding-left: 20px;
                        max-height: 170px;//230
                        display: flex;
                        flex-wrap: wrap;
                        &.show{
                            max-height: none;
                        }
                        .category2Box {
                            flex: 0 0 50%;
                            margin-bottom: 15px;
                            p {
                                margin: 0 0 10px;
                                color: #1686cc;
                                cursor: default;
                                font-weight: bold;
                                font-size: 14px;
                                &.canClick{
                                    cursor: pointer;
                                    &:hover{
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
                                    height: 20px;
                                    line-height: 20px;
                                    font-size: 12px;
                                    &:hover{
                                        color: #ff7419;
                                        text-decoration: underline;
                                    }
                                }
                            }
                        }
                    }
                    .control {
                        margin: 0 0 10px 20px;
                        color: #1686cc;
                        cursor: pointer;
                        font-size: 14px;
                        span{
                            &::before{
                                content: ' ';
                                display: inline-block;
                                padding: 6px 10px;
                                vertical-align: middle;
                                background: url('../../../../static/image/ico-arrow.png') center/contain no-repeat;
                            }
                        }
                        .viewMore{
                            &::before{
                                transform: rotate(180deg);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
<style lang='scss'>
.home {
    .el-select .el-input {
        width: 130px;
        color: #000;
    }
    .el-input-group__append,
    .el-input-group__prepend {
        background: #fff;
    }
    .carousel {
        img {
            width: 100%;
        }
    }
}
</style>
