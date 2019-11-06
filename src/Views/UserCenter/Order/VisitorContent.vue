<template>
    <div>
        <div class="form-item" v-if="code == 'an'">
            <div class="form-item-head">
                观展内容
            </div>
            <div class="form-item-view">
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">部件组件</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo1">
                                <el-checkbox label="部件组件"></el-checkbox>
                            </el-checkbox-group>
                            <label>传动系统、车身零件、电源系统（发动机、变速箱、燃料系统），驱动控制系统（方向盘、悬吊系统、底盘、活塞、弹簧）、电装系统（连接器、仪表、电装零件、继电器、线组、马达、电池）、内装（橡胶板、空调、内饰木纹状部件）、车外产品、电气系统、驾驶辅助系统、安全系统、排气系统、齿轮及传动装置、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">配件改装</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo2">
                                <el-checkbox label="配件改装" name="ExhiInfo2"></el-checkbox>
                            </el-checkbox-group>
                            <label>特别设备、改装服务、轮胎及胎圈、离心管及套管、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">修护设备</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo3">
                                <el-checkbox label="修护设备" name="type"></el-checkbox>
                            </el-checkbox-group>
                            <label>保养及修理装备、车间维修及涂漆、维修站建造及管理、诊断与测量测试器材、修护工具及技术、升降台、道路援救及拖吊车设备、仓储设备、轮胎安装、车身维修、废物处理及回收、无油漆凹陷修理、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">车辆电子</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo4">
                                <el-checkbox label="车辆电子" name="type"></el-checkbox>
                            </el-checkbox-group>
                            <label>电子零件、照明设备、汽摩音响、电子娱乐系统、智能导航系统、免提电话等通讯器材、冷气设备、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">车辆保养</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo5">
                                <el-checkbox label="车辆保养" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <label>加油站服务站及停车场设备、清洗及维护、美容产品、喷面镀膜、车面覆膜、内装清洁、洗车设备与耗材、其他</label>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">车辆烤漆</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo6">
                                <el-checkbox label="车辆烤漆" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <label>喷漆厂设备与材料、车辆防锈防腐蚀技术与材料、其他</label>
                    </div>
                </div>

                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">其他</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo6">
                                <el-checkbox label="其他" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <label>车辆跟踪系统、收费系统、自动防盗装置、汽油及润滑油、其他</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="form-item" v-if="code == 'nt'">
            <div class="form-item-head">
                观展内容
            </div>
            <div class="form-item-view">
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">服装服饰</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo1">
                                <el-checkbox label="服装服饰"></el-checkbox>
                            </el-checkbox-group>
                            <label>男/女/童装、休闲/运动装、衬衫、内衣、领带、首饰、皮带、假发、其他 </label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">服装面料</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo2">
                                <el-checkbox label="服装面料" name="ExhiInfo2"></el-checkbox>
                            </el-checkbox-group>
                            <label>服装面料、纺织面料、功能性面料、合纤面料、皮革、PU/PVC、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">家纺产品</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo3">
                                <el-checkbox label="家纺产品" name="type"></el-checkbox>
                            </el-checkbox-group>
                            <label>床品床垫、蚊帐、厨卫用品、沙发布、窗帘布、装饰布、靠垫地垫、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">鞋类箱包</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo4">
                                <el-checkbox label="鞋类箱包" name="type"></el-checkbox>
                            </el-checkbox-group>
                            <label>凉鞋、拖鞋、皮革制品、箱包、手袋、背包、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">辅料配件</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo5">
                                <el-checkbox label="辅料配件" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <label>垫肩、里衬、花边、刺绣、缎带、丝带、纽扣、拉链、衣架、其他</label>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">纤维纱线</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo6">
                                <el-checkbox label="纤维纱线" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <label>纤维、抽纱、纱线、特殊纺丝、织造及整理、花式纱、其他</label>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">染化产品</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo7">
                                <el-checkbox label="染化产品" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <label>纺织用化学品、染料、助剂、其他</label>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">纺机服机</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo8">
                                <el-checkbox label="纺机服机" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <label>纺织机械、工业/家用缝纫机、附件及零配件、其他</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="form-item" v-if="code == 'hc'">
            <div class="form-item-head">
                观展内容
            </div>
            <div class="form-item-view">
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">○餐厨家用</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo1">
                                <el-checkbox label="服装服饰"></el-checkbox>
                            </el-checkbox-group>
                            <label>厨房用品、餐桌用品、卫生清洁、收纳用具、浴室用品、家具与配件、宠物用品、日用消费品、其他 </label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">○家庭装饰</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo2">
                                <el-checkbox label="服装面料" name="ExhiInfo2"></el-checkbox>
                            </el-checkbox-group>
                            <label>灯具照明、人造花果、油画相框、装饰蜡烛、墙纸、软装饰品、工艺礼品、镜子挂钟、时尚创意、家居改进、五金工具、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">家纺产品</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo3">
                                <el-checkbox label="家纺产品" name="type"></el-checkbox>
                            </el-checkbox-group>
                            <label>床上用品、厨浴家纺、窗帘遮阳、装饰织物、墙纸、地毯靠垫、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">花园园艺</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo4">
                                <el-checkbox label="鞋类箱包" name="type"></el-checkbox>
                            </el-checkbox-group>
                            <label>草坪用品、露营用品、野炊用品、园林机械、花园用品、园艺工具、烧烤、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">礼品办公</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo5">
                                <el-checkbox label="辅料配件" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <label>礼品工艺品、办公文具、箱包、旅游用品、薰香制品、贺卡、玩具、促销用品、珠宝首饰、个人用品、其他</label>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">节日派对</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo6">
                                <el-checkbox label="纤维纱线" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <label>圣诞用品、节日派对饰品礼品、宗教饰品、饰品包装、焰火、其他</label>
                    </div>
                </div>

                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">消费电子</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo7">
                                <el-checkbox label="染化产品" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <label>家用电器、电子设备、电脑周边、视频音频、移动终端、其他</label>
                    </div>
                </div>

                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">运动美容</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo8">
                                <el-checkbox label="纺机服机" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <label>运动器械、运动用品、户外用品、按摩保健、美容美发、其他</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="form-item" v-if="code == 'cc'">
            <div class="form-item-head">
                观展内容
            </div>
            <div class="form-item-view">
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">纺机服机</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo1">
                                <el-checkbox label="纺机服机" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <label>手动/自动纺织机械、缝纫机械、附件及零配件、其他</label>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">服装面料</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo2">
                                <el-checkbox label="服装面料" name="type"></el-checkbox>
                            </el-checkbox-group>
                            <label>服装面料、功能性面料、合成面料、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">纤维纱线</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo3">
                                <el-checkbox label="纤维纱线" name="type"></el-checkbox>
                            </el-checkbox-group>
                            <label>纤维、纱线、抽纱、花式纱、纺纱、特殊纺丝、织造及整理、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">服饰辅料</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo4">
                                <el-checkbox label="服饰辅料" name="type"></el-checkbox>
                            </el-checkbox-group>
                            <label>纽扣、衣架、垫肩、里衬、缎带、拉链、裁缝用品、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">染化产品</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo5">
                                <el-checkbox label="染化产品" name="type"></el-checkbox>
                            </el-checkbox-group>
                            <label>纺织用化学品、染料、助剂、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">家纺产品</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo6">
                                <el-checkbox label="家纺产品" name="type"></el-checkbox>
                            </el-checkbox-group>
                            <label>床上用品、厨浴家纺、地毯、窗帘遮阳、装饰织物、靠垫、墙纸、其他</label>
                        </el-form-item>
                    </div>
                </div>
            </div>
        </div>

        <div class="form-item" v-if="code == 'hn'">
            <div class="form-item-head">
                观展内容
            </div>
            <div class="form-item-view">
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">餐厨家用</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo1">
                                <el-checkbox label="餐厨家用"></el-checkbox>
                            </el-checkbox-group>
                            <label>厨房用品、餐桌用品、卫生清洁、收纳用具、浴室用品、家具与配件、 母婴用品、日用消费品、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">家纺产品</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>

                            <el-checkbox-group v-model="form.ExhiInfo2">
                                <el-checkbox label="家纺产品"></el-checkbox>
                            </el-checkbox-group>
                            <label>床品床垫、蚊帐、厨卫纺织、沙发布、窗帘布、装饰布、靠垫地垫、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">礼品办公</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo3">
                                <el-checkbox label="礼品办公"></el-checkbox>
                            </el-checkbox-group>
                            <label>礼品工艺品、办公用品、箱包、旅游用品、薰香制品、贺卡、玩具、促销用品、珠宝首饰、个人用品、</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">节日派对</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo4">
                                <el-checkbox label="家纺产品"></el-checkbox>
                            </el-checkbox-group>
                            <label>圣诞用品、节日派对饰品礼品、宗教饰品、饰品包装、焰火</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">消费电子</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo5">
                                <el-checkbox label="消费电子"></el-checkbox>
                            </el-checkbox-group>
                            <label>家用电器、电子设备、电脑周边、视频音频、手机周边、移动终端、其他</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">花园园艺</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo6">
                                <el-checkbox label="花园园艺"></el-checkbox>
                            </el-checkbox-group>
                            <label>草坪用品、露营用品、野炊烧烤、园林机械、花园用品、园艺工具</label>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item-view-flex">
                    <div class="form-item-view-flex-left">美容运动</div>
                    <div class="form-item-view-flex-right">
                        <el-form-item>
                            <el-checkbox-group v-model="form.ExhiInfo7">
                                <el-checkbox label="美容运动"></el-checkbox>
                            </el-checkbox-group>
                            <label>美容美发美甲、洗漱清洁、运动器械、运动用品、户外用品</label>
                        </el-form-item>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['form'],
    data() {
        return {
        }
    },
    created() {
        this.code = this.$route.query.code
    },
}
</script>
<stylescoped lang='scss'>
.form-item {
    .form-item-head {
        height: 80px;
        font-size: 30px;
        font-weight: 600;
        margin: 0 auto;
        text-align: center;
        line-height: 80px;
    }
    .form-item-view {
        width: 800px;
        margin: 0 auto;
        .form-item-view-flex {
            display: flex;
            .form-item-view-flex-left {
                width: 150px;
                line-height: 30px;
                font-size: 20px;
            }
            .form-item-view-flex-right {
                width: 500px;
            }
        }
    }
}
</style>
