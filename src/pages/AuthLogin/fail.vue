<template>
  <div>登录失败，<button @click="relogin">重新登录</button></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "auth-login-fail",
  setup() {
    const relogin = (): void => {
      window.history.back();
    };
    return {
      relogin,
    };
  },
});
</script>
