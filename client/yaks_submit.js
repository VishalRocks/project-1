Template.yaksSubmit.events({
	'submit .yaksSubmitForm': function(event){
		event.preventDefault();
		var yak = event.target.yak.value;
		if(yak == ""){
			alert("Its empty");
		}
		else{
			Meteor.call('yakInsert',yak);
			Router.go('yaksList');
		}
	}
});	