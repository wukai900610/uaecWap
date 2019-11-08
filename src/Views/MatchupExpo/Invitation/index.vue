<template>
<Layout title="Meet Company">
    <div class="invitation">
        <van-cell-group>
            <van-field v-model="form.subject" label="Subject" placeholder="Subject" />
            <van-dropdown-menu class="searchMenu">
                <van-dropdown-item v-model="dropdownList.value" :options="dropdownList.data" />
            </van-dropdown-menu>
            <!-- <van-field v-model="form.place" :disabled="form.Place != 1" label="Subject" placeholder="Subject" /> -->
            <van-field v-model="form.remark" rows="2" autosize label="Remark" type="textarea" maxlength="500" placeholder="Remark" show-word-limit />
        </van-cell-group>
    </div>

    <van-action-sheet v-model="date.show">
        <van-datetime-picker v-model="date.currentDate" type="datetime" :min-date="date.startTime" :max-date="date.endTime" @cancel="onCancel" @confirm="onConfirm" @change="onChange" />
    </van-action-sheet>
</Layout>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

import Layout from "@/components/Layout";
// 未完成
export default {
    components: {
        Layout,
    },
    data() {
        return {
            date: {
                show: true,
                currentDate: new Date('2019/11/03'),
                startTime: new Date('2019/11/03'),
                endTime: new Date(Util.getCurrentHostInfo().time[1])
            },
            // Place: '',
            // PlaceFlag: 1,
            // pickerOptions: {
            //     defaultTime: Util.getCurrentHostInfo().time[0],
            //     start: '08:30:00',
            //     step: '00:15:00',
            //     end: '18:30:00',
            //     disabledDate(time) {
            //         // let startTime = Util.getCurrentHostInfo().time[0]
            //         let endTime = Util.getCurrentHostInfo().time[1]
            //         if (time.getTime() < new Date('2019-11-03').getTime()) {
            //             return true;
            //         }
            //         if (time.getTime() > new Date(endTime).getTime()) {
            //             return true;
            //         }
            //         return false;
            //     }
            // },
            // timeSelectOptions: {
            //     start: '09:30',
            //     step: '00:20',
            //     end: '17:30'
            // },
            dropdownList: {
                value: 1,
                data: [{
                        text: 'Other Place',
                        value: '1'
                    },
                    {
                        text: (this.$route.query.Booth || '') + 'Booth',
                        value: '2'
                    }
                ]
            },
            form: {
                subject: '',
                date: '',
                time: '',
                // place: this.dropdownList.value,
                remark: '',
                userTo: this.$route.query.id,
            },
            // rules: {
            //     Subject: [{
            //             required: true,
            //             message: 'Subject is required!',
            //             trigger: 'blur'
            //         },
            //         {
            //             max: 200,
            //             message: ' No more than 200 characters',
            //             trigger: 'blur'
            //         }
            //     ],
            //     time: {
            //         validator: (rule, value, callback) => {
            //             if (!this.form.date) {
            //                 callback(new Error('date is required!'));
            //             }else if (!this.form.time) {
            //                 callback(new Error('time is required!'));
            //             } else {
            //                 callback();
            //             }
            //         },
            //         trigger: ['change','blur']
            //     },
            // }
        }
    },
    created() {
        if (this.$i18n.locale = 'es') {
            this.$i18n.locale = 'en'
            Util.setsessionStorage('lang', 'en')
        }
    },
    methods: {
        onChange(picker) {
            picker.setColumnValues(4, [1,15,30,45])
            console.log();
        },
        onCancel() {
            this.date.show = false
        },
        onConfirm() {
            this.date.show = false
        },
        onSubmit() {
            if (this.form.Place == '1') {
                this.form.Place = this.Place
            }
            this.form.time = this.form.date + ' ' + this.form.time
            customRequest({
                method: 'post',
                url: '/B2BMeet',
                data: this.form
            }).then(result => {
                this.$message({
                    message: this.$t('prompt.title'),
                    type: 'success'
                }).then(() => {
                    this.$router.push('/user/activeInvitation')
                })
            })
            // this.$refs['form'].validate((valid) => {
            //     if (valid) {
            //         if (this.form.Place == '1') {
            //             this.form.Place = this.Place
            //         }
            //         this.form.time = this.form.date + ' ' + this.form.time
            //
            //         postMeetSupplier(this.form)
            //             .then(result => {
            //                 this.$message({
            //                     message: this.$t('prompt.title'),
            //                     type: 'success'
            //                 })
            //                 this.$router.push('/user/activeInvitation')
            //             })
            //             .catch(_ => {})
            //     }
            // });
        }
    },
}
</script>

<style scoped lang="scss">
.invitation {}
</style>
