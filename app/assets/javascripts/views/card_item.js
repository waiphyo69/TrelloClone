TrelloClone.Views.CardItem = Backbone.View.extend({
	tagName: "li",
  className: "carditem",
	template: JST["cards/item"],

	initialize: function(){
		this.listenTo(this.model,"change", this.render)
	},

	render: function(){
  	var content = this.template({card: this.model});
		this.$el.html(content);
		return this;
	}
})
