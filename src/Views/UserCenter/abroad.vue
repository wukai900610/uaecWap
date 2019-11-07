<template>
<Layout :title="lan == 'en' ? 'Self-run Exhibition Projects' : '联亚国际自办展报名'">
    <div class="abroad">
        <van-cell-group>
            <van-field :value="form.username" required label="用户名" placeholder="请输入用户名" clickable error-message="手机号格式错误" />

            <van-field :value="form.password" type="password" required label="密码" placeholder="请输入密码" clickable />
        </van-cell-group>
    </div>

    <!-- <el-table v-loading="loading" :data="tableData.from">
        <template slot="empty">
            {{$t('tabel.Nodata')}}
        </template>
        <el-table-column type="index" :label="$t('tabel.Row')" width="60">
        </el-table-column>
        <el-table-column prop="UserID" label="Registration code" v-if="isNiCode && lan == 'en'" width="155">
        </el-table-column>
        <el-table-column :label="$t('form.CompanyName')" width="">
            <template slot-scope="scope">
                <div>
                    {{scope.row.Company}}
                </div>
            </template>
        </el-table-column>
        <el-table-column :label="$t('tabel.role')" width="">
            <template slot-scope="scope">
                {{scope.row.IsExhibitor == 1?$t('tabel.Exhibitors'):$t('tabel.Visitors')}}
            </template>
        </el-table-column>
        <el-table-column prop="ExpoName" :label="$t('tabel.shows')" width="">
        </el-table-column>
        <el-table-column prop="ManName" :label="$t('form.ContactPerson')" width="">
            <template slot-scope="scope">
                <div v-if="scope.row.ManName">
                    {{scope.row.ManName}}
                </div>
                <div v-else>
                    {{scope.row.ManFirstName}}
                    {{scope.row.ManLastName}}
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="ManMobile" :label="$t('footer.tel')" width="">
            <template slot-scope="scope">
                {{scope.row.ManMobileCountryCode ? scope.row.ManMobileCountryCode+'-'+scope.row.ManMobile: scope.row.ManMobile}}
            </template>
        </el-table-column>
        <el-table-column fixed="right" :label="$t('tabel.Action')" width="100">
            <template slot-scope="scope">
                <el-button @click="editData(scope.row)" type="text" size="small">{{$t('tabel.Edit')}}</el-button>
            </template>
        </el-table-column>
    </el-table> -->
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
            tableData: [],
            loading: true,
            lan: Util.getsessionStorage('lang'),
            isNiCode: Util.isNiCode(),
            form: {
                username: '',
                password: '',
            }
        }
    },
    created() {
        customRequest({
            method: 'get',
            url: '/WebProduct/GetMyList',
        }).then(result => {
            this.tableData = result.data
        }).finally(() => {
            this.loading = false
        })
    },
    methods: {
        submit() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    // ...
                }
            })
        }
        // editData(item) {
        //     if (item.Lan == 'en') {
        //         this.$router.push('/User/putEnExhibitors?title=' + item.ExpoName + '&code=' + item.Code + '&isExhibitor=' + item.IsExhibitor + '&id=' + item.ID)
        //     } else {
        //         if (item.IsExhibitor == 0) {
        //             this.$router.push('/User/VisitorEdit?code=' + item.Code + '&id=' + item.ID)
        //         } else {
        //             this.$router.push('/User/ExhibitorEdit?code=' + item.Code + '&id=' + item.ID)
        //         }
        //     }
        // },
    },
    watch: {
        // '$i18n.locale'() {
        //     if (this.$i18n.locale == 'en') {
        //     }
        // }
    }
}
</script>

<style scoped lang="scss">
.user-home {
    margin: 5px;

    .tabel-view {
        margin: 5px 0;
        p {
            height: 70px;
            background: rgba(255,255,255,1);
            line-height: 70px;
            margin: 0;
            border-bottom: 1px solid rgba(224,224,224,1);
            text-indent: 20px;
        }
    }
}
</style>
