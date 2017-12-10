Object.defineProperty(window.location, "get", {
  get: function(){
    let searched = this.search.substr(1),
        returned = new Object();

    if(searched.search('&') >= 0){
      let separadores = searched.split('&');
      separadores.forEach(function(conj){
        let semiObj = conj.split('=');

        returned[semiObj[0]] = semiObj[1];
      });
    } else {
      returned = searched;
    }

    return returned;
  }
 });



let quem = window.location.get;
$('#username').html(quem.nome);
