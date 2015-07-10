TrelloClone.Models.Board = Backbone.Model.extend({
	urlRoot: "/api/boards",

	lists: function () {
	this._lists = this._lists ||
		new TrelloClone.Collections.Lists([], { board: this });
	return this._lists;
	},


	parse: function (response) {
		debugger
	  if (response.lists) {
	    this.lists().set(response.lists);
	    delete response.lists;
	  }
	  return response;
	}
})
