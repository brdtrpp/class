if (Classes.find().count() === 0) {
	Classes.insert({
		title: 'Introduction Guitar',
		description: 'Learn the Guitar',
		location: 'beavercreek',
		startDate: '7/15/2015',
		endDate: '7/24/2015',
		startTime: '11:30',
		endTime: '1:30',
		price: '$15/hour'
	});
	
	Classes.insert({
		title: 'Intermediate Guitar',
		description: 'Learn the Guitar, this is for the Intermediate students',
		location: 'Beavercreek',
		startDate: '7/15/2015',
		endDate: '7/24/2015',
		startTime: '11:30',
		endTime: '1:30',
		price: '$20/hour'
	});
	
	Classes.insert({
		title: 'Advanced Guitar',
		description: 'Learn the Guitar, this is for the most advanced students',
		location: 'Beavercreek',
		startDate: '7/15/2015',
		endDate: '7/24/2015',
		startTime: '11:30',
		endTime: '1:30',
		price: '$25/hour'
	});
	
	Classes.insert({
		title: 'Another Advanced Guitar',
		description: 'Learn the Guitar, this is for the most advanced students EVAR!',
		location: 'beavercreek',
		startDate: '7/15/2015',
		endDate: '7/24/2015',
		startTime: '11:30',
		endTime: '1:30',
		price: '$25/hour'
	});
}