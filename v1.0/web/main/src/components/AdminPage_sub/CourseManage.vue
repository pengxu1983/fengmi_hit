<template>
  <div >
    <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#coursecreate">新增课程</button>
    <hr />
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="coursecreate">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <form>
            <div class="form-group">
              <label for="coursename">课程名称</label>
              <input type="text" class="form-control" id="coursename"
                v-model="coursename"
              >
            </div>
            <div class="form-group">
              <label for="signupstart">报名开始时间</label>
              <input type="text" class="form-control" id="signupstart" 
                v-model="signupstart"
              >
            </div>
            <div class="form-group">
              <label for="signupend">报名结束时间</label>
              <input type="text" class="form-control" id="signupend" 
                v-model="signupend"
              >
            </div>
            <div class="form-group">
              <label for="coursestart">课程开始时间</label>
              <input type="text" class="form-control" id="coursestart" 
                v-model="coursestart"
              >
            </div>
            <div class="form-group">
              <label for="courseend">课程结束时间</label>
              <input type="text" class="form-control" id="courseend" 
                v-model="courseend"
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
      v-for="onecourse in courselist"
      :key="onecourse"
    >
      <table class="table table-bordered">
        <tbody>
          <tr class="table-info">
            <th scope="row">课程名称</th>
            <td>{{ onecourse.coursename}}</td>
            <td>
              <button type="button" class="btn btn-primary" data-toggle="modal" 
                :data-target="'#courseedit'+onecourse.coursename"
              >编辑
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">课程状态</th>
            <td colspan="2">{{onecourse.isvalid}}</td>
          </tr>
          <tr>
            <th scope="row">已经报名人数</th>
            <td colspan="2">{{onecourse.signupsum}}</td>
          </tr>
          <tr>
            <th scope="row">已经签到人数</th>
            <td colspan="2">{{onecourse.confirmsum}}</td>
          </tr>
          <tr>
            <th scope="row">报名起止时间</th>
            <td>{{onecourse.signupstart}}</td>
            <td>{{onecourse.signupend}}</td>
          </tr>
          <tr>
            <th scope="row">课程起止时间</th>
            <td>{{onecourse.coursestart}}</td>
            <td>{{onecourse.courseend}}</td>
          </tr>
          <tr>
            <th scope="row">迟到人数</th>
            <td colspan="2">{{onecourse.comelatesum}}</td>
          </tr>
          <tr>
            <th scope="row">早退人数</th>
            <td colspan="2">{{onecourse.leaveearlysum}}</td>
          </tr>
          <tr>
            <th scope="row">好学生人数</th>
            <td colspan="2">{{onecourse.goodonesum}}</td>
          </tr>
        </tbody>
      </table>
    <hr />
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"
      :id="'courseedit'+onecourse.coursename"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <table class="table table-bordered">
            <tbody>
              <tr class="table-info">
                <th scope="row">课程名称</th>
                <td colspan="2">
                  <input 
                    v-model="onecourse.coursename" disabled
                  >
                </td>
              </tr>
              <tr>
                <th scope="row">课程有效性</th>
                <td colspan="2">
                  <select class="custom-select d-block w-100" id="country" required
                    v-model="onecourse.isvalid"
                  >
                    <option disabled value="">选择</option>
                    <option>取消</option>
                    <option>有效</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th scope="row">报名起止时间</th>
                <td>
                  <input 
                    v-model="onecourse.signupstart"
                  >
                </td>
                <td>
                  <input 
                    v-model="onecourse.signupend"
                  >
                </td>
              </tr>
              <tr>
                <th scope="row">课程起止时间</th>
                <td>
                  <input 
                    v-model="onecourse.coursestart"
                  >
                </td>
                <td>
                  <input 
                    v-model="onecourse.courseend"
                  >
                </td>
              </tr>
              <tr>
                <th scope="row">迟到人数</th>
                <td colspan="2">
                  <input 
                    v-model="onecourse.comelatesum" disabled
                  >
                </td>
              </tr>
              <tr>
                <th scope="row">早退人数</th>
                <td colspan="2">
                  <input
                    v-model="onecourse.leaveearlysum" disabled
                  >
                </td>
              </tr>
              <tr>
                <th scope="row">好学生人数</th>
                <td colspan="2">
                  <input
                    v-model="onecourse.goodonesum" disabled
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" class="btn btn-primary"
            @click="updateonecourse(onecourse.coursename)"
          >更新</button>
          <p>{{ updatemsg }}</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
var moment = require('moment');
export default {
  name: 'CourseManage',
  props: {
    createmsg     : '',
    updatemsg     : '',
  },
  data  : function(){
    return  {
      coursename    : '',
      signupstart   : '',
      signupend     : '',
      coursestart   : '',
      courseend     : '',
      courselist    : []
    }
  },
  computed  : {
  },
  methods : {
    create  : function(){
      this.createmsg  = '';
      if(this.coursename ==  ''){
        this.createmsg  = '课程名称为空';
      }
      else  {
        this.$http.post('/courses/create',{
          kind          : 'create',
          coursename    : this.coursename   ,
          signupstart   : this.signupstart  ,
          signupend     : this.signupend    ,
          coursestart   : this.coursestart  ,
          courseend     : this.courseend     
        }).then(
          function(response){
            if(response.body.ok ==  'ok'){
              this.createmsg      = response.body.msg;
              this.coursename     = '';
              this.signupstart    = '';
              this.signupend      = '';
              this.coursestart    = '';
              this.courseend      = '';
              this.findallcourses();
            }
            else if(response.body.ok ==  'notok'){
              this.createmsg      = response.body.msg;
              this.coursename     = '';
              this.signupstart    = '';
              this.signupend      = '';
              this.coursestart    = '';
              this.courseend      = '';
            }
          },
          function(){}
        );
      }
    },
    updateonecourse : function(crsname){
      this.updatemsg  = '';
      for(var i=0;i<this.courselist.length;i++){
        if(this.courselist[i].coursename == crsname){
          this.$http.post('/courses/update',{
            kind            : 'onecourseupdate',
            coursename      : this.courselist[i].coursename   ,
            signupstart     : this.courselist[i].signupstart  ,
            signupend       : this.courselist[i].signupend    ,
            coursestart     : this.courselist[i].coursestart  ,
            courseend       : this.courselist[i].courseend    ,
            isvalid         : this.courselist[i].isvalid      ,
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
    findallcourses : function(){
      this.$http.post('/courses/find',{
        kind    :     'findall'
      }).then(
        function(response){
          if(response.body.ok ==  'ok'){
            this.courselist  = response.body.courselist;
          }
          else if(response.body.ok  ==  'notok'){
            this.courselist  = [];
          }
        },
        function(){
          this.courselist  = [];
        }
      );
    }
  },
  mounted : function () {
    this.findallcourses();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
