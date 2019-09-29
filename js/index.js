var searchmain=document.querySelector(".search-main");
var commain=document.querySelector(".com-main");
var searchdrop=document.querySelector(".searchDrop");
var comdrop=document.querySelector(".comDrop");
var navsubs=document.querySelectorAll(".navbar-sub-el");

mouseOver(searchmain,searchdrop);
mouseOver(commain,comdrop);


navsubs.forEach(el=>{
	el.addEventListener("mouseleave",flyaway);
})


//Functions
function mouseOver(maindiv,drop_el){
	maindiv.addEventListener("mouseover",function(){
		drop_el.style.display="block";
	})
};

function flyaway(){
	searchdrop.style.display="none";
	comdrop.style.display="none";
}


	
