function gestion_faim(perso) {
    var perso_faim_min = 50;
    var perso_faim_max = 100;
    var perso_stock_max = 100;

    if (perso.faim <= perso_faim_min || (perso.action == missions.gestion_faim.manger && perso.faim < perso_faim_max)) { // Il a faim OU il est en train de manger
        if (perso.position == perso.maison) { // Il est à la maison
            if (perso.mission != "deposer_nourriture_maison" && zones[perso.maison].stock > 0 && perso.faim < perso_faim_max) {
                perso.manger();
            } else {
                if (perso.mission == "ramener_nourriture_maison" || perso.mission == 'deposer_nourriture_maison') {
                    if (perso.stock <= 0) {
                        perso.mission = "aucune";
                    } else {
                        perso.deposer_nourriture_maison();
                    }
                } else if (perso.faim <= 50) {
                    perso.chercher_nourriture_entrepot();
                } else {
                    histo("Mission: aucune<br />Action: A fini de manger<br />");
                    perso.mission = "aucune";
                }
            }
        } else if (perso.position == "entrepot") { // Il est à l'entrepot
            if (perso.mission == "chercher_nourriture_entrepot" || perso.mission == "recuperer_nourriture_entrepot" || perso.mission == "ramener_nourriture_maison") {
                if (perso.stock >= perso_stock_max) {
                    perso.ramener_nourriture_maison();
                } else {
                    perso.recuperer_nourriture_entrepot();
                }
            } else {
                perso.chercher_nourriture_maison();
            }
        } else { // Il n'est pas à la maison ni à l'entrepot
            if (perso.mission != "chercher_nourriture_entrepot" && perso.mission != "ramener_nourriture_maison") { // S'il n'est pas parti chercher de la nourriture à l'entrepôt
                perso.chercher_nourriture_maison();
            }
        }
    } else if (perso.action == missions.gestion_faim.manger && perso.faim >= perso_faim_max) { // il est en train de manger et a suffisament mangé
        if (perso.faim >= perso_faim_max) {
            histo("Mission: aucune<br />Action: A fini de manger (plein)<br />");
            perso.mission = "aucune";
        }
    }
}