<template>
  <div class="login p-3 container mt-5 rounded " style="max-width:400px ">
    <h2 class="text-center head1">Login</h2>
    
 <form>
  <div class="form-group">
    <label for="exampleInputEmail1 ">Email address</label>
    <input type="email" class="  hover-class form-control pi1" id="exampleInputEmail1" aria-describedby="emailHelp" style="font-family :'Font Awesome 5 Free';" placeholder="    Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input style="font-family : 'FontAwesome';" type="password" class=" hover-class form-control" id="exampleInputPassword1"  placeholder="    Password">
  </div>
 
 
  <button type="submit  " class=" mt-4 btn btn-primary w-100 sub">login</button>
</form>
<div class="signop mt-5 text-center text-muted"> Or SignUp Using</div>
<div class="flx mt-3">
 <i class="fab fa-facebook fb hover-class "></i>
 <i class="fab fa-twitter twt hover-class"></i>
 <i class="fab fa-google g hover-class"></i>
</div>
<div class="signop mt-5 text-center text-muted"> Or Sign Up Using</div>
<div class="signop mt-5 text-center  hover-class2"> Sign Up</div>


  </div>
</template>

<script>

export default {
  name: 'Login',
 
  props: {
    msg: String
  }
}
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Oswald:wght@200;400&display=swap');
.login{
 background-color: whitesmoke;
  height: 550px;
  box-shadow: 10px 25px 30px rgb(167, 17, 197);
   /* animation: mymove 3s infinite; */
  
}

/* @keyframes mymove {
  50% {box-shadow: 10px 20px 30px rgb(167, 17, 197);}
} */
.head1{
   font-weight: bold;
   font-family: 'Oswald', sans-serif;
}
.sub{
  border: 1px solid;
  border-radius: 13px;
  border-style: none;
background: linear-gradient(to left, #33ccff 5%, #ff99cc 89%);
}
.fb{
  color: #3b5998;
  font-size: 35px;
  margin: 0px 5px;
}
.twt{
  color: white;
  border: 1px solid;
  background-color:#00acee ;
  border-style: none;
  font-size: 35px;
  border-radius: 19px;
  padding: 8px;
  margin: 0px 5px;
}
.g{
  color: white;
   font-size: 35px;
   border:1px solid;
   background-color: #EA4335;
   padding: 8px;
   border-style: none;
   border-radius: 19px;
   margin: 0px 5px;
}
.flx{
  display: flex;
  justify-content: center;
 
}
.signop{
  font-size: 13px;
   
   font-family: 'Oswald', sans-serif;
}
input:focus::-webkit-input-placeholder {
    color:#ff99cc;
    opacity:0.5;
}
.hover-class:hover{
    cursor: pointer;
  animation:headShake;
  animation-duration:0.3s;
  
}
.hover-class2:hover{
  cursor: pointer;
  animation:swing;
  animation-duration:0.5s;
  color:#ff99cc;
  
  
}

</style>
