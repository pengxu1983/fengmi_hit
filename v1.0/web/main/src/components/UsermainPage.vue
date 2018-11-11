<template>
  <div>
    <nav class="navbar navbar-dark bg-dark fixed-top shadow">
      <a class="navbar-brand">Navbar</a>
      <form class="form-inline">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#userupdate">{{ currentuser.username }}</button>
        <button type="button" class="btn btn-primary" >{{ currentuser.institute }}</button>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
          @click="logout"
        >注销</button>
      </form>
    </nav>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="userupdate">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="container">
            <form>
              <div class="form-group">
                <label for="username">用户名</label>
                <input type="text" class="form-control" id="username" disabled 
                  :placeholder="currentuser.username" 
                >
              </div>
              <div class="form-group">
                <label for="realname">姓名</label>
                <input type="text" class="form-control" id="realname" placeholder="姓名"
                  v-model="currentuser.realname"
                >
              </div>
              <div class="form-group">
                <label for="bankcard">银行卡号</label>
                <input type="text" class="form-control" id="bankcard" placeholder="银行卡号"
                  v-model="currentuser.bankcard"
                >
              </div>
              <div class="form-group">
                <label for="bankinfo">开户行信息</label>
                <input type="text" class="form-control" id="bankinfo" placeholder="开户行信息"
                  v-model="currentuser.bankinfo"
                >
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Email"
                  v-model="currentuser.email"
                >
              </div>
              <div class="form-group">
                <label for="institute">学院</label>
                <select class="custom-select d-block w-100" id="country" required
                  v-model="currentuser.institute"
                >
                  <option disabled value="">选择</option>
                  <option>哈工大</option>
                  <option>疯蜜总部</option>
                  <option>其它</option>
                </select>
              </div>
              <div class="form-group">
                <label for="passwordorg">原密码</label>
                <input type="password" class="form-control" id="passwordorg" placeholder="原密码"
                  v-model="passwordorg"
                >
              </div>
              <div class="form-group">
                <label for="passwordnew">新密码</label>
                <input type="password" class="form-control" id="passwordnew" placeholder="新密码"
                  v-model="passwordnew"
                >
              </div>
              <button type="submit" class="btn btn-primary"
                @click="update"
              >更新</button>
              <p>{{ updatemsg }}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="list-group " id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action " id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home"
              v-for="tab in tabs"
              :key="tab"
              :class="{active : currentTab === tab}"
              @click="currentTab = tab"
            >{{tab}}</a>
          </div>
        </nav>
        <div class="col-md-10">
          <component
            :is="currentTabComponent"
          ></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseOpt from '@/components/UsermainPage_sub/CourseOpt.vue'
import ProjectOpt from '@/components/UsermainPage_sub/ProjectOpt.vue'

export default {
  name: 'UsermainPage',
  props: {
  },
  components  : {
    CourseOpt,
    ProjectOpt
  },
  data  : function(){
    return  {
      passwordorg: '',
      passwordnew: '',
      updatemsg : '',
      currentTab: '项目操作',
      tabs  : ['项目操作','课程操作']
    }
  },
  computed  : {
    currentuser :  function(){
      return  this.$store.getters.getuser
    },
    currentTabComponent:  function(){
      if(this.currentTab == '项目操作'){
        return 'ProjectOpt';
      }
      else if(this.currentTab == '课程操作'){
        return 'CourseOpt';
      }
    }
  },
  methods : {
    logout  : function(){
      this.$store.commit('logout');
      this.$router.replace('/');
    },
    update  : function(){
      if(this.passwordorg == ''){
        this.updatemsg  = '请输入原密码';
      }
      else {
        this.$http.post('/users/update',{
          kind        : 'selfupdate',
          username    : this.currentuser.username,
          realname    : this.currentuser.realname,
          bankinfo    : this.currentuser.bankinfo,
          bankcard    : this.currentuser.bankcard,
          institute   : this.currentuser.institute,
          email       : this.currentuser.email,
          passwordorg : this.passwordorg,
          passwordnew : this.passwordnew
        }).then(
          function(response){
            if(response.body.ok ==  'ok'){
              this.updatemsg  = '更新成功';
              this.$store.commit('setuser',response.body.user);
              console.log(response.body.user.username);
              console.log(this.currentuser.username);
              console.log(this.$store.state.user.username);
            }
            else if(response.body.ok  ==  'notok'){
              this.updatemsg  = response.body.msg;
            }
          },
          function(response){
            this.updatemsg  = '更新失败';
          }
        );
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
