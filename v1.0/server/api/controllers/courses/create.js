var moment = require('moment');
module.exports = {


  friendlyName: 'Create',


  description: 'Create courses.',


  inputs: {
    kind            : {
      type          : 'string',
    },
    coursename      : {
      type          : 'string',
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
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    sails.log('/courses/create');
    var course;
    if(inputs.kind  == 'create'){
      course  = await Courses.findOne({
        coursename  : inputs.coursename
      });
      if(!course){
        course  = await Courses.create({
          coursename      : inputs.coursename ,
          signupstart     : moment(inputs.signupstart).valueOf(),
          signupend       : moment(inputs.signupend).valueOf(),
          coursestart     : moment(inputs.coursestart).valueOf(),
          courseend       : moment(inputs.coursesend).valueOf(),
          createtime      : moment().valueOf()
        }).fetch();
        return exits.success({
          ok        : 'ok',
          msg       : '新建成功',
          course    : course
        });
      }
      else {
        return exits.success({
          ok        : 'notok',
          msg       : '新建失败'
        });
      }
    }
  }


};
