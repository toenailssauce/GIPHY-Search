var firstClick = false;
$('#button').click(function(e) {
  e.preventDefault();
  var obj = {q: $('#search').val()};
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search?"+$.param(obj)+"&api_key=dc6zaTOxFJmzC",
  })
    .done(function(data) {
      if (console && console.log) {
        if (firstClick === true)
        {
          for (var y = 0; y < 25; y++)
          {
            $('#'+y).remove();
          }
        }
        firstClick = true;
      	for (var i = 0; i < 25; i++) // this for-loop creates a clone of class "hidden", adds the source, and clones it
      	{
      		var clone = $('div.hidden').clone();
          $(clone).attr('id', i);
      		$(clone).find('img').attr('src', data.data[i].images.fixed_height.url);
      		clone.removeClass("hidden").addClass("col s6 m4");
          $('div.row_1').append(clone);
      	}
      }
    })
})