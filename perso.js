class perso {
  constructor(names = [], values = []) {
    names.forEach((n, idx) => this[n] = values[idx]);
    //console.log(this);
  }

  drawPopup() {
    if (this.popup_last != this.action) {
      this.popup_timer = 0;
    }
    if (this.popup_timer < 180) {
      this.popup_last = this.action;
      this.popup_timer += 1;
      var x = this.x1 + 20;
      var y = this.y1 + 20;
      var largeur = 10.0;
      var hauteur = 10.0;
      var ctx = document.getElementById('calc').getContext('2d');

      ctx.font = '16px serif';
      var text = ctx.measureText(this.action);

      largeur += text.width;
      hauteur += 16;
      if (x + largeur > width) {
        x -= text.width;
      }
      if (y + hauteur > height) {
        y -= 16;
      }

      ctx.fillStyle = 'rgb(255, 255, 255)';
      ctx.fillRect(x, y, largeur, hauteur);

      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillText(this.action, x, y + 16);
    }
  }

  ballade() {
    this.mission = "aucune";
    histo("Mission: aucune<br />Action: Je me ballade<br />");
    this.action = "Je me ballade";
    zones.map.goAleatoire(this);
    this.position = "dehors";
  }

  /*** GESTION FAIM ***/

  manger() {
    this.mission = "manger";
    histo("Mission: manger<br />Action: " + missions.gestion_faim.manger + "<br />");
    this.action = missions.gestion_faim.manger;
    this.faim += 1;
    zones[this.maison].stock -= 1;
  }

  chercher_nourriture_maison() {
    this.mission = "chercher_nourriture_maison";
    histo("Mission: chercher_nourriture_maison<br />Action: " + missions.gestion_faim.chercher_nourriture_maison + "<br />");
    this.action = missions.gestion_faim.chercher_nourriture_maison;
    zones[this.maison].go(this);
  }

  chercher_nourriture_entrepot() {
    this.mission = "chercher_nourriture_entrepot";
    histo("Mission: chercher_nourriture_entrepot<br />Action: " + missions.gestion_faim.chercher_nourriture_entrepot + "<br />");
    this.action = missions.gestion_faim.chercher_nourriture_entrepot;
    zones.entrepot.go(this);
  }

  recuperer_nourriture_entrepot() {
    this.mission = "recuperer_nourriture_entrepot";
    histo("Mission: recuperer_nourriture_entrepot<br />Action: " + missions.gestion_faim.recuperer_nourriture_entrepot + "<br />");
    this.action = missions.gestion_faim.recuperer_nourriture_entrepot;
    this.stock += 1;
    zones.entrepot.stock -= 1;
  }

  ramener_nourriture_maison() {
    this.mission = "ramener_nourriture_maison";
    histo("Mission: ramener_nourriture_maison<br />Action: " + missions.gestion_faim.ramener_nourriture_maison + "<br />");
    this.action = missions.gestion_faim.ramener_nourriture_maison;
    zones[this.maison].go(this);
  }

  deposer_nourriture_maison() {
    this.mission = "deposer_nourriture_maison";
    histo("Mission: deposer_nourriture_maison<br />Action: " + missions.gestion_faim.deposer_nourriture_maison + "<br />");
    this.action = missions.gestion_faim.deposer_nourriture_maison;
    this.stock -= 1;
    zones[this.maison].stock += 1;
  }

  /*** GESTION METIER ***/

  aller_travailler_entrepot() {
    this.mission = "aller_travailler_entrepot";
    histo("Mission: aller_travailler_entrepot<br />Action: " + missions.gestion_metier.aller_travailler_entrepot + "<br />");
    this.action = missions.gestion_metier.aller_travailler_entrepot;
    zones.entrepot.go(this);
  }

  travailler_entrepot() {
    this.mission = "travailler_entrepot";
    histo("Mission: travailler_entrepot<br />Action: " + missions.gestion_metier.travailler_entrepot + "<br />");
    this.action = missions.gestion_metier.travailler_entrepot;
    zones.entrepot.goAleatoire(this);
  }

  aller_travailler_champ() {
    this.mission = "aller_travailler_champ";
    histo("Mission: aller_travailler_champ<br />Action: " + missions.gestion_metier.aller_travailler_champ + "<br />");
    this.action = missions.gestion_metier.aller_travailler_champ;
    zones.champ.go(this);
  }

  travailler_champ() {
    this.mission = "travailler_champ";
    histo("Mission: travailler_champ<br />Action: " + missions.gestion_metier.travailler_champ + "<br />");
    this.action = missions.gestion_metier.travailler_champ;
    this.stock += 0.1;
    zones.champ.stock -= 0.1;
    zones.champ.goAleatoire(this);
  }

  aller_deposer_ble_entrepot() {
    this.mission = "aller_deposer_ble_entrepot";
    histo("Mission: aller_deposer_ble_entrepot<br />Action: " + missions.gestion_metier.aller_deposer_ble_entrepot + "<br />");
    this.action = missions.gestion_metier.aller_deposer_ble_entrepot;
    zones.entrepot.go(this);
  }

  deposer_ble_entrepot() {
    this.mission = "deposer_ble_entrepot";
    histo("Mission: deposer_ble_entrepot<br />Action: " + missions.gestion_metier.deposer_ble_entrepot + "<br />");
    this.action = missions.gestion_metier.deposer_ble_entrepot;
    this.stock -= 1;
    zones.entrepot.stock += 1;
  }


}