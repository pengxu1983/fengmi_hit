<template>
  <div class="container">
    <router-link to="/login">登录</router-link> |
    <router-link to="/create">注册</router-link>
    <form>
      <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" class="form-control" id="username" placeholder="用户名"
          v-model="username"
        >
      </div>
      <div class="form-group">
        <label for="realname">姓名</label>
        <input type="text" class="form-control" id="realname" placeholder="姓名"
          v-model="realname"
        >
      </div>
      <div class="form-group">
        <label for="bankcard">银行卡号</label>
        <input type="text" class="form-control" id="bankcard" placeholder="银行卡号"
          v-model="bankcard"
        >
      </div>
      <div class="form-group">
        <label for="bankinfo">开户行信息</label>
        <input type="text" class="form-control" id="bankinfo" placeholder="开户行信息"
          v-model="bankinfo"
        >
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email" placeholder="Email"
          v-model="email"
        >
      </div>
      <div class="form-group">
        <label for="institute">学院</label>
        <select class="custom-select d-block w-100" id="country" required
          v-model="institute"
        >
          <option disabled value="">选择</option>
          <option>哈工大</option>
          <option>疯蜜总部</option>
          <option>其他</option>
        </select>
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" class="form-control" id="password" placeholder="密码"
          v-model="password"
        >
      </div>
      <div class="form-group">
        <label for="passwordag">密码确认</label>
        <input type="password" class="form-control" id="passwordag" placeholder="密码确认"
          v-model="passwordag"
        >
      </div>
      <button type="submit" class="btn btn-primary"
        @click="create"
      >注册</button>
      <p>{{ msg }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreatePage',
  props: {
  },
  data: function(){
    return {
      username  : '',
      realname  : '',
      bankcard  : '',
      bankinfo  : '',
      email     : '',
      institute : '',
      password  : '',
      passwordag: '',
      msg       : ''
    }
  },
  methods : {
    create  : function(){
      if(this.password  != this.passwordag){
        this.msg  = '密码不同'
      }
      else if(this.username == ''){
        this.msg  = '用户名空'
      }
      else  {
        this.$http.post('/users/create',{
          username  : this.username ,
          realname  : this.realname ,
          bankcard  : this.bankcard ,
          bankinfo  : this.bankinfo ,
          email     : this.email    ,
          institute : this.institute,
          password  : this.password ,
        }).then(
        function(response){
          if(response.body.ok == 'ok'){
            this.msg  = response.body.msg;
            this.username   = '';
            this.realname   = '';
            this.bankcard   = '';
            this.bankinfo   = '';
            this.email      = '';
            this.institute  = '';
            this.password   = '';
            this.passwordag = ''; 
          }
          else if(response.body.ok == 'notok'){
            this.msg  = response.body.msg;
          }
        },
        function(response){
          this.msg  = response.body.msg
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 960px;
}

.lh-condensed { line-height: 1.25; }
</style>
