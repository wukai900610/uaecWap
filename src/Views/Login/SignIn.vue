<template>
    <div class="login">
    	<div class="loginBox">
    		<h1 class="loginLogo" :style="'background-image:url('+logo+')'"></h1>
    		<div class="loginArea">
    			<ul class="loginInputBox">
    				<li class="van-hairline--bottom">
    					<input class="customInput" type="text" v-model="form.LoginName" :placeholder="form.placeholder1" @focus="form.placeholder1 = ''" @blur="blurFocus('LoginName')">
    				</li>
    				<li class="van-hairline--bottom">
    					<input class="customInput" type="password" v-model="form.LoginPass" :placeholder="form.placeholder2" @focus="
    					form.placeholder2 = '';form.LoginPass = ''" @blur="blurFocus('LoginPass')">
    				</li>
    			</ul>

    			<van-button class="van-button--custom" :loading="form.loading == 'loading'" round :block="true" size="normal" @click="submit">登录</van-button>
    		</div>
    	</div>

    	<div class="other">
    		<router-link class="FindPass" :to="{'name': 'Forgot'}">忘记密码</router-link>
    		|
    		<router-link class="Register" :to="{'name': 'SignUp'}">注册</router-link>
    	</div>
    </div>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

export default {
    data() {
        let placeholder1 = '请输入手机号'
        let placeholder2 = '请输入密码'
        return {
            logo:this.$store.getters.skin.logo,
            placeholder1: placeholder1,
            placeholder2: placeholder2,
            form: {
                LoginName: '',
				LoginPass: '',
				placeholder1: placeholder1,
				placeholder2: placeholder2,
                loading: ''
            },
        }
    },
    created() {
        let _this = this;
    },
    methods: {
		blurFocus(type) {
			if (type == 'LoginName') {
				this.form.placeholder1 = this.form.LoginName == '' ? this.placeholder1 : ''
			} else {
				this.form.placeholder2 = this.form.LoginPass == '' ? this.placeholder2 : ''
			}
		},
        submit() {
            let ereg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
            if (!ereg.test(this.form.LoginName)) {
                this.$toast('请输入正确的手机号')
                return false
            }

            this.form.loading = 'loading'
            customRequest({
                method: 'post',
                url: '/WebUser/Login',
                data: this.form
            }).then(result => {
                Util.doLogin(result, this.$route.query.Rurl)
            }).finally(() => {
                this.form.loading = ''
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.login {
    position: relative;
    height: 100%;
    background: url("../../../static/image/loginBg.png") no-repeat;
    background-size: cover;
    .loginBox {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-70%);
        padding: 0 0.45rem;
        width: 100%;

        .loginLogo {
            height: 3.7rem;
            background-position: center;
            background-repeat: no-repeat;
        }
        .loginArea {
            .loginInputBox {
                margin-bottom: 0.9rem;
                li {
                    margin-bottom: 0.15rem;
                    &:after {
                        border-color: #949ded;
                    }
                    input {
                        text-align: center;
                        font-size: .28rem;
                    }
                }
            }
        }
    }
    .other {
        position: absolute;
        bottom: 0.25rem;
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: 0.3rem;
        a {
            padding: 0 0.25rem;
            color: #fff;
            &:active {
                color: #2795ee;
            }
        }
    }
}
</style>
