<template>
<el-form-item :label="$t('form.code.label')" prop="VerifyCode">
    <el-input :placeholder="$t('form.code.placeholder')" type="number" v-model="code">
        <div slot="append">
            <el-button v-if="sendCode.status == '' || sendCode.status == 'loading'" class="sendCode" @click="send" :loading="sendCode.status == 'loading'">{{sendCode.send}}</el-button>
            <span v-else>{{sendCode.limit + sendCode.sened }}</span>
        </div>
    </el-input>
    <span>{{sendCode.tipText}}</span>
</el-form-item>
</template>

<script>
export default {
    props: ['sendFun', 'propLimit', 'mobile','tipText'],
    data() {
        return {
            sendCode: {
                status: '',
                send: this.$t('form.code.send'),
                sened: this.$t('form.code.sened'),
                btnText: '',
                limit:this.propLimit || 300,
                tipText:this.tipText || ''
            },
            code: ''
        }
    },
    created() {
    },
    methods: {
        send() {
            this.sendCode.status = 'loading'
            if(this.mobile){
                this.sendFun()
            }else{
                setTimeout(function () {
                    this.sendCode.status = ''
                }.bind(this), 100);
            }
        },
        countDownStatus() {
            this.sendCode.status = 'done'
            // this.sendCode.btnText = this.sendCode.limit + this.sendCode.sened

            let countDom = setInterval(function() {
                if (this.sendCode.limit <= 0) {
                    this.sendCode.limit = this.propLimit
                    this.sendCode.status = ''

                    // this.sendCode.btnText = this.sendCode.send
                    clearInterval(countDom)
                } else {
                    this.sendCode.limit--
                    // this.sendCode.btnText = this.sendCode.limit + this.sendCode.sened
                }
            }.bind(this), 1000);
        },
        error(){
            this.sendCode.status = ''
        }
    },
}
</script>

<style scoped lang="scss">
.sendCode{
    background: #fff!important;
    color: #000!important;
    border-radius: 0!important;
    border: none!important;
    &:hover{
        color: #666!important;
        box-shadow: 0 0 10px #ccc inset;
    }
}
</style>
