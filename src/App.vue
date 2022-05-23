<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style>
html,
body,
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
html,
body {
  height: 100%;
}
body {
  font-size: 16px;
}

.clearfix:after {
  content: "";
  display: block;
  visibility: hidden;
  clear: both;
}
#app {
  font-family: "微软雅黑";
  height: 100%;
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
