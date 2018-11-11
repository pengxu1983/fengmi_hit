module.exports = {


  friendlyName: 'Find',


  description: 'Find users.',


  inputs: {
    kind      : {
      type    : 'string'
    },
    username  : {
      type    : 'string'
    },
    password  : {
      type    : 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    sails.log('/user/find');
    if(inputs.kind  = 'login'){
      var user  = await Users.findOne({
        username  : inputs.username,
      }).decrypt();
      if(!user){
        return exits.success({
          ok  : 'notok',
          msg : '用户不存在'
        });
      }
      else if(user.password != inputs.password){
        return exits.success({
          ok  : 'notok',
          msg : '密码不正确'
        });
      }
      else if(user.isvalid != 'yes'){
        return exits.success({
          ok  : 'notok',
          msg : '用户禁用'
        });
      }
      else {
        return exits.success({
          ok  : 'ok',
          msg : '登录成功',
          user:{
            username  : user.username,
            realname  : user.realname,
            bankinfo  : user.bankinfo,
            bankcard  : user.bankcard,
            institute : user.institute,
            membertype: user.membertype,
            isadmin   : user.isadmin,
            email     : user.email,
          }
        });
      }
    }
    //return exits.success();

  }


};
