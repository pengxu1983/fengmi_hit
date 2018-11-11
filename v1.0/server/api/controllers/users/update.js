module.exports = {


  friendlyName: 'Update',


  description: 'Update users.',


  inputs: {
    kind        : {
      type      : 'string'
    },
    username    : {
      type      : 'string'
    },
    realname    : {
      type      : 'string'
    },
    bankinfo    : {
      type      : 'string'
    },
    bankcard    : {
      type      : 'string'
    },
    institute   : {
      type      : 'string'
    },
    membertype  : {
      type      : 'string'
    },
    email       : {
      type      : 'string'
    },
    passwordorg : {
      type      : 'string'
    },
    passwordnew : {
      type      : 'string'
    },

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    sails.log('/users/update');
    var user;
    if(inputs.kind ==  'selfupdate'){
      user  = await Users.findOne({
        username  : inputs.username
      }).decrypt();
      if(!user){
        return exits.success({
          ok  : 'notok',
          msg : '用户不存在'
        });
      }
      else if(user.password != inputs.passwordorg){
        return exits.success({
          ok  : 'notok',
          msg : '密码错误'
        });
      }
      else {
        var newpasswd = '';
        if(inputs.passwordnew == ''){
          newpasswd = inputs.passwordorg;
        }
        else {
          newpasswd = inputs.passwordnew;
        }
        sails.log(inputs.username);
        user  = await Users.findOne({
          username  : inputs.username
        }).decrypt();
        sails.log(user.username);

        await Users.update({
          username  : inputs.username
        },{
          realname  : inputs.realname,
          bankinfo  : inputs.bankinfo,
          bankcard  : inputs.bankcard,
          institute : inputs.institute,
          email     : inputs.email,
          password  : newpasswd
        });
        user = await Users.findOne({
          username  : inputs.username
        });
        sails.log(user.username);
        return exits.success({
          ok        : 'ok',
          user      : user,
          msg       : '更新成功'
        });
      }
    }
    else if(inputs.kind == 'adminupdate'){
    }

  }


};
