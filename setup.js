sagecell.makeSagecell( {

	inputLocation: '.sagemathcell',
	autoeval: true,
	hide: ['editor','evalButton','permalink'],
	callback: resizeIframes

} );

function resizeIframes() {

    if ( /(iPad|iPhone|iPod)/g.test( navigator.userAgent ) ) {

        var scenes = document.getElementsByTagName( 'iframe' );
alert('found '+scenes.length+' scenes');
        for ( var i=0 ; i < scenes.length ; i++ ) {

            scenes[i].style.width = getComputedStyle( scenes[i] ).width;
            scenes[i].style.height = getComputedStyle( scenes[i] ).height;
            scenes[i].setAttribute( 'scrolling', 'no' );
alert('scene '+i+' width/height is '+scenes[i].style.width+'/'+scenes[i].style.height);
        }
    }

}


function accept() {

	var buttons = document.getElementsByClassName( 'ui-dialog-buttonset' );
	if ( buttons.length > 0 ) buttons[0].firstChild.click();

}
