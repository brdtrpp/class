if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman', email: "tom.coleman@gmail.com" }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif', email: "sacha.greif@gmail.com" }
  });
  var sacha = Meteor.users.findOne(sachaId);
	
	var introG = Posts.insert({
		title: 'Introduction Guitar',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus nec tortor vel commodo. Nullam pretium elit nunc, at lacinia sem vulputate at. Morbi a cursus magna, sit amet ullamcorper massa. Praesent quam odio, aliquet id dui at, pharetra efficitur arcu. Nunc scelerisque risus id dui mollis finibus. Nunc id neque odio. Nunc non massa nec risus varius maximus. Vestibulum pellentesque turpis vitae mi auctor interdum. Cras feugiat convallis odio at ultricies.Mauris a convallis arcu. Vivamus vulputate, purus et cursus tincidunt, diam elit convallis dui, eu viverra dolor lorem sed mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pharetra nunc imperdiet orci malesuada facilisis. Mauris quis vehicula leo. Donec quis dolor nec justo finibus imperdiet id sed diam. Aenean iaculis pretium augue in tincidunt. Sed nec dolor in lacus fermentum lacinia. Mauris pharetra pharetra vehicula. Etiam eu sapien vitae augue iaculis dapibus. Curabitur laoreet semper rutrum.Nulla a leo eget tellus interdum volutpat sit amet in magna. Ut aliquet, lorem vitae posuere iaculis, elit quam luctus ipsum, eget dignissim est libero in urna. Vivamus mollis congue ligula. Vestibulum maximus quam nulla, ac scelerisque leo sollicitudin quis. Nulla eleifend odio non turpis pulvinar fermentum. Nam quam libero, ultricies vitae ex quis, cursus euismod lectus. Etiam blandit porta orci, nec auctor tellus fermentum sed. Quisque sed enim porta, ullamcorper mauris nec, tempus eros. Aenean semper euismod lacinia. Proin accumsan, risus vitae pulvinar commodo, dui purus sollicitudin augue, sed efficitur erat nunc id nulla. Duis dictum enim odio, at tristique lorem volutpat id. Aliquam nec lacus cursus, finibus tortor ut, mattis ex. Integer eget nibh vehicula, blandit mauris ac, luctus elit. Morbi gravida, dolor sit amet suscipit ullamcorper, magna neque semper ex, ac porttitor enim orci auctor justo. Maecenas tincidunt, risus vitae interdum scelerisque, diam felis lobortis metus, et fermentum elit libero et metus. In malesuada at metus in fermentum.Quisque et tellus mauris. In at tincidunt dui. Aenean quis leo pretium ligula tristique pretium. Cras pellentesque blandit aliquet. Donec imperdiet elit sed tortor viverra feugiat. Vivamus viverra mollis est, eu egestas purus viverra at. Maecenas fermentum eu nisi vitae semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse elementum, lacus ac sollicitudin tincidunt, quam ex feugiat nisi, et porttitor metus mi sed sem. Cras hendrerit erat id lorem posuere blandit. Nam elementum nisi nec nibh congue accumsan. Vivamus id odio nec libero cursus malesuada eget sed turpis. Pellentesque quis sem dui. Aenean luctus neque vitae ex placerat tincidunt. Etiam ultricies sapien urna, eget imperdiet urna scelerisque eu. Donec finibus lacinia purus, eu volutpat elit. Maecenas rhoncus posuere mauris. Vivamus in pharetra enim, eget suscipit enim. Sed fringilla tempor pharetra. Aliquam venenatis, ipsum at elementum rhoncus, magna tellus dapibus massa, sed faucibus erat nulla molestie ipsum. Donec non ex eget orci ornare aliquam vitae at augue. Aliquam elementum mi tempus efficitur elementum. Donec ut purus tincidunt, gravida nisi eget, pellentesque nibh. In id arcu est. ',
		location: 'beavercreek',
		startDate: '7/15/2015',
		endDate: '7/24/2015',
		startTime: '11:30',
		endTime: '1:30',
		price: '$15/hour'
	});
	
	Posts.insert({
		title: 'Intermediate Guitar',
		description: 'Learn the Guitar, this is for the Intermediate students',
		location: 'Beavercreek',
		startDate: '7/15/2015',
		endDate: '7/24/2015',
		startTime: '11:30',
		endTime: '1:30',
		price: '$20/hour'
	});
	
	Posts.insert({
		title: 'Advanced Guitar',
		description: 'Learn the Guitar, this is for the most advanced students',
		location: 'Beavercreek',
		startDate: '7/15/2015',
		endDate: '7/24/2015',
		startTime: '11:30',
		endTime: '1:30',
		price: '$25/hour'
	});
	
	Posts.insert({
		title: 'Another Advanced Guitar',
		description: 'Learn the Guitar, this is for the most advanced students EVAR!',
		location: 'beavercreek',
		startDate: '7/15/2015',
		endDate: '7/24/2015',
		startTime: '11:30',
		endTime: '1:30',
		price: '$25/hour'
	});
	
	Comments.insert({
    postId: introG,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Sacha, can I get involved?'
  });
  
   Comments.insert({
    postId: introG,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
  });
}