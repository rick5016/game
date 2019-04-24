class perso {
  constructor(names = [], values = []) {
    names.forEach((n, idx) => this[n] = values[idx]);

    /*if (this.age < 7) {
      this.image = 'perso/perso_b_' + this.maison + '.png';
    } else if (this.age < 13) {
      this.image = 'perso/perso_c_' + this.maison + '.png';
    } else if (this.sexe == 'H') {
      this.image = 'perso/perso_h_' + this.maison + '.png';
    } else if (this.sexe == 'F') {
      this.image = 'perso/perso_f_' + this.maison + '.png';
    }*/
    console.log(this);

    /*mange = function() {
      console.log(this);
    }*/
  }


}