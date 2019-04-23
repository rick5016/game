function gestion_faim(perso) {
    var nourriture_max = 250;
    var a_x = maisons[perso.maison].x1; // Coordonnées maison x
    var a_y = maisons[perso.maison].y1; // Coordonnées maison y

    /*if (perso.faim <= 50 || (perso.action == mission.faim[0] && perso.faim < nourriture_max)) { // Il a faim OU il est en train de manger
        if (perso.x1 == a_x && perso.y1 == a_y) { // Il est à la maison
            if (maisons[perso.maison].stock > 0) { // Les stocks sont OK
                perso.mission = "Manger";
            } else { // Les stocks sont KO
                perso.mission = "Va acheter des provisions";
            }
        } else { // Il n'est pas à la maison
            if (perso.mission == "Va à l'entrepôt") {
                perso.mission = "Va acheter des provisions";
            } else {
                perso.mission = "Va manger à la maison";
            }
        }
    } else if ((perso.action == "Je mange" && perso.faim >= nourriture_max)) {
        perso.mission = "Aucune"; // il est en train de manger et a suffisament mangé
    }*/

    if (faim(perso) || perso.action == mission.faim[0]) { // Il a faim OU il est en train de manger
        if (perso.x1 == a_x && perso.y1 == a_y) { // Il est à la maison
            if (maisons[perso.maison].stock > 0) { // Les stocks sont OK
                perso.mission = "Manger";
            } else { // Les stocks sont KO
                perso.mission = "Va acheter des provisions";
            }
        } else { // Il n'est pas à la maison
            if (perso.mission == "Va à l'entrepôt") {
                perso.mission = "Va acheter des provisions";
            } else {
                perso.mission = "Va manger à la maison";
            }
        }
    } else if ((perso.action == "Je mange" && perso.faim >= nourriture_max)) {
        perso.mission = "Aucune"; // il est en train de manger et a suffisament mangé
    }

    return perso;
}

function gestion_mange(perso) {
    if (perso.faim <= 50) { // il a faim
        if (perso.stock.nourriture > 0) { // il a de la nourriture sur lui
            mission_mange(perso, perso.stock.nourriture);
        } else {
            // Il cherche de la nourriture
            // il est à la maison ? oui
            // il y a à mangé ? Oui
                mission_mange(perso, maisons[perso.maison].stock);
                // il y a à mangé ? Non
                acheter_nourriture(perso);

            // il est à la maison ? non
            // go maison
        }
    }
}


function mission_mange(perso, stock) {
    log('Je mange');
    perso.action = mission.faim[0];
    perso.faim += 1;
    maisons[perso.maison].stock -= 1;

    return perso;
}

function acheter_nourriture(perso) {
    if (perso.position == "entrepot") {
        perso.action = mission.faim[1];
        perso.stock += 1;
        maisons.entrepot.stock -= 1;
        if (perso.stock >= 250) {
            perso.mission = "Ramèner les provisions";
        }
        return perso;
    } else {
        return goMagasin(perso);
    }
}

function deposer_manger(perso) {
    if (perso.position == "maison") {
        perso.action = mission.faim[2];
        perso.stock -= 1;
        maisons[perso.maison].stock += 1;
        if (perso.stock == 0) {
            perso.mission = "Aucune";
        }
        return perso;
    } else {
        return goMaison(perso);
    }
}