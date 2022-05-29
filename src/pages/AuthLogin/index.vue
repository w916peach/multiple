<template>
  <div class="wrapper">
    <div class="login">
      <div class="owl-login" :class="{ open: isOpen }">
        <div class="hand hand-left"></div>
        <div class="hand hand-right"></div>
        <div class="arm arm-left"></div>
        <div class="arm arm-right"></div>
      </div>
      <form :action="actionUrl" method="POST" class="form">
        <div class="form-pad">
          <div class="form-item">
            <input type="text" id="username" name="username" />
          </div>
          <div class="form-item">
            <input
              @blur="isOpen = true"
              @focus="isOpen = false"
              type="password"
              id="password"
              name="password"
            />
          </div>
        </div>
        <div class="footer">
          <input type="submit" class="submit" value="登录" />
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "auth-login",
  setup() {
    const {
      query: { appid, redirectUrl },
    } = useRoute();
    const actionUrl = ref<string>(
      process.env.NODE_ENV === "development"
        ? `http://localhost:5006/api/login/form?appid=${appid}&redirectUrl=${redirectUrl}`
        : `https://8.140.36.65:5008/api/login/form?appid=${appid}&redirectUrl=${redirectUrl}`

      // `/api/proxy?appid=${appid}&redirectUrl=${redirectUrl}&target=/api/login/form`
    );
    const isOpen = ref<boolean>(true);
    return { actionUrl, isOpen };
  },
});
</script>
<style scoped>
.wrapper {
  padding-top: 100px;
}
.login {
  height: 200px;
  background-color: #eeeeee;
}
.owl-login {
  width: 211px;
  height: 108px;
  margin: 0 auto;
  background-image: url(../../assets/owl-login.png);
  position: relative;
}
.hand {
  width: 34px;
  height: 34px;
  border-radius: 40px;
  background-color: #472d20;
  transform: scaleY(0.6);
  position: absolute;
  bottom: -8px;
  transition: all 0.1s ease-out 0s;
  opacity: 0;
}
.owl-login.open .hand {
  opacity: 1;
}
.hand-left {
  left: 0px;
}
.hand-right {
  right: 0px;
}
.arm {
  position: absolute;
  width: 40px;
  height: 65px;
  background-image: url(../../assets/owl-login-arm.png);
  transition: all 0.3s;
}
.arm-left {
  left: 60px;
  top: 60px;
}
.owl-login.open .arm-left {
  transform: translateX(-40px) translateY(40px);
  opacity: 0;
}
.arm-right {
  transform: rotateY(180deg);
  top: 60px;
  right: 55px;
}

.owl-login.open .arm-right {
  transform: rotateY(180deg) translateX(-40px) translateY(40px);
  opacity: 0;
}
.form {
  border: 1px solid #ddd;
  width: 398px;
  margin: 0 auto;
  z-index: 1;
  margin-top: -10px;
  position: relative;
}
.form-pad {
  padding: 30px;
  background-color: #fff;
}

.form-item {
  margin-bottom: 10px;
}
.form-item input {
  display: block;
  height: 40px;
  padding: 9px 6px 9px 40px;
  border: 1px solid #ccc;
  outline: none;
  width: 100%;
}
.footer {
  height: 65px;
  padding: 15px 30px;
  background-color: rgb(247, 247, 247);
  border-top: 1px solid #ccc;
  text-align: right;
}
.footer .submit {
  height: 100%;
  padding: 6px 12px;
  border-radius: 5px;
  background-color: rgb(26, 143, 180);
  border: 1px solid rgb(53, 126, 189);
  color: #fff;
  cursor: pointer;
}
</style>
