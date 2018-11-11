/**
 * Courses.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    coursename      : {
      type          : 'string',
      unique        : true
    },
    createtime      : {
      type          : 'number'
    },
    isvalid         : {
      type          : 'string',
      isIn          : ['有效','取消'],
      defaultsTo    : '有效'
    },
    signupstart     : {
      type          : 'number',
      columnType    : 'bigint'
    },
    signupend       : {
      type          : 'number',
      columnType    : 'bigint'
    },
    coursestart     : {
      type          : 'number',
      columnType    : 'bigint'
    },
    courseend      : {
      type          : 'number',
      columnType    : 'bigint'
    },
    signupsum       : {
      type          : 'number',
      defaultsTo    : 0
    },
    confirmsum      : {
      type          : 'number',
      defaultsTo    : 0
    },
    comelatesum     : {
      type          : 'number',
      defaultsTo    : 0
    },
    leaveearlysum   : {
      type          : 'number',
      defaultsTo    : 0
    },
    goodonesum      : {
      type          : 'number',
      defaultsTo    : 0
    },
    courselocatoin  : {
      type          : 'string'
    },
    courseschedule  : {
      type          : 'string'
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

