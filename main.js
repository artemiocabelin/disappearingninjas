// ----jQuery---
$(document).ready(function(){
    $('.ninja').click(function() {
        $(this).hide();
    });

    $('#restore').click(function() {
        $('img').show();
    });
});