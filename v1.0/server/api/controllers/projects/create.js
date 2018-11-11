module.exports = {


  friendlyName: 'Create',


  description: 'Create projects.',


  inputs: {
    kind            : {
      type          : 'string'
    },
    projectname     : {
      type          : 'string'
    },
    roadshowstart   : {
      type          : 'string'
    },
    roadshowend     : {
      type          : 'string'
    },
    subscribestart  : {
      type          : 'string'
    },
    subscribeend    : {
      type          : 'string'
    },
    confirmstart    : {
      type          : 'string'
    },
    confirmend      : {
      type          : 'string'
    },
    targetmoney     : {
      type          : 'number'
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    sails.log('/projects/create');
    sails.log(inputs.projectname);
    var project;
    if(inputs.kind == 'create'){
      project = await Projects.findOne({
        projectname : inputs.projectname
      });
      if(project){
        return exits.success({
          ok    : 'notok',
          msg   : '项目名称已经存在'
        });
      }
      else{
        project = await Projects.create({
          projectname     : inputs.projectname    ,
          targetmoney     : inputs.targetmoney    ,
          roadshowstart   : inputs.roadshowstart  ,
          roadshowend     : inputs.roadshowend    ,
          subscribestart  : inputs.subscribestart ,
          subscribeend    : inputs.subscribeend   ,
          confirmstart    : inputs.confirmstart   ,
          confirmend      : inputs.confirmend
        }).fetch();
      }
      return exits.success({
        projectname : project.projectname,
        ok  : 'ok',
        msg : '创建成功'
      });
    }

  }


};
