<template>
  <div class="community">
    <div class="title">
      <span @click="$router.push({ name: 'like' })">喜欢</span>
      <span class="line"></span>
      <span @click="$router.push({ name: 'friends' })">好友</span>
      <img
        class="search"
        src="../../../../assets/images/@magnifier.png"
        alt=""
        @click="$router.push({ name: 'search' })"
      />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
>

<script>
export default {
  data() {
    return {
      data: [1, 2, 3],
    };
  },
  name: "mood-community",
};
</script>

<style scoped>
.community {
}

.title {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 0.8rem;
  background-color: rgb(230, 107, 107);
  box-shadow: 0rem 0.06rem 0.06rem 0rem rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.title span {
  color: #fff;
}
.line {
  background-color: #fff;
  width: 2px;
  height: 25px;
  margin: 0 20px;
}
.search {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.content {
  padding-top: 0.8rem;
}
</style>
