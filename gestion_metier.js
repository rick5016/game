function gestion_metier(perso) {
    if (perso.metier == "entrepot") {
        if (perso.position == 'entrepot') {
            perso.mission = "travailler_entrepot";
        } else {
            perso.mission = "aller_travailler_entrepot";
        }
    } else if (perso.metier == "champ") {
        if (perso.position == 'entrepot' && (perso.mission == "aller_deposer_ble_entrepot") || perso.mission == "deposer_ble_entrepot") {
            if (perso.stock <= 0) {
                perso.mission = "aller_travailler_champ";
            } else {
                perso.mission = "deposer_ble_entrepot";
            }
        } else if (perso.position == 'champ') {
            if (perso.stock >= 250) {
                perso.mission = "aller_deposer_ble_entrepot";
            } else {
                perso.mission = "travailler_champ";
            }
        } else {
            perso.mission = "aller_travailler_champ";
        }
    }

    return perso;
}

function travail_entrepot(perso) {
    if (perso.position == "entrepot") {
        perso.action = "Travail à l'entrepôt";
        return perso;
    } else {
        return goEntrepot(perso);
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
        zones.entrepot.stock += 1;
        if (perso.stock <= 0) {
            perso.mission = "Aucune";
        }
        return perso;
    } else {
        return goEntrepot(perso);
    }
}