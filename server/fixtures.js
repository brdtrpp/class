if (Posts.find().count() === 0) {
//   var now = new Date().getTime();

//   // create two users
//   var tomId = Meteor.users.insert({
//     profile: { username: 'Tom Coleman', email: "tom.coleman@gmail.com" }
//   });
//   var tom = Meteor.users.findOne(tomId);
//   var sachaId = Meteor.users.insert({
//     profile: { username: 'SachaG', email: "sacha.greif@gmail.com", firstname: 'Sacha', lastname: 'Greif' }
//   });
//   var sacha = Meteor.users.findOne(sachaId);
  
  for (var i = 0; i < 10; i++) {
  	Posts.insert({
  		title: 'Parent & Child Art Class',
  		startDate: new Date(2015, 8, 13 + ( i * 7)),
  		endDate: new Date(2015, 8, 13 + ( i * 7)),
  		startTime: "10:00AM",
  		endTime: "10:45AM",
  		price: "$12 per visit or $42 four class pass",
  		submitted: new Date(2015, 8, 12),
  		description: "Youngsters can enjoy the freedom of artist expression while bonding with the parents in our special art class just for toddlers and parents. They will explore all kinds of art materials and learn fine motor skills in this fun creative class. Class pass interchangeable between Parent & Child or K-4 Art Class and can be shared with siblings. 6 month expiration from purchase.",
  		commentsCount: 0,
  		city: 'Beavercreek',
  		state: 'OH',
  		url: 'www.decoy-art.com/'
  	});
  }
  
  for (var i = 0; i < 10; i++) {
  	Posts.insert({
  		title: 'Parent & Child Art Class',
  		startDate: new Date(2015, 8, 16 + ( i * 7)),
  		endDate: new Date(2015, 8, 16 + ( i * 7)),
  		startTime: "11:00AM",
  		endTime: "11:45AM",
  		price: "$12 per visit or $42 four class pass",
  		submitted: new Date(2015, 8, 12),
  		description: "Youngsters can enjoy the freedom of artist expression while bonding with the parents in our special art class just for toddlers and parents. They will explore all kinds of art materials and learn fine motor skills in this fun creative class. Class pass interchangeable between Parent & Child or K-4 Art Class and can be shared with siblings. 6 month expiration from purchase.",
  		commentsCount: 0,
  		city: 'Beavercreek',
  		state: 'OH',
  		url: 'www.decoy-art.com/'
  	});
  }
  
  for (var i = 0; i < 10; i++) {
  	Posts.insert({
  		title: 'Kids K–4th Art Class',
  		startDate: new Date(2015, 8, 13 + ( i * 7)),
  		endDate: new Date(2015, 8, 13 + ( i * 7)),
  		startTime: "11:30AM",
  		endTime: "12:30pM",
  		price: "$12 per visit or $42 four class pass",
  		submitted: new Date(2015, 8, 12),
  		description: "The weekly art class will introduce kids to all sorts of art forms. They will try new media, learn about artists and how to make their own pieces better every week.",
  		commentsCount: 0,
  		city: 'Beavercreek',
  		state: 'OH',
  		url: 'www.decoy-art.com/'
  	});
  }
  
  for (var i = 0; i < 10; i++) {
  	Posts.insert({
  		title: 'Kids Clay Time',
  		startDate: new Date(2015, 8, 13 + ( i * 7)),
  		endDate: new Date(2015, 8, 13 + ( i * 7)),
  		startTime: "11:30AM",
  		endTime: "12:30pM",
  		price: "$78 per student",
  		submitted: new Date(2015, 8, 12),
  		description: "Let us take your child’s skill with clay to the next level! With this three day course, they get to experience in-depth clay projects. From wheel throwing to hand building, each series focuses on a range of topics to complete one large scale work or several smaller pieces. Teaching the clay process from mud, to glaze and fire.",
  		commentsCount: 0,
  		city: 'Beavercreek',
  		state: 'OH',
  		url: 'www.decoy-art.com/'
  	});
  }

// 	var introG = Posts.insert({
// 		title: 'Introduction Guitar',
// 		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus nec tortor vel commodo. Nullam pretium elit nunc, at lacinia sem vulputate at. Morbi a cursus magna, sit amet ullamcorper massa. Praesent quam odio, aliquet id dui at, pharetra efficitur arcu. Nunc scelerisque risus id dui mollis finibus. Nunc id neque odio. Nunc non massa nec risus varius maximus. Vestibulum pellentesque turpis vitae mi auctor interdum. Cras feugiat convallis odio at ultricies.Mauris a convallis arcu. Vivamus vulputate, purus et cursus tincidunt, diam elit convallis dui, eu viverra dolor lorem sed mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pharetra nunc imperdiet orci malesuada facilisis. Mauris quis vehicula leo. Donec quis dolor nec justo finibus imperdiet id sed diam. Aenean iaculis pretium augue in tincidunt. Sed nec dolor in lacus fermentum lacinia. Mauris pharetra pharetra vehicula. Etiam eu sapien vitae augue iaculis dapibus. Curabitur laoreet semper rutrum.Nulla a leo eget tellus interdum volutpat sit amet in magna. Ut aliquet, lorem vitae posuere iaculis, elit quam luctus ipsum, eget dignissim est libero in urna. Vivamus mollis congue ligula. Vestibulum maximus quam nulla, ac scelerisque leo sollicitudin quis. Nulla eleifend odio non turpis pulvinar fermentum. Nam quam libero, ultricies vitae ex quis, cursus euismod lectus. Etiam blandit porta orci, nec auctor tellus fermentum sed. Quisque sed enim porta, ullamcorper mauris nec, tempus eros. Aenean semper euismod lacinia. Proin accumsan, risus vitae pulvinar commodo, dui purus sollicitudin augue, sed efficitur erat nunc id nulla. Duis dictum enim odio, at tristique lorem volutpat id. Aliquam nec lacus cursus, finibus tortor ut, mattis ex. Integer eget nibh vehicula, blandit mauris ac, luctus elit. Morbi gravida, dolor sit amet suscipit ullamcorper, magna neque semper ex, ac porttitor enim orci auctor justo. Maecenas tincidunt, risus vitae interdum scelerisque, diam felis lobortis metus, et fermentum elit libero et metus. In malesuada at metus in fermentum.Quisque et tellus mauris. In at tincidunt dui. Aenean quis leo pretium ligula tristique pretium. Cras pellentesque blandit aliquet. Donec imperdiet elit sed tortor viverra feugiat. Vivamus viverra mollis est, eu egestas purus viverra at. Maecenas fermentum eu nisi vitae semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse elementum, lacus ac sollicitudin tincidunt, quam ex feugiat nisi, et porttitor metus mi sed sem. Cras hendrerit erat id lorem posuere blandit. Nam elementum nisi nec nibh congue accumsan. Vivamus id odio nec libero cursus malesuada eget sed turpis. Pellentesque quis sem dui. Aenean luctus neque vitae ex placerat tincidunt. Etiam ultricies sapien urna, eget imperdiet urna scelerisque eu. Donec finibus lacinia purus, eu volutpat elit. Maecenas rhoncus posuere mauris. Vivamus in pharetra enim, eget suscipit enim. Sed fringilla tempor pharetra. Aliquam venenatis, ipsum at elementum rhoncus, magna tellus dapibus massa, sed faucibus erat nulla molestie ipsum. Donec non ex eget orci ornare aliquam vitae at augue. Aliquam elementum mi tempus efficitur elementum. Donec ut purus tincidunt, gravida nisi eget, pellentesque nibh. In id arcu est. ',
// 		location: 'beavercreek',
// 		startDate: '7/15/2015',
// 		endDate: '7/24/2015',
// 		startTime: '11:30',
// 		endTime: '1:30',
// 		price: '$15/hour',
// 		submitted: new Date(now - 7 * 3600 * 1000),
// 		commentsCount: 2,
// 		upvoters: [],
// 		url: 'http://themeteorbook.com',
// 		votes: 0
// 	});

// 	Posts.insert({
// 		title: 'Intermediate Guitar',
// 		description: 'Learn the Guitar, this is for the Intermediate students',
// 		location: 'Beavercreek',
// 		startDate: '7/15/2015',
// 		endDate: '7/24/2015',
// 		startTime: '11:30',
// 		endTime: '1:30',
// 		price: '$20/hour',
// 		submitted: new Date(now - 10 * 3600 * 1000),
// 		commentsCount: 0,
// 		upvoters: [],
// 		votes: 0
// 	});

// 	Posts.insert({
// 		title: 'Advanced Guitar',
// 		description: 'Learn the Guitar, this is for the most advanced students',
// 		location: 'Beavercreek',
// 		startDate: '7/15/2015',
// 		endDate: '7/24/2015',
// 		startTime: '11:30',
// 		endTime: '1:30',
// 		price: '$25/hour',
// 		submitted: new Date(now - 7 * 3600 * 1000),
// 		commentsCount: 2,
// 		upvoters: [],
// 		votes: 0
// 	});

// 	Posts.insert({
// 		title: 'Another Advanced Guitar',
// 		description: 'Learn the Guitar, this is for the most advanced students EVAR!',
// 		location: 'beavercreek',
// 		startDate: '7/15/2015',
// 		endDate: '7/24/2015',
// 		startTime: '11:30',
// 		endTime: '1:30',
// 		price: '$25/hour',
// 		submitted: new Date(now - 7 * 3600 * 1000),
// 		commentsCount: 2,
// 		upvoters: [],
// 		votes: 0
// 	});

// 	Comments.insert({
//     postId: introG,
//     userId: tom._id,
//     author: tom.profile.name,
//     submitted: new Date(now - 5 * 3600 * 1000),
//     body: 'Interesting project Sacha, can I get involved?'
//   });

//   Comments.insert({
//     postId: introG,
//     userId: sacha._id,
//     author: sacha.profile.name,
//     submitted: new Date(now - 3 * 3600 * 1000),
//     body: 'You sure can Tom!'
//   });
}

