<template>
  <div id="news">
    {{message}}
    <br />
    <button @click="runNode()">使用nodejs的fs模块</button>
    <el-input v-model="input"></el-input>
    <button @click="insert()">添加</button>
    <button @click="find()">查找</button>
    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
  </div>
</template>
<script>
const fs = require("fs");
export default {
  data() {
    return {
      message: "我是新闻页面",
      input: "",
      textarea: ""
    };
  },
  methods: {
    runNode() {
      fs.readFile("package.json", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log(data.toString());
      });
    },
    insert() {
      console.log(this.input);
      this.$db.insert({ msg: this.input });
    },
    find() {
      this.$db.find({}, function(err, doc) {
        console.log("get message: " + JSON.stringify(doc));
      });
    }
  }
};
</script>