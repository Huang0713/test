<template>
  <div class="container">
    <h2 class="row text-center">
      <app-header></app-header>
    </h2>
    <div>
      <p>用户姓名：{{ name }}</p>
      <p>用户年龄：{{ age }}</p>
      <p>用户性别：{{ sex }}</p>
      <hr>
    </div>
    <div class="row main">
      <div class="col-xs-4">
        <app-user-list :userSex='sex'></app-user-list>
      </div>  
      <div class="col-xs-8">
        <app-user-detail :userName='name' :userSex='sex' :userAge='age' :parentName='changName' @editParentAge='age = $event'></app-user-detail>
      </div>  
    </div>
    <h2 class="row text-center">
      <app-footer></app-footer>
    </h2>
  </div>
</template>

<script>
import appHeader from './components/common/Header.vue'
import appFooter from './components/common/Footer.vue'
import appUserList from './components/private/userList.vue'
import appUserDetail from './components/private/userDetail.vue'

export default {
  data() {
    return {
      name: 'blue',
      age: '23',
      sex: 'boy'
    }
  },
  components: {
    appHeader,
    appFooter,
    appUserList,
    appUserDetail
  },
  methods: {
    changName(name) {
      this.name = name;
    }
  },
  created() {
  }
}
</script>

<style>
  div.main{
    height: 300px;
  }
</style>
