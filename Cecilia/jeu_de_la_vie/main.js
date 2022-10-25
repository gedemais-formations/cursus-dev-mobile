let controller = new Controller();
let model = new Model();

model.generate_matrix();

setInterval(async function tick() {
    let view = new View(controller.alive, controller.dead);

    view.draw_background();
    model.update_model();
    view.update_view();
}, 100);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/

