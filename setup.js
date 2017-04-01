sagecell.makeSagecell( {

	inputLocation: '.sagemathcell',
	autoeval: true,
	hide: ['editor','evalButton','permalink']

} );


function accept() {

	var buttons = document.getElementsByClassName( 'ui-dialog-buttonset' );
	if ( buttons.length > 0 ) buttons[0].firstChild.click();

}
