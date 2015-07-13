# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.(@board, :title, :user_id, :created_at, :updated_at)

json.lists @board.lists do |list|
	json.id list.id
	json.title list.title
	json.ord list.ord
	json.cards list.cards
end
