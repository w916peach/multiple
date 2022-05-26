<template>
  <div class="login">
    <div class="main">
      <div class="title">
        <h2>Login</h2>
      </div>
      <div class="user">
        <i class="iconfont">&#xe8c8;</i>
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          :class="{ active: !checkUsername }"
          @change="usernameChange()"
        />
      </div>
      <div class="pass">
        <i class="iconfont">&#xe649;</i>
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          :class="{ active: !checkPassword }"
          @change="passwordChange()"
        />
      </div>
      <div class="submit">
        <button @click="loginClick">Login</button>
      </div>
    </div>
    <!-- <Tip :value="visible" @input="visible = $event" :tipInfo="tipInfo"  /> -->
    <Tip v-model="visible" :tipInfo="tipInfo" />
  </div>
</template>

<script>
import Tip from "./Tip.vue";
import { setLoginInfo } from "../../utils/storage";

export default {
  data() {
    return {
      username: "",
      checkUsername: true,
      password: "",
      checkPassword: true,
      visible: false,
      tipInfo: {
        title: "温馨提示",
        content: "账号或密码输入有误，请检查~",
      },
    };
  },
  components: { Tip },
  methods: {
    async loginClick() {
      this.checkUsername = this.username !== "";
      this.checkPassword = this.password !== "";
      if (!this.checkUsername || !this.checkPassword) {
        return;
      }
      try {
        const data = await this.request({
          url: this.API.loginApi,
          method: "POST",
          data: {
            username: this.username,
            password: this.password,
          },
        });
        setLoginInfo({
          token: data.token,
          username: this.username,
          uid: data.uid,
        });
        this.$router.push("/mood");
      } catch (err) {
        this.tipInfo.content = JSON.parse(err.responseText).msg;
        this.visible = true;
      }
    },
    usernameChange() {
      this.checkUsername = this.username !== "";
    },
    passwordChange() {
      this.checkPassword = this.password !== "";
    },
  },
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
