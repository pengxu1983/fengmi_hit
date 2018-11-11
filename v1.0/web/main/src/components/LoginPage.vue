<template>
  <div class="text-center">
    <router-link to="/login">登录</router-link> |
    <router-link to="/create">注册</router-link>
    <form class="form-signin">
      <label for="username" class="sr-only">用户名</label>
      <input type="text" id="username" class="form-control" placeholder="用户名" required autofocus
        v-model="username"
      >
      <label for="password" class="sr-only">密码</label>
      <input type="password" id="password" class="form-control" placeholder="密码" required
        v-model="password"
      >
      <button class="btn btn-lg btn-primary btn-block" type="submit"
        @click="tologin"
      >登录</button>
      <p>{{ this.loginstat }}</p>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  props: {
  },
  data  : function(){
    return  {
      loginstat : '',
      username  : '',
      password  : ''
    }
  },
  methods : {
    tologin   : function(){
      this.$http.post('/users/find',{
        kind      : 'login',
        username  : this.username,
        password  : this.password
      }).then(
      function(response){
        if(response.body.ok ==  'ok'){
          if(response.body.user.isadmin == 'no'){
            this.$store.commit('login');
            this.$store.commit('setuser',response.body.user);
            this.$router.push({
              name  : 'usermain',
              params: response.body.user
            });
          }
          else if(response.body.user.isadmin == 'yes'){
            this.$router.push({
              name  : 'admin',
              params: response.body.user
            });
          }
        }
        else  if (response.body.ok  ==  'notok'){
          this.loginstat  = '登录失败';
          this.username = '';
          this.password = '';
        }
      },
      function(){}
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
