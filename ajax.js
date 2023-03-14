$(document).ready(function(){
    $("#shoutbutton").click(function(){
        
        var data_json = {
            "name":"Ahmad",
            "age" : 20,
            "message" : document.getElementById("msg").value 
        };     
        
        //console.log(data_json)

        $.ajax({
            type: "POST",
            url: "replay.php",
            data: data_json,
            dataType: "json",
            success: function(respon){
                $("#data").append("<div>" +
                "Nama: " + respon["nama"] +
                " Umur: " + respon["umur"] +
                " pesan: " + respon["pesan"] + 
                "</div>")
            },
            error: function(err){
                alert(err);
            }
        });
    });
});