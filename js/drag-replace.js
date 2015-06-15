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
    $(".boxes").draggable({
        revert: 'invalid'
    });
    $('#inventory').droppable();
    $("#dragBox1,#dragBox2,#dragBox3,#dragBox4,#dragBox5,#dragBox6,#dragBox7,#dragBox8,#dragBox9,#dragBox10,#dragBox11,#dragBox12,#dragBox13,#dragBox14,#dragBox15").droppable({
        accept: '.boxes'
    })
    $('#dragBox1,#dragBox2,#dragBox3,#dragBox4,#dragBox5,#dragBox6,#dragBox7,#dragBox8,#dragBox9,#dragBox10,#dragBox11,#dragBox12,#dragBox13,#dragBox14,#dragBox15,#inventory').bind('drop', function(ev, ui) {
        itemInSpot(ui.draggable, this);
    });


});