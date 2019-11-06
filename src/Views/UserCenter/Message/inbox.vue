<template>
<div class="user-outbox">
    <h2>{{$t('tabel.InBox')}}</h2>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item :label="$t('tabel.Fair')" v-if="lan == 'zh'">
                <el-input v-model="form.Title" :placeholder="$t('text.input')+ $t('tabel.Fair')+$t('text.here')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('tabel.CompanyName')">
                <el-input v-model="form.SupplyName" :placeholder="$t('text.input')+ $t('tabel.CompanyName')+$t('text.here')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('tabel.Status')">
                <el-select v-model="form.IsRead" :placeholder="$t('text.input')+ $t('tabel.Status')+$t('text.here')">
                    <el-option :label="$t('tabel.Read')" value="1"></el-option>
                    <el-option :label="$t('tabel.UnRead')" value="0"></el-option>
                    <el-option :label="$t('tabel.Replied')" value="2"></el-option>
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
            <el-table-column type="index" :label="$t('tabel.Row')" width="">
            </el-table-column>
            <el-table-column :label="$t('tabel.Fair')" width="">
                <template slot-scope="scope">
                    {{scope.row.Title}}
                </template>
            </el-table-column>
            <el-table-column prop="Subject" :label="$t('tabel.Subject')" width="">
            </el-table-column>
            <el-table-column :label="$t('tabel.Date')" width="">
                <template slot-scope="scope">
                    <span>{{scope.row.AddTime.split('T')[0]}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="SupplyName" :label="$t('tabel.CompanyName')" width="">
            </el-table-column>
            <el-table-column :label="$t('tabel.Status')" width="">
                <template slot-scope="scope">
                    <span v-if="scope.row.IsRead==1">{{$t('tabel.Read')}}</span>
                    <span v-if="scope.row.IsRead==0">{{$t('tabel.UnRead')}}</span>
                    <span v-if="scope.row.IsRead==2">{{$t('tabel.Replied')}}</span>
                </template>
            </el-table-column>
            <el-table-column fixed="right" :label="$t('tabel.Action')" width="100">
                <template slot-scope="scope">
                    <el-button @click="replyData(scope.row)" type="text" size="small">{{$t('tabel.Replay')}}</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="page-footer">
            <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="size" :current-page.sync="page" :total="pageCount">
            </el-pagination>
        </div>
    </div>
</div>
</template>

<script>
import {
    getFromMessage
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

        getFromMessage({
                page: this.page,
                size: this.size,
                Title: this.$route.query.title || '',
                SupplyName: this.$route.query.supplyName || '',
                IsRead: this.$route.query.isRead || ''
            })
            .then(result => {
                this.tableData = result.data
                this.pageCount = result.count
                this.page = Number(this.$route.query.page)
                this.loading = false
            })
    },
    methods: {
        replyData(item) {
            this.$router.push('/user/replyMessage?id=' + item.ID + '&type=from&companyName=' + item.SupplyName + '&To=' + item.UserFrom)
        },
        nextSearch() {
            this.$router.push('/user/inbox?title=' + (this.form.Title || '') + '&supplyName=' + (this.form.SupplyName || '') + '&isRead=' + (this.form.IsRead || ''))
        },
        handleCurrentChange(val) {
            this.$router.push('/user/inbox?title=' + (this.form.Title || '') + '&supplyName=' + (this.form.SupplyName || '') + '&isRead=' + (this.form.IsRead || '') + '&page=' + val)
        }
    },
    watch: {
        '$route'() {
            this.loading = true
            getFromMessage({
                    page: Number(this.$route.query.page),
                    size: this.size,
                    Title: this.$route.query.title || '',
                    SupplyName: this.$route.query.supplyName || '',
                    IsRead: this.$route.query.isRead || ''
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
.user-outbox {
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
