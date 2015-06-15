function itemInSpot(drag_item, spot) {
    var oldSpotItem = $(spot).find('img');
    if (oldSpotItem.length > 0) {
        oldSpotItem.appendTo('#inventory').draggable({
            revert: 'invalid'
        });
    }
    var item = $('<img />');
    item.attr('src', drag_item.attr('src')).attr('class', drag_item.attr('class')).appendTo(spot).draggable({
        revert: 'invalid'
    });
    drag_item.remove(); // remove the old object
}

$(document).ready(function() {
    $(".circles").draggable({
        revert: 'invalid'
    });
    $('#inventory').droppable();
    $("#circles1,#circles2").droppable({
        accept: '.circles'
    })
    $('#circles1,#circles2,#inventory').bind('drop', function(ev, ui) {
        itemInSpot(ui.draggable, this);
    });


});