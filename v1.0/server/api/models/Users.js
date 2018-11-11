/**
 * Users.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    username      : {
      type        : 'string',
      unique      : true,
      required    : true
    },
    password      : {
      type        : 'string',
      encrypt     : true,
      minLength   : 4,
      required    : true
    },
    realname      : {
      type        : 'string'
    },
    lastlogintime : {
      type        : 'string'
    },
    sessionid     : {
      type        : 'string'
    },
    isadmin       : {
      type        : 'string',
      isIn        : ['yes','no'],
      defaultsTo  : 'no'
    },
    isvalid       : {
      type        : 'string',
      isIn        : ['yes','no'],
      defaultsTo  : 'yes'
    },
    membertype    : {
      type        : 'string',
      isIn        : ['终身会员','年费会员','非会员'],
      defaultsTo  : '非会员'
    },
    bankinfo      : {
      type        : 'string'
    },
    bankcard      : {
      type        : 'string'
    },
    memberstart   : {
      type        : 'string'
    },
    memberend     : {
      type        : 'string'
    },
    institute     : {
      type        : 'string',
      isIn        : ['哈工大','疯蜜总部','其它']
    },
    email         : {
      type        : 'string',
      unique      : true,
      isEmail     : true
    },
    unionid       : {
      type        : 'string'
    },
    updatedby     : {
      type        : 'string'
    }
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

