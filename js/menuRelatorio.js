/**
 * 
 */

function exibirMenusDaListaNoMenu(listNoMenu, contextPath) {
	
	var menuRelatorio = $('#listarelatorios');
	
	var str = "";
	var no , menu, relatorios, relatorio;
	for(noid in listNoMenu) {
		
		no = listNoMenu[noid];
		menu = no.menu;
		relatorios = menu.relatorios;
		if (menu.nome === "raiz") continue; 
		if (no.tipotag === 'ini') {
			str +='<li class="dropdown dropdown-submenu">\n'
			str +='<a href="#" class="dropdown-toggle" data-toggle="dropdown">'+menu.nome+'</a>\n'
			str +='<ul class="dropdown-menu">\n'
			
		} 
		
		if (no.tipotag === 'fim') {
			for(rid in relatorios) {	
				relatorio = relatorios[rid];
				str +='<li><a href="'+contextPath+'/incorpview/relatorio/?idRelatorio='+relatorio.id+'">\n' ;
				str +=relatorio.nomeNoMenu ;
				str +='</a>\n';
				str +='</li>\n';
			}
			str +='</ul>\n';
			str +='</li>\n';
		} 
		
	}	
	
	no = listNoMenu[0];
	menu = no.menu;
	relatorios = menu.relatorios;
	for(rid in relatorios) {	
		relatorio = relatorios[rid];
		str +='<li><a href="'+contextPath+'/incorpview/relatorio/?idRelatorio='+relatorio.id+'">\n' ;
		str +=relatorio.nomeNoMenu ;
		str +='</a>\n';
		str +='</li>\n';
	}
	
	menuRelatorio.html(str);
}