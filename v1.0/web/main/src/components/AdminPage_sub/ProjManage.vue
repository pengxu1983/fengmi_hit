<template>
  <div >
    <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#projectcreate">新增项目</button>
    <hr />
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="projectcreate">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <form>
            <div class="form-group">
              <label for="projectname">项目名称</label>
              <input type="text" class="form-control" id="projectname"
                v-model="projectname"
              >
            </div>
            <div class="form-group">
              <label for="targetmoney">目标融资</label>
              <input type="text" class="form-control" id="targetmoney" placeholder="万"
                v-model="targetmoney"
              >
            </div>
            <div class="form-group">
              <label for="roadshowstart">路演开始时间</label>
              <input type="text" class="form-control" id="roadshowstart" 
                v-model="roadshowstart"
              >
            </div>
            <div class="form-group">
              <label for="roadshowend">路演结束时间</label>
              <input type="text" class="form-control" id="roadshowend" 
                v-model="roadshowend"
              >
            </div>
            <div class="form-group">
              <label for="subscribestart">预订开始时间</label>
              <input type="text" class="form-control" id="subscribestart" 
                v-model="subscribestart"
              >
            </div>
            <div class="form-group">
              <label for="subscribeend">预订结束时间</label>
              <input type="text" class="form-control" id="subscribeend" 
                v-model="subscribeend"
              >
            </div>
            <div class="form-group">
              <label for="confirmstart">打款开始时间</label>
              <input type="text" class="form-control" id="confirmstart" 
                v-model="confirmstart"
              >
            </div>
            <div class="form-group">
              <label for="confirmend">打款结束时间</label>
              <input type="text" class="form-control" id="confirmend" 
                v-model="confirmend"
              >
            </div>
            <button type="submit" class="btn btn-primary"
              @click="create"
            >新建</button>
            <p>{{ createmsg }}</p>
          </form>
        </div>
      </div>
    </div>
    <div
      v-for="oneproject in projectlist"
    >
      <table class="table table-bordered">
        <tbody>
          <tr class="table-info">
            <th scope="row">项目名称</th>
            <td>{{ oneproject.projectname}}</td>
            <td>
              <button type="button" class="btn btn-primary" data-toggle="modal" 
                :data-target="'#projectedit'+oneproject.projectname"
              >编辑
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">目标融资额</th>
            <td colspan="2">{{oneproject.targetmoney}}</td>
          </tr>
          <tr>
            <th scope="row">实际融资额</th>
            <td colspan="2">{{oneproject.actualmoney}}</td>
          </tr>
          <tr>
            <th scope="row">项目状态</th>
            <td>{{oneproject.isvalid}}</td>
            <td>
              <button type="button" class="btn btn-primary" data-toggle="modal" 
                :data-target="'#shareholdedit'+oneproject.projectname"
                @click="initshareholdinfo(oneproject.projectname)"
              >投资配额
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">已经预订人数</th>
            <td colspan="2">{{oneproject.subscribesum}}</td>
          </tr>
          <tr>
            <th scope="row">已经打款人数</th>
            <td colspan="2">{{oneproject.confirmsum}}</td>
          </tr>
          <tr>
            <th scope="row">路演起止时间</th>
            <td>{{oneproject.roadshowstart}}</td>
            <td>{{oneproject.roadshowend}}</td>
          </tr>
          <tr>
            <th scope="row">预融资起止时间</th>
            <td>{{oneproject.subscribestart}}</td>
            <td>{{oneproject.subscribeend}}</td>
          </tr>
          <tr>
            <th scope="row">打款起止时间</th>
            <td>{{oneproject.confirmstart}}</td>
            <td>{{oneproject.confirmend}}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"
        :id="'shareholdedit'+oneproject.projectname"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <h2>{{oneproject.projectname}}</h2>
            <button type="button" class="btn btn-primary btn-lg btn-block" 
              @click="addonesharehold(oneproject.projectname)"
            >新增参投人</button>
            <el-table
              :data="sharehold_info"
              border
              style="width: 100%">
              <el-table-column
                prop="slvrealname"
                label="姓名"
              >
                <template slot-scope="scope">
                  <el-input v-model="scope.row.slvrealname" placeholder="姓名"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="slvusername"
                label="用户名"
              >
                <template slot-scope="scope">
                  <el-input v-model="scope.row.slvusername" placeholder="用户名"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="institute"
                label="学院"
              >
                <template slot-scope="scope">
                  <el-select v-model="scope.row.institute" placeholder="请选择">
                    <el-option
                      v-for="item in institute_options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column
                prop="holdmoney"
                label="持有额度"
              >
                <template slot-scope="scope">
                  <el-input v-model="scope.row.holdmoney" placeholder="金额"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="slvmoney"
                label="分红额度"
              >
                <template slot-scope="scope">
                  <el-input v-model="scope.row.slvmoney" placeholder="金额"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="isconfirmed"
                label="是否打款"
              >
                <template slot-scope="scope">
                  <el-select v-model="scope.row.isconfirmed" placeholder="请选择">
                    <el-option
                      v-for="item in isconfirmed_options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column
                prop="hstrealname"
                label="代持人"
              >
                <template slot-scope="scope">
                  <el-input v-model="scope.row.hstrealname" placeholder="代持人"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="hstusername"
                label="代持人用户名"
              >
                <template slot-scope="scope">
                  <el-input v-model="scope.row.hstusername" placeholder="代持人用户名"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
              >
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, sharehold_info)"
                    type="text"
                    size="small">
                    移除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <button type="button" class="btn btn-primary"
              @click="upload_sharehold_info(oneproject.projectname)"
            >保存</button>
          </div>
        </div>
      </div>
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"
        :id="'projectedit'+oneproject.projectname"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <table class="table table-bordered">
              <tbody>
                <tr class="table-info">
                  <th scope="row">项目名称</th>
                  <td colspan="2">
                    <input 
                      v-model="oneproject.projectname" disabled
                    >
                  </td>
                </tr>
                <tr>
                  <th scope="row">目标融资额</th>
                  <td colspan="2">
                    <input 
                      v-model="oneproject.targetmoney"
                    >
                  </td>
                </tr>
                <tr>
                  <th scope="row">实际融资额</th>
                  <td colspan="2">
                    <input 
                      v-model="oneproject.actualmoney" disabled
                    >
                  </td>
                </tr>
                <tr>
                  <th scope="row">项目状态</th>
                  <td colspan="2">
                    <select class="custom-select d-block w-100" id="country" required
                      v-model="oneproject.isvalid"
                    >
                      <option disabled value="">选择</option>
                      <option>取消</option>
                      <option>有效</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">路演起止时间</th>
                  <td>
                    <input 
                      v-model="oneproject.roadshowstart"
                    >
                  </td>
                  <td>
                    <input 
                      v-model="oneproject.roadshowend"
                    >
                  </td>
                </tr>
                <tr>
                  <th scope="row">预融资起止时间</th>
                  <td>
                    <input 
                      v-model="oneproject.subscribestart"
                    >
                  </td>
                  <td>
                    <input 
                      v-model="oneproject.subscribeend"
                    >
                  </td>
                </tr>
                <tr>
                  <th scope="row">打款起止时间</th>
                  <td>
                    <input 
                      v-model="oneproject.confirmstart"
                    >
                  </td>
                  <td>
                    <input 
                      v-model="oneproject.confirmend"
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit" class="btn btn-primary"
              @click="updateoneproject(oneproject.projectname)"
            >更新</button>
            <p>{{ updatemsg }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjManage',
  props: {
  },
  data  : function(){
    return  {
      createmsg     : '',
      updatemsg     : '',
      projectname   : '',
      targetmoney   : '',
      roadshowstart : '',
      roadshowend   : '',
      subscribestart: '',
      subscribeend  : '',
      confirmstart  : '',
      confirmend    : '',
      projectlist   : [],
      sharehold_info_org: [],
      institute_options: [
        {
          value: '哈工大',
          label: '哈工大'
        },{
          value: '疯蜜总部',
          label: '疯蜜总部'
        },{
          value: '其他',
          label: '其他'
        }
      ],
      isconfirmed_options : [
        {
          value : '是',
          label : '是'
        },{
          value : '否',
          label : '否'
        }
      ],
    }
  },
  computed  : {
    sharehold_info  : function(){
      var sharehold_info = [];
      for(var i=0;i<this.sharehold_info_org.length;i++){
        sharehold_info[i] = {
          institute   : this.sharehold_info_org[i].institute,
          holdmoney   : 0,
          isconfirmed : this.sharehold_info_org[i].isconfirmed,
          slvmoney    : this.sharehold_info_org[i].slvmoney,
          slvrealname : this.sharehold_info_org[i].slvrealname,
          slvusername : this.sharehold_info_org[i].slvusername,
          hstrealname : this.sharehold_info_org[i].hstrealname,
          hstusername : this.sharehold_info_org[i].hstusername,
          projectname : this.sharehold_info_org[i].projectname
        };
        //no 代持人
        if((this.sharehold_info_org[i].hstusername == '') && (this.sharehold_info_org[i].hstrealname == '')){
          sharehold_info[i].holdmoney = this.sharehold_info_org[i].slvmoney;
        }
        else {
        }

        for(var j=0;j<this.sharehold_info_org.length;j++){
          if((this.sharehold_info_org[j].hstusername == this.sharehold_info_org[i].slvusername) && (this.sharehold_info_org[j].hstrealname== this.sharehold_info_org[i].slvrealname)){
            sharehold_info[i].holdmoney = sharehold_info[i].holdmoney + this.sharehold_info_org[j].slvmoney;
          }
        }
      }
      return sharehold_info;
    }
  },
  methods : {
    initshareholdinfo : function(projectname){
      console.log('abc1');
      console.log(projectname);
      this.$http.post('/projectssharehold/find',{
        kind  : 'findall',
        projectname : projectname
      }).then(
        function(response){
      console.log('abc2');
          if(response.body.ok = 'ok'){
      console.log('abc3');
            this.sharehold_info_org = response.body.shareholdlist;
          }
          else if(response.body.ok  = 'notok'){
            this.sharehold_info_org = [];
          }
        },
        function(){}
      );
    },
    create  : function(){
      this.createmsg  = '';
      if(this.projectname ==  ''){
        this.createmsg  = '项目名称为空';
      }
      else  {
        this.$http.post('/projects/create',{
          kind          : 'create',
          projectname   : this.projectname    ,
          targetmoney   : this.targetmoney    ,
          roadshowstart : this.roadshowstart  ,
          roadshowend   : this.roadshowend    ,
          subscribestart: this.subscribestart ,
          subscribeend  : this.subscribeend   ,
          confirmstart  : this.confirmstart   ,
          confirmend    : this.confirmend     
        }).then(
          function(response){
            if(response.body.ok ==  'ok'){
              this.createmsg  = response.body.msg;
              this.projectname     = '';
              this.targetmoney     = '';
              this.roadshowstart   = '';
              this.roadshowend     = '';
              this.subscribestart  = '';
              this.subscribeend    = '';
              this.confirmstart    = '';
              this.confirmend      = '';
              this.findallprojects();
            }
            else if(response.body.ok ==  'notok'){
              this.createmsg  = response.body.msg;
              this.projectname     = '';
              this.targetmoney     = '';
              this.roadshowstart   = '';
              this.roadshowend     = '';
              this.subscribestart  = '';
              this.subscribeend    = '';
              this.confirmstart    = '';
              this.confirmend      = '';
            }
          },
          function(){}
        );
      }
    },
    updateoneproject : function(projname){
      this.updatemsg  = '';
      for(var i=0;i<this.projectlist.length;i++){
        if(this.projectlist[i].projectname == projname){
          this.$http.post('/projects/update',{
            kind            : 'oneprojectupdate',
            projectname     : this.projectlist[i].projectname    ,
            targetmoney     : this.projectlist[i].targetmoney    ,
            roadshowstart   : this.projectlist[i].roadshowstart  ,
            roadshowend     : this.projectlist[i].roadshowend    ,
            subscribestart  : this.projectlist[i].subscribestart ,
            subscribeend    : this.projectlist[i].subscribeend   ,
            confirmstart    : this.projectlist[i].confirmstart   ,
            confirmend      : this.projectlist[i].confirmend     ,
            isvalid         : this.projectlist[i].isvalid        ,
            subscribesum    : this.projectlist[i].subscribesum   ,
            confirmsum      : this.projectlist[i].confirmsum     ,
          }).then(
            function(response){
              if(response.body.ok ==  'ok'){
                this.updatemsg  = '更新成功';
              }
              else if(response.body.ok ==  'notok'){
                this.updatemsg  = '更新失败';
              }
            },
            function(){
              this.updatemsg  = '更新失败';
            }
          );
        }
      }

    },
    findallprojects : function(){
      this.$http.post('/projects/find',{
        kind    :     'findall'
      }).then(
        function(response){
          if(response.body.ok ==  'ok'){
            this.projectlist  = response.body.projectlist;
          }
          else if(response.body.ok  ==  'notok'){
            this.projectlist  = [];
          }
        },
        function(){
          this.projectlist  = [];
        }
      );
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    upload_sharehold_info (projectname) {
      for(var i=0;i<this.sharehold_info.length;i++){
        console.log(i);
        console.log(this.sharehold_info[i].holdmoney);
        console.log(this.sharehold_info[i].slvmoney);
      }
      this.$http.post('/projectssharehold/update',{
        kind      : 'oneprojectshareholdupdate',
        projectname : projectname,
        shareholdlist : this.sharehold_info
      }).then(
        function(response){
          if(response.body.ok ==  'ok'){
            this.initshareholdinfo(projectname);
          }
          else if(response.body.ok  = 'notok'){
          }
        },
        function(){}
      );
    },
    addonesharehold (projectname)  {
      var blanksharehold;
      blanksharehold  = {
        institute   : '',
        holdmoney   : 0,
        isconfirmed : '',
        slvmoney    : 0,
        slvrealname : '',
        slvusername : '',
        hstrealname : '',
        hstusername : '',
        projectname : projectname
      };
      this.sharehold_info  = this.sharehold_info.unshift(blanksharehold);
    }
  },
  mounted : function () {
    this.$http.post('/projects/find',{
      kind    :     'findall'
    }).then(
      function(response){
        if(response.body.ok ==  'ok'){
          this.projectlist  = response.body.projectlist;
        }
        else if(response.body.ok  ==  'notok'){
          this.projectlist  = [];
        }
      },
      function(){}
    );
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
