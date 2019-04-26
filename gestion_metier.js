function gestion_metier(perso) {
    var perso_stock_max = 100;

    if (perso.metier == "entrepot") {
        if (perso.position == 'entrepot') {
            perso.travailler_entrepot();
        } else {
            perso.aller_travailler_entrepot();
        }
    } else if (perso.metier == "champ") {
        if (perso.position == 'entrepot' && (perso.mission == "aller_deposer_ble_entrepot") || perso.mission == "deposer_ble_entrepot") {
            if (perso.stock <= 0) {
                perso.aller_travailler_champ();
            } else {
                perso.deposer_ble_entrepot();
            }
        } else if (perso.position == 'champ') {
            if (perso.stock >= perso_stock_max) {
                perso.aller_deposer_ble_entrepot();
            } else {
                perso.travailler_champ();
            }
        } else {
            perso.aller_travailler_champ();
        }
    }

    return perso;
}