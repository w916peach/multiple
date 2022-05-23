<template>
  <div class="swiper">
    <div class="guideWrap swiper-wrapper" :style="{ width: '360*3+px' }">
      <div class="guide-back-one swiper-slide">
        <div class="guide-one">
          <div class="main" :style="{ marginTop: marT, width: mainW }">
            <div class="upper">
              <img src="../../../assets/images/@1xa1-2.png" alt="" class="animated shake"
                :style="{ width: imgW + 'rem' }">
            </div>
            <div class="lower">
              <img src="../../../assets/images/@1xa1-1.png" alt="" class="animated shake"
                :style="{ width: imgW + 'rem' }">
            </div>
          </div>
        </div>
      </div>
      <div class="guide-back-two swiper-slide">
        <div class="guide-two">
          <div class="main" :style="{ marginTop: marT, width: mainW }">
            <div class="upper">
              <img src="../../../assets/images/@1xa2-1.png" alt="" class="animated slideInLeft"
                :style="{ width: imgW + 'rem' }">
            </div>
            <div class="lower">
              <img src="../../../assets/images/@1xa2-2.png" alt="" class="animated slideInRight"
                :style="{ width: imgW + 'rem' }">
            </div>
          </div>
        </div>
      </div>
      <div class="guide-back-three swiper-slide">
        <div class="guide-three">
          <div class="main" :style="{ marginTop: marT, width: mainW }">
            <div class="upper">
              <img src="../../../assets/images/@1xa3-1.png" alt="" class="animated tada"
                :style="{ width: imgW + 'rem' }">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      imgW: 0,
      marT: "70%",
      mainW: 0
    };
  },
  methods: {
    getPos() {
      let clientW = document.documentElement.clientWidth;
      let clientH = document.documentElement.clientHeight;
      /*
        img 尺寸：背景图宽度*0.52/48
        背景图宽度：设备宽<540时是设备宽；  或者 设备宽>时，600是设备高*375/667
      */

      if (clientW < 540) {
        this.imgW = clientW * 0.52 / 48;
        this.marT = "53%";
        this.mainW = "70%";
      } else {
        this.imgW = clientH * 375 / 667 * 0.52 / 48 / 2.2;
        this.marT = "30%";
        this.mainW = "60%";
      }
    }
  },
  mounted() {
    this.getPos();
    const mySwiper = new Swiper(".swiper", {
      direction: "horizontal",
    });
  }
};
</script>

<style scoped>
.guideWrap {
  position: absolute;
  top: 0rem;
  left: 0rem;
  right: 0rem;
  bottom: 0rem;
  width: 22.5rem;
  display: flex;
  justify-content: space-between;
}

.guide-back-one {
  height: 100%;
  background-color: rgb(253, 223, 245);
}

.guide-back-two {
  height: 100%;
  background-color: rgb(222, 241, 248);
}

.guide-back-three {
  height: 100%;
  background-color: rgb(173, 194, 153);
}

.guide-one {
  height: 100%;
  position: relative;
  background-image: url("../../../assets/images/@1xa1.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  overflow: hidden;
}

.guide-two {
  height: 100%;
  position: relative;
  background-image: url("../../../assets/images/@1xa2.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  overflow: hidden;
}

.guide-two>.main {
  display: flex;
  justify-content: space-between;
}

.guide-three {
  height: 100%;
  position: relative;
  background-image: url("../../../assets/images/@1xa3.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  overflow: hidden;
}

.main {
  width: 70%;
  margin: 0 auto;
  margin-top: 53%;
}

.lower {
  margin-top: 0.3rem;
  text-align: right;
}
</style>
