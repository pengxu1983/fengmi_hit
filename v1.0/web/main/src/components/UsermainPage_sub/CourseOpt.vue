<template>
  <div class="container-fluid">
    <div
      v-for="onecourse in coursesincoming"
      :key="onecourse"
    >
      <hr />
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th scope="row" class="table-success">课程名称</th>
            <td>{{onecourse.coursename}}</td>
            <td>
              <button type="button" class="btn btn-outline-success"
                v-if="issignedup(onecourse.coursename)"
                @click="onecoursesignup(onecourse.coursename)"
              >报名
              </button>
              <p
                v-else
              ></p>
            </td>
          </tr>
          <tr>
            <th scope="row">课程地点</th>
            <td colspan="2">{{onecourse.courselocation}}</td>
          </tr>
          <tr>
            <th scope="row">课程时间</th>
            <td>{{onecourse.confirmstart}}</td>
            <td>{{onecourse.confirmend}}</td>
          </tr>
          <tr>
            <th scope="row">课程表</th>
            <td colspan="2">TODO</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseOpt',
  props: {
    coursesincoming : [],
    coursespassed   : []
  },
  methods : {
    issignedup      : function(){
    },
    onecoursesignup : function(){
    },
    getcourses      : function(){
      this.$http.post('/courses/find',{
        kind    : 'findincoming'
      }).then(
        function(response){
          if(response.body.ok ==  'ok'){
            console.log('abc');
            console.log(response.body.coursesincoming);
            this.coursesincoming  = response.body.coursesincoming;
          }
          else if(response.body.ok  ==  'notok'){
            this.coursesincoming  = [];
          }
        },
        function(){}
      );
      this.$http.post('/courses/find',{
        kind    : 'findpassed'
      }).then(
        function(response){
          if(response.body.ok ==  'ok'){
            this.coursespassed  = response.body.coursespassed;
          }
          else if(response.body.ok  ==  'notok'){
            this.coursespassed  = [];
          }
        },
        function(){}
      );
    }
  },
  mounted : function(){
    this.getcourses();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
