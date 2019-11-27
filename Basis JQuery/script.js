// DOCUMENT JQUERY INLADEN
$(document).ready(function(){

    $("#pTextHelloWorld").append("Hello world");

    $("#kleurAanpassen").css("color", "blue").slideUp(2000).slideDown(2000);

    $("#pKabouterWesley").css("color", "red");

    $("#buttonWesley").click(function(){
        $("#pKabouterWesley").hide();
    });

    const inputNaamValue = $("#inputNaam").val();
    $("#buttonInputNaam").click(function(){

        $("#naamInputveld").append(inputNaamValue);
    });


    $("#buttonFamilieNaam").click(function(){
        $("#familieNaamInputVeld").empty();
        var familieNaam = $("#inputVeldFamilieNaam").val();
        $("#familieNaamInputVeld").append(familieNaam);
    });




});
