var sameArray = ['vegies ', 'steak ' , 'chicken ', 'soup ', 'coffee ' ];

$('#myNewListBtn').on('click', function(){
	for (var i = 0; i < sameArray.length; i++) {

		$('#getMeTheList').append(sameArray);
	}
});