module.exports = {


  friendlyName: 'Find',


  description: 'Find projects.',


  inputs: {
    kind            : {
      type          : 'string'
    },
    projectname     : {
      type          : 'string'
    },
    targetmoney     : {
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
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    sails.log('/projects/find');
    var projectlist ;
    if(inputs.kind  ==  'findall'){
      projectlist = await Projects.find({
        id  : {'>=' : 0}
      });
      return exits.success({
        ok    : 'ok',
        msg   : '查询完成',
        projectlist : projectlist
      });
    }

  }


};
