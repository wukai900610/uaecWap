<template>
<div class="user-myProduct">
    <h2>{{$t('tabel.AllProduct')}}</h2>
    <div>
        <el-form ref="form" :model="form" label-width="130px">
            <el-form-item :label="$t('tabel.Fair')" v-if="lan == 'zh'">
                <el-input v-model="form.Title" :placeholder="$t('text.input')+ $t('tabel.Fair')+$t('text.here')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('tabel.ProductID')">
                <el-input v-model="form.ID" :placeholder="$t('text.input')+ $t('tabel.ProductID')+$t('text.here')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('tabel.ProductName')">
                <el-input v-model="form.Name" :placeholder="$t('text.input')+ $t('tabel.ProductName')+$t('text.here')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('tabel.ProductsCategory')">
                <el-select v-model="form.CatelogID" :placeholder="$t('text.input')+ $t('tabel.ProductsCategory')+$t('text.here')">
                    <el-option v-for="item in categoryData" :label="item.Name" :value="item.ID" :key="item.ID"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('tabel.AllStatus')">
                <el-select v-model="form.IsCheck" :placeholder="$t('text.input')+ $t('tabel.AllStatus')+$t('text.here')">
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
        <el-table-column prop="CategoryName" :label="$t('tabel.ProductsCategory')" width="">
        </el-table-column>
        <el-table-column :label="$t('tabel.ProductID')" width="">
            <template slot-scope="scope">
                {{scope.row.ModiID || scope.row.ID}}
            </template>
        </el-table-column>
        <el-table-column prop="Name" :label="$t('tabel.ProductName')" width="">
        </el-table-column>
        <el-table-column :label="$t('tabel.AllStatus')" width="">
            <template slot-scope="scope">
                <span v-if="scope.row.IsCheck==1">{{$t('tabel.pass')}}</span>
                <span v-if="scope.row.IsCheck==0">{{$t('tabel.confirmed')}}</span>
                <span v-if="scope.row.IsCheck==7">{{$t('tabel.Notpass')}}-{{scope.row.CheckInfo}}</span>
            </template>
        </el-table-column>
        <el-table-column fixed="right" :label="$t('tabel.Action')" width="130">
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
    getmyList,
    deleteProduct,
    productB2BCategory
} from "@/assets/api/api";
import Util from "@/assets/service/customUtil";

export default {
    data() {
        return {
            form: {
                Title: '',
                ID: '',
                IsCheck: '',
                CatelogID: '',
                Name: ''
            },
            loading: true,
            tableData: [],
            categoryData: [],
            page: Number(this.$route.query.page) || 1,
            size: 10,
            pageCount: 100
        }
    },
    created() {
        this.lan = Util.getsessionStorage('lang')

        getmyList({
                page: this.page,
                size: this.size,
                Title: this.$route.query.title || '',
                ID: this.$route.query.id || '',
                IsCheck: this.$route.query.isCheck || '',
                CatelogID: this.$route.query.catelogID || '',
                Name: this.$route.query.name || ''
            })
            .then(result => {
                this.tableData = result.data
                this.pageCount = result.count
                this.page = Number(this.$route.query.page)
            })
            .then(_ => {
                productB2BCategory()
                    .then(result => {
                        console.log(result)
                        this.categoryData = result.data
                        this.loading = false
                    })
            })
    },
    methods: {
        deleteData(row) {
            this.$confirm(this.$t('prompt.delete'), this.$t('prompt.prompt'), {
                confirmButtonText: this.$t('prompt.determine'),
                cancelButtonText: this.$t('prompt.cancel'),
                type: 'warning'
            }).then(() => {
                deleteProduct({
                    id: row.ID
                }).then(()=>{
                    this.tableData.map((item,index)=>{
                        if(item.ID == row.ID){
                            this.tableData.splice(index,1)
                        }
                    })
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: this.$t('prompt.cancelMessage')
                });
            });
        },
        nextSearch() {
            this.$router.push('/user/myProduct?title=' + this.form.Title + '&id=' + this.form.ID + '&isCheck=' + this.form.IsCheck + '&catelogID=' + this.form.CatelogID + '&name=' + this.form.Name)
        },
        editData(row) {
            this.$router.push('/user/editProduct?id=' + row.ID)
        },
        copy(row) {
            this.$router.push('/user/copy?id=' + row.ID + '&type=product')
        },
        handleCurrentChange(val) {
            this.$router.push('/user/myProduct?title=' + this.form.Title + '&id=' + this.form.ID + '&isCheck=' + this.form.IsCheck + '&page=' + val)
        }
    },
    watch: {
        '$route'() {
            this.loading = true
            getmyList({
                    page: Number(this.$route.query.page),
                    size: this.size,
                    Title: this.$route.query.title || '',
                    ID: this.$route.query.id || '',
                    IsCheck: this.$route.query.isCheck || '',
                    CatelogID: this.$route.query.catelogID || '',
                    Name: this.$route.query.name || ''
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
            width: calc(33.33% - 20px);
            float: left;
            margin: 10px;
        }
    }
}
</style>
