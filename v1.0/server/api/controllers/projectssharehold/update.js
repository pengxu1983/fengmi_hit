module.exports = {


  friendlyName: 'Update',


  description: 'Update projects sharehold.',


  inputs: {
    kind  : {
      type  : 'string'
    },
    projectname : {
      type  : 'string'
    },
    hstusername : {
      type  : 'string'
    },
    hstrealname : {
      type  : 'string'
    },
    slvusername : {
      type  : 'string'
    },
    slvrealname : {
      type  : 'string'
    },
    slvmoney  : {
      type  : 'number'
    },
    holdmoney : {
      type  : 'number'
    },
    shareholdlist : {
      type  : 'json'
    },
    institute : {
      type  : 'string'
    }

    
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    sails.log('/projectssharehold/update');//TODO
    var onesharehold;
    if(inputs.kind  ==  'oneprojectshareholdupdate'){
      sails.log(inputs.shareholdlist);
      await Projects_sharehold.destroy({
        projectname : inputs.projectname
      });
      await Projects_sharehold.createEach(inputs.shareholdlist);
      return exits.success({
        ok    : 'ok'
      });
    }

  }


};
