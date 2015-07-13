TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({


	template: JST["boards/index"],

	initialize: function(){
		this.listenTo(this.collection,"sync",this.render);
		this.listenTo(this.collection,"add",this.addBoard);
		this.listenTo(this.collection,"remove",this.removeBoard);
		this.collection.each(this.addBoard.bind(this));
	},

	addBoard: function (board){
  	BoardItemView = new TrelloClone.Views.BoardItem({model: board});
		this.addSubview(".boards",BoardItemView);
	},

	removeBoard: function (board) {
		this.removeModelSubview(".boards", board)
  },

	render: function(){
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}

})
