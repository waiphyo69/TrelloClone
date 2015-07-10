window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new TrelloClone.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
