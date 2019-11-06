<template>
<div class="Invitation warp">
    <h2>Meet Company</h2>
    <el-form ref="form" :rules="rules" :model="form" label-width="150px">
        <el-form-item label="Subject" prop="Subject">
            <el-input v-model="form.Subject"></el-input>
        </el-form-item>
        <el-form-item label="Meeting Time" prop="time" class="is-required">
            <el-row>
                <el-col :span="11">
                     <!-- value-format="MM/dd/yyyy" -->
                    <el-date-picker v-model="form.date" format="MM/dd/yyyy" :value-format="'yyyy/MM/dd'" :default-value="pickerOptions.defaultTime" type="date" :picker-options="pickerOptions" placeholder="mm/dd/yyyy" align="right">
                    </el-date-picker>
                </el-col>
                <el-col :span="2"> &nbsp;</el-col>
                <el-col :span="11">
                    <el-time-select v-model="form.time" :picker-options="timeSelectOptions" placeholder="hh:mm">
                    </el-time-select>
                </el-col>
            </el-row>
        </el-form-item>
        <el-form-item label="Meeting place" prop="Place">
            <el-select v-model="form.Place" placeholder="请选择">
                <el-option :label="$route.query.Booth+'Booth'" :value="$route.query.Booth+'Booth'">
                </el-option>
                <el-option label="Other place " value="1">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="Other place" prop="Place">
            <el-input v-model="Place" :disabled="form.Place!=1"></el-input>
        </el-form-item>
        <el-form-item label="Remark">
            <el-input type="textarea" v-model="form.Remark"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {
    postMeetSupplier,
    getSupplier
} from "@/assets/api/api";
import Util from "@/assets/service/customUtil";

export default {
    name: "index",
    data() {
        return {
            input1: '',
            textarea2: '',
            Place: '',
            PlaceFlag: 1,
            pickerOptions: {
                defaultTime: Util.getCurrentHostInfo().time[0],
                start: '08:30:00',
                step: '00:15:00',
                end: '18:30:00',
                disabledDate(time) {
                    // let startTime = Util.getCurrentHostInfo().time[0]
                    let endTime = Util.getCurrentHostInfo().time[1]
                    if (time.getTime() < new Date('2019-11-03').getTime()) {
                        return true;
                    }
                    if (time.getTime() > new Date(endTime).getTime()) {
                        return true;
                    }
                    return false;
                }
            },
            timeSelectOptions:{
                start: '09:30',
                step: '00:20',
                end: '17:30'
            },
            form: {
                Subject: '',
                date: '',
                time: '',
                Place: this.$route.query.Booth + 'Booth',
                Remark: '',
                UserTo: this.$route.query.id,
            },
            rules: {
                Subject: [{
                        required: true,
                        message: 'Subject is required!',
                        trigger: 'blur'
                    },
                    {
                        max: 200,
                        message: ' No more than 200 characters',
                        trigger: 'blur'
                    }
                ],
                time: {
                    validator: (rule, value, callback) => {
                        if (!this.form.date) {
                            callback(new Error('date is required!'));
                        }else if (!this.form.time) {
                            callback(new Error('time is required!'));
                        } else {
                            callback();
                        }
                    },
                    trigger: ['change','blur']
                },
            }
        }
    },
    created() {
        if (this.$i18n.locale = 'es') {
            this.$i18n.locale = 'en'
            Util.setsessionStorage('lang','en')
        }
    },
    methods: {
        onSubmit() {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    if (this.form.Place == '1') {
                        this.form.Place = this.Place
                    }
                    this.form.time = this.form.date + ' ' + this.form.time

                    postMeetSupplier(this.form)
                        .then(result => {
                            this.$message({
                                message: this.$t('prompt.title'),
                                type: 'success'
                            })
                            this.$router.push('/user/activeInvitation')
                        })
                        .catch(_ => {})
                }
            });
        }
    },
    watch: {
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
.Invitation {
    width: 1200px;
    margin: 70px auto;
    h2 {
        text-align: center;
        margin: 70px 0;
    }
    .el-form {
        margin: 0 auto;
        width: 560px;
    }

    .el-date-editor.el-input, .el-date-editor.el-input__inner{
        width: auto;
    }
}
</style>
<style lang="scss">
// .Invitation {
//     .el-input__inner,
//     .el-textarea {
//         width: 560px;
//     }
//     .el-form-item__label {
//         width: 150px !important;
//     }
//     .el-form-item__error {
//         left: 70px;
//     }
// }
</style>
