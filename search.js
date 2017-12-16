/* CONEXÃO AO DOM */
(function(){
  function pesquisarNaNav() {
    let duvida = $('#pesquisar-input').val();

    if(!sss.search(duvida)){
      openPage(google + window.encodeURI(duvida));
    }
  }

  $('#pesquisar-button').click(function(){
    pesquisarNaNav();
  });

  $('#pesquisar-input').keypress(function(e){
    if(e.keyCode == 13 || e.key == 'Enter')
      pesquisarNaNav();
  });
})();

/* EASTER EGGS */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sss = []; // Special Search String
sss.__proto__.add = function(str,func){
  this[this.length] = [str,func];
}
sss.__proto__.search = function(str,doit = true){
  function compare(str1,func){
    if(str1.toUpperCase() == str.toUpperCase()){
      if(func && doit) func(str1,str);
      return true;
    }
  }

  for (let arr of this) {

    if(arr[0].constructor == Array){

      for (let substr of arr[0]) {
        if(compare(substr,arr[1])) return true;
      }

    } else{
      if(compare(arr[0],arr[1])) return true;
    }


  }
  return false;
}

function redirect(link){
  window.location.assign(link)
}
function openPage(url){
  let link = document.createElement('a');
  link.href =  url;
  link.target = "_blank";
  link.click();
}

sss.add('random',function(){
  sss[getRandomInt(0,sss.length-1)][1]();
});

/* INF PEOPLE */

sss.add(['vulcanismo','tectonismo','geo-chop-suey','geochopsuey','geo chop suey'],function(){
  openPage('https://eumsmo.github.io/geo-chop-suey/');
});

sss.add(['GOTY','Game Of The Year','Gameoftheyear','SymphonyOfBlades','Symphony Of Blades'],function(){
  openPage('https://sirpedr.github.io/SymphonyOfBlades/');
});

sss.add(['thecircus','The Circus'],function(){
  openPage('https://sirpedr.github.io/TheCircus/');
});

sss.add('arte',function(){
  openPage('https://sirpedr.github.io/');
});

sss.add(['sem conteudo','vazio','The Site Without Content'],function(){
  openPage('https://sirpedr.github.io/The-Site-Without-Content/');
});

sss.add(['SirPedr','Pedro Paulo'],function(){
  alert('OLHA O PEDRO PAULO!!!!');
  openPage('https://github.com/SirPedr');
});

sss.add(['class run','classrun'],function() {
  openPage('https://brandaogabriel7.github.io/ClassRun/');
});

sss.add(['web com little cout','webcomlittlecout'],function(){
  openPage('https://brandaogabriel7.github.io/web-com-little-cout/');
});

sss.add(['Brandão','Gabriel Brandão','Gabriel Silva Brandão','Brands','BranDelicia','brandaogabriel7'],function(){
  alert('Meu Deus!\nO Brandão! <3\nMuito amorzinho ele.');
  openPage('https://github.com/brandaogabriel7');
});
