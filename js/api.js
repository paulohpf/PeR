function criaPerguntas(){
	for(var i=0; i < jsonObject.perguntas.length; i++){
		
		var count;
		var alternativas;
		var resposta;
		var title = "Pergunta"
		
		if(i<=8){
			count = "0"+(i+1);
		}else{
			count = i+1;
		}
		
		if(jsonObject.perguntas[i]["alternativas"] != null){
			alternativas = "<p><div class=\"alternativas\">"+jsonObject.perguntas[i]["alternativas"]+"</div></p>";
		}else{
			alternativas = "";
		}

		if(jsonObject.perguntas[i]["resposta"] != null){
			resposta = "<p><button id=\"botaoMostra-"+count+"\" class=\"btn\" onclick= \"mostrarResposta('"+count+"')\">Mostrar resposta</button></p><div id=\"resposta-"+count+"\" class=\"resposta\"><p>	<b>"+jsonObject.perguntas[i].resposta+"</b></p></div>";
		}else{
			resposta = "";
			title = "Desafio";
		}

		document.write("<a data-fancybox data-options='{\"src\": \"#hidden-content-"+count+"\", \"modal\": true}' href=\"javascript:;\" class=\"btn\"><div id=\"bolha-"+count+"\"class=\"bolha\">"+count+"</div></a>");


		//document.write("<div style=\"display: none;max-width:600px;\" id=\"hidden-content-"+count+"\" class=\"conteudo_escondido\"><h2>"+jsonObject.perguntas[i].pergunta+"</h2>"+alternativas+"<p><button id=\"botaoMostra-"+count+"\" class=\"btn\" onclick= \"mostrarResposta('"+count+"')\">Mostrar resposta</button><p><div id=\"resposta-"+count+"\" class=\"resposta\"><p><b>"+jsonObject.perguntas[i].resposta+"</b></p></div><p><button data-fancybox-close class=\"btn\">Fechar</button></p></div>");
		
		document.write("<div style=\"display: none;max-width:600px;\" id=\"hidden-content-"+count+"\" class=\"conteudo_escondido\"><h1>"+title+"</h1><h2>"+jsonObject.perguntas[i].pergunta+"</h2>"+alternativas+resposta+"<p><button data-fancybox-close class=\"btn\">Fechar</button></p></div>");

		if(resposta != ""){
			escondeCampo("resposta-"+count);
		}else{
			
		}
		
	}
}

Array.prototype.contem = function(obj) {
    var i = this.length;
    while (i--) {
       if (this[i] === obj) {
           return true;
       }
    }
    return false;	
}

function randomizador(obj){
	numero = Math.floor((Math.random() * 30) + 1);
	return numero;
}

function mostrarResposta(id){
	mostraCampo("resposta-"+id);
	escondeCampo("botaoMostra-"+id)
	mudarClass("bolha-"+id, "bolha_desativada");
}