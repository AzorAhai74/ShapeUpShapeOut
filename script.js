$(document).ready(function() {
    let $divContainer = $("<div></div>");
    let $divBootSetup = $("<div></div>");
    let $divCol1 = $("<div></div>");
    


    $($divContainer).addClass("container");
    $($divBootSetup).addClass("d-flex justify-content-center");
    $($divCol1).addClass("col shadow-lg p-4 mb-4 bg-light;background-color");
    $($divCol1).appendTo($divBootSetup);
    $($divContainer).prepend($divBootSetup);
    $('body').prepend($divContainer);



});