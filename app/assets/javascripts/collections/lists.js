TrelloClone.Collections.Lists = Backbone.Collection.extend({
	model: TrelloClone.Models.List,
	url: "api/lists",
	initialize: function(options){
		this.board = options.board;
		this.comparator = "ord";
	}
})
