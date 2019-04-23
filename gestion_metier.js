function gestion_metier(perso) {
    if (perso.metier == "entrepot") {
        perso.mission = "Va travailler à l'entrepôt";
    } else if (perso.metier == "champ") {
        perso.mission = "Va travailler au champ";
    }

    return perso;
}

function travail_entrepot(perso) {
    if (perso.position == "entrepot") {
        perso.action = "Travail à l'entrepôt";
        return perso;
    } else {
        return goMagasin(perso);
    }
}

function travail_champ(perso) {
    if (perso.stock >= 250) {
        perso.mission = "Va déposer le blé à l'entrepôt";
    } else if (perso.position == "champ") {
        perso.stock += 0.1;
        perso.action = "Travail au champ";
    } else {
        perso = goChamp(perso);
    }

    return perso;
}

function travail_champ_entrepot(perso) {
    if (perso.position == "entrepot") {
        perso.action = "Je dépose le blé";
        perso.stock -= 1;
        maisons.entrepot.stock += 1;
        if (perso.stock <= 0) {
            perso.mission = "Aucune";
        }
        return perso;
    } else {
        return goMagasin(perso);
    }
}