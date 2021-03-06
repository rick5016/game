
var familles_varNames = ["id", "maison", "image", "sexe", "age", "metier", "metier_niveau", "x1", "x2", "y1", "y2", "mission", "action", "faim", "stock", "popup_last", "popup_timer"];
var batiments_varNames = ["id", "image_hover", "image", "libelle", "x1", "x2", "y1", "y2", "stock"];
var hub_varNames = ["heure"];

var familles = {
    /*"famille1": [
        {
            "id": "Paul",
            "maison": "maison1",
            "image": "perso/perso_h_blue.png",
            "sexe": "H",
            "age": 33,
            "metier": "entrepot",
            "metier_niveau": 4,
            "x1": 700,
            "x2": 710,
            "y1": 100,
            "y2": 120,
            "mission": "aucune",
            "action": "",
            "faim": 50.0,
            "stock": 0,
            'popup_last': "",
            'popup_timer': 0,
        },
        {
            "id": "Francine",
            "maison": "maison1",
            "image": "perso/perso_f_blue.png",
            "sexe": "F",
            "age": 31,
            "metier": "entrepot",
            "metier_niveau": 2,
            "x1": 790,
            "x2": 800,
            "y1": 100,
            "y2": 110,
            "mission": "aucune",
            "action": "",
            "faim": 156,
            "stock": 0,
            'popup_last': "",
            'popup_timer': 0,
        },
        {
            "id": "Kevin",
            "maison": "maison1",
            "image": "perso/perso_c_blue.png",
            "sexe": "H",
            "age": 13,
            "metier": "champ",
            "metier_niveau": 0,
            "x1": 450,
            "x2": 460,
            "y1": 370,
            "y2": 380,
            "mission": "aucune",
            "action": "",
            "faim": 51,
            "stock": 97,
            'popup_last': "",
            'popup_timer': 0,
        },
        {
            "id": "Penny",
            "maison": "maison1",
            "image": "perso/perso_b_blue.png",
            "sexe": "F",
            "age": 3,
            "metier": "",
            "metier_niveau": 0,
            "x1": 340,
            "x2": 350,
            "y1": 190,
            "y2": 200,
            "mission": "aucune",
            "action": "",
            "faim": 330,
            "stock": 0,
            'popup_last': "",
            'popup_timer': 0,
        }
    ],*/
    "famille2": [
        /*{
            "id": "Jean",
            "maison": "maison2",
            "image": "perso/perso_h_red.png",
            "sexe": "H",
            "age": 43,
            "metier": "champ",
            "metier_niveau": 8,
            "x1": 500,
            "x2": 510,
            "y1": 160,
            "y2": 180,
            "mission": "aucune",
            "action": "",
            "faim": 45.0,
            "stock": 0,
            "stock": 0,
            'popup_last': "",
            'popup_timer': 0,
        },
        {
            "id": "Sylvie",
            "maison": "maison2",
            "image": "perso/perso_f_red.png",
            "sexe": "F",
            "age": 41,
            "metier": "champ",
            "metier_niveau": 4,
            "x1": 400,
            "x2": 410,
            "y1": 200,
            "y2": 210,
            "mission": "aucune",
            "action": "",
            "faim": 137,
            "stock": 0,
            'popup_last': "",
            'popup_timer': 0,
        },*/
        {
            "id": "Jeanne",
            "maison": "maison2",
            "image": "perso/perso_c_red.png",
            "sexe": "F",
            "age": 21,
            "metier": "champ",
            "metier_niveau": 1,
            "x1": 150,
            "x2": 160,
            "y1": 450,
            "y2": 470,
            "mission": "aucune",
            "action": "",
            "faim": 434,
            "stock": 0,
            'popup_last': "",
            'popup_timer': 0,
        }
    ]
};
var batiments = {
    "map": {
        "id": "map",
        "image_hover": "",
        "image": "",
        "libelle": "Map",
        "x1": 0,
        "x2": 800,
        "y1": 0,
        "y2": 600,
        "stock": 0
    },
    "maison1": {
        "id": "maison1",
        "image_hover": "batiment/maison1.png",
        "image": "batiment/maison1.png",
        "libelle": "Maison",
        "x1": 300,
        "x2": 380,
        "y1": 120,
        "y2": 180,
        "stock": 0
    },
    "maison2": {
        "id": "maison2",
        "image_hover": "batiment/maison2.png",
        "image": "batiment/maison2.png",
        "libelle": "Maison",
        "x1": 420,
        "x2": 500,
        "y1": 300,
        "y2": 360,
        "stock": 0
    },
    "entrepot": {
        "id": "entrepot",
        "image_hover": "batiment/entrepot.png",
        "image": "batiment/entrepot.png",
        "libelle": "Magasin",
        "x1": 700,
        "x2": 780,
        "y1": 100,
        "y2": 160,
        "stock": 13657
    },
    "champ": {
        "id": "champ",
        "image_hover": "batiment/champ.png",
        "image": "batiment/champ.png",
        "libelle": "Champ",
        "x1": 200,
        "x2": 400,
        "y1": 400,
        "y2": 500,
        "stock": 0
    },
};
var hub_data = {
    "heure": 12,
};
var missions = {
    "gestion_faim": {
        'manger': 'Je mange',
        'chercher_nourriture_maison': "Je vais manger à la maison",
        'chercher_nourriture_entrepot': "Je vais chercher de la nourriture à l'entrepôt",
        'recuperer_nourriture_entrepot': "Je récupère de la nourriture à l'entrepôt",
        'ramener_nourriture_maison': 'Je ramène la nourriture à la maison',
        'deposer_nourriture_maison': 'Je dépose la nourriture à la maison'
    },
    "gestion_metier": {
        'aller_travailler_entrepot': "Je vais travailler à l'entrepôt",
        'travailler_entrepot': "Je travaille à l'entrepôt",
        'aller_travailler_champ': "Je vais travailler au champ",
        'travailler_champ': "Je travaille au champ",
        'aller_deposer_ble_entrepot': "Je vais déposer le blé à l'entrepôt",
        'deposer_ble_entrepot': "Je dépose le blé à l'entrepôt"
    },
};