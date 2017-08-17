<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
      <dropdown></dropdown>
      <sidebar></sidebar>
      <mainpage></mainpage>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);


export default {
data(){
  return{ 
    }
  }
}
</script>

<style>

html,body{
    height:100%;
     background-color:#F4F9D3;

}

.container, .row{
  padding-left: 0;
}

.container{
 
}



</style>
