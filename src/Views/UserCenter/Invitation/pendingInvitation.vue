<template>
<div class="user-myProduct">
    <h2>{{$t('tabel.New')}}</h2>
    <div>
        <el-form ref="form" :model="form" label-width="130px">
            <el-form-item :label="$t('tabel.Fair')" v-if="lan == 'zh'">
                <el-input v-model="form.Title" :placeholder="$t('text.input')+ $t('tabel.Fair')+$t('text.here')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('tabel.CompanyName')">
                <el-input v-model="form.SupplyName" :placeholder="$t('text.input')+ $t('tabel.CompanyName')+$t('text.here')"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="nextSearch">Search</el-button>
            </el-form-item>
        </el-form>
    </div>
    <el-table v-loading="loading" :data="tableData">
        <template slot="empty">
            {{$t('tabel.Nodata')}}
        </template>
        <el-table-column type="index" :label="$t('tabel.Row')" width="60">
        </el-table-column>
        <el-table-column :label="$t('tabel.Fair')" width="">
            <template slot-scope="scope">
                {{scope.row.Title}}
            </template>
        </el-table-column>
        <el-table-column :label="$t('tabel.Date')" width="">
            <template slot-scope="scope">
                <span>{{scope.row.Time.split('T')[0]}}</span>
            </template>
        </el-table-column>
        <el-table-column prop="SupplyName" :label="$t('tabel.Subject')" width="">
            <template slot-scope="scope">
                <!-- {{scope.row.SupplyName?scope.row.SupplyName:$t('tabel.companyP')}} -->
                {{scope.row.Subject}}
            </template>
        </el-table-column>
        <el-table-column fixed="right" :label="$t('tabel.Action')" width="100">
            <template slot-scope="scope">
                <el-button @click="replyData(scope.row)" type="text" size="small"><span>{{$t('tabel.Replay')}}</span></el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="page-footer">
        <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="size" :current-page.sync="page" :total="pageCount">
        </el-pagination>
    </div>
</div>
</template>

<script>
import {
    B2BFromMeet
} from "@/assets/api/api";
import Util from "@/assets/service/customUtil";

export default {
    data() {
        return {
            form: {},
            tableData: [],
            page: Number(this.$route.query.page) || 1,
            size: 10,
            pageCount: 0,
            loading: true
        }
    },
    created() {
        this.lan = Util.getsessionStorage('lang')

        B2BFromMeet({
                page: this.page,
                size: this.size,
                Title: this.$route.query.title || '',
                SupplyName: this.$route.query.supplyName || '',
                IsReplay: 0
            })
            .then(result => {
                this.tableData = result.data
                this.page = Number(this.$route.query.page)
                this.pageCount = result.count
                this.loading = false
            })
    },
    methods: {
        replyData(item) {
            this.$router.push('/user/replyInvitation?id=' + item.ID + '&type=from')
        },
        nextSearch() {
            this.$router.push('/user/pendingInvitation?title=' + (this.form.Title || '') + '&supplyName=' + (this.form.SupplyName || ''))
        },
        handleCurrentChange(val) {
            this.$router.push('/user/pendingInvitation?title=' + (this.form.Title || '') + '&supplyName=' + (this.form.SupplyName || '') + '&page=' + val)
        }
    },
    watch: {
        '$route'() {
            this.loading = true
            B2BFromMeet({
                    page: Number(this.$route.query.page),
                    size: this.size,
                    Title: this.$route.query.title || '',
                    SupplyName: this.$route.query.supplyName || '',
                    IsReplay: 0
                })
                .then(result => {
                    console.log(result)
                    this.tableData = result.data
                    this.page = Number(this.$route.query.page)
                    this.pageCount = result.count
                    this.loading = false
                })
        }
    }
}
</script>

<style scoped lang="scss">
.user-myProduct {
    margin: 5px;
    h2 {
        text-align: center;
        background: #fff;
        width: 100%;
        line-height: 60px;
        margin: 5px 0;
    }
    .el-form {
        width: 100%;
        background: rgba(255,255,255,1);
        overflow: hidden;
        .el-form-item {
            width: calc(33.333% - 20px);
            float: left;
            margin: 10px;
        }
    }
}
</style>
