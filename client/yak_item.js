Template.yakItem.events({
	'click': function(){
		Session.set('selected_yak',this._id);
	},
	'click a.yes': function(){
		if(Meteor.user()){
			var postId = Yaks.findOne({_id:this._id});
			if($.inArray(Meteor.userId(),postId.voted)!=-1)
				return "Voted";
		}else{
			var yakId = Session.get('selected_yak');
			Yaks.update(yakId,{$inc:{'score':1}});
			Yaks.update(yakId,{$addToSet: {voted: Meteor.userId()}});
		}
	},
	'click a.no': function(){
		var yakId = Session.get('selected_yak');
		Yaks.update(yakId,{$inc:{'score':-1}});
	}
});