<template>
  <div
    class="list-box"
    @click="
      operateId = -1;
      commentId = -1;
    "
  >
    <ul class="list">
      <li v-for="(item, key) in moodData" :key="key">
        <div class="user">
          <span>用户:</span>
          {{ item.user.username }}
        </div>
        <div class="content">
          {{ item.content }}
        </div>
        <div class="communication">
          <div class="time">
            {{ formatDate(item.datetime) }}
          </div>
          <div class="likecomment">
            <div class="operation" v-show="operateId === item.id">
              <span class="like">
                <i class="iconfont">&#xe651;</i>
                <span
                  @click="
                    () => {
                      likeClick(item.id);
                    }
                  "
                >
                  {{ !item.hadGivenFabulous ? "点赞" : "取消" }}
                </span>
              </span>
              <span class="comment">
                <i class="iconfont icon-pinglun1"></i>
                <span
                  @click.stop="
                    () => {
                      commentClick(item.id);
                    }
                  "
                  >评论</span
                >
              </span>
            </div>
            <div class="moreoperation" @click.stop="operateId = item.id">
              <i class="iconfont">&#xe69b;</i>
            </div>
          </div>
        </div>
        <div class="type">
          <span>#{{ item.type }}</span>
        </div>
        <div class="likelist">
          <ul class="clearfix">
            <li
              v-if="
                moodData.find((Item) => {
                  return Item.id === item.id;
                }).like.length > 0
              "
              class="icon"
            >
              <i class="iconfont">&#xe651;</i>
            </li>
            <li
              v-for="(like, key) in moodData.find((Item) => {
                return Item.id === item.id;
              }).like"
              :key="key"
            >
              {{ like.username }}
            </li>
          </ul>
        </div>
        <div class="commentList">
          <ul v-show="item.comment.length > 0" class="firstComment">
            <li v-for="(ite, index) in item.comment" :key="index">
              <div class="commentWrap">
                <span class="speaker">{{ ite.speaker[0].username }}：</span>
                <span
                  class="content"
                  @click.stop="
                    replyClick(
                      ite.speaker[0].username,
                      item.id,
                      ite.id,
                      ite.speaker[0].uid
                    )
                  "
                  >{{ ite.content }}</span
                >
              </div>
              <ul class="replyComment">
                <li
                  v-for="(reply, i) in item.comment[index].replyComment"
                  :key="i"
                >
                  <span
                    v-if="
                      reply.speaker[0].username !== reply.listener[0].username
                    "
                  >
                    <span class="speaker">{{ reply.speaker[0].username }}</span>
                    回复
                    <span class="listener"
                      >{{ reply.listener[0].username }}：</span
                    >
                  </span>
                  <span v-else>
                    <span class="speaker"
                      >{{ reply.speaker[0].username }}：</span
                    >
                  </span>
                  <span class="content">{{ reply.content }}</span>
                </li>
              </ul>
            </li>
          </ul>
          <div
            class="leaveComment"
            v-show="item.id === commentId ? true : false"
          >
            <textarea
              name=""
              id=""
              cols="100"
              rows="6"
              :placeholder="
                commentName === '' || commentName === getLoginInfo().username
                  ? '评论'
                  : '回复' + commentName
              "
              v-model="commentVal"
              @click.stop="commentId = item.id"
            ></textarea>
            <span @click="leaveCommentClick(item.id)" v-if="commentName === ''"
              >发送</span
            >
            <span @click.stop="leaveReplyClick()" v-else>发送</span>
          </div>
        </div>
      </li>
    </ul>
    <Pagination :pages="pages" />
  </div>
</template>
<script>
import { getLoginInfo } from "../../utils/storage";
import Pagination from "./pagination.vue";
import { formatDate } from "../../utils/index";

export default {
  name: "moodlist-page",
  props: ["type", "searchValue", "order", "pageSize"],
  components: {
    Pagination,
  },
  data() {
    return {
      moodData: [],
      operateId: -1, // 心情的id,控制点赞评论是否显示
      pages: 0,
      commentId: -1, // 心情的id,控制评论框是否显示
      commentVal: "", // 留言或回复内容
      commentName: "",
      msgId: -1, // 评论的id
      msgUid: -1, // 评论的人的uid
    };
  },
  mounted() {
    this.queryMood();
  },
  methods: {
    getLoginInfo,
    formatDate,
    queryMood(pageIndex = 1) {
      const type = getLoginInfo().token ? "POST" : "GET"; // 根据登录情况判断请求方式
      this.request({
        url: this.API.moodApi,
        method: type,
        params: {
          content: this.searchValue,
          type: this.type,
          pageSize: this.pageSize,
          pageIndex,
          order: this.order,
        },
      }).then((data) => {
        this.moodData = data.data.map(
          (item) => ({ ...item, comment: [] }) // 给moodData数据中添加comment属性，后面修改comment属性值vue才能检测到
        );

        this.pages = new Array(Math.ceil(data.total / this.pageSize));
        Object.keys(this.moodData).forEach((key) => {
          // 请求评论数据，添加到moodData中
          this.queryComment(this.moodData[key].id, key);
        });
      });
    },
    // 请求评论数据
    queryComment(id, key) {
      this.request({
        url: this.API.commentApi,
        method: "GET",
        params: {
          mood: id,
        },
      }).then((data) => {
        // 获取评论数据，嵌入到moodData中
        // 同时给评论数据comment中添加replyComment属性，后面修改replyComment属性值vue才能检测到
        this.moodData[key].comment = data.data.map((item) => ({
          ...item,
          replyComment: [],
        }));

        const { comment } = this.moodData[key];

        // 遍历评论数据，请求每个评论数据的回复评论数据，嵌入到评论数据中
        data.data.forEach((item, index) => {
          this.queryReplyComment(comment, item.id, index);
        });
      });
    },
    // 请求回复评论数据
    queryReplyComment(comment, id, key) {
      this.request({
        url: this.API.replyApi,
        method: "GET",
        params: {
          comment: id, // 被回复的评论的id
        },
      }).then((data) => {
        // console.log(data); //回复评论的数据
        // 将回复评论嵌入到数据中
        // eslint-disable-next-line no-param-reassign
        comment[key].replyComment = data.data;
      });
    },
    // 点赞、取消点赞
    likeClick(id) {
      // 获取心情数据：一个对象
      const mood = this.moodData.find((item) => id === item.id);
      // 获取当前点赞的用户名
      const loginUsername = getLoginInfo().username;
      // 获取点赞列表中当前点赞用户名的下标
      const likeIndex = mood.like.findIndex(
        (item) => item.username === loginUsername
      );

      this.request({
        url: this.API.moodGiveFabulous,
        method: "POST",
        data: {
          uid: getLoginInfo().uid, // 当前登录的用户-也可以理解为执行点赞和取消点赞的用户
          id, // 点赞和取消点赞的心情的id
        },
      }).then(() => {
        // location.reload(); //刷新页面，重新获取到
        if (likeIndex !== -1) {
          // 点赞过，就将该点赞用户名从点赞列表中删除，取消点赞
          mood.like.splice(likeIndex, 1);
          mood.hadGivenFabulous = false;
        } else {
          // 没点赞过，就将该点赞用户名添加到点赞列表中，点赞
          mood.like.push({ username: loginUsername });
          mood.hadGivenFabulous = true;
        }
      });
    },
    // 点击评论（显示评论框）
    commentClick(id) {
      this.commentId = id;
      this.operateId = -1;
      this.commentName = "";
    },
    // 点击发送评论
    leaveCommentClick(id) {
      // 获取心情数据：一个对象
      const mood = this.moodData.find((item) => id === item.id);

      if (this.commentVal === "") {
        // alert("内容不能为空");
        return;
      }

      this.request({
        url: this.API.commentApi,
        method: "POST",
        data: {
          content: this.commentVal,
          mood: id,
        },
      }).then(() => {
        // location.reload(); //刷新页面，重新获取到
        // 再次向后台请求评论数据，修改mood心情中的comment评论数据为最新
        this.request({
          url: this.API.commentApi,
          method: "GET",
          params: {
            mood: id,
          },
        }).then((data) => {
          mood.comment = data.data;
          this.commentVal = "";
        });
      });
    },
    // 点击评论内容进行回复(显示回复框)
    replyClick(username, id, msgId, msgUid) {
      this.commentName = username;
      this.commentId = id;
      this.msgId = msgId;
      this.msgUid = msgUid;
    },
    // 点击回复评论的发送按钮
    leaveReplyClick() {
      if (this.commentVal === "") {
        return;
      }

      this.request({
        url: this.API.replyApi,
        method: "POST",
        data: {
          content: this.commentVal, // 回复内容
          comment: this.msgId, // 被回复的评论的id
          listener: this.msgUid, // "被回复的人uid"
        },
      }).then(() => {
        // location.reload();
        // 再次向后台请求回复评论数据，添加到moodData数据的replyComment中
        this.request({
          url: this.API.replyApi,
          method: "GET",
          params: {
            comment: this.msgId, // 被回复的评论的id
          },
        }).then((res) => {
          // 将回复评论嵌入到数据中
          const moodIndex = this.moodData.findIndex(
            (item) =>
              // 获取心情的下标
              item.id === this.commentId
          );
          const commentIndex = this.moodData[moodIndex].comment.findIndex(
            (item) => item.id === this.msgId
          );

          const item = this.moodData[moodIndex].comment[commentIndex];
          item.replyComment = res.data;

          this.commentId = -1;
          this.commentVal = "";
        });
      });
    },
  },
  watch: {
    type() {
      this.queryMood();
    },
    searchValue() {
      this.queryMood();
    },
    order() {
      this.queryMood();
    },
    pageSize() {
      this.queryMood();
    },
  },
};
</script>
<style scoped>
.list-box {
  padding-top: 70px;
  padding-bottom: 20px;
}
.list > li {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 20px;
  background-color: #fff;
  margin: 20px 20px 0px;
}
.list > li > div {
  margin-top: 10px;
}
.communication {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.likecomment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.operation {
  width: 160px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  margin-right: 20px;
  border-radius: 6px;
  background-color: rgba(255, 165, 0, 0.75);
  transition: 2s all;
}

.operation > span {
  height: 30px;
  margin: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.operation > span > i {
  font-size: 20px;
  color: #fff;
}
.operation > span > span {
  color: #fff;
  cursor: pointer;
}
.moreoperation {
  padding: 2px 10px;
  background-color: #eee;
  border-radius: 6px;
  cursor: pointer;
}
.time {
  font-size: 14px;
  font-style: italic;
  color: grey;
}
.likelist > ul > li {
  cursor: pointer;
  float: left;
  color: rgba(255, 165, 0, 0.75);
  margin-right: 10px;
}
.likelist > ul > li.icon > i {
  font-weight: 18px;
  color: rgba(255, 165, 0, 0.75);
  font-weight: bold;
}
.type > span {
  display: inline-block;
  padding: 2px 5px;
  background-color: #eee;
  color: rgb(118, 168, 245);
  border-radius: 6px;
  font-size: 12px;
}
.user {
  cursor: pointer;
}
.user > span {
  font-weight: bold;
}
.content {
  text-indent: 2em;
}
.leaveComment {
  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
  position: relative;
  padding: 10px;
}
.leaveComment > textarea {
  border: 2px solid rgb(7, 193, 96);
  padding: 10px;
  font-size: 16px;
}
.leaveComment > span {
  position: absolute;
  left: 770px;
  top: 85px;
  background-color: orange;
  color: #fff;
  height: 25px;
  line-height: 25px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.commentList {
  background-color: rgb(247, 247, 247);
  border-radius: 10px;
}
.commentList ul.firstComment {
  padding: 10px;
}
.commentList ul.firstComment > li:nth-child(1) {
  padding-top: 0px;
}
.commentList ul > li {
  padding-top: 5px;
}
.commentList ul .speaker,
.commentList ul .listener {
  color: rgb(70, 140, 235);
  font-weight: bold;
}
.commentList ul .content {
  cursor: pointer;
}
.commentList ul.replyComment .speaker {
  margin-right: 5px;
}
.commentList ul.replyComment .listener {
  margin-left: 5px;
}
</style>
