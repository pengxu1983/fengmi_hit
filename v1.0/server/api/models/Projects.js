/**
 * Projects.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    projectname     : {
      type          : 'string'
    },
    createtime      : {
      type          : 'string'
    },
    isvalid         : {
      type          : 'string',
      isIn          : ['有效','取消'],
      defaultsTo    : '有效'
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
    },
    subscribesum    : {
      type          : 'number',
      defaultsTo    : 0
    },
    confirmsum      : {
      type          : 'number',
      defaultsTo    : 0
    },
    targetmoney     : {
      type          : 'number',
      columnType    : 'int(20)'
    },
    actualmoney     : {
      type          : 'number',
      columnType    : 'int(20)',
      defaultsTo    : 0
    },
    result          : {
      type          : 'string',
      isIn          : ['成功','失败','未开始','进行中'],
      defaultsTo    : '未开始'
    },
    


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

