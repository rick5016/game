class batiment {
  constructor(names = [], values = []) {
    names.forEach((n, idx) => this[n] = values[idx]);
    this.calc_x = 0;
    this.calc_y = 0;
    this.calc_x_save = 0;
    this.calc_y_save = 0;
    this.bloque = false;
    this.a = 0;
    this.i = 0;
    this.calc_pixel = 5;
    this.calc_pixel_mouvement = 1;
    //console.log(this);
  }

  go(perso) {
    //var ctx = document.getElementById('dot').getContext('2d');
    //ctx.clearRect(0, 0, width, height);
    this.calc_x = this.x1;
    this.calc_y = this.y1;
    //perso.x1 = this.calculPath(perso.x1, this.x1);
    //perso.y1 = this.calculPath(perso.y1, this.y1);
    this.calculPath2(perso);
    if (perso.x1 == this.x1 && perso.y1 == this.y1) {
      perso.position = this.id;
    }
  }

  goAleatoire(perso) {
    var move = this.getRandomInt(1, 5);
    if (move == 5) {
      var move_x = this.getRandomInt(1, 5);
      if (move_x == 5) {
        perso.x1 = this.calculPath(perso.x1, this.getRandomInt(this.x1, this.x2));
      }
      var move_y = this.getRandomInt(1, 5);
      if (move_y == 5) {
        perso.y1 = this.calculPath(perso.y1, this.getRandomInt(this.y1, this.y2));
      }
    }
  }

  calculPath(d, a) {
    if (d < a) {
      var result = d + 1;
      if (result >= a) {
        return a;
      } else {
        return result;
      }
    } else {
      var result = d - 1;
      if (result <= a) {
        return a;
      } else {
        return result;
      }
    }
  }

  pointDeblocage(perso, logg) {
    var retour = false;
    var id = this.id;
    var calc_x_s = this.calc_x;
    var calc_y_s = this.calc_y;
    $.each(batiments, function (index, batiment) {
      if (id != batiment.id && batiment.id != 'map' && perso.position != batiment.id) {
        if (calc_x_s >= batiment.x1 && calc_x_s <= batiment.x2) {
          if (calc_y_s >= batiment.y1 && calc_y_s <= batiment.y2) {
            retour = true;
          }
        }
      }
    });

    if (retour) {
      if (logg)
        console.log(this.i + ' KO : ' + this.calc_x + '/' + this.calc_y);
    } else {
      if (logg)
        console.log(this.i + ' OK : ' + this.calc_x + '/' + this.calc_y);
    }
    return retour;

  }

  calculPath2(perso) {
    var logg = true;
    if (this.i == 0) {
      if (logg)
        console.log('perso x: ' + perso.x1 + ' y: ' + perso.y1);
      this.calc_x_save = this.calc_x;
      this.calc_y_save = this.calc_y;
    }

    this.i++;
    this.a++;
    if (this.a > 300) {
      return 0;
    }
    var x = perso.x1;
    var y = perso.y1;

    if (this.pointDeblocage(perso, logg)) {
      this.drawCoordinates(this.calc_x, this.calc_y, '#000');

      if (this.calc_x_save == this.calc_x) {
        if (y == this.calc_y || this.bloque) {
          this.bloque = true;
          // TODOOOOOOOOOO ! Il faut décider si on va en haut ou en bas
          this.calc_y -= this.calc_pixel; // On va à l'opposé : haut
          if (logg)
            console.log("Le personnage est derrière le batiment sur l'axe (y) (on monte pour l'instant) -> " + this.calc_y);
          /*if (logg)
            console.log("Le personnag est derrière un batiment sur l'axe y");*/
        }

        if (x < this.calc_x) { // Le personnag est à gauche
          this.calc_x += this.calc_pixel; // On va à l'opposé : droite
          if (logg)
            console.log("Boqué : Le personnag est à gauche on va à l'opposé (x) -> " + this.calc_x);
        } else if (y > this.calc_x) { // Le personnag est à droite
          this.calc_x -= this.calc_pixel; // On va à l'opposé : gauche
          if (logg)
            console.log('Boqué : Le personnag est à droite (x) -> ' + this.calc_x);
        } else { // Le personnag est sur la trajectoire horizontale
          // Il faut décider si on va à gauche ou à droite
          if (logg)
            console.log("Le personnag est derrière un batiment sur l'axe x");
        }
      } else if (this.calc_y_save == this.calc_y) {
        if (x == this.calc_x) {
          // Il faut décider si on va à gauche ou à droite
          if (logg)
            console.log("Le personnag est derrière un batiment sur l'axe x");
        }

        this.calc_x = this.calc_x_save;
        if (y < this.calc_y) { // y est en haut de calc_y
          this.calc_y += this.calc_pixel; // On va à l'opposé : bas
          if (logg)
            console.log("Boqué : Le personnag est en haut on va à l'opposé (y) -> " + this.calc_y);
        } else if (y > this.calc_y) { // y est en bas de calc_y
          this.calc_y -= this.calc_pixel; // On va à l'opposé : haut
          if (logg)
            console.log('Boqué : Le personnag est en bas (y) -> ' + this.calc_y);
        } else {
          // Il faut décider si on va en haut ou en bas
          if (logg)
            console.log("Le personnag est derrière un batiment sur l'axe y");
        }
      }
      this.calculPath2(perso);
    } else {
      this.drawCoordinates(this.calc_x, this.calc_y, '#fff');

      var action_unique = false;

      if (((x - this.calc_pixel <= this.calc_x) && (this.calc_x <= x + this.calc_pixel)) && ((y - this.calc_pixel <= this.calc_y) && (this.calc_y <= y + this.calc_pixel))) {
        if (logg)
          console.log('ok');
        this.i = 0;
        perso.x1 = this.calc_x;
        perso.y1 = this.calc_y;
        this.calc_x_deblocage = false;
      } else {
        if (this.calc_x_save == this.calc_x) {
          if (x < this.calc_x) { // Le personnag est à gauche
            this.calc_x -= this.calc_pixel; // On va vers le personnage vers la gauche (-)
            if (logg)
              console.log('Le personnag est à gauche (x) -> ' + this.calc_x);
          } else if (x > this.calc_x) { // Le personnag est à droite
            this.calc_x += this.calc_pixel; // On va vers le personnage vers la droite (+)
            if (logg)
              console.log('Le personnag est à droite (x) -> ' + this.calc_x);
          } else { // Le personnag est sur la trajectoire horizontale
            if (logg)
              console.log("Le personnag sur la trajectoire horizontale on ne fait rien sur l'axe x");
          }
          
          if (this.bloque) {
            action_unique = true;
            
            if (this.pointDeblocage(perso, logg) == false)
            this.bloque = false;
          }

        } else {
          if (logg)
            console.log("x à déjà été modifié");
        }
        this.calc_x_save = this.calc_x;

        if (this.calc_y_save == this.calc_y && action_unique == false) {
          this.calc_x = this.calc_x_save;
          if (y < this.calc_y) { // Le perso est en haut
            this.calc_y -= this.calc_pixel; // On va vers le personnage vers le haut (-)
            if (logg)
              console.log('Le perso est en haut (y) -> ' + this.calc_y);
          } else if (y > this.calc_y) { // Le perso est en bas
            this.calc_y += this.calc_pixel; // On va vers le personnage vers le bas (+)
            if (logg)
              console.log('Le perso est en bas (y) -> ' + this.calc_y);
          } else { // Le personnag est sur la trajectoire verticale
            if (logg)
              console.log("Le personnag est sur la trajectoire verticale on ne fait rien sur l'axe y");
          }
        } else {
          if (logg)
            console.log("y à déjà été modifié");
        }
        this.calc_y_save = this.calc_y;

        this.calculPath2(perso);
      }
    }
  }

  drawCoordinates(x, y, color) {
    var pointSize = 1; // Change according to the size of the point.
    var ctx = document.getElementById("dot").getContext("2d");


    ctx.fillStyle = color; // Red color

    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctx.fill(); // Close the path and fill.
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /*$(document).on('mousemove', '#calc', function (e) {
      var inCanvas = false;
      var x = e.clientX;
      var y = e.clientY;
      var ctx = document.getElementById('canvas').getContext('2d');
      $.each(zones, function (index, maison) {
          if ((x >= maison.x1 && x <= maison.x2) && (y >= maison.y1 && y <= maison.y2)) {
              inCanvas = true;
              maison.img.src = maison.image_hover;
              //drawPopup(x, y, maison.libelle);
          } else {
              maison.img.src = maison.image;
          }
      });
      if (!inCanvas) {
          //clear();
      }
  });*/

  /*$(document).on('click', '#calc', function (e) {
      console.log(e.clientX + '/' + e.clientY);
  });*/

}