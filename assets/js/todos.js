//check off specfic todos by clicking
//toggles any li from WITHIN a ul
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");  
});

//click on X to delete todo
//remove a span from WITHIN a ul
$("ul").on("click", "span", function(event){
    //use parent to remove hole li and not just span
    $(this).parent().fadeOut(300,function(){
        $(this).remove();
    });
    //stop the events so it only clicked on span
    event.stopPropagation();    
});

//adding new to-dos to the list
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grab the text from the input
        var todoText = $(this).val();
        //clear the input
        $(this).val("");
        //create a new li and to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$("#toggleForm").click(function() {
    $("input[type='text']").fadeToggle();
});