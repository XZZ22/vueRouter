<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/index">
          登录
        </router-link>
      </li>
      <li>
        <router-link to='/person'>个人</router-link>
      </li>
       <li>
        <a @click="toLogout" >
          退出
        </a>
      </li>
    </ul>
    <ul>
      <li v-for="(item,index) in detailArr" :key="index">
        <a @click="toDetail(item.id)">
          {{item.name}}
        </a>
      </li>
    </ul>
    <ul>
      <li v-for="(item,index) in detailArr2" :key="index">
        <a @click="toDetail2(item.id)">
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
      msg: '这是首页导航按钮',
      detailArr:[
        {
          name:"刘昊然",
          id:"0",
        },
        {
          name:"易烊千玺",
          id:"1",
        },
        {
          name:"王俊凯",
          id:"2",
        },
        {
          name:"张源",
          id:"3",
        },
      ],
      detailArr2:[
        {
          name:"刘昊然2",
          id:"0",
        },
        {
          name:"易烊千玺2",
          id:"1",
        },
        {
          name:"王俊凯2",
          id:"2",
        },
        {
          name:"张源2",
          id:"3",
        },
      ],
    }
  },
  methods:{
    toDetail(id){
      // parma传参
      this.$router.push(`/detail/${id}`)
    },
    toDetail2(id){
      // query传参
      this.$router.push({
        path:"/detail2",
        query:{
          id:id
        }
      })
    },
    toLogout(){
      localStorage.removeItem('isLogin')
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
