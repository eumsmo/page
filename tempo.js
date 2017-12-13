window.onload = function(){
	/* Dia Tarde ou Noite */
	let momento = new Date(Date.now()),
	    horas = momento.getHours(),
	    minutos = momento.getMinutes(),
	    segundos = momento.getSeconds();

	easterEggs(horas,minutos,segundos);
}


function easterEggs(hora,minuto,segundo){

	let bom = $('.mensagem-bom');

	if(hora >= 6 && hora < 13 )
		bom.html('Bom Dia!');
	if(hora >= 13 && hora < 19)
		bom.html('Boa Tarde!');
	if(hora >= 19 && hora < 24)
		bom.html('Boa Noite!');
	if(hora >= 0 && hora < 6)
		bom.html('Boa Madruga!');

	/* Me ajude dando dica de easter eggs! */

}
