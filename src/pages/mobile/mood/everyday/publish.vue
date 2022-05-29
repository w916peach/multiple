<template>
  <div class="mobile-publish">
    <div class="main">
      <div class="title">
        <div class="cancel" @click="$router.push({ name: 'everyday' })">
          取消
        </div>
        <div class="middle">
          <span>发心情</span>
          <p class="user">用户:dandan</p>
        </div>
        <div class="send">发送</div>
      </div>
      <div class="content">
        <div class="mood-content">
          <textarea placeholder="分享心情..."></textarea>
          <div class="img-wrap clearfix">
            <div class="img" v-for="(item, key) in imgs" :key="key">
              <div class="img-del">×</div>
              <img :src="item.img" alt="" />
            </div>
          </div>
        </div>
        <div class="tip">
          <div class="tip-l">
            <div class="add-posion">
              <i class="iconfont">&#xebd2;</i>
              <span>添加位置</span>
            </div>
            <div class="add-topic">
              <i class="iconfont">&#xe828;</i>
              <span>话题</span>
            </div>
          </div>
          <div class="tip-r">
            <div>
              <i class="iconfont">&#xe63f;</i>
              <span>公开</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <i class="iconfont">&#xe694;</i>
      <i class="iconfont">&#xe60b;</i>
      <i class="iconfont">&#xe646;</i>
      <i class="iconfont">&#xe726;</i>
      <i class="iconfont">&#xe78b;</i>
    </div>
  </div>
</template>

<script>
import img1 from "../../../../assets/images/@moodtype-1.png";
import img2 from "../../../../assets/images/@moodtype-2.png";
import img3 from "../../../../assets/images/@moodtype-3.png";
import img4 from "../../../../assets/images/@moodtype-4.png";
import img5 from "../../../../assets/images/@moodtype-5.png";
import img6 from "../../../../assets/images/@moodtype-6.png";
import img7 from "../../../../assets/images/@moodtype-7.png";
import img8 from "../../../../assets/images/@moodtype-8.png";

export default {
  name: "publish-page",
  data() {
    return {
      imgs: [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
        { img: img7 },
        { img: img8 },
        { img: img8 },
      ],
    };
  },
};
</script>
<style scoped>
.mobile-publish {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main {
  flex: 1;
  overflow-y: auto;
  padding: 0px 10px;
}
.title {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 0px 10px;
}

.title > div {
  text-align: center;
  padding: 5px 10px;
  border-radius: 20px;
}
.title > .middle > span {
  font-size: 20px;
}
.title .user {
  color: #939393;
}
.send {
  background-color: rgb(255, 130, 0);
  color: #fff;
}
.content {
  height: 100%;
  padding-top: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mood-content {
  flex: 1;
}
.mood-content textarea {
  width: 100%;
  height: 3rem;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  color: #939393;
  /* border: 1px solid #ccc; */
}
.img {
  width: 2.3rem;
  height: 2.3rem;
  border: 1px solid #eee;
  float: left;
  margin-left: 3px;
  margin-bottom: 3px;
  position: relative;
}
.img > img {
  width: 100%;
  height: 100%;
}
.img-del {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 20px;
  height: 20px;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 6px;
}
.tip {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.tip-l {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tip > div > div {
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 12px;
}
.tip span {
  color: #939393;
}
.tip i {
  color: #939393;
  font-size: 18px;
}
.add-topic {
  margin-left: 10px;
}
.bottom {
  height: 1rem;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bottom i {
  font-size: 30px;
}
</style>
