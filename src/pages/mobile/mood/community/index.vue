<template>
  <div class="community">
    <div class="title">
      <div class="center">
        <span @click="$router.push({ name: 'like' })">喜欢</span>
        <span @click="$router.push({ name: 'friends' })">好友</span>
        <img src="../../../../assets/images/@interval.png" alt="" />
      </div>
      <img
        src="../../../../assets/images/@magnifier.png"
        alt=""
        @click="$router.push({ name: 'search' })"
      />
    </div>
    <router-view />
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
  height: 100%;
}

.title {
  position: relative;
  height: 0.8rem;
  /* padding: 0.25rem 0rem; */
  background-color: rgb(230, 107, 107);
  box-shadow: 0rem 0.06rem 0.06rem 0rem rgba(0, 0, 0, 0.3);
}

.title > div {
  width: 2rem;
  height: 100%;
  line-height: 0.8rem;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  position: relative;
}

.title > div > span {
  margin: 0rem 0.2rem;
}

.title > div > img {
  position: absolute;
  top: 0.15rem;
  left: 1rem;
}

.title > img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 90%;
}
</style>
