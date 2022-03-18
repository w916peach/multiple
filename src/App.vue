<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style>
html,body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
div,
span,
ul,
li,
i,
select,
option,
input,
textarea,
button {
  padding: 0;
  margin: 0;
  list-style: none;
  color: rgba(0, 0, 0, 0.8);
}

.clearfix:after {
  content: "";
  display: block;
  visibility: hidden;
  clear: both;
}
#app {
  font-family: "微软雅黑";
  min-width: 1100px;
}
input,
button,
select,
textarea {
  outline: none;
  border: none;
  border-radius: 5px;
}
</style>
