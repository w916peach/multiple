<template>
  <div class="moodtype">
    <p class="title-tip">
      <span>番茄酱，请挑选今日心情</span>
      <img src="../../../../assets/images/@hand-point-down.png" alt="" />
    </p>
    <ul class="moodtype-list clearfix">
      <li
        v-for="(item, key) in moodTypeList"
        :key="key"
        :class="index === key ? 'active' : ''"
      >
        <img :src="item.img" alt="" @click="gl(key)" />
        <p class="type">
          <img
            src="../../../../assets/images/@1xfas-fa-check-circle3.png"
            alt=""
          />
          <span :class="index === key ? 'active' : ''">{{ item.type }}</span>
        </p>
      </li>
    </ul>
    <div class="bottom">
      <button @click="$router.push({ name: 'mobilepublish' })">确定</button>
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

const moodTypeList = [
  {
    img: img1,
    type: "无语",
  },
  {
    img: img2,
    type: "生气",
  },
  {
    img: img3,
    type: "开心",
  },
  {
    img: img4,
    type: "鄙视",
  },
  {
    img: img5,
    type: "可爱",
  },
  {
    img: img6,
    type: "坏笑",
  },
  {
    img: img7,
    type: "懵懵",
  },
  {
    img: img8,
    type: "沮丧",
  },
];
export default {
  name: "everyday-page",
  data() {
    return {
      moodTypeList,
      index: -1,
    };
  },
  methods: {
    gl(index) {
      this.index = index;
      console.log(this.index);
    },
  },
};
</script>

<style>
div.moodtype {
  background-color: rgb(251, 249, 224);
  height: 100%;
  text-align: center;
}
.title-tip {
  height: 1.5rem;
  line-height: 1.5rem;
}
.title-tip > span {
  color: rgb(230, 107, 107);
  font-size: 18px;
}
.title-tip > img {
  vertical-align: middle;
}
.moodtype-list {
  background-color: rgb(251, 249, 224);
  width: 6.48rem;
  margin: 0px auto 20px;
}
.moodtype-list li {
  width: 2.16rem;
  float: left;
  padding: 10px;
  border-radius: 10px;
}
.moodtype-list li.active {
  background-color: rgba(240, 118, 100, 0.5);
}
.moodtype-list li span.active {
  color: rgb(255, 68, 0);
  font-weight: bold;
}
.moodtype-list li > img {
  width: 1.7rem;
}
.type {
  height: 30px;
  line-height: 30px;
}
.type > img {
  vertical-align: middle;
}
.bottom > button {
  padding: 10px 30px;
  background-color: rgba(255, 130, 0, 0.5);
  color: #fff;
  font-weight: bold;
}
</style>
