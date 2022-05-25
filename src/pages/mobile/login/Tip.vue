<template>
  <div class="popup" v-if="value">
    <div class="center">
      <h2>{{ tipInfo.title }}</h2>
      <div class="main">
        <p class="tip">{{ tipInfo.content }}</p>
        <div class="content"></div>
        <div class="btn">
          <button class="sure" @click="sureClick()">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tipInfo", "value"],
  methods: {
    sureClick() {
      this.$emit("input", false);
    },
  },
};
</script>

<style scoped>
.popup {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(255, 255, 255, 0.2);
}

.center {
  background-color: rgba(255, 187, 112, 0.75);
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 30px 10px;
  border-radius: 10px;
}

.center>h2 {
  text-align: center;
  color: rgb(66, 50, 50);

}

.tip {
  padding: 20px;

  color: rgb(66, 50, 50);

}

.btn {
  display: flex;
  justify-content: end;
}

.btn>button {
  margin: 0px 10px;
  padding: 10px 20px;
  background-color: rgb(102, 126, 126);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
</style>
