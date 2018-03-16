<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="ssss">mock-post</button>
    <button @click="yyy">mock-get</button>
    <button @click="kkk">服务器数据</button>
    <br>
    <img v-for="info in infos" :src="info.pic" alt="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      infos:[]
    }
  },
  methods:{
    ssss(){
      this.$http.post("/news/index").then(res=>{
        console.log("ok",res)
        this.infos = res.data.infos;
      }).catch(err=>{
        console.log("ok",err)
      })
    },
    yyy(){
      this.$http.get("/news/yyy").then(res=>{
        console.log("ok",res)
      }).catch(err=>{
        console.log("ok",err)
      })
    },
    kkk(){
      this.$http.post("http://180.76.58.163:3000/userinfo").then(res=>{
        console.log("ok",res)
      }).catch(err=>{
        console.log("ok",err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
