<template>
  <div>
    <nav class="navbar navbar-dark bg-light fixed-top shadow">
      <a class="navbar-brand">管理员</a>
      <form class="form-inline">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#adminselfupdate">{{ username }}</button>
        <button type="button" class="btn btn-primary" >{{ institute }}</button>
        <button type="button" class="btn btn-primary" >{{ membertype }}</button>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
          @click="logout"
        >注销</button>
      </form>
    </nav>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="adminselfupdate">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="container">
            <form>
              <div class="form-group">
                <label for="username">用户名</label>
                <input type="text" class="form-control" id="username" disabled 
                  :placeholder="username" 
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
import ProjManage from '@/components/AdminPage_sub/ProjManage.vue'
import UserManage from '@/components/AdminPage_sub/UserManage.vue'
import CourseManage from '@/components/AdminPage_sub/CourseManage.vue'
import ShareholdManage from '@/components/AdminPage_sub/ShareholdManage.vue'

export default {
  name: 'AdminPage',
  props: {
    username  : '',
    realname  : '',
    bankinfo  : '',
    bankcard  : '',
    institute : '',
    membertype: '',
    email     : '',
  },
  components : {
    ProjManage,
    UserManage,
    CourseManage,
    ShareholdManage
  },
  data  : function(){
    return  {
      passwordorg: '',
      passwordnew: '',
      updatemsg : '',
      currentTab: '项目管理',
      tabs  : ['项目管理','人员管理','课程管理','投资管理']
    }
  },
  computed  : {
    currentTabComponent:  function(){
      if(this.currentTab == '项目管理'){
        return 'ProjManage';
      }
      else if(this.currentTab == '人员管理'){
        return 'UserManage';
      }
      else if(this.currentTab ==  '课程管理'){
        return 'CourseManage'
      }
      else if(this.currentTab == '投资管理'){
        return 'ShareholdManage'
      }
    }
  },
  methods : {
    logout  : function(){
      this.$router.replace('/');
    },
    update  : function(){
      if(this.passwordorg == ''){
        this.updatemsg  = '请输入原密码';
      }
      else {
        this.$http.post('/users/update',{
          kind      : 'selfupdate',
          username  : this.username,
          realname  : this.realname,
          bankinfo  : this.bankinfo,
          bankcard  : this.bankcard,
          institute : this.institute,
          email     : this.email,
          passwordorg : this.passwordorg,
          passwordnew : this.passwordnew
        }).then(
          function(response){
            if(response.body.ok ==  'ok'){
              this.updatemsg  = '更新成功';
            }
            else if(response.body.ok  ==  'notok'){
              this.updatemsg  = '更新失败';
            }
          },
          function(){
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
