$(document).ready(function() {
    "use strict";
	// --
    // Accordeon
    // --
    $('#accordeon').cubeportfolio({
        filters: '#filters-faq',
        defaultFilter: '*',
        animationType: 'sequentially',
        gridAdjustment: 'default',
        displayType: 'default',
        caption: 'expand',
        gapHorizontal: 0,
        gapVertical: 0
    });

    $('#solo').cubeportfolio({
        filters: '#filters-faq',
        defaultFilter: '*',
        animationType: 'sequentially',
        gridAdjustment: 'default',
        displayType: 'default',
        caption: 'expand',
        gapHorizontal: 0,
        gapVertical: 0,
    });

}); // End of document.ready
