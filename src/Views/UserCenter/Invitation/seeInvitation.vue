<template>
<div class="seeInvitation">
    <h2>{{$route.query.type=='from'?$t('tabel.MeetSupplier'):$t('tabel.MeetSupplier2')}}</h2>
    <el-form ref="form" :model="form">
        <el-form-item :label="$t('tabel.CompanyName')+' :'">
            <!-- <span v-html="form.SupplyName"></span> -->
            <span>{{form.SupplyName}}</span>
        </el-form-item>
        <el-form-item :label="$t('tabel.Subject')+' :'">
            <span>{{form.Subject}}</span>
        </el-form-item>
        <el-form-item :label="$t('tabel.MeetingTime')+' :'">
            <span>{{form.Time | dateTime}}</span>
        </el-form-item>
        <el-form-item :label="$t('tabel.MeetingPlace')+' :'">
            <span>{{form.Place}}</span>
        </el-form-item>
        <el-form-item :label="$t('tabel.Remark')+' :'">
            <span v-html="form.Remark"></span>
        </el-form-item>
        <el-form-item :label="$t('tabel.MyRemark')" prop="Remark">
            <span>{{form.ReRemark}}</span>
        </el-form-item>
        <el-form-item :label="$t('tabel.Status')+' :'">
            <span v-if="form.IsReplay == 0">{{$t('tabel.Unanswered')}}</span>
            <span v-if="form.IsReplay == 1">{{$t('tabel.agree')}}</span>
            <span v-if="form.IsReplay == 2">{{$t('tabel.refuse')}}</span>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="back">{{$t('form.back')}}</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {
    B2BgetMeet
} from "@/assets/api/api";

export default {
    name: "Invitation",
    data() {
        return {
            input1: '',
            textarea2: '',
            form: {
                Subject: '',
                Time: '',
                Place: '',
                Remark: '',
                UserTo: this.$route.query.id
            }
        }
    },
    created() {
        B2BgetMeet({
                id: this.$route.query.id,
                type: this.$route.query.type
            })
            .then(result => {
                this.form = result.data[0]
            })
    },
    methods: {
        back() {
            this.$router.back()
        }
    }
}
</script>

<style scoped lang="scss">
.seeInvitation {
    overflow: hidden;
    width: 100%;
    h2 {
        text-align: center;
        line-height: 60px;
        margin: 5px;
        background: #fff;
    }
    .el-form {
        background: #fff;
        overflow: hidden;
        width: 100%;
        margin: 5px;
        .el-input {
            width: 560px;
        }
        .el-form-item {
            margin: 20px 200px;
        }
        .el-form-item:last-child {
            margin: 20px;
        }
    }
    .el-button {
        width: 280px;
        margin-left: 180px;
    }
}
</style>
<style lang="scss">
.seeInvitation {
    .el-form-item__label {
        width: 150px !important;
    }
    .el-input,
    .el-input__inner,
    .el-textarea {
        width: 280px;
    }
    .el-form-item__content {
        margin-left: 150px !important;
    }
    .el-input-group__append,
    .el-input-group__prepend {
        border: none;
        background: none;
    }
    .el-radio-group {
        width: 200px !important;
        .el-input,
        .el-input__inner,
        .el-textarea {
            width: 215px;
            margin: 5px 0;
        }
    }
}
</style>
