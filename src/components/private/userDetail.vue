<template>
	<div>
		<p class="text-center">{{ title }}</p>
		<p>用户姓名：<input type="text" v-model="userName" v-focus:message='userName'></p>
		<p>用户年龄：{{ userAge }}</p>
		<p>用户性别：{{ userSex }}</p>
		<p>
			<button class="btn" @click='editName'>编辑用户姓名</button>
			<button class="btn" @click='editAge'>编辑用户年龄</button>
			<button class="btn" @click='editSex'>编辑用户性别</button>
		</p>
		<hr>
		<button @click='mixinMethod'>出发mixin</button>
	</div>
</template>

<script>
	import {eventBus} from '../../main'
	import {myMixin} from '../../mixin'
	export default {
		mixins: [myMixin],
		props: ['userAge','userName', 'parentName', 'userSex'],
		data() {
			return {
				title: '用户详情'
			}
		},
		methods: {
			editName() {

				this.parentName(this.userName);
			},
			editAge() {
				this.$emit('editParentAge', 45)
			},
			editSex() {
				eventBus.changeSex('girl')
			}
		},
		created() {
		}
	}

</script>