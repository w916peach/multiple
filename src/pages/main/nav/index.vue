<template>
  <div class="nav">
    <ul>
      <li v-for="(item, key) in navData" :key="key">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import navData from "@/router/routes";

export default {
  data() {
    return {
      navData,
    };
  },
  mounted() {
    // console.log(navData);
  },
};
</script>

<style scoped>
</style>


