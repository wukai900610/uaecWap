<template>
<Layout title="Meet Company">
    <div class="invitation">
        <van-cell-group>
            <van-field v-model="form.subject" label="Subject" placeholder="Subject" />
            <van-field v-model="form.time" readonly label="time" placeholder="time" @click="date.show = true" />
            <van-dropdown-menu class="searchMenu">
                <van-dropdown-item v-model="dropdownList.value" :options="dropdownList.data" />
            </van-dropdown-menu>
            <van-field v-model="form.remark" rows="2" autosize label="Remark" type="textarea" maxlength="500" placeholder="Remark" show-word-limit />
            <van-button class="largeCustomBtn" type="info" size="large" @click="onSubmit">{{$t('form.submit')}}</van-button>
        </van-cell-group>
    </div>

    <van-action-sheet v-model="date.show">
        <van-datetime-picker v-model="date.currentDate" type="datetime" :min-date="date.startTime" :max-date="date.endTime" :filter="filter" @cancel="onCancel" @confirm="onConfirm" />
    </van-action-sheet>
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
            date: {
                show: false,
                currentDate: new Date('2019/11/03'),
                startTime: new Date('2019/11/03'),
                endTime: new Date(Util.getCurrentHostInfo().time[1])
            },
            dropdownList: {
                value: 'Other Place',
                data: [{
                        text: 'Other Place',
                        value: 'Other Place'
                    },
                    {
                        text: (this.$route.query.Booth || '') + 'Booth',
                        value: (this.$route.query.Booth || '') + 'Booth'
                    }
                ]
            },
            form: {
                remark: '',
            },
        }
    },
    created() {
    },
    methods: {
        filter(type, options) {
            if (type === 'hour') {
                return options.filter(option => option > 9 && option <18)
            }else if (type === 'minute') {
                return options.filter(option => option % 15 === 0)
            }

            return options;
        },
        onCancel() {
            this.date.show = false
        },
        onConfirm() {
            this.date.show = false
            this.form.time = new Date(this.date.currentDate).format('yyyy-MM-dd hh:mm')
        },
        onSubmit() {
            this.form.userTo = this.$route.query.id
            this.form.place = this.dropdownList.value
            customRequest({
                method: 'post',
                url: '/B2BMeet',
                data: this.form
            }).then(result => {
                this.$dialog.alert({
                    message: this.$t('prompt.title'),
                }).then(() => {
                    this.$router.back()
                })
            })
        }
    },
}
</script>

<style scoped lang="scss">
.invitation {
}
</style>
