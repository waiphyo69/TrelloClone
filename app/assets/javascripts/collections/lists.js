TrelloClone.Collections.Lists = Backbone.Collection.extend({
	model: TrelloClone.Models.List,
	url: "api/lists",
	initialize: function(options){
		this.board = options.board;
		this.comparator = "ord";
	},
	getOrFetch: function (id) {
	var lists = this;

	var list;
	if (list = this.get(id)) {
		list.fetch();
	} else {
		list = new TrelloClone.Models.list({ id: id });
		list.fetch({
			success: function () { lists.add(list); }
		});
	}

	return list;
	}
})
