<template>
  <div class="login">
    <div class="main">
      <div class="faceWrap">
        <div class="face">
          <img src="../../../assets/images/@1xa2-2.png" alt="" class="headtip" />
        </div>
        <button>头像</button>
      </div>
      <div class="userInfor">
        <div class="idcode">
          <img src="../../../assets/images/@1xfar-fa-user-circle.png" alt="" />
          <input type="text" placeholder="ID" />
        </div>
        <div class="username">
          <img src="../../../assets/images/@1xfas-fa-child.png" alt="" />
          <input type="text" placeholder="用户名" v-model="username" @change="usernameChange"
            :class="{ active: !checkUsername }" />
        </div>
        <div class="password">
          <img src="../../../assets/images/@1xfas-fa-asterisk.png" alt="" />
          <input type="password" placeholder="密码" v-model="password" @change="passwordChange"
            :class="{ active: !checkPassword }" />
        </div>
      </div>
      <div class="bottom">
        <div class="btn">
          <button class="loginBtn" @click="loginClick">登录</button>
          <button class="registerBtn">注册</button>
        </div>
        <div class="tip">
          <div class="left">
            <img src="../../../assets/images/@1xfas-fa-check-circle3.png" alt="" />
            <span>记住密码</span>
          </div>
          <div class="right">
            <span>忘记密码？</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setLoginInfo } from "../../../utils/storage";
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
        this.$router.push("/mobile/mood");
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
  top: 0rem;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
  background-color: rgb(250, 250, 225);
}

.login>.main {
  width: 70%;
  margin: 0 auto;
  margin-top: 5%;
  text-align: center;
}

.face {
  width: 1.6rem;
  height: 1.6rem;
  border: 2px solid rgb(255, 122, 122);
  border-radius: 50%;
  margin: 0.2rem auto;
  position: relative;
  overflow: hidden;
  background-color: rgb(245, 240, 140);
}

.face>.headtip {
  width: 1.4rem;
  position: absolute;
  top: 0rem;
  left: 50%;
  margin-left: -0.7rem;
}

.faceWrap>button {
  padding: 0.1rem 0.2rem;
  border-radius: 0.25rem;
  background-color: rgb(250, 250, 225);
  border: 0.025rem solid rgb(255, 122, 122);
  color: rgb(255, 122, 122);
  font-size: 0.3rem;
}

.userInfor>div {
  position: relative;
  margin-top: 0.6rem;
}

.userInfor>div>img {
  position: absolute;
  top: 0.26rem;
  left: 0.28rem;
}

.userInfor>div>input {
  width: 4rem;
  /* outline: none; */
  border: none;
  padding: 0.3rem 0.25rem 0.3rem 0.8rem;
  background-color: rgb(255, 122, 122);
  font-size: 0.3rem;
  color: #fff;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.008rem 0.008rem rgb(205, 204, 194);
}

.userInfor>div>input::placeholder {
  font-size: 0.3rem;
  color: #fff;
}

.userInfor>div>input.active {
  border: 0.05rem solid red;
}

.bottom {
  margin-top: 0.6rem;
}

.bottom>.tip {
  margin-top: 0.6rem;
}

.bottom>.btn>button {
  padding: 0.15rem 0.4rem;
  border: 0.025rem solid rgb(255, 122, 122);
  background-color: #fff;
  border-radius: 0.2rem;
  color: rgb(255, 122, 122);
  font-size: 0.3rem;
  margin: 0rem 0.1rem;
  box-shadow: 0.1rem 0.1rem 0.008rem 0.008rem rgb(205, 204, 194);
}

.bottom>.btn {
  display: flex;
  justify-content: space-between;
}

.bottom>.tip {
  display: flex;
  justify-content: space-between;
}

.bottom>.tip span {
  color: rgb(255, 122, 122);
  font-size: 0.26rem;
  position: relative;
  top: 0.12rem;
  left: 0.1rem;
}

.bottom>.tip>div {
  margin: 0rem 0.1rem;
  display: flex;
}
</style>
