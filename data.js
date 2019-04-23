var interface = {
    "portrait": [
        {
            "id": "portrait",
            "image": "objet1.png",
            "x1": 15,
            "x2": 50,
            "y1": 15,
            "y2": 50,
        },
        {
            "id": "life",
            "image": "objet1.png",
            "life": 10,
            "x1": 10,
            "x2": 20,
            "y1": 10,
            "y2": 50,
        },
        {
            "id": "mana",
            "mana": 10,
            "image": "objet1.png",
            "x1": 40,
            "x2": 50,
            "y1": 10,
            "y2": 50,
        }
    ]
};
var familles = {
    "famille1": [
        {
            "id": "Paul",
            "maison": "maison1",
            "image": "perso/perso_h_blue.png",
            "sexe": "H",
            "age": 33,
            "metier": "entrepot",
            "metier_niveau": 4,
            "x1": 350,
            "x2": 360,
            "y1": 100,
            "y2": 110,
            "action": "",
            "faim": 50.0,
            "stock": 0
        },
        /*{
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
            "action": "travail",
            "faim": 156,
            "stock": 0
        },
        {
            "id": "Kevin",
            "maison": "maison1",
            "image": "perso/perso_c_blue.png",
            "sexe": "H",
            "age": 13,
            "metier": "champ",
            "metier_niveau": 0,
            "x1": 0,
            "x2": 10,
            "y1": 0,
            "y2": 10,
            "action": "travail",
            "faim": 49,
            "stock": 0
        },
        {
            "id": "Penny",
            "maison": "maison1",
            "image": "perso/perso_b_blue.png",
            "sexe": "F",
            "age": 3,
            "metier": "",
            "metier_niveau": 0,
            "x1": 0,
            "x2": 10,
            "y1": 0,
            "y2": 10,
            "faim": 330,
            "stock": 0
        }*/
    ],
    /*"famille2": [
        {
            "id": "Jean",
            "maison": "maison2",
            "image": "perso/perso_h_red.png",
            "sexe": "H",
            "age": 43,
            "metier": "champ",
            "metier_niveau": 8,
            "x1": 80,
            "x2": 90,
            "y1": 0,
            "y2": 10,
            "faim": 70.0,
            "stock": 0,
            "stock": 0
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
            "faim": 137,
            "stock": 0
        },
        {
            "id": "Jeanne",
            "maison": "maison2",
            "image": "perso/perso_c_red.png",
            "sexe": "F",
            "age": 21,
            "metier": "champ",
            "metier_niveau": 1,
            "x1": 300,
            "x2": 310,
            "y1": 500,
            "y2": 510,
            "faim": 434,
            "stock": 0
        }
    ]*/
};
var maisons = {
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
        "x1": 400,
        "x2": 480,
        "y1": 180,
        "y2": 240,
        "stock": 1500
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
        "stock": 10000
    },
    "champ": {
        "id": "champ",
        "image_hover": "batiment/champ.png",
        "image": "batiment/champ.png",
        "libelle": "Magasin",
        "x1": 200,
        "x2": 500,
        "y1": 400,
        "y2": 600,
    }
};
var missions = {
    "aucune": "Aucune",
    "faim": ['mange', 'chercher_nourriture', 'ramener_nourriture'],
    "metier": ['entrepot', 'champ', 'deposer_nourriture_entrepot'],
};