function advice (){
    $.ajax("https://api.adviceslip.com/advice",{
        method: "GET", dataType: "json"
    }).fail(function(xhr, code, error_text){
        console.error(xhr, code, error_text);
        $("#main_text span").text(error_text);
        $("#header span").text("");
    }).done(function(json){
        $("#header span").text(json.slip.id);
        $("#main_text span").text(json.slip.advice);
    })
}