<template>
<Layout :title="$t($route.query.id ? 'table.EditProduct' : 'table.AddProduct')">
    <div class="company">
        <div v-if="lan=='zh'">请填写英文信息以供外商查看</div>
        <van-cell-group class="group">
            <van-field :label="$t('form.ProductName')" label-width="110" :placeholder="$t('form.ProductName')" v-model="form.Name" :disabled="!edit" />

            <van-field :label="$t('form.ProductsCategory')" label-width="130" :value="category.value" readonly clickable :placeholder="$t('form.ProductsCategory')" @click="showCategory" right-icon="arrow" />
            <van-popup v-model="category.show" position="bottom">
                <van-picker ref="category" :columns="category.columns" @change="onChange" :show-toolbar="true" @cancel="category.show = false" @confirm="selectCategory" />
            </van-popup>

            <van-uploader class="upload" v-model="fileList" @delete="delUpload" :after-read="afterRead" multiple :max-count="1" :deletable="edit" :disabled="!edit" />
            <van-field :label="$t('form.ProductDescription')" label-width="130" :placeholder="$t('form.ProductDescription')" v-model="form.Description" :disabled="!edit" />
            <van-field :label="$t('form.Summary')" rows="2" type="textarea" autosize show-word-limit maxlength="200" :placeholder="$t('form.Summary')" v-model="form.Summary" :disabled="!edit" />
        </van-cell-group>
        <van-row class="actions" type="flex" gutter="20">
            <van-col span="24" v-if="!edit">
                <van-button type="info" size="small" @click="onEdit(true)">{{$t('form.modify')}}</van-button>
            </van-col>
            <van-col span="12" v-if="edit">
                <van-button type="info" size="small" @click="onSubmit">{{$t('form.submit')}}</van-button>
            </van-col>
            <van-col span="12" v-if="edit">
                <van-button type="warning" size="small" @click="onReset">{{$t('form.reset')}}</van-button>
            </van-col>
        </van-row>
        <van-row class="actions" type="flex" gutter="20" v-if="$route.query.id">
            <van-col span="24" v-if="edit">
                <van-button type="primary" size="small" @click="onEdit(false)">{{$t('form.cancel')}}</van-button>
            </van-col>
        </van-row>
    </div>
</Layout>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

import Layout from "@/components/Layout";

export default {
    components: {
        Layout,
    },
    data() {
        return {
            lan: Util.getsessionStorage('lang'),
            edit: this.$route.query.id ? false : true,
            category: {
                show: false,
                value: '',
                data: [],
                columns: [],
            },
            fileList: [],
            form: {
                Summary: '',
            },
        }
    },
    created() {
        // 获取分类
        this.getCategory().then(() => {
            if (this.$route.query.id) {
                this.getData().then(() => {
                    this.initCategory()
                })
            } else {
                this.showTips()
                this.initCategory()
            }
        })
    },
    methods: {
        // 加载顺序
        showTips() {
            if (this.lan == 'zh') {
                this.$toast('请填写英文信息以供外商查看')
            }
        },
        getData() {
            return customRequest({
                method: 'get',
                url: '/b2bproduct/get',
                params: {
                    id: this.$route.query.id,
                }
            }).then(result => {
                if (result.data.length > 0) {
                    this.form = result.data[0]
                    this.fileList = [{
                        url: this.form.Img
                    }]
                }
            })
        },
        getCategory(level) {
            let that = this
            // 组合分类树
            let get = function(level) {
                return new Promise((resolve, reject) => {
                    customRequest({
                        method: 'get',
                        url: '/B2BCategory/GetList',
                        params: {
                            CLevel: level
                        }
                    }).then(result => {
                        resolve(result.data)
                    })
                })
            }
            return Promise.all([get(1), get(2), get(3)]).then(function(values) {
                let level1 = values[0]
                let level2 = values[1]
                let level3 = values[2]
                let tempData = []
                // 三级目录合成到二级目录
                level2.map((item) => {
                    item.children = []
                    level3.map((item2) => {
                        if (item.ID == item2.ParentID && item2.Name != 'N/A') {
                            item.children.push(item2)
                        }
                    })
                    // 没有3级目录 可以选择2级目录
                    if (item.children.length == 0) {
                        delete item.children
                    }
                })
                // 二级目录合成到一级目录
                level1.map((item) => {
                    item.children = []
                    level2.map((item2) => {
                        if (item.ID == item2.ParentID) {
                            item.children.push(item2)
                        }
                    })
                })

                that.category.data = level1
            });
        },
        initCategory() {
            let level1Index = 0
            let level2Index = 0
            // 初始化变量
            this.category.default = [{
                    Name: '',
                    id: '',
                    index: 0
                },
                {
                    Name: '',
                    id: '',
                    index: 0
                },
                {
                    Name: '',
                    id: '',
                    index: 0
                }
            ]
            this.category.value = ''
            if (this.$route.query.id) {
                this.category.data.map((item, index) => {
                    if (item.ID == this.form.CatelogID) {
                        level1Index = index
                        this.category.default[0] = {
                            Name: item.Name,
                            id: item.ID,
                            index: index
                        }
                    }
                    item.children.map((item2, index2) => {
                        if (item2.ID == this.form.CatelogID2) {
                            level2Index = index2
                            this.category.default[1] = {
                                Name: item2.Name,
                                id: item2.ID,
                                index: index2
                            }
                        }
                        item2.children.map((item3, index3) => {
                            if (item3.ID == this.form.CatelogID3) {
                                this.category.default[2] = {
                                    Name: item3.Name,
                                    id: item3.ID,
                                    index: index3
                                }
                            }
                        })
                    })
                })

                this.category.value = this.category.default.map((item) => {
                    return item.Name
                }).toString()
            }

            // 初始化显示的菜单
            this.category.columns = [{
                values: this.category.data.map(item => item.Name),
                className: 'column1'
            }, {
                values: this.category.data[level1Index].children.map(item => item.Name),
                className: 'column2'
            }, {
                values: this.category.data[level1Index].children[level2Index].children.map(item => item.Name),
                className: 'column3'
            }]
        },
        onChange(picker, values, index) { //手动选择
            let selectIndex = picker.getColumnIndex(index)
            let allIndex = picker.getIndexes()
            if (index == 0) { // 滚动第一列
                picker.setColumnValues(1, this.category.data[selectIndex].children.map(item => item.Name));
                picker.setColumnValues(2, this.category.data[selectIndex].children[0].children.map(item => item.Name));
            } else if (index == 1) { // 滚动第二列
                picker.setColumnValues(2, this.category.data[allIndex[0]].children[selectIndex].children.map(item => item.Name));
            }
            // 重新获取最新indexes
            allIndex = picker.getIndexes()
            // 保存已改变的滑动结果
            let obj = this.category.data[allIndex[0]]
            this.category.default = [{
                Name: obj.Name,
                id: obj.ID,
                index: allIndex[0]
            }, {
                Name: obj.children[allIndex[1]].Name,
                id: obj.children[allIndex[1]].ID,
                index: allIndex[1]
            }, {
                Name: obj.children[allIndex[1]].children[allIndex[2]].Name,
                id: obj.children[allIndex[1]].children[allIndex[2]].ID,
                index: allIndex[2]
            }]
        },
        // 显示选择分类组件
        showCategory() {
            if (this.edit) {
                this.category.show = true

                // 选中默认数据
                setTimeout(function() {
                    // 设置选中
                    this.$refs['category'].setIndexes(this.category.default.map(item => item.index))
                }.bind(this), 0);
            }
        },
        // 确定选中分类
        selectCategory(value, indexs) {
            this.category.show = false
            // 显示选中的值
            this.category.value = value.toString()
            // 后台接收的是选中值的id
            this.form.CatelogID = this.category.data[indexs[0]].ID
            this.form.CatelogID2 = this.category.data[indexs[0]].children[indexs[1]].ID
            this.form.CatelogID3 = this.category.data[indexs[0]].children[indexs[1]].children[indexs[2]].ID
        },
        afterRead(file) {
            this.form.Img = file.content
        },
        delUpload(file) {
            this.form.Img = ''
        },
        // toggle(key, index) {
        //     if (this.edit) {
        //         this.$refs[key][index].toggle();
        //     }
        // },
        // radioClick(key, value) {
        //     if (this.edit) {
        //         this.form[key] = value
        //     }
        // },
        onEdit(value) {
            this.edit = value
        },
        onSubmit() {
            if (!this.form.Img) {
                this.$dialog.alert({
                    message: this.$t('prompt.img')
                })
                return
            }

            customRequest({
                method: this.$route.query.id ? 'put' : 'post',
                url: '/B2BProduct',
                data: this.form
            }).then(result => {
                this.$router.back()
            })
        },
        onReset() {
            if (this.$route.query.id) {
                this.getData().then(() => {
                    this.initCategory()
                })
            } else {
                this.form = {
                    Summary: '',
                }
                this.fileList = []
                this.showTips()
                this.initCategory()
            }
        },
    }
}
</script>

<style scoped lang="scss">
.company {
    overflow: hidden;
    .group {
        margin-bottom: 0.2rem;
        padding-top: 0.2rem;
        h5 {
            margin: 0 0 0 0.3rem;
        }
        .upload {
            margin: 0.2rem 0 0.1rem 0.3rem;
        }
    }
    .actions {
        margin-bottom: 0.2rem;
        padding: 0 0.2rem;

        .van-button {
            width: 100%;
        }
    }
}
</style>
