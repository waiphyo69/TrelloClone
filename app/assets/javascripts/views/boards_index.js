TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({


	template: JST["boards/index"],

	initialize: function(){
		this.listenTo(this.collection,"sync",this.render);
		this.listenTo(this.collection,"add",this.addBoard);
		this.collection.each(this.addBoard.bind(this));
	},

	addBoard: function(board){
  	BoardItemView = new TrelloClone.Views.BoardItem({model: board});
		this.addSubview(".boards",BoardItemView);
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}

})
