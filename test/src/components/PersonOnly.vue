<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item,index) in personArr" :key="index">
        <a @click="toPerson(item.id)">
          {{item.name}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '个人中心',
      personArr:[
        {
          name:"小白",
          id:0,
        },
        {
          name:"小黑",
          id:1,
        },
        {
          name:"小黄",
          id:2,
        },
      ]
    }
  },
  methods:{
    toPerson(id){
      this.$router.push('')
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
