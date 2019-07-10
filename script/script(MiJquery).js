// https://jqueryui.com/
$(()=>{
    // funcion para permitir mover un objeto con el cursor
    $(".cuadrado").draggable();
    // resizable permite cambiar el tamaño del elemento
    $(".cuadrado").resizable();
    // permite cambiar el orden de los elemento ul
    $(".person").sortable({
        update:(event)=>{
            console.log(event);
        }
    });

    $(".little_box").draggable();
    
    $(".box").droppable({
        drop:(event)=>{
            console.log("kimi");
            $(".box").css("background-color", "red");
            // $(this).css("");
            console.log(event);
        }
    });

    // effect, toggle = to add animations
    $("#animate").click(()=>{
        // $(".objetive:eq(0)").toggle("fold");
        // $(".objetive:eq(0)").toggle("bind");
        $(".objetive:eq(0)").effect("explode");
    });

    // more efects
    $("#animate2").click(()=>{
        // $(".objetive2").toggle("slide", 2500);
        // $(".objetive2").toggle("puff");
        $(".objetive2").toggle("shake");
    });

    // show info when the cursor is over
    $("#img").tooltip();

    // show de element window like modal-bootstrap
    $("#dialog").click(()=>{
        $("#window").dialog({
            // permite manipular las propiedades
            resizable: false,
            draggable: false,
            closeOnEscape: true,
            buttons:{
                acept:function(){
                    $(this).dialog("close")
                },
                // para este caso no se uso el selector con el 
                // id debido a que this no funciona con funciones flecha
                // cabe resaltar que con prototypes no funcionan con
                // funciones flecha
                "message":()=>{
                    $("#window").dialog("close");
                }
            }
        });
    });
})