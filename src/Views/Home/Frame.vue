<template>
<div>
	<router-view></router-view>

	<van-tabbar class="customTabbar" v-model="active">
		<van-tabbar-item v-for="(item,index) in tabNav" :key="index">
			<router-link :class="item.tabItemClass" :to="{name:item.name}">
				{{$t('tabNav')[index].title}}
			</router-link>
		</van-tabbar-item>
	</van-tabbar>
</div>
</template>

<script>

export default {
	data() {
		return {
			active: 0,
			tabNav: [{
					name: 'home',
					// title: '主页',
					tabItemClass: 'tabItem ico ico1'
				// },
				// {
				// 	name: 'SecondPage',
				// 	title: '自办展',
				// 	tabItemClass: 'tabItem ico ico2'
				},
				{
					name: 'UserCenter',
					// title: '我的',
					tabItemClass: 'tabItem ico ico3'
				}
			]
		}
	},
	beforeRouteEnter(to, from, next) {
		// 在当前路由改变，但是该组件被复用时调用
		// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
		// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。

		next(vm => {
			// 通过 `vm` 访问组件实例
			if (to.name == 'home') {
				vm.active = 0
			} else if (to.name == 'UserCenter') {
				vm.active = 1
			}
		})
	},
	beforeRouteUpdate(to, from, next) {
		// 在当前路由改变，但是该组件被复用时调用
		// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
		// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
		// 可以访问组件实例 `this`
		if (to.name == 'home') {
			this.active = 0
		} else if (to.name == 'UserCenter') {
			this.active = 1
		}

		next()
	},
}
</script>
<style scoped lang="scss">
.layout {
    padding-bottom: 1rem;
}
.customTabbar {
    .tabItem {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &.ico {
            &:before {
                content: ' ';
                display: block;
                padding: 0.3rem;
                background-repeat: no-repeat;
                background-size: 0.5rem;
                background-position: top center;
            }

        }

        &.ico1 {
            &:before {
                background-image: url("../../../static/image/home-outline.png");
            }
        }
        &.ico2 {
            &:before {
                background-image: url("../../../static/image/serviceHall-outline.png");
            }
        }
        &.ico3 {
            &:before {
                background-image: url("../../../static/image/about-outline.png");
            }
        }
    }

    .van-tabbar-item {
        position: relative;
    }
    .van-tabbar-item--active {
        .ico1 {
            &:before {
                background-image: url("../../../static/image/home.png");
            }
        }
        .ico2 {
            &:before {
                background-image: url("../../../static/image/serviceHall.png");
            }
        }
        .ico3 {
            &:before {
                background-image: url("../../../static/image/about.png");
            }
        }
    }
}
</style>
