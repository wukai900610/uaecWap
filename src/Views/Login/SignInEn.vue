<template>
    <div class="login">
        <div class="back" @click="$router.back()">
            <van-icon name="arrow-left" />
        </div>
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
            let ereg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
            if (!ereg.test(this.form.LoginName)) {
                this.$toast('Please Enter Correct Email')
                return false
            }

            this.form.loading = 'loading'
            customRequest({
                method: 'post',
                url: '/WebUser/Login',
                data: this.form
            }).then(result => {
                if (result.data.User.EmailIsValid == 0) {
                    this.$dialog.alert({
                        message: 'The mailbox is not verified and cannot be logged in.'
                    })
                    return false;
                }
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
    .back{
        position: absolute;
        left: 5%;
        top: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: .5rem;
        height: .5rem;
        border: 1px solid #469aeb;
        color: #469aeb;
        border-radius: 50%;
        z-index: 10;
    }
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
        opacity: .5;
        text-align: center;
        font-size: 0.22rem;
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
