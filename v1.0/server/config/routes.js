/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //'/': {
  //  view: 'pages/homepage'
  //},

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  'GET /' :  '/main',
  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  'POST /users/create'  : {
    action  : 'users/create'
  },
  'POST /users/delete'  : {
    action  : 'users/delete'
  },
  'POST /users/find'  : {
    action  : 'users/find'
  },
  'POST /users/update'  : {
    action  : 'users/update'
  },

  'POST /projects/create'  : {
    action  : 'projects/create'
  },
  'POST /projects/delete'  : {
    action  : 'projects/delete'
  },
  'POST /projects/find'  : {
    action  : 'projects/find'
  },
  'POST /projects/update'  : {
    action  : 'projects/update'
  },

  'POST /courses/create'  : {
    action  : 'courses/create'
  },
  'POST /courses/delete'  : {
    action  : 'courses/delete'
  },
  'POST /courses/find'  : {
    action  : 'courses/find'
  },
  'POST /courses/update'  : {
    action  : 'courses/update'
  },

  'POST /projectssharehold/create' : {
    action  : 'projects-sharehold/create'
  },
  'POST /projectssharehold/delete' : {
    action  : 'projects-sharehold/delete'
  },
  'POST /projectssharehold/update' : {
    action  : 'projects-sharehold/update'
  },
  'POST /projectssharehold/find' : {
    action  : 'projects-sharehold/find'
  },

  //'POST /usermain'  : '/usermain',
  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
