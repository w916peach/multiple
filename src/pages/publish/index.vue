<template>
  <div class="publish">
    <div class="center">
      <div class="top">
        <span>选择心情类型:</span>
        <select name="" id="" v-model="type">
          <option :value="key" v-for="(item, key) in moodType" :key="key">
            {{ item }}
          </option>
        </select>
      </div>
      <div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="请输入心情"
          v-model="content"
        ></textarea>
      </div>
      <div class="publishbtn">
        <button @click="publishClick">发表</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moodType: {},
      type: "NICE",
      content: "",
    };
  },
  methods: {
    publishClick() {
      this.request({
        url: this.API.moodCreate,
        method: "POST",
        // headers: { Authorization: localStorage.getItem("token") },
        data: {
          content: this.content,
          type: this.type,
        },
      }).then(() => {
        // 回到mood页面
        this.$router.push("/mood");
      });
    },
  },
  mounted() {
    this.request({
      url: this.API.moodTypeApi,
    }).then((data) => {
      console.log(data);
      this.moodType = data;
    });
  },
};
</script>

<style scoped>
.center {
  width: 80%;
  margin: 30px auto;
}
.center > div {
  margin-top: 20px;
}
.top > select {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin-left: 10px;
}
textarea {
  border: 1px solid #ccc;
  width: 500px;
  height: 200px;
  padding: 10px;
}
.publishbtn > button {
  padding: 10px 20px;
  background-color: orange;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
</style>
