TrelloClone.Views.ListItem = Backbone.CompositeView.extend({

	tagName: "li",
  className: "listitem group",
	template: JST["lists/item"],

  initialize: function(){
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.cards(), "add", this.addCard);
		this.model.cards().each(this.addCard.bind(this));
	},

	events: {
		"click button": "delete"
	},

	delete: function(){
		event.preventDefault();
  	this.model.destroy();
	},

	addCard: function(card){
		var cardView = new TrelloClone.Views.CardItem({ model: card});
		this.addSubview(".cards", cardView)
	},

	render: function(){
  	var content = this.template({list: this.model});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
