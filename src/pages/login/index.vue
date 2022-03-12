<template>
    <div class="login">
        <div user>
            用户名：<input type="text" v-model="username">
        </div>
        <div user>
            密码：<input type="password" v-model="password">
        </div>
        <div>
            <button @click="loginClick">登录</button>
        </div>
    </div>
</template>

<script>

export default {
  data(){
    return {
      username:'',
      password:''
    };
  },
  methods:{
    loginClick(){
      this.request({
        url:this.API.loginApi,
        method:"POST",
        data:{
          username:this.username,
          password:this.password
        }
      }).then((data)=>{
        console.log(data);
      });
    }
  },
  mounted(){
    
  }
};
</script>

