var darkMode = false;

$(".switch").click(function() {
if (darkMode == false){
    darkMode = true;
    $("body").css({'background-color':'#212121', 'color' : 'white'});
    $(".switch").css("color", "white");
    $(".script").css("background-color", "#b7b7b7");
}
else if (darkMode == true){
    darkMode = false;
    $("body").css({'background-color': '#eaeaea', 'color' : '#212121'});
    $(".switch").css("color", "#212121");
    $(".script").css("background-color", "#f7f7f7");
}
});
