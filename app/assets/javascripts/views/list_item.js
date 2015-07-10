TrelloClone.Views.ListItem = Backbone.View.extend({

	tagName: "li",

	template: JST["lists/item"],
  initialize: function(){
		this.listenTo(this.model, "sync", this.render);
	},
	render: function(){
  	var content = this.template({list: this.model});
		this.$el.html(content);
		return this;
	}
})
