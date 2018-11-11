var moment  = require('moment');
module.exports = {


  friendlyName: 'Find',


  description: 'Find courses.',


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
    coursesend      : {
      type          : 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    sails.log('/courses/find');
    var courselist;
    if(inputs.kind  ==  'findall'){
      courselist  = await Courses.find({
        id  : {'>=':0}
      });
      for(var i=0;i<courselist.length;i++){
        courselist[i].coursestart = moment(courselist[i].coursestart).format('YYYY/MM/DD');
        courselist[i].courseend   = moment(courselist[i].courseend).format('YYYY/MM/DD');
        courselist[i].signupstart = moment(courselist[i].signupstart).format('YYYY/MM/DD');
        courselist[i].signupend   = moment(courselist[i].signupend).format('YYYY/MM/DD');
      }
      return exits.success({
        ok      : 'ok',
        msg     : '查询成功',
        courselist  : courselist
      });
    }
    else if(inputs.kind ==  'findincoming'){
      sails.log(moment().valueOf());
      sails.log(typeof(moment().valueOf()));
      courselist  = await Courses.find({
        coursestart : {'>=': moment().valueOf()}
      });
      return  exits.success({
        ok      : 'ok',
        msg     : '查询成功',
        courseincoming  :  courselist
      });
    }
    else if(inputs.kind ==  'findpassed'){
    }
    else {
      return exits.success({
        ok      : 'notok',
        msg     : '查询失败'
      });
    }
  }


};
