// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() 
    const rows = $('#heightGrid').val();
    const cols = $('#widthGrid').val(); 
    const table = $('#pixelCanvas');   
    // Removing old table if any
    $('#pixelCanvas').children().remove();
    // Creating table rows
    for (let i = 0; i < rows; i++) {
        $('#pixelCanvas').append('<tr></tr>');
    }
    // Creating cells in all row
    for (let j = 0; j < cols; j++) {
            $('#pixelCanvas tr').append('<td></td>');
        }
         /*let j = 0;
        while (j < cols) {
    $('#containerGrid tr').append('<td></td>');
    j++;
}*/
        table.on("click", "td", function()  {
        var color= $("input[type='color']").val();
        $(this).attr("bgcolor",color);
    });
}
$("input[type='submit']").click(function(e) {
    e.preventDefault();
    makeGrid();
});
$('#reset').click(function() {
  $('#pixelCanvas').children().remove();  
});
