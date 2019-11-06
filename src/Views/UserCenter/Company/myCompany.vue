<template>
<div class="user-myProduct">
    <h2>{{$t('tabel.AllCompany')}}</h2>
    <el-form ref="form" :model="form" label-width="100px" v-if="lan == 'zh'">
        <el-form-item :label="$t('tabel.Fair')">
            <el-input v-model="form.Title" :placeholder="$t('text.input')+ $t('tabel.Fair')+$t('text.here')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('tabel.CompanyID')">
            <el-input v-model="form.ID" :placeholder="$t('text.input')+ $t('tabel.CompanyID')+$t('text.here')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('tabel.AllStatus')">
            <el-select v-model="form.IsCheck" :placeholder="$t('text.choose')+ $t('tabel.AllStatus')+$t('text.here')">
                <el-option :label="$t('tabel.AllPass')" value=""></el-option>
                <el-option :label="$t('tabel.pass')" value="1"></el-option>
                <el-option :label="$t('tabel.Notpass')" value="7"></el-option>
                <el-option :label="$t('tabel.confirmed')" value="0"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="nextSearch">Search</el-button>
        </el-form-item>
    </el-form>
    <el-table v-loading="loading" :data="tableData">
        <template slot="empty">
            {{$t('tabel.Nodata')}}
        </template>
        <el-table-column type="index" :label="$t('tabel.Row')" width="80">
        </el-table-column>
        <el-table-column :label="$t('tabel.Fair')" width="">
            <template slot-scope="scope">
                {{scope.row.Title}}
            </template>
        </el-table-column>
        <el-table-column :label="$t('tabel.CompanyID')" width="">
            <template slot-scope="scope">
                {{scope.row.ModiID || scope.row.ID}}
            </template>
        </el-table-column>
        <el-table-column prop="Name" :label="$t('tabel.CompanyName')" width="">
        </el-table-column>
        <el-table-column :label="$t('tabel.AllStatus')" width="">
            <template slot-scope="scope">
                <span v-if="scope.row.IsCheck==1">{{$t('tabel.pass')}}</span>
                <span v-if="scope.row.IsCheck==0">{{$t('tabel.confirmed')}}</span>
                <span v-if="scope.row.IsCheck==7">{{$t('tabel.Notpass')}}-{{scope.row.CheckInfo}}</span>
            </template>
        </el-table-column>
        <el-table-column fixed="right" :label="$t('tabel.Action')" width="150">
            <template slot-scope="scope">
                <el-button @click="editData(scope.row)" type="text" size="small">{{$t('tabel.Edit')}}</el-button>
                <el-button type="text" size="small" @click="deleteData(scope.row)">{{$t('tabel.Delete')}}</el-button>
                <el-button type="text" size="small" @click="copy(scope.row)">{{$t('tabel.copy')}}</el-button>
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
    getSupplyList,
    deleteCompany
} from "@/assets/api/api";
import Util from "@/assets/service/customUtil";

export default {
    data() {
        return {
            form: {
                Title: '',
                ID: '',
                IsCheck: ''
            },
            loading: true,
            tableData: [],
            page: Number(this.$route.query.page) || 1,
            size: 10,
            pageCount: 100
        }
    },
    created() {
        this.lan = Util.getsessionStorage('lang')

        getSupplyList({
                page: this.page,
                size: this.size,
                Title: this.$route.query.title || '',
                ID: this.$route.query.id || '',
                IsCheck: this.$route.query.isCheck || ''
            })
            .then(result => {
                this.tableData = result.data
                this.pageCount = result.count
                this.page = Number(this.$route.query.page)
                this.loading = false
            })
    },
    methods: {
        deleteData(row) {
            this.$confirm(this.$t('prompt.deleteTips'), this.$t('prompt.prompt'), {
                confirmButtonText: this.$t('prompt.determine'),
                cancelButtonText: this.$t('prompt.cancel'),
                type: 'warning'
            }).then(() => {
                deleteCompany({
                    id: row.ID
                })
                this.tableData.map((item,index)=>{
                    if(item.ID == row.ID){
                        this.tableData.splice(index,1)
                    }
                })

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: this.$t('prompt.cancelMessage')
                });
            });
        },
        editData(row) {
            this.$router.push('/user/editCompany?id=' + row.ID)
        },
        copy(row) {
            this.$router.push('/user/copy?id=' + row.ID + '&type=company')
        },
        nextSearch() {
            this.$router.push('/user/myCompany?title=' + this.form.Title + '&id=' + this.form.ID + '&isCheck=' + this.form.IsCheck)
        },
        handleCurrentChange(val) {
            this.$router.push('/user/myCompany?title=' + this.form.Title + '&id=' + this.form.ID + '&isCheck=' + this.form.IsCheck + '&page=' + val)
        }
    },
    watch: {
        '$route'() {
            this.loading = true
            getSupplyList({
                    page: Number(this.$route.query.page),
                    size: this.size,
                    Title: this.$route.query.title,
                    ID: this.$route.query.id,
                    IsCheck: this.$route.query.isCheck
                })
                .then(result => {
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
            width: calc(25% - 20px);
            float: left;
            margin: 10px;
        }
    }
}
</style>
