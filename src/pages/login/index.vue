<template>
  <div class="login">
    <div class="main">
      <div class="title">
        <h2>Login</h2>
      </div>
      <div class="user">
        <i class='iconfont'>&#xe8c8;</i>
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          ref='username'
          @change="usernameChange()"
        >
      </div>
      <div class="pass">
        <i class='iconfont'>&#xe649;</i>
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          ref='password'
          @change="passwordChange()"
        >
      </div>
      <div class="submit">
        <button @click="loginClick">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import vm from "@/utils/componentStatus.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      isLogin: false
    };
  },
  methods: {
    // 点击登录
    loginClick() {
      if (this.username === "") {
        this.$refs.username.classList.add("active");
        return;
      } else {
        this.$refs.username.classList.remove("active");
      }
      if (this.password === "") {
        this.$refs.password.classList.add("active");
        return;
      } else {
        this.$refs.password.classList.remove("active");
      }
      this.request({
        url: this.API.loginApi,
        method: "POST",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(data => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", this.username);
        localStorage.setItem("uid", data.uid);
        this.isLogin = true;
        this.$router.push("/mood");
      });
    },
    usernameChange() {
      this.$refs.username.classList.remove("active");
    },
    passwordChange() {
      this.$refs.password.classList.remove("active");
    }
  },
  watch: {
    isLogin(newVal) {
      if (newVal) {
        vm.$emit("loginUser", this.username);
      }
    }
  }
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-image: url(../../assets/login.jpg);
  background-size: 100% 100%;
}
.login > .main {
  position: absolute;
  padding: 30px 50px 40px 50px;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
}
.login > .main > div.title {
  text-align: center;
  margin: 0px 60px;
}
.main > .title > h2 {
  font-size: 30px;
  color: #fff;
  padding: 10px 0px;
}
.login > .main input {
  width: 380px;
  padding: 16px 0px 16px 36px;
  background-color: rgba(125, 125, 125, 0.3);
  color: #fff;
}
.login > .main input::-webkit-input-placeholder {
  color: #ccc;
}
.login > .main i {
  font-size: 20px;
  color: #ccc;
  position: absolute;
  top: 15px;
  left: 6px;
}
.login > .main > div {
  margin-top: 40px;
  position: relative;
}
.login > .main button {
  width: 416px;
  background-color: rgba(134, 173, 231, 0.5);
  padding: 16px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
}
.user > input.active,
.pass > input.active {
  border: 2px solid red;
}
</style>


