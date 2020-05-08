<template>
  <div id="home">
    {{message}}
    <br />
    <br />

    <el-button @click="sendMsg()">给主进程广播数据</el-button>

    <br />

    <br />

    <!-- click.stop 阻止冒泡 

    click.prevent  阻止默认行为
    -->

    <a href="http://www.baidu.com" @click.prevent="openUrl($event)">打开百度</a>
    <br />

    <br />

    <br />
    <button @click="runNode()">使用nodejs的模块</button>
  </div>
</template>
<script>
const path = require("path");
export default {
  data() {
    return {
      message: "首页组件"
    };
  },
  methods: {
    sendMsg() {
      this.$electron.ipcRenderer.send("toMain", "给主进程广播数据");
    },
    openUrl(event) {
      console.log(event.srcElement.href);

      var linkUrl = event.srcElement.href;

      this.$electron.shell.openExternal(linkUrl);
    },
    runNode() {
      var dir = path.join("/aaaa", "xxxx");

      console.log(dir);
    }
  }
};
</script>