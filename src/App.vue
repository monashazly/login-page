<template>
  <div id="nav" >
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Login></Login>
  </div>
  <router-view/>
</template>
<script>
import Login from "@/components/LoginPage.vue"
export  default{
  name:'App',
   created: function () {
    document.body.style.backgroundColor = "#E7D9EE";
  
  },
  components:{Login},
}
</script>
<style>
body{
  background:wheat;
}

</style>
