module.exports = {


  friendlyName: 'Update',


  description: 'Update projects.',


  inputs: {
    kind            : {
      type          : 'string'
    },
    projectname     : {
      type          : 'string'
    },
    targetmoney     : {
      type          : 'number'
    },
    actualmoney     : {
      type          : 'number'
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
    isvalid         : {
      type          : 'string'
    },
    subscribesum    : {
      type          : 'number'
    },
    confirmsum      : {
      type          : 'number'
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    sails.log('/projects/update');
    var project ;
    if(inputs.kind  ==  'oneprojectupdate'){
      project = await Projects.findOne({
        projectname : inputs.projectname
      });
      if(!project){
        return exits.success({
          ok        : 'notok',
          msg       : '项目名称不存在'
        });
      }
      else{
        project = await Projects.update({
          projectname : inputs.projectname
        },{
          targetmoney     : inputs.targetmoney    ,
          roadshowstart   : inputs.roadshowstart  ,
          roadshowend     : inputs.roadshowend    ,
          subscribestart  : inputs.subscribestart ,
          subscribeend    : inputs.subscribeend   ,
          confirmstart    : inputs.confirmstart   ,
          confirmend      : inputs.confirmend     ,
          isvalid         : inputs.isvalid        ,
          //subscribesum    : inputs.subscribesum   ,
          //confirmsum      : inputs.confirmsum     ,
        }).fetch();
        return exits.success({
          ok        : 'ok',
          msg       : '更新成功',
          project   : project
        });
      }
    }

  }


};
