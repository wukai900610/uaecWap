<template>
<div class="Content">
    <p class="title">参展规则</p>
    <ul>
        <li>○我已阅读并同意以下条款：</li>
        <li>1.参展单位须如实填写本表格内容和参展所需的其它文件表格。</li>
        <li> 2.参展资格由主办单位决定。</li>
        <li> 3.主办单位同意申请后三日内，参展单位应汇¥15000/展位入主办单位指定帐户作为预付金。</li>
        <li> 4.展位由主办单位统一分配，主办单位拥有调整展位位置的最后决定权，任何参展企业只有在付清全额参展费用后方可有权参展并使用展位。</li>
        <li> 5.参展商在付款截止日期前付清展位费全额，展位正式予以确认保留，否则将被视为自动退展，主办单位有权将该展位重新分配。</li>
        <li> 在主办单位确认参展资格后，展会开展前90天取消参展，扣除展位费50%；不足90天，扣除展位费全款。
            参展商不能以免费或其他方式将全部或部分展位使用权移交第三方。若发现有此行为，主办单位有权撤销展品、取消展位，任何一方由此遭受的一切后果及经济损失均由转让展位使用权的参展商或展位承租者承担。
            在特定情况下，主办单位保留重新分配展位、改变展位布局和改变展位标准尺寸的权利，参展商不得因上述变更为由取消合同或索取赔偿。</li>
        <li> 6.因不可抗力、有关国家及展会当局对外政策及措施之原因参展单位不能成行，主办方免责，但应及时通知参展单位以减少损失。</li>
        <li> 7.参展单位及所派人员应严格遵守本国及有关国家的法律、社会风俗及展会规定，违者责任自负，参展单位对其所派人员、及其货源单位或合作单位所派人员承担连带经济赔偿责任。</li>
        <li> 8.为了保护博览会中外参展商的合法权益，所展示的样品均应明确其知识产权，参展商必须遵守中国及展会所在国专利法、商标法和著作权法等有关知识产权的法律和法规，并遵守中国参加的相关国际知识产权协议的规定。如有侵权或假冒的产品，主办单位有权撤销该参展商的展品并停止其展出。
        </li>
        <li> 9.本条例解释权归主办单位，主办单位保留制定并发布补充条例的权利。</li>
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
        }
    },
    props: [
        'sub'
    ],
    created() {},
    methods: {
        onSubmit() {
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
            //             this.$store.dispatch('set_isExhibitor', 1).then(() => {
            //                 this.$router.push({
            //                     name: 'abroad'
            //                 })
            //             })
            //         })
            // })

            postWebOrderExhi(this.sub)
                .then(() => {
                    this.$confirm('数据保存成功！!', 'Tips', {
                            confirmButtonText: "确认",
                            type: 'success'
                        })
                        .then(_ => {
                            this.$store.dispatch('set_isExhibitor', 1).then(() => {
                                this.$router.push({
                                    name: 'abroad'
                                })
                            })
                        })
                })
                .catch((e) => {
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
