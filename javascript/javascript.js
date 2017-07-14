function teste(){
	console.log("Ola Mundo");
}

function CriarPerguntas(){
		var count = jsonObject.perguntas.length;
		var alternativas;
		
		for ($i = 0; $i < jsonObject.perguntas.length; $i++){
		
			console.log($i);
			
			document.write("<b><a data-fancybox data-options={\"src\":\"#pergunta-"+$i+",\"modal\":true} href=\"javascript:;\" class=\"btn\">"+$i+"</a></b>");
			
			if(jsonObject.perguntas.[$i].["alternativas"] != null){
				
			}else{
				
			}
			
			document.write("<div id=\"pergunta-"+$i+"\" class=\"esconde\"><h1>"+jsonObject.perguntas[$i]["pergunta"]+"</h1><p>Ola Mundo</p><p><button data-fancybox-close class=\"btn\">Fechar</button></p></div>");	
		}
}

