<template>
    <div class="login">
    	<div class="loginBox">
    		<h1 class="loginLogo"></h1>
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

    			<van-button class="van-button--custom" :loading="form.loading == 'loading'" round :block="true" size="normal" @click="submit">Login</van-button>
    		</div>
    	</div>

    	<div class="other">
    		<router-link class="FindPass" :to="{'name': 'Forgot'}">Forget LoginPass</router-link>
    		|
    		<router-link class="Register" :to="{'name': 'SignUp'}">Register</router-link>
    	</div>
    </div>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

export default {
    data() {
        let placeholder1 = 'Enter email'
        let placeholder2 = 'Enter LoginPass'
        return {
            placeholder1: placeholder1,
            placeholder2: placeholder2,
            form: {
                LoginName: '',
				LoginPass: '',
				placeholder1: placeholder1,
				placeholder2: placeholder2,
                loading: ''
            },
            // formRules: {
            //     LoginName: [{
            //         required: true,
            //         message: this.$t('text.input') + 'Email' + this.$t('text.here'),
            //         trigger: 'blur'
            //     }, {
            //         type: 'email',
            //         message: 'Invalid email'
            //     }],
            //     LoginPass: [{
            //         required: true,
            //         message: this.$t('text.input') + this.$t('form.LoginPass') + this.$t('text.here'),
            //         trigger: 'blur'
            //     }]
            // },
        }
    },
    created() {
        let _this = this;
    },
    methods: {
        // isLogin() {
		// 	let auth = Util.getsessionStorage('auth')
		// 	if (auth) {
		// 		this.$router.push({
		// 			'name': 'UserCenter'
		// 		})
		// 	}
		// },
		blurFocus(type) {
			if (type == 'LoginName') {
				this.form.placeholder1 = this.form.LoginName == '' ? this.placeholder1 : ''
			} else {
				this.form.placeholder2 = this.form.LoginPass == '' ? this.placeholder2 : ''
			}
		},
        submit() {
            this.form.loading = 'loading'
            customRequest({
                method: 'post',
                url: '/WebUser/Login',
                data: this.form
            }).then(result => {
                if (result.data.User.EmailIsValid == 0) {
                    Dialog.alert({
                        // title: 'The mailbox is not verified and cannot be logged in.',
                        message: 'The mailbox is not verified and cannot be logged in.'
                    })
                    return false;
                }
                Util.doLogin(result, this.$route.query.Rurl)
            }).finally(() => {
                this.form.loading = ''
            })
            // this.$refs['form'].validate((valid) => {
            //     if (valid) {
            //
            //     }
            // });
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
            background: url("../../../static/image/loginLogo.png") center no-repeat;
            background-size: 2rem;
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
                    }
                }
            }
        }
        .toggle {
            padding-top: 0.2rem;
            text-align: center;
            color: #fff;
            font-size: 0.24rem;
        }
    }
    .other {
        position: absolute;
        left: 50%;
        bottom: 0.6rem;
        transform: translate(-50%,0);
        color: #fff;
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
