<template>
	<div>我是脚部</div>
</template>

<script>
	export default {
		data() {
			return {
				transmit: 'child'
			}
		},
		created() {
			this.$emit('updata', this.transmit)
		}
	}
</script>