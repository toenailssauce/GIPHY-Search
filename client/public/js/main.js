$('#button').click(function(e) {
  e.preventDefault()
  var obj = {q: $('#search').val()}
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search?"+$.param(obj)+"&api_key=dc6zaTOxFJmzC",
  })
    .done(function(data) {
      if ( console && console.log ) {
      	for (var i = 0; i < 25; i++)
      	{
      		var clone = $('div.hidden').clone();
      		$("#source").attr('src', data.data[i].images.fixed_height.url)
      		clone.removeClass("hidden").addClass("col s6 m4")
          $('div.row_1').append(clone)
      	}
        //loop over first 3 in data.data
          //clone hidden div (column)
          //set i.images.fixed_height.url as src property of image
          // remove the "hidden" class in the clone
          //add it to page

      }
    });
})