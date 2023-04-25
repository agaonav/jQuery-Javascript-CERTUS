/* Al cargar el documento */
$("document").ready(function () {

    /* Al hacer clic en botón */
    $("#ocultarPrimero").click(function () {
        /* Se ocultan todos los párrafos */
        $("p:first").hide();
    });
    $("#ocultarUltimo").click(function () {
        /* Se ocultan todos los párrafos */
        $("p:last").hide();
    });
    $("#ocultarTodo").click(function () {
        /* Se ocultan todos los párrafos */
        $("p").hide();
    });
    $("#mostrarTodo").click(function () {
        /* Se ocultan todos los párrafos */
        $("p").show();
    });

    /* Al enfocar y quitar el enfoque */
    $("input").focus(function () {
        /* Brillar y colocar bordes */
        $(this).css("box-shadow","0 0 4px 2px blue"); 
    });
    $("input").blur(function () {
        /* Brillar y colocar bordes */
        $(this).css("box-shadow","none"); 
    });

})