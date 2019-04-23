class perso {
  //id;
  maison;
  image;
  sexe;
  age;
  metier;
  metier_niveau;
  x1;
  x2;
  y1;
  y2;
  action;
  faim;
  stock;
  constructor(data) {
    data.forEach(function (element) {
      this[element] = element;
    });
    this.id = data.id;
    this.maison = data.maison;
    this.sexe = data.sexe;
    if (data.age < 7) {
      this.image = 'perso/perso_b_' + data.maison + '.png';
    } else if (data.age < 13) {
      this.image = 'perso/perso_c_' + data.maison + '.png';
    } else if (data.sexe == 'H') {
      this.image = 'perso/perso_h_' + data.maison + '.png';
    } else if (data.sexe == 'F') {
      this.image = 'perso/perso_f_' + data.maison + '.png';
    }
  }
}