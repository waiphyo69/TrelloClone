TrelloClone.Views.BoardItem = Backbone.CompositeView.extend({

	tagName: "li",

	template: JST["boards/item"],

	initialize: function(){
		this.listenTo(this.model,"change",this.render);
	},

	events: {
		"click button.destroy": "destroyBoard"
	},

  destroyBoard: function(){
		event.preventDefault;
		this.model.destroy();
	},

	render: function(){
		var content = this.template({board: this.model});
		this.$el.html(content);
		return this;
	}
})
