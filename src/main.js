import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
	methods: {
		changeSex(sex) {
			this.$emit('editSex', sex)
		}
	}
});
Vue.config.silent = true;
Vue.directive('focus', {
	inserted(el) {
		el.focus();
	},
	bind(el, binding, vnode) {
		el.style.color = binding.value;
	}
})

new Vue({
  el: '#app',
  render: h => h(App)
})
