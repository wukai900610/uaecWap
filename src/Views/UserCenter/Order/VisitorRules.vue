<template>
<div class="Content">
    <p class="title" :style="{backgroundColor:$store.getters.skin.background}">观展规则</p>
    <ul>
        <li>○我已阅读并同意以下条款：</li>
        <li>1.观展单位须如实填写本表格内容和观展所需的其它文件表格。</li>
        <li> 2.观展资格由主办单位决定</li>
        <li> 3.主办单位同意申请后三日内，观展单位应汇¥15000/人，入主办单位指定帐户作为预付金。</li>
        <li> 4.因不可抗力、有关国家及展会当局对外政策及措施之原因观展单位不能成行，主办方免责，但应及时通知观展单位以减少损失。</li>
        <li> 5.观展单位及所派人员应严格遵守本国及有关国家的法律、社会风俗及展会规定，违者责任自负，观展单位对其所派人员承担连带经济赔偿责任。</li>
        <li> 6.本条例解释权归主办单位，主办单位保留制定并发布补充条例的权利。</li>
    </ul>

    <el-button type="primary" class='btnOK' @click="onSubmit">同意提交</el-button>
</div>
</template>

<script>
import {
    postWebOrderExhi,
    getWebOrderExhi
} from "@/assets/api/api";

export default {
    data() {
        return {
            // sub: ''
        }
    },
    props: [
        'sub'
    ],
    created() {},
    methods: {
        onSubmit() {
            // this.sub['IsExhibitor'] = this.$route.query.isExhibitor
            // this.sub['Code'] =  this.$route.query.code

            // customRequest({
            //     method: 'post',
            //     url: '/WebOrderExhi',
            //     data: this.sub
            // }).then(result => {
            //     this.$confirm('数据保存成功！!', 'Tips', {
            //             confirmButtonText: "确认",
            //             type: 'success'
            //         })
            //         .then(_ => {
            //             this.$store.dispatch('set_isExhibitor', 0).then(() => {
            //                 this.$router.push({
            //                     name: 'abroad'
            //                 })
            //             })
            //         })
            // })

            postWebOrderExhi(this.sub)
                .then(() => {
                    this.$confirm('数据保存成功！!', 'Tips', {
                            confirmButtonText: "确定",
                            type: 'success'
                        })
                        .then(_ => {
                            this.$store.dispatch('set_isExhibitor', 0).then(() => {
                                this.$router.push({
                                    name: 'abroad'
                                })
                            })
                        })
                })
                .catch(() => {
                    this.$confirm('网络出错，提交失败', 'Tips', {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: 'error'
                    })
                });
        },
        Cancel() {
            this.$router.push('/User/ExhibitorAdd')
        }
    }
}
</script>
<stylescoped lang='scss'>
.Content {
    li,
    ul {
        margin: 0 auto;
        padding: 0;
        margin-bottom: 20px;
    }
    .title {
        text-align: center;
        line-height: 50px;
        height: 50px !important;
        border-radius: 5px;

    }
    .btnOK {
        display: block;
        margin: 0 auto;
        padding: 0;
        margin-bottom: 30px;
        width: 80px;
        height: 35px;
    }
}
</style>
