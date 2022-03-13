<template>
    <div class="register">
        <div class="main">
            <div class="title">
                <h2>注册</h2>
            </div>
            <div class="user">
                <i class='iconfont'>&#xe8c8;</i>
                <input type="text" v-model="username" placeholder="Username">
            </div>
            <div class="pass">
                <i class='iconfont'>&#xe649;</i>  
                <input type="password" v-model="password" placeholder="Password">
            </div>
            <div class="submit">
                <button @click="registerBlick()">注册</button>
            </div>
        </div>
      </div>
</template>

<script>
export default {
  data(){
    return {
      username:"",
      password:"",
    };
  },
  methods:{
    registerBlick(){
      this.$router.push("/login");
    }
  }
};
</script>


<style scoped>
  .register{
    position: absolute;
    top:0px;
    bottom:0px;
    left:0px;
    right:0px;
    background-image:url(../../assets/login.jpg);
    background-size:100% 100%;
  }
  .register>.main{
    position:absolute;
    padding:30px 50px 40px 50px;
    border-radius:8px;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
    background-color:rgba(0,0,0,0.3);
  }
  .register>.main>div.title{
    text-align:center;
    margin:0px 60px;
  }
  .main>.title>h2{
    font-size:30px;
    color:#fff;
    padding:10px 0px;
  }
  .register>.main input{
    width:380px;
    padding:16px 0px 16px 36px;
    background-color:rgba(125,125,125,0.3);
    color:#fff;
  }
  .register>.main input::-webkit-input-placeholder{
    color:#ccc;
  }
  .register>.main i{
    font-size:20px;
    color:#ccc;
    position:absolute;
    top:15px;
    left:6px;
  }
  .register>.main>div{
    margin-top:40px;
    position:relative;
  }
  .register>.main button{
    width:416px;
    background-color:rgba(134, 173, 231, 0.5);
    padding:16px;
    font-weight: bold;
    font-size:18px;
    cursor: pointer;
  }

</style>
