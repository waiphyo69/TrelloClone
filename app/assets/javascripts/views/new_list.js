TrelloClone.Views.NewList = Backbone.View.extend({
	template: JST["lists/new"],

	tagName: "form",

	events: {
		"click button": "saveList"
	},

	render: function(){
		var content = this.template({ board: this.model });
		this.$el.html(content);
		return this;
	},

	saveList: function(){
		var that = this;
		var params = $(event.currentTarget).serializeJSON();
		var newList = new TrelloClone.Models.List(params["list"]);
		newList.save({}, {
			success: function () {
				event.preventDefault();
				that.model.lists().add(newList);
				Backbone.history.navigate("#/boards/"+that.model.escape('id'), { trigger: true });
			}
		});
	}
})
