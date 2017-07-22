<template>
	<div class="content">
		<h5 class="text-center">{{ title }}</h5>
		<p>用户性别：{{ userSex }}</p>
	</div>
</template>

<script>
	import {eventBus} from '../../main'
	export default {
		props: ['userSex'],
		data() {
			return {
				title: '用户列表'
			}
		},
		created() {
			eventBus.$on('editSex', (sex) => {
				this.userSex = sex;
			})
		}
	}
</script>

<style>
	div.content{
		border: 1px solid blue;
	}
</style>