sagecell.makeSagecell( {

	inputLocation: '.sagemathcell',
	autoeval: true,
	hide: ['editor','evalButton','permalink']

} );

var check = requestAnimationFrame( accept );
setTimeout( function() { cancelAnimationFrame( check ); }, 5000 );

function accept() {

	check = requestAnimationFrame( accept );

	var buttons = document.getElementsByClassName( 'ui-dialog-buttonset' );
	if ( buttons.length > 0 ) {
		buttons[0].firstChild.click();
		cancelAnimationFrame( check );
	}
}
