/* BARRA DE PESQUISA */


$('#pesquisar-button').click(function(){
  let duvida = $('#pesquisar-input').val(),
      link = document.createElement('a');
  link.href =  google + window.encodeURI(duvida);
  link.target = "_blank";
  link.click();
});

/* Mais em breve */