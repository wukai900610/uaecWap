<template>
<div class="replyInvitation">
    <h2>{{$t('tabel.Replay')}}</h2>
    <el-form ref="form" :model="form" :rules="rules">
        <el-form-item :label="$t('tabel.CompanyName')">
            <span>{{form.SupplyName}}</span>
        </el-form-item>
        <el-form-item :label="$t('tabel.Subject')">
            <span>{{form.Subject}}</span>
        </el-form-item>
        <el-form-item :label="$t('tabel.MeetingTime')">
            <span>{{form.Time | dateTime}}</span>
        </el-form-item>
        <el-form-item :label="$t('tabel.MeetingPlace')">
            <span>{{form.Place}}</span>
        </el-form-item>
        <el-form-item :label="$t('tabel.Remark')">
            <span>{{form.Remark}}</span>
        </el-form-item>
        <el-form-item :label="$t('tabel.MyRemark')" prop="ReRemark">
            <el-input type="textarea" v-model="form.ReRemark"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit(1)">{{$t('form.confirm')}}</el-button>
            <el-button type="primary" @click="onSubmit(9)">{{$t('form.cancel')}}</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {
    B2BgetMeet,
    putMeetSupplier
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
            },
            rules: {
                ReRemark: [{
                    required: true,
                    message: this.$t('text.input') + this.$t('tabel.MyRemark') + this.$t('text.here'),
                    trigger: 'blur'
                }],
            },
            formTo: {}
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
        onSubmit(flag) {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.form['IsReplay'] = flag
                    putMeetSupplier(this.form)
                        .then(result => {
                            this.$router.push('/user/pendingInvitation')
                        })
                }
            });
        }
    }
}
</script>

<style scoped lang="scss">
.replyInvitation {
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
        width: 133px;
        margin-left: 180px;
    }
    .el-button:last-child {
        margin-left: 10px;
    }
}
</style>
<style lang="scss">
.replyInvitation {
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
