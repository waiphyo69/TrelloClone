TrelloClone.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
		"boards/new": "newBoard",
    "boards/:id": "showBoard",
    "boards/:id/lists/new": "newList"
  },

	boardsIndex: function(){
		TrelloClone.boards.fetch();
		var view = new TrelloClone.Views.BoardsIndex({ collection: TrelloClone.boards });
		this._swapView(view);
	},

  newBoard: function(){
		var view = new TrelloClone.Views.NewBoard();
		this._swapView(view);
	},

  showBoard: function(id){
    var board = TrelloClone.boards.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({ model: board });
    this._swapView(view);
  },

  newList: function(id){
    var board = TrelloClone.boards.getOrFetch(id);
    var view = new TrelloClone.Views.NewList({ model: board });
    this._swapView(view);
  },

  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }

    $("body").html(newView.render().$el);

    this.currentView = newView;
  }
});
