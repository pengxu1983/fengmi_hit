module.exports = {


  friendlyName: 'Create',


  description: 'Create projects sharehold.',


  inputs: {
    kind  : {
      type  : 'string'
    },
    projectname : {
      type  : 'string'
    },
    username    : {
      type  : 'string'
    },
    realname    : {
      type  : 'string' //TODO
    },
    money       : {
      type  : 'number'
    },
    institute   : {
      type  : 'string'
    } 

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    sails.log('/projectssharehold/create');
    var onesharehold;
    var users;
    var user;
    if(inputs.kind  = 'create'){
      users = await Users.find({
        realname  :   inputs.realname,
        institute :   inputs.institute
      });
      if(users.length >1){
        return  exits.success({
          ok  : 'notok',
          msg : '重名',
        });
      }
      else{
        user  = await Users.findOne({
          realname  : inputs.realname
        });
        if(!user){
          //TODO
          await Projects_sharehold.create({
            projectname : inputs.projectname,
            slvrealname : inputs.realname,
            slvmoney    : inputs.money
          });
          onesharehold  = await Projects_sharehold.findOne({
            projectname : inputs.projectname,
            slvrealname : onesharehold.slvrealname
          });
          return  exits.success({
            ok  : 'ok',
            msg : 'TODO',
            
          });
        }
        else {
          onesharehold  = await Projects_sharehold.findOne({
            projectname : inputs.projectname,
            slvusername : user.username
          });
          if(!onesharehold){
            await Projects_sharehold.create({
              projectname : inputs.projectname,
              slvusername : user.username,
              slvrealname : user.realname,
              slvmoney    : inputs.money
            });
            onesharehold  = await Projects_sharehold.findOne({
              projectname : inputs.projectname,
              slvusername : user.username
            });
            return  exits.success({
              ok  : 'ok',
              msg : '投资登记成功',
              onesharehold  : onesharehold,
              username  : user.username
            });
          }
          else {
            return  exit.success({
              ok  : 'notok',
              msg : '已经参投'
            });
          }
        }
      }
    }

  }


};
