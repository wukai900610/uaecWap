<template>
<div class="user-replyMessage">
    <h2>{{$t('tabel.Reply')}}</h2>
    <div class="user-replyMessage-form">
        <div class="user-replyMessage-form-item">
            <div class="user-replyMessage-form-item-view">
                <div class="user-replyMessage-form-item-view-item" v-for="(item,index) in viewData">
                    <div class="user-replyMessage-form-item-view-item-info">
                        <p>Form: {{item.UserFrom}}</p>
                        <p>To: {{item.UserTo}}</p>
                        <p>Subject: {{item.Subject}}</p>
                        <p>Date: {{item.AddTime}}</p>
                    </div>
                    <div class="user-replyMessage-form-item-view-item-view">
                        {{item.Message}}
                    </div>
                    <div class="user-replyMessage-form-item-view-item-footer">
                        <p>{{item.RealName}}</p>
                        <p>{{item.SupplyName}}</p>
                        <p>{{item.ReadTime}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    getMessage
} from "@/assets/api/api";

export default {
    name: "replyMessage",
    data() {
        return {
            input: '',
            input3: '',
            textarea3: '',
            viewData: []
        }
    },
    created() {
        getMessage({
                id: this.$route.query.id,
                type: this.$route.query.type
            })
            .then(result => {
                this.viewData = result.data
            })
    }
}
</script>

<style scoped lang="scss">
.user-replyMessage {
    .user-replyMessage-form {
        width: 95%;
        margin: 0 auto;
        background: #fff;
        overflow: hidden;
        .user-replyMessage-form-item {
            overflow: hidden;
            width: 100%;
            .xl-label {
                width: 150px;
                text-align: right;
                float: left;
                line-height: 40px;
                margin-right: 20px;
            }
            .el-input {
                width: calc(100% - 200px);
                float: left;
            }
            .user-replyMessage-form-item-view {
                width: 100%;
                float: left;
                min-height: 300px;
                border: 1px solid rgba(224,224,224,1);
                .user-replyMessage-form-item-view-item {
                    border-bottom: 1px dashed rgba(224,224,224,1);
                    width: 98%;
                    margin: 0 auto;
                    padding: 10px 0;
                }
            }
        }
    }
}
</style>
<style lang="scss">
.user-replyMessage {
    .el-textarea__inner {
        border: 0;
    }
}
</style>
