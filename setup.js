sagecell.makeSagecell( {

	inputLocation: '.sagemathcell',
	autoeval: true,
	hide: ['editor','evalButton','permalink']

} );

function resetIframes() {

    if ( /(iPad|iPhone|iPod)/g.test( navigator.userAgent ) ) {

        var scenes = document.getElementsByTagName( 'iframe' );

        for ( var i=0 ; i < scenes.length ; i++ ) {

    	    scenes[i].srcdoc = scenes[i].srcdoc;

        }
    }

}


function accept() {

	var buttons = document.getElementsByClassName( 'ui-dialog-buttonset' );
	if ( buttons.length > 0 ) buttons[0].firstChild.click();

}
