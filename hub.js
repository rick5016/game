class hub {
  constructor(names = [], values = []) {
    names.forEach((n, idx) => this[n] = values[idx]);
    //console.log(this);
  }
  
  drawInterface() {
    var histo = document.getElementById('histo');
    var html = '';
    $.each(log, function (index, txt) {
      html += txt + '<br />';
    });
    histo.innerHTML = html;
    var div = document.getElementById('interface');
    div.innerHTML = '<b>Entrepôt (stock nourriture: ' + zones.entrepot.stock + ')</b><br />';
    div.innerHTML += '<b>Maison1 (stock nourriture: ' + zones.maison1.stock + ')</b><br />';
    div.innerHTML += '<b>Maison2 (stock nourriture: ' + zones.maison2.stock + ')</b><br />';
    $.each(population, function (index, perso) {
      //div.innerHTML += '<b>' + index + ' (stock nourriture: ' + zones[famille[0].maison].stock + ')</b><br />';
      //$.each(famille, function (index_famille, perso) {
      html = '<div style="float:left;border:solid 1px black;padding:5px">';
      html += '<b>' + perso.id + '(' + perso.age + ' ans)</b><br />';
      html += 'Métier: ' + perso.metier + '<br />';
      html += '<b>Action:</b><br />' + perso.action + '<br />';
      html += '<b>Mission:</b><br />' + perso.mission + '<br />';
      html += '<ul>';
      //html += '<li>maison: ' + perso.maison + ' (' + zones[perso.maison].x1 + '/' + zones[perso.maison].y1 + ')</li>';
      //html += '<li>personnage: <img src="' + perso.image + '" /> (' + perso.x1 + '/' + perso.y1 + ')</li>';
      html += '<li>personnage: <img src="' + perso.image + '" /></li>';
      html += '<li>sexe: ' + perso.sexe + '</li>';
      //html += '<li>metier: ' + perso.metier + '</li>';
      //html += '<li>metier_niveau: ' + perso.metier_niveau + '</li>';
      html += '<li>Stock: ' + parseInt(perso.stock) + '</li>';
      var faim = parseInt(perso.faim);
      var niveau_faim = '<span style="color:red">Oui</span>';
      if (faim > 50) {
        var niveau_faim = 'Non';
      } else if (faim < 0) {
        var niveau_faim = 'Affamé';
      }
      if (perso.action == 'Je mange') {
        var niveau_faim = '<span style="color:green">Mange</span>';
      }
      html += '<li>faim: ' + niveau_faim + '(' + faim + ')</li>';
      html += '</ul>';
      html += '</div>';
      div.innerHTML += html;
      //});
      //div.innerHTML += '<div style="clear:both"></div>';
    });
  }


}