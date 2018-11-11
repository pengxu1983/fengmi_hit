<template>
  <div>
    <el-row>
      <el-col :span="6" >
      <el-container>
        <el-form  :model="formInline">
          <el-form-item label="姓名">
            <el-input v-model="sharehold_create.realname" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="金额">
            <el-input v-model="sharehold_create.amount" placeholder="金额"></el-input>
          </el-form-item>
          <el-form-item label="项目名称">
            <el-select v-model="sharehold_create.projectname" placeholder="请选择">
              <el-option
                v-for="oneproject in projectlist"
                :key="oneproject.projectname"
                :label="oneproject.projectname"
                :value="oneproject.projectname">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学院">
            <el-select v-model="sharehold_create.institute" placeholder="请选择">
              <el-option label="哈工大" value="哈工大"></el-option>
              <el-option label="疯蜜总部" value="疯蜜总部"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitsharehold">提交</el-button>
          </el-form-item>
        </el-form>
        <hr />
      </el-container>
      </el-col>
      <el-col :span="6" >
        <el-container>
        mid
        </el-container>
      </el-col>
      <el-col :span="6" >
        <el-container>
        right
        </el-container>
      </el-col>
      <el-col :span="6" >
        <el-container>
        right2
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ShareholdManage',
  props: {
  },
  data () {
    return {
      projectlist     : [],
      sharehold_create: {
        realname      : '',
        institute     : '',
        projectname   : '',
        money         : ''
      }
    }
  },
  methods : {
    findall_projectlist : function(){
      this.$http.post('/projects/find',{
        kind  : 'findall'
      }).then(
        function(response){
          if(response.body.ok ==  'ok'){
            this.projectlist = response.body.projectlist;
          }
          else if(response.body.ok  ==  'notok'){
            this.projectlist = [];
          }
        },
        function(){}
      );
    },
    submitsharehold : function(){
      console.log('abc');
      this.$http.post('/projectssharehold/create',{
        kind  : 'create',
        projectname : this.sharehold_create.projectname,
        username    : this.sharehold_create.username,
        realname    : this.sharehold_create.realname,
        money       : this.sharehold_create.money,
        institute   : this.sharehold_create.institute
      }).then(
        function(response){
          if(response.body.ok ==  'ok'){
            console.log(response.body.msg);
            this.sharehold_create.projectname = '';
            this.sharehold_create.username    = '';
            this.sharehold_create.realname    = '';
            this.sharehold_create.money       = '';
            this.sharehold_create.institute   = '';
          }
          else if(response.body.ok  = 'notok'){
            console.log(response.body.msg);
          }

        },
        function(){}
      );
    }
  },
  mounted () {
    this.findall_projectlist();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
