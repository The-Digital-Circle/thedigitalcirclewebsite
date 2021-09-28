$(document).ready(function() {

  typing( 0, $('.typewriter-text').data('text') );

  function typing( index, text ) {

    var textIndex = 1;

    var tmp = setInterval(function() {
      if ( textIndex < text[ index ].length + 1 ) {
				$('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
				textIndex++;
			} else {
        setTimeout(function() { deleting( index, text ) }, 2000);
        clearInterval(tmp);
      }

		}, 150);

	}

	function deleting( index, text ) {

    var textIndex = text[ index ].length;

    var tmp = setInterval(function() {

      if ( textIndex + 1 > 0 ) {
        $('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
        textIndex--;
      } else {
        index++;
        if ( index == text.length ) { index = 0; }
        typing( index, text );
        clearInterval(tmp);
      }

		}, 150)

  }

});
