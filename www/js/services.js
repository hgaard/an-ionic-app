angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Valhal',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Jesper Jørgensen',
    notes: 'Enjoys drawing things',
    face: 'https://gravatar.com/avatar/3dadbbbdcc7fd01611c35e7e0b97562f'
  }, {
    id: 1,
    name: 'Jakob Højgaard',
    notes: 'Odd obsession with everything',
    face: 'https://gravatar.com/avatar/b7723b4f9d476e9b142449f23ba3efb2'
  }, {
    id: 2,
    name: 'Ander Johansen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://gravatar.com/avatar/47bf14bbad38a783e51daac1ab5f10bc'
  }, {
    id: 3,
    name: 'Allan Fresh Hansen',
    notes: 'I think he needs to buy a boat',
    face: 'https://gravatar.com/avatar/6e549c7e9f6f91a12f68e52f882adca0'
  }, {
    id: 4,
    name: 'Steffen Schalck',
    notes: 'Just the nicest guy',
    face: 'https://gravatar.com/avatar/e419b44f3f2eeac343e56a08d31b9880'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
