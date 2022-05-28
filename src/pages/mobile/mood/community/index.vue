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
      <router-view :moods="moods" :noMoreTip="noMoreTip" />
    </div>
  </div>
</template>
>

<script>
export default {
  name: "mood-community",
  props: ["moods", "noMoreTip"],
  data() {
    return {
      data: [1, 2, 3],
    };
  },
};
</script>

<style scoped>
.community {
  padding-top: 0.8rem;
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
  color: #fff;
}
.title > span {
  color: #fff;
  margin: 0px 10px;
}
.title > .line {
  display: inline-block;
  width: 2px;
  background-color: #fff;
  height: 30px;
}

.title > div {
  width: 2rem;
  height: 100%;
  line-height: 0.8rem;
  margin: 0 auto;
  text-align: center;
  color: #fff;
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
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
