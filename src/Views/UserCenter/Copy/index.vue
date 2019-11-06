<template>
<div class="copy">
    <h2>{{$t('form.copy') + ' '+ $t('form.'+this.$route.query.type)}}</h2>
    <div class="copy-view">
        <el-form ref="form" :model="form">
            <el-form-item :label="$t('form.ChooseFair')">
                <el-select v-model="form.Code" :placeholder="$t('text.choose')+ $t('form.ChooseFair')+$t('text.here')">
                    <el-option :key="item.SelfExhiCode" v-for="item in fairData" :label="item.Title" :value="item.SelfExhiCode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">{{$t('form.Submit')}}</el-button>
                <el-button @click="back">{{$t('form.cancel')}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
import {
    getUserIndexTabel,
    copyCompany,
    copyOffer,
    copyProduct
} from "@/assets/api/api";

export default {
    name: "index",
    data() {
        return {
            fairData: [],
            form: {
                Code: ''
            },
        }
    },
    created() {
        getUserIndexTabel()
            .then(result => {
                this.fairData = result.data
            })
    },
    methods: {
        onSubmit() {
            if (this.$route.query.type == 'company') {
                copyCompany({
                        id: this.$route.query.id,
                        code: this.form.Code
                    })
                    .then(() => {
                        this.$router.push('/user/myCompany')
                    })
                    .catch(() => {
                        this.$router.push('/user/myCompany')
                    });
            } else if (this.$route.query.type == 'product') {
                copyProduct({
                        id: this.$route.query.id,
                        code: this.form.Code
                    })
                    .then(() => {
                        this.$router.push('/user/myProduct')
                    })
                    .catch(() => {
                        this.$router.push('/user/myProduct')
                    });
            } else if (this.$route.query.type == 'offer') {
                copyOffer({
                        id: this.$route.query.id,
                        code: this.form.Code
                    })
                    .then(() => {
                        this.$router.push('/user/myOffer')
                    })
                    .catch(() => {
                        this.$router.push('/user/myOffer')
                    });
            }
        },
        back() {
            this.$router.back()
        }
    },
}
</script>

<style scoped lang="scss">
.copy {
    h2 {
        text-align: center;
        background: #fff;
        margin: 5px;
        width: 100%;
        line-height: 60px;
    }
    .copy-view {
        width: 100%;
        margin: 5px;
        min-height: calc(100% - 80px);
        background: #fff;
        overflow: hidden;
        .el-form {
            width: 700px;
            margin: 20px auto;
            padding: 20px;
        }
    }
}
</style>
<style lang="scss">
.copy {
    .copy-view {
        .el-form-item__label {
            width: 200px !important;
        }
        .el-input,
        .el-input__inner,
        .el-textarea {
            width: 280px;
        }
        .el-form-item__content:last-child {
            margin-left: 200px !important;
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
}
</style>
