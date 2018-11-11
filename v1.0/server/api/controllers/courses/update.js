var moment = require('moment');
module.exports = {


  friendlyName: 'Update',


  description: 'Update courses.',


  inputs: {
    kind            : {
      type          : 'string',
    },
    coursename      : {
      type          : 'string',
    },
    createtime      : {
      type          : 'string'
    },
    isvalid         : {
      type          : 'string'
    },
    signupstart     : {
      type          : 'string'
    },
    signupend       : {
      type          : 'string'
    },
    coursestart     : {
      type          : 'string'
    },
    courseend      : {
      type          : 'string'
    },
    confirmsum      : {
      type          : 'number'
    },
    comelatesum     : {
      type          : 'number'
    },
    leaveearlysum   : {
      type          : 'number'
    },
    goodonesum      : {
      type          : 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    sails.log('/courses/update');
    var course;
    if(inputs.kind == 'onecourseupdate'){
      course  = await Courses.findOne({
        coursename  : inputs.coursename
      });
      if(!course){
        return exits.success({
          ok      : 'notok',
          msg     : '课程名称不存在'
        });
      }
      else  {
        await Courses.update({
          coursename  : inputs.coursename
        },{
          isvalid         : inputs.isvalid    ,
          signupstart     : moment(inputs.signupstart).valueOf(),
          signupend       : moment(inputs.signupend).valueOf(),
          coursestart     : moment(inputs.coursestart).valueOf(),
          courseend       : moment(inputs.courseend).valueOf()
        });
        course = Courses.findOne({
          coursename  : inputs.coursename
        });
        return exits.success({
          ok      : 'ok',
          msg     : '更新成功',
          course  : course
        });
      }
    }
  }


};
