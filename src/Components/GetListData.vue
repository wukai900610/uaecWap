<template>
<div class="baseBox">
	<transition name="el-fade-in">
		<div class="loading" v-show="status == 'loading'">
			<slot name="loading">
				<i class="icon icon-success"></i>
				<span>加载中...</span>
			</slot>

		</div>
	</transition>
	<div v-if="status == 'success'">
		<slot :data="data" v-if="data">
			默认数据
		</slot>
		<slot name="noData" v-else>
			<p class="noData">暂无数据, <a class="reload" @click="request()">刷新一下</a></p>
		</slot>
	</div>

	<slot name="error" v-else-if="status == 'error'">
		<p class="noData">接口异常, <a class="reload" @click="request()">重新加载</a></p>
	</slot>
</div>
</template>

<script>
// import Util from '../libs/util'
// import Axios from '../libs/axios'
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

export default {
	// 地址，参数，自定义方法
	props: ['url', 'type', 'payload', 'newRequest', 'listName', 'done'],
	data() {
		return {
			data: [],
			status: '',
			storageName: this.listName
		}
	},
	methods: {
		request(requestParams) {
			this.status = 'loading'

			let config = {
				url: Util.domain + this.url,
			}
			if(this.type == 'post'){
				config.method = 'post';
				config.data = requestParams ? requestParams : this.payload;
			}else{
				config.method = 'get';
				config.params = requestParams ? requestParams : this.payload;
			}

			customRequest(config).then(response => {
				this.data = response.data
				if (this.storageName && response.data) {
					// 缓存数据
					Util.setsessionStorage(this.storageName, this.data)
				}
				// 数据加载完成
				setTimeout(function() {
					this.status = 'success'
					this.done && this.done()
				}.bind(this), 500);
			}).catch(()=>{
				this.status = 'error'
			})
		}
	},
	mounted: function() {
		// 自定义加载方法
		if (this.newRequest && typeof(this.newRequest) == 'function') {
			this.newRequest()
		} else {
			if (this.storageName) {
				let localData = Util.getsessionStorage(this.storageName)
				if (localData) {
					this.data = localData
					this.status = 'success'
				} else {
					this.request()
				}
			} else {
				this.request()
			}
		}
	}
}
// 父组件调用子组件方法 ref="GetListData"
// <GetListData ref="GetListData" class="customList" url="/api/content/list.jspx" :payload="{params:{channelIds: 135,first: 0,count: 5}}">
// 	<template slot-scope="slotProps">
// 		<h5>{{ slotProps.item.title }}</h5>
// 		<p>{{ slotProps.item.channel }}</p>
// 	</template>
// </GetListData>
// 调用方法that.$refs.GetListData.request()
</script>
<style scoped lang="scss">
.baseBox {
    position: relative;
    margin-bottom: 10px;
    padding: 5px;
    height: 150px;
    background-color: #fff;
    font-size: 13px;
    .loading {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 2;
        background: rgba(255, 255, 255, .8);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .noData {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .reload {
        color: #1d5897;
    }
}
</style>
