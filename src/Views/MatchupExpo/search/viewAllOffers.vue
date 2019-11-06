<template>
  <div class="view-wrap">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/MatchupExpo' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/MatchupExpo/search?section=0&key=' }">Company</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/MatchupExpo/search/view?id='+$route.query.id+'&type=supply' }">{{$route.query.name}}</el-breadcrumb-item>
        <el-breadcrumb-item>All Offers</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h2 v-html="$route.query.name"></h2>
    <div class="search-view-item" v-for="(item,index) in classData"    @click="nextSearchView(item)">
      <div class="search-view-item-left">
        <img  :src="item.Img" alt="">
      </div>
      <div class="search-view-item-right">
        <div class="search-view-item-product">
          <div class="search-view-item-product-view">
            <p v-html="item.Name" class="line1"></p>
          </div>
          <p class="search-view-item-product-view-description line1" v-html="item.Description"></p>
        </div>
        <div>
          <p class="line1" v-if="$route.query.type!='supply'"><span>Company:</span>{{item.SupplyName}}</p>
        </div>
        <div class="xl-over" style="display: flex;">
          <p><span>Type</span>:{{item.Kind=='0'?'Buy':'cooperation'}}</p>
          <p class="xl-left">Role:{{item.IsExhibitor==0?'Visitors':'Exhibitors'}}</p>
          <p class="xl-left" v-if="item.IsExhibitor==1"><span>Booth</span>:{{item.BoothNum}}</p>
        </div>
        <div class="search-view-item-right-p">
          <p><span>Mobile phone</span>:{{item.ManPhone}}</p>
          <p><span>Contact Person</span>:{{item.ManName}}</p>
          <p><span>Website</span>:{{item.WebSite}}</p>
          <p><span>{{item.ManWeChat?'WeChat':item.ManFacebook?'FaceBook':'Whatsapp'}}</span>:{{item.ManWeChat || item.ManFacebook || item.ManWhatsapp}}</p>
        </div>
        <div>
          <el-button @click.stop="nextContact(item)"  type="primary">Contact Company</el-button>
          <el-button @click.stop="nextInvitation(item)"  type="primary">Meet Company</el-button>
        </div>
      </div>
    </div>
    <div  class="search-view-item" v-if="pageCount == 0">
      <div  id="none"><img src="/static/image/none.png" alt=""></div>
    </div>
  </div>
</template>

<script>
  import { getAllOffer } from "@/assets/api/api";
    export default {
        name: "viewAllOffers",
      data(){
          return{
            classData:{},
            pageCount:1
          }
      },
      created() {
        getAllOffer({SupplyID:this.$route.query.id,page:0,size:10})
          .then(result=>{
            this.classData = result.data
            this.pageCount = result.data.length
            console.log(result)
          })
      },
      methods:{
        nextInvitation(item){
          console.log(item)
          this.$router.push('/MatchupExpo/Invitation?id='+item.UserID+'&Booth='+item.BoothNum)
        },
        nextContact(item){
          this.$router.push('/MatchupExpo/contact?id='+item.UserID)
        },
        nextSearchView(item){
          this.$router.push('/MatchupExpo/search/view?id='+item.ID+'&type=offer')
        },
      }
    }
</script>

<style scoped lang="scss">
  .view-wrap{
    background:rgba(245,245,245,1);
    width: 100%;
    overflow: hidden;
    h2{
      text-align: center;
    }
    .search-view-item{
      width: 1200px;
      margin: 0 auto;
      background-color: #fff;
      overflow: hidden;
      height: 325px;
      border-bottom: 2px solid rgba(224,224,224,1);
      .search-view-item-left{
        float: left;
        width: 325px;
        line-height: 325px;
        text-align: center;
        img{
          width:300px;
          height:300px;
          vertical-align: middle;
        }
      }
      .search-view-item-right{
        float: left;
        width: calc(100% - 560px);
        .search-view-item-product{
          border-bottom:1px dashed  rgba(224,224,224,1);
          width: 100%;
          overflow: hidden;
          .search-view-item-product-view{
            overflow: hidden;
            p{
              width: 30%;
              float: left;
              margin: 13px 0 15px 0 ;
              line-height: 30px;
            }
            p:nth-child(1){
              font-size:24px;
              width: 100%;
              color:rgba(51,51,51,1);
            }
          }

        }
        .search-view-item-supply{
          p:nth-child(3){
            border-bottom:1px dashed  rgba(224,224,224,1);
            min-height: 35px;
          }
        }
        .search-view-item-right-p{
          width: 100%;
          position: relative;
          min-height: 55px;
          p{
            float: left;
            width: 50%;
          }
        }
        p{
          margin: 10px 0px;
          font-size:16px;
          color: #000;
          span{
            color: rgba(102,102,102,1);
          }
        }
        h3{
          margin:35.5px 0px 15px 0px;
          font-size:24px;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
        .el-button{
          margin: 17px 30px 15px 0px;
          width:230px;
          height:45px;
        }
        .el-button:nth-child(2){
          background:rgba(245,245,245,1);
          border:1px solid rgba(206,211,217,1);
          color:rgba(51,51,51,1);
          margin: 15px 30px;
        }
      }
      .xl-over{
        p{
          width: 50%;
        }
      }
    }
    .search-view-content{
      width: 1200px;
      margin: 0 auto;
      min-height: 550px;
      border-left: 1px solid rgba(224,224,224,1);
      border-right: 1px solid rgba(224,224,224,1);
      border-bottom: 1px solid rgba(224,224,224,1);
      margin-bottom: 30px;
      background-color: #fff;
      h4{
        color: #A06C13;
        font-size:18px;
        margin: 0;
        padding: 15px 0;
      }
      p{
        font-size:18px;
        color:rgba(51,51,51,1);
        line-height:31px;
      }
    }
  }
</style>
