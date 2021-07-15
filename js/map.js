$(document).ready(function() {
	$('#UK').popover({
		content: '<ul class="list-group"><li class="list-group-item active">2019 University of Nottingham</li><li class="list-group-item">Business Ethics Research</li><li class="list-group-item active">2015 University College London</li><li class="list-group-item">Exchange semester</li></ul>',
		html: true,
		trigger: 'hover'

	});

	$('#France').popover({
		content: '<ul class="list-group"><li class="list-group-item list-group-item-success">2020 Tweag I/O</li><li class="list-group-item">Sales and Marketing Engineer</li><li class="list-group-item active">2019 HEC Paris</li><li class="list-group-item">MBA</br>HEC Excellence Scholar</li></ul>',
		html: true,
		trigger: 'hover'
	});

	$('#China').popover({
		content: '<ul class="list-group"><li class="list-group-item list-group-item-info">1993 Born Here</li></ul>',
		html: true,
		trigger: 'hover'
	});

	$('#US').popover({
		content: '<ul class="list-group"><li class="list-group-item active">2012 Duke University</li><li class="list-group-item">B.Eng in Electrical and Computer Engineering</br>Mastercard Foundation Scholar</li></ul>',
		html: true,
		trigger: 'hover'
	});

	$('#MiddleEast').popover({
		content: '<ul class="list-group"><li class="list-group-item list-group-item-success">2018 IBM</li><li class="list-group-item">Client Technical Professional for SaaS Application Security, Middle East and Africa region</li><</ul>',
		html: true,
		trigger: 'hover'
	});

	$('#SouthAfrica').popover({
		content: '<ul class="list-group"><li class="list-group-item list-group-item-success">2016 IBM</li><li class="list-group-item">Client Technical Professional in Cyber Security for Africa</li><li class="list-group-item active">2010 African Leadership Academy</li><li class="list-group-item">High School for Africans with leadership potential</br>A-levels</li></ul>',
		html: true,
		trigger: 'hover'
	});

});