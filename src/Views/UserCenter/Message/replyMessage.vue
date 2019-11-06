<template>
<div class="user-replyMessage">
    <h2>{{$t('tabel.InBox')}}</h2>
    <el-form class="user-replyMessage-form" ref="form" :model="form" :rules="rules" label-width="100px">
        <!-- <el-form-item :label="$t('tabel.To')">
                <el-input placeholder="jiy@uaec-expo.com" v-model="form.SupplyName" :disabled="true">
                    <template slot="prepend">Company</template>
                </el-input>
            </el-form-item> -->

        <el-form-item :label="$t('tabel.Subject')" prop="Subject">
            <el-input v-model="form.Subject" :placeholder="$t('tabel.Subject')"></el-input>
        </el-form-item>

        <el-form-item class="diff" :label="$t('tabel.Content')" prop="Message">
            <div style="border:1px solid #DCDFE6;border-radius:5px;">
                <el-input type="textarea" :autosize="{ minRows: 10, maxRows: 10}" :placeholder="$t('tabel.Content')" resize="none" v-model="form.Message">
                    <template slot="append">Company</template>
                </el-input>

                <div class="user-replyMessage-list">
                    <el-button style="margin:20px 0;" @click="submit">{{$t('form.Submit')}}</el-button>

                    <div class="user-replyMessage-list-item" v-for="(item,index) in viewData">
                        <div class="user-replyMessage-list-item-info">
                            <p>{{$t('tabel.FormR')}}: {{item.SupplyNameFrom}}</p>
                            <p>{{$t('tabel.ToR')}}: {{item.SupplyNameTo}}</p>
                            <p>{{$t('tabel.Subject')}}: {{item.Subject}}</p>
                            <p>{{$t('tabel.Date')}}: {{item.AddTime | dateTime}}</p>
                        </div>
                        <div class="user-replyMessage-list-item-view">
                            {{$t('tabel.Content')}}: {{item.Message}}
                        </div>
                        <div class="user-replyMessage-list-item-footer">
                            <!--<p>{{$t('tabel.To')}} : {{item.RealName}}</p>-->
                            <!--<p>{{$t('tabel.Form')}} : {{item.SupplyName}}</p>-->
                            <p>{{$t('tabel.readTime')}} : {{item.ReadTime | dateTime}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {
    postMessage,
    getMessage,
    putMessage
} from "@/assets/api/api";

export default {
    name: "replyMessage",
    data() {
        return {
            form: {
                Subject: '',
                Message: '',
                UserTo: ''
            },
            rules: {
                Subject: [{
                    required: true,
                    message: this.$t('text.input') + this.$t('tabel.Subject') + this.$t('text.here'),
                    trigger: 'blur'
                }],
                Message: [{
                    required: true,
                    message: this.$t('text.input') + this.$t('tabel.Content') + this.$t('text.here'),
                    trigger: 'blur'
                }],
            },
            viewData: []
        }
    },
    created() {
        this.form.SupplyName = this.$route.query.companyName
        getMessage({
                id: this.$route.query.id,
                type: this.$route.query.type
            })
            .then(result => {
                this.viewData = result.data
            })
            .then(result => {
                // 标识消息已读
                putMessage({
                        id: this.$route.query.id,
                        IsRead: 1
                    })
                    .catch(_ => {
                        this.$router.back()
                    })
            })
    },
    methods: {
        submit() {
            this.form['code'] = 'an'
            this.form['UserTo'] = this.$route.query.To
            this.form['ID'] = this.$route.query.id

            this.$refs['form'].validate((valid) => {
                if (valid) {
                    postMessage(this.form)
                        .then(result => {
                            putMessage({
                                    id: this.$route.query.id,
                                    IsRead: 2
                                })
                                .then(result => {
                                    this.$router.push('/user/outbox')
                                })
                                .catch(_ => {
                                    this.$router.push('/user/outbox')
                                })
                        })
                }
            });

        }
    }
}
</script>

<style scoped lang="scss">
.user-replyMessage {
    h2 {
        text-align: center;
        background: #fff;
        width: 100%;
        line-height: 60px;
        margin: 5px;
    }
    .user-replyMessage-form {
        width: 100%;
        margin: 5px;
        padding: 20px 20px 20px 0;
        background: #fff;
        overflow: hidden;

        .diff {
            position: relative;
        }

        .user-replyMessage-list {
            display: block;
            margin: 0 10px;
            .user-replyMessage-list-item {
                overflow: auto;
                padding: 0 20px;
                // width: calc(100% - 200px);
                border-top: 1px dashed rgba(224,224,224,1);
            }
        }
    }
}
</style>

<style lang="scss">
.user-replyMessage {
    .user-replyMessage-form {
        .diff {
            .el-form-item__error {
                position: absolute;
                left: 10px;
                top: 220px;
            }
            .el-textarea__inner {
                border: none;
            }
        }
    }

}
</style>
