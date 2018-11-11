module.exports = {


  friendlyName: 'Find',


  description: 'Find projects sharehold.',


  inputs: {
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
    var shareholds;
    if(inputs.kind  ==  'findall'){
      shareholds  = await Projects_sharehold.fine({
        projectname : inputs.projectname
      });
      return  exits.success({
        ok    :   'ok',
        msg   :   '查询成功',
        shareholds  : shareholds
      });
    }


  }


};
