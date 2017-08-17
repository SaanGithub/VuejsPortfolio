<template>
  <div id="dropdown" class="col-12">
    <nav class="navbar fixed-top navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="https://image.ibb.co/ccLuXF/logo.png" width="50" height="50" class="d-inline-block align-top" alt="">
      </a>
      <div class="mainmenu>">
        <ul class="nav navbar-nav navbar-right">
          <button class="navbar-toggler" type="button" v-on:click="toggler" v-bind:class="{ active: isActive }">
            <span class="navbar-toggler-icon"></span>
          </button>
        </ul>
      </div>
    </nav>
    <div v-show="isActive"class="menu text-right">
      <a  href="#" v-on:click="toggler" v-bind:class="{ active: isActive }">Home</a>
      <a  href="#" v-on:click="toggler" v-bind:class="{ active: isActive }">Services</a>
      <a  href="#" v-on:click="toggler" v-bind:class="{ active: isActive }">Contact</a>
    </div>       
  </div>
</template>

<style scoped>

@media(min-width:992px){
  #dropdown{
   display: none;
 }
}

@media(max-width:992px){
  #dropdown{
   padding-left: 0px;
   background-color:#FEF5FB;
 }
 .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(33,37,41, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
.navbar-toggler {
  border-color: rgba(0, 0, 0, 0);
  outline: 0;
}
a{
  color:#212529;
  display: block;
  font-size: 1.2em;
}
.menu{
  font-weight: 100;
  text-decoration: underline;
  padding-top: 70px;
  padding-bottom: 10px;
   background-color:#FEF5FB;
}
}
</style>

<script>
export default {
  data(){
    return{
     isActive: false
   }
 },
 methods: {
  toggler: function(){
    this.isActive = !this.isActive;
    console.log(this.isActive);        
  }
}
}
</script>