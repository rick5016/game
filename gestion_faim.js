function gestion_faim(perso) {
    var nourriture_max = 500;
    var stock_max = 250;

    if (perso.faim <= 50 || (perso.action == missions.gestion_faim.manger && perso.faim < nourriture_max)) { // Il a faim OU il est en train de manger
        if (perso.position == "maison") { // Il est à la maison
            if (!(perso.mission == "deposer_nourriture_maison" && perso.stock > 0)) { // S'il n'est pas en train de déposer la nourriture à la maison
                if (zones[perso.maison].stock > 0 && perso.faim < nourriture_max) { // Les stocks sont OK et qu'il a toujours faim
                    perso.mission = "manger";
                } else { // Les stocks sont KO
                    if (perso.mission == "ramener_nourriture_maison") {
                        if (perso.stock <= 0) {
                            perso.mission = "aucune";
                        } else {
                            perso.mission = "deposer_nourriture_maison";
                        }
                    } else if (perso.faim <= 50) {
                        perso.mission = "chercher_nourriture_entrepot";
                    } else {
                        histo("Mission: aucune<br />Action: A fini de manger<br />");
                        perso.mission = "aucune";
                    }
                }
            }
        } else if (perso.position == "entrepot") { // Il est à l'entrepot
            if (perso.mission == "chercher_nourriture_entrepot") { // S'il est pas parti chercher de la nourriture à l'entrepôt
                perso.mission = "recuperer_nourriture_entrepot";
            } else if (perso.mission == "recuperer_nourriture_entrepot") { // S'il est en train de récupérer de la nourriture à l'entrepôt
                if (perso.stock >= stock_max) {
                    perso.mission = "ramener_nourriture_maison";
                }
            }
        } else { // Il n'est pas à la maison ni à l'entrepot
            if (perso.mission != "chercher_nourriture_entrepot" && perso.mission != "ramener_nourriture_maison") { // S'il n'est pas parti chercher de la nourriture à l'entrepôt
                perso.mission = "chercher_nourriture_maison";
            }
        }
    } else if (perso.action == missions.gestion_faim.manger && perso.faim >= nourriture_max) {
        if (perso.faim >= nourriture_max) {
            histo("Mission: aucune<br />Action: A fini de manger (plein)<br />");
            perso.mission = "aucune"; // il est en train de manger et a suffisament mangé
        }
    }

    return perso;
}