module.exports = {


  friendlyName: 'Create',


  description: 'Create bbb.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    sails.log('bbb');
    return exits.success();

  }


};
