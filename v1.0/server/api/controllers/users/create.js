module.exports = {


  friendlyName: 'Create',


  description: 'Create users.',


  inputs: {
    username  : {
      type    : 'string'
    },
    realname  : {
      type    : 'string'
    },
    bankcard  : {
      type    : 'string'
    },
    bankinfo  : {
      type    : 'string'
    },
    email     : {
      type    : 'string'
    },
    institute : {
      type    : 'string'
    },
    password  : {
      type    : 'string'
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var user  = await Users.findOne({
      username  : inputs.username
    });
    if(!user){
      user  = await Users.create({
        username  : inputs.username,
        realname  : inputs.realname,
        bankcard  : inputs.bankcard,
        bankinfo  : inputs.bankinfo,
        email     : inputs.email,
        institute : inputs.institute,
        password  : inputs.password
      }).fetch();
      return exits.success({
        ok  : 'ok',
        msg : '注册成功',
        user: {
          username  : user.username
        }
      });
    }
    else  {
      return exits.success({
        ok  : 'notok',
        msg : '用户已存在'
      });
    }

  }


};
