(window["webpackJsonppokemon-application"]=window["webpackJsonppokemon-application"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(8),l=n.n(c),r=n(3),s=n(4),i=n(6),m=n(5),p=n(7),u=n(2),d=(n(17),Object(u.b)("Store")(Object(u.c)(function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).getManyPokemons=function(e,t){n.props.Store.allPokemons&&console.log(t-1);for(var o=[],a=1;a<=e;a++)o[a]=n.props.Store.getPokemon((t-1)*e+a-1);return o},n.convertToBlock=function(e){if(!e.length)return a.a.createElement("div",null,"No one pokemons!!!");var t=[];return e.map(function(e,o){t.push(a.a.createElement("div",{className:"pokemon",onClick:function(){return n.modalWindow((n.props.Store.clickedPage-1)*n.props.Store.countPokemonOnPage+o)}},a.a.createElement("img",{src:0!==e&&void 0!==e?e[0]:""}),a.a.createElement("br",null),a.a.createElement("p",null,0!==e&&void 0!==e?e[1]:"")))}),t},n.modalWindow=function(e){console.log(e),n.props.Store.change_clickedPokemon(e),document.getElementById("modalElem").style.display="block"},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this.convertToBlock(this.getManyPokemons(this.props.Store.countPokemonOnPage,this.props.Store.clickedPage)),t=this.props.Store.getPokemon(this.props.Store.clickedPokemon-1);return a.a.createElement("div",null,a.a.createElement("div",{className:"modalWindow modal",id:"modalElem"},a.a.createElement("div",{id:"close-block",onClick:function(){document.getElementById("modalElem").style.display="none"}},a.a.createElement("span",{id:"x"},"X")),a.a.createElement("div",{className:"grid-container"},a.a.createElement("div",{className:"nameOfPokemon"},t[1]),a.a.createElement("div",{className:"photo"},a.a.createElement("img",{src:t[0]})),a.a.createElement("div",{className:"stat"},"Stat"),a.a.createElement("div",{className:"speed"},"Speed: ",t[2][0].base_stat),a.a.createElement("div",{className:"specialStats"},"Special defense: ",t[2][1].base_stat,a.a.createElement("br",null),"Special attack: ",t[2][2].base_stat),a.a.createElement("div",{className:"defenseAttack"},"Defense: ",t[2][3].base_stat,a.a.createElement("br",null),"Attack: ",t[2][4].base_stat),a.a.createElement("div",{className:"hp"},"HP: ",t[2][5].base_stat),a.a.createElement("div",{className:"type1 typeOfPokemon",id:t[3][0].type.name},t[3][0].type.name),a.a.createElement("div",{className:"type2 typeOfPokemon",id:void 0===t[3][1]?"":t[3][1].type.name},void 0===t[3][1]?"":t[3][1].type.name),a.a.createElement("div",{className:"type3 typeOfPokemon",id:void 0===t[3][2]?"":t[3][2].type.name},void 0===t[3][2]?"":t[3][2].type.name))),a.a.createElement("div",{className:"pokemon-list"},e))}}]),t}(a.a.Component)))),k=(n(18),Object(u.b)("Store")(Object(u.c)(function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).getAllPages=function(){for(var e=[],t=function(t){e[t]=a.a.createElement("div",{className:"pagination-value",id:t,onClick:function(){return n.changefunction(t)}},t)},o=1;o<=800/n.props.Store.countPokemonOnPage;o++)t(o);return e},n.changefunction=function(e){console.log(e),n.props.Store.change_clickedPage(e)},n.convertToNormalView=function(e){var t=[],o=n.props.Store.clickedPage;if(o<6){for(var c=1;c<=7;c++)t[c]=e[c];t[8]=a.a.createElement("div",{className:"dots"},"..."),t[9]=e[e.length-1],t[o]=a.a.createElement("div",{className:"pagination-value clicked-page",id:o,onClick:function(){return n.changefunction(o)}},o)}else if(o>e.length-4){t[1]=e[1],t[2]=a.a.createElement("div",{className:"dots"},"...");for(var l=3,r=e.length-7;l<=9;l++,r++)t[l]=e[r];t[9-(e.length-1-o)]=a.a.createElement("div",{className:"pagination-value clicked-page",id:o,onClick:function(){return n.changefunction(o)}},o)}else{t[1]=e[1],t[2]=a.a.createElement("div",{className:"dots"},"...");for(var s=3,i=n.props.Store.clickedPage-2;s<=7;s++,i++)t[s]=e[i];t[8]=a.a.createElement("div",{className:"dots"},"..."),t[9]=e[e.length-1],t[5]=a.a.createElement("div",{className:"pagination-value clicked-page",id:o,onClick:function(){return n.changefunction(o)}},o)}return t},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.convertToNormalView(this.getAllPages());return a.a.createElement("div",{className:"pagination-main"},e)}}]),t}(a.a.Component)))),g=(n(19),Object(u.b)("Store")(Object(u.c)(function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).checks=function(){for(var e=n.props.Store.typesOfPokemons,t=[],o=0;o<e.length;o++)t[o]=a.a.createElement("div",null,a.a.createElement("input",{type:"checkbox",value:e[o],id:e[o],className:"pokemon-type-checkbox"}),a.a.createElement("label",{for:e[o]},e[o]));return t},n.filterPokemons=function(){n.props.Store.get_allpokemons(),n.props.Store.filter=[];for(var e=n.props.Store.typesOfPokemons,t=0;t<e.length;t++)!0===document.getElementById(e[t]).checked&&(n.props.Store.filter[n.props.Store.filter.length]=e[t],console.log(e[t]));document.getElementById("filter").style.display="none";for(var o=[],a=0;a<n.props.Store.allPokemons.length;a++){for(var c=n.props.Store.allPokemons[a],l=!1,r=0;r<c[3].length;r++)for(var s=c[3][r].type.name,i=0;i<n.props.Store.filter.length;i++){var m=n.props.Store.filter[i];console.log(s+"/"+m),s===m&&(l=!0)}!0===l&&o.push(c)}n.props.Store.change_allPokemons(o);var p=n.props.Store.countPokemonOnPage;n.props.Store.change_countPokemonOnPage(20),n.props.Store.change_countPokemonOnPage(p)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.checks();return a.a.createElement("div",{className:"filter-block"},a.a.createElement("div",{className:"modal-filter-window",id:"filter"},a.a.createElement("div",{id:"close-block",onClick:function(){document.getElementById("filter").style.display="none"}},a.a.createElement("span",{id:"x"},"X")),a.a.createElement("div",{className:"many-checks"},e),a.a.createElement("div",{className:"filter-buttons"},a.a.createElement("div",{className:"button search",onClick:this.filterPokemons},"Search"),a.a.createElement("div",{className:"button cancel",onClick:function(){document.getElementById("filter").style.display="none"}},"Cancel"))),a.a.createElement("div",{className:"filter",onClick:function(){document.getElementById("filter").style.display="block"}},"Filter"))}}]),t}(a.a.Component)))),h=(n(20),Object(u.b)("Store")(Object(u.c)(function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).changeValue=function(e){n.props.Store.change_countPokemonOnPage(e.target.value),n.props.Store.change_clickedPage(1)},n.sortPokemons=function(){var e=n.props.Store.allPokemons;console.log(e),e=e.sort(n.sortFunction),n.props.Store.change_allPokemons(e),console.log(e);var t=n.props.Store.countPokemonOnPage;n.props.Store.change_countPokemonOnPage(20),n.props.Store.change_countPokemonOnPage(t)},n.sortFunction=function(e,t){return e[1]>t[1]?1:e[1]<t[1]?-1:0},n.refresheAll=function(){n.props.Store.get_allpokemons();for(var e=n.props.Store.typesOfPokemons,t=0;t<e.length;t++)document.getElementById(e[t]).checked=!1},n.searchByValue=function(e){var t=n.props.Store.allPokemons.filter(function(t){return-1!==t[1].indexOf(e.target.value)});n.props.Store.change_allPokemons(t)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"page-elements"},a.a.createElement("h1",{className:"page-name"},"Pokedex"),a.a.createElement("select",{className:"size-box",onChange:this.changeValue},a.a.createElement("option",{value:"10"},"10"),a.a.createElement("option",{value:"20"},"20"),a.a.createElement("option",{value:"50"},"50")),a.a.createElement("div",{className:"buttons"},a.a.createElement("input",{type:"search",className:"searcher",name:"q",placeholder:"Here you can find pokemon",onChange:this.searchByValue}),a.a.createElement("div",{className:"sort",onClick:this.sortPokemons},"Sort elements"),a.a.createElement("div",{className:"refresh",onClick:this.refresheAll},"Refresh"),a.a.createElement(g,null)),a.a.createElement(d,null),a.a.createElement(k,null))}}]),t}(a.a.Component)))),f=n(1),v=function(){function e(){Object(r.a)(this,e),this.allPokemons=[],this.selectedPokemon=[],this.countPokemonOnPage=10,this.clickedPage=1,this.clickedPokemon=1,this.typesOfPokemons=["bug","dark","dragon","electric","fairy","fighting","fire","flying","ghosts","grass","ground","ice","normal","poison","psychic","rock","steel","water"],this.filter=[],this.requestRoot="https://pokeapi.co/api/v2/pokemon/"}return Object(s.a)(e,[{key:"change_allPokemons",value:function(e){this.allPokemons=e}},{key:"change_selectedPokemon",value:function(e){this.selectedPokemon=e}},{key:"change_countPokemonOnPage",value:function(e){this.countPokemonOnPage=e}},{key:"change_clickedPage",value:function(e){this.clickedPage=e}},{key:"change_clickedPokemon",value:function(e){this.clickedPokemon=e}},{key:"get_allpokemons",value:function(){if("POKEMONS"in localStorage)this.allPokemons=JSON.parse(localStorage.getItem("POKEMONS"));else{for(var e=1;e<=800;e++){var t="".concat(this.requestRoot).concat(e,"/");fetch(t,{cache:"force-cache"}).then(function(e){return e.json()}).then(function(e){var t=e.species.url,n=[];n.push(e.sprites.front_default,e.name,e.stats,e.types,e.weight);var o=[];return"POKEMONS"in localStorage?(console.log("way 1"),(o=JSON.parse(localStorage.getItem("POKEMONS"))).push(n)):(console.log("way 2"),o[0]=n),localStorage.setItem("POKEMONS",JSON.stringify(o)),fetch(t)})}this.allPokemons=JSON.parse(localStorage.getItem("POKEMONS"))}}},{key:"getPokemon",value:function(e){return 0===this.allPokemons.length&&this.get_allpokemons(),this.allPokemons[e]}},{key:"addValuesToFilter",value:function(e){this.filter.push(e)}},{key:"refreshFilter",value:function(){this.filter=[]}},{key:"removeValuesFromFilter",value:function(e){for(var t=0;t<this.filter.length;t++)5===this.filter[t]&&this.filter.splice(t,1)}}]),e}();Object(f.h)(v,{allPokemons:f.m,selectedPokemon:f.m,countPokemonOnPage:f.m,clickedPage:f.m,clickedPokemon:f.m,filter:f.m,change_allPokemons:f.d,change_selectedPokemon:f.d,change_countPokemonOnPage:f.d,change_clickedPage:f.d,change_clickedPokemon:f.d,get_allpokemons:f.d,getPokemon:f.d,addValuesToFilter:f.d,refreshFilter:f.d});var P={Store:new v};l.a.render(a.a.createElement(u.a,P,a.a.createElement(h,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.700b24ed.chunk.js.map