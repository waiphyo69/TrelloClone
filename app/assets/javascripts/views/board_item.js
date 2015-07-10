TrelloClone.Views.BoardItem = Backbone.CompositeView.extend({

	tagName: "li",

	template: JST["boards/item"],

	initialize: function(){
		this.listenTo(this.model,"sync",this.render);
	},


	render: function(){
		var content = this.template({board: this.model});
		this.$el.html(content);
		return this;
	}
})
