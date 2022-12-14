console.log("sorido0");

const cita = document.querySelector("#este").addEventListener("click", () => {
    console.log("sorido1");
    Swal.fire({
        icon: "info",
        title: "Las citas online aun no estan disponibles",
        text: "Puedes llamarnos por telefono o escribenos a whatsapp",
        text: "809-593-0730, 809-593-7883 y 809-696-3854",
       
    });
});
//console.log(cita);



// Swal.fire({
//     title: '<strong>Gracias por visitarnos </strong>',
//     html:
//         '<iframe width="420" height="315" src="https://www.youtube.com/watch?v=sDRj03JrHTo"> </iframe>',
//     showCloseButton: true,
//     showCancelButton: true,
//     focusConfirm: false,
//     // confirmButtonText:
//     //     '<i class="fa fa-thumbs-up"></i> Great!',
//     // confirmButtonAriaLabel: 'Thumbs up, great!',
//     // cancelButtonText:
//     //     '<i class="fa fa-thumbs-down"></i>',
//     // cancelButtonAriaLabel: 'Thumbs down'
// })
