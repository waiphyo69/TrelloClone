TrelloClone.Collections.Cards = Backbone.Collection.extend({
	model: TrelloClone.Models.Card,
	url: "api/cards",
	initialize: function(options){
		this.list = options.list;
		this.comparator = "ord";
	}
})
