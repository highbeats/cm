'use strict';

angular.module('cmApp').factory('Contact', function () {

  var Contact = function (opts) {
    if (!opts) opts = {};
    return _.extend({name: '', address: '', phone: '', email: ''}, opts);
  };

  // dummy things
  Contact.query = function () {
    var collection = [
      { "name": "Alvin House", "address": "Ap #450-7999 Placerat. St.", "phone": "1-228-550-2935", "email": "Phasellus.in@aliquet.org" },
      { "name": "Wing Holloway", "address": "294-9659 Sapien. Avenue", "phone": "1-424-974-5650", "email": "sem@dictumProineget.ca" },
      { "name": "Leo Cobb", "address": "654-4704 Elit. Road", "phone": "1-161-991-7221", "email": "justo.nec@sem.com" },
      { "name": "Jolene Downs", "address": "P.O. Box 182, 4215 Ipsum. Av.", "phone": "920-1747", "email": "urna.et@justo.org" },
      { "name": "Travis Schmidt", "address": "4792 Et, Road", "phone": "673-3524", "email": "Nunc@eleifendnon.com" }
    ];

    return collection;
  }

  return Contact;
});
