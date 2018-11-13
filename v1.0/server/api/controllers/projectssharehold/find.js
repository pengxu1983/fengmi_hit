module.exports = {


  friendlyName: 'Find',


  description: 'Find projects sharehold.',


  inputs: {
    kind      : {
      type    : 'string'
    },
    projectname : {
      type      : 'string'
    },
    slvrealname : {
      type      : 'string'
    },
    slvusername : {
      type      : 'string'
    },
    hstrealname : {
      type      : 'string'
    },
    hstusername : {
      type      : 'string'
    },
    institute   : {
      type      : 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    sails.log('/projectssharehold/find');
    sails.log(inputs.projectname);
    var shareholds;
    if(inputs.kind  ==  'findall'){
      shareholds  = await Projects_sharehold.find({
        projectname : inputs.projectname
      });
      return  exits.success({
        ok    :   'ok',
        msg   :   '查询成功',
        shareholdlist : shareholds
      });
    }


  }


};
