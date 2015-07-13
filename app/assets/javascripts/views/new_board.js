TrelloClone.Views.NewBoard = Backbone.View.extend({
	template: JST["boards/new"],

	tagName: "form",

	events: {
		"click button": "saveBoard"
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	saveBoard: function(){
		var params = $(event.currentTarget).serializeJSON();
		var newBoard = new TrelloClone.Models.Board(params["board"]);

		newBoard.save({}, {
			success: function () {
				event.preventDefault();
				TrelloClone.boards.add(newBoard);
				Backbone.history.navigate("#/boards/"+newBoard.escape('id'), { trigger: true });
			}
		});
	}
})
