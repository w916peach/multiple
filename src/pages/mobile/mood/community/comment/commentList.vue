<template>
  <ul class="comment-list">
    <li v-for="(item, key) in commonlist" :key="key">
      <div class="face">
        <img :src="item.img" alt="" />
      </div>
      <div class="content">
        <div class="name">{{ item.name }}</div>
        <div class="con">{{ item.content }}</div>
        <div class="bottom">
          <span class="time">{{ item.time }}</span>
          <span class="location">来自{{ item.location }}</span>
        </div>
      </div>
    </li>
    <p class="tip">已过滤不当言论,部分评论暂不展示。</p>
  </ul>
</template>

<script>
import img1 from "../../../../../assets/images/@head1.png";
import img2 from "../../../../../assets/images/@head2.png";
import img3 from "../../../../../assets/images/@head3.png";
import img4 from "../../../../../assets/images/@head4.png";
import img5 from "../../../../../assets/images/@head5.png";

const commonlist = [
  {
    img: img1,
    name: "苹果派233",
    content: "棒棒哒~~~",
    time: "2022.5.10 17:10:29",
    location: "黑龙江",
  },
  {
    img: img2,
    name: "一只锦鲤",
    content: "好腻害！！~",
    time: "2022.5.10 17:10:29",
    location: "湖北",
  },
  {
    img: img3,
    name: "冰淇淋like",
    content: "不错不错啦",
    time: "2022.5.10 17:10:29",
    location: "上海",
  },
  {
    img: img4,
    name: "巧乐兹有滋有味",
    content: "厉害了我的宝~~",
    time: "2022.5.10 17:10:29",
    location: "云南",
  },
  {
    img: img5,
    name: "富贵花开",
    content: "棒棒棒！赞赞赞！",
    time: "2022.5.10 17:10:29",
    location: "广西",
  },
];
export default {
  name: "comment-list-page",
  data() {
    return { commonlist };
  },
  mounted() {},
};
</script>
<style scoped>
.comment-list li {
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.face {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid rgb(255, 130, 0);
  overflow: hidden;
  text-align: center;
}
.face:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.content {
  margin-left: 5px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  flex: 1;
}
.name {
  color: rgb(255, 130, 0);
}
.con {
  color: #000;
  padding: 5px 0px;
}
.location {
  margin-left: 10px;
  font-size: 14px;
}
.time {
  font-size: 14px;
}
.tip {
  text-align: center;
  padding-bottom: 10px;
  font-size: 14px;
  color: #939393;
}
</style>
