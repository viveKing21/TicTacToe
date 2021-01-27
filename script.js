	var firstClicked=true;
	var lastClick;
    var selector=Array();
    var statusshow=document.querySelector(".status");
    var sound="enable";
    var yourchoice="X";
    var drawCon=true;
	for(var i=1; i<=9; i++)
	{
		selector[i]=document.querySelector("[data-value='"+i+"']");
		document.querySelector("[data-value='"+i+"']").onclick=function() {
		if(sound=="enable")
		{
		document.getElementById("playClick").play();
	    }
        clicked(this);

	    }
	    
	}
function clicked(Box){
   for(var i=1; i<=9; i++)
   {
    if(document.querySelector("[data-value='"+i+"']").innerText=="")
    {
    	continue;
    } 
    else
    {
        firstClicked=false;
        break;
    }
   }

   if(firstClicked)
   {
   	Box.innerText=yourchoice;
   	lastClick=Box.innerText;
   	Box.style.setProperty("pointer-events","none");
   	if(yourchoice=="X")
   	statusshow.innerHTML="<span style='color:#04f100'>'O'</span> turn";
   else 
   statusshow.innerHTML="<span style='color:#0c00ca'>'X'</span> turn";
   }
   else
   {
   	if(lastClick=="O")
   	{
   		Box.innerText="X";
   		lastClick=Box.innerText;
   		Box.style.setProperty("pointer-events","none");
   		statusshow.innerHTML="<span style='color:#04f100'>'O'</span> turn";
   	}
   	else
   	{
   		Box.innerText="O";
   		lastClick=Box.innerText;
   		Box.style.setProperty("pointer-events","none");
   		statusshow.innerHTML="<span style='color:#0c00ca'>'X'</span> turn";
   	}
   }
   //winner selector of O and fx
if(selector[1].innerText=="O" && selector[2].innerText=="O" && selector[3].innerText=="O" || //one
   selector[1].innerText=="O" && selector[5].innerText=="O" && selector[9].innerText=="O" || //two
   selector[1].innerText=="O" && selector[4].innerText=="O" && selector[7].innerText=="O" || //three
   selector[2].innerText=="O" && selector[5].innerText=="O" && selector[8].innerText=="O" || //four
   selector[3].innerText=="O" && selector[5].innerText=="O" && selector[7].innerText=="O" || //five
   selector[3].innerText=="O" && selector[6].innerText=="O" && selector[9].innerText=="O" || //six
   selector[4].innerText=="O" && selector[5].innerText=="O" && selector[6].innerText=="O" || //seven
   selector[7].innerText=="O" && selector[8].innerText=="O" && selector[9].innerText=="O")   //eight
{	
	if(selector[1].innerText=="O" && selector[2].innerText=="O" && selector[3].innerText=="O")
	{
		selector[1].classList.add('greenME');
		selector[2].classList.add('greenME');
		selector[3].classList.add('greenME');
		selector[2].style.setProperty("transition-delay",".09s");
		selector[3].style.setProperty("transition-delay",".18s");
	}
	if(selector[1].innerText=="O" && selector[5].innerText=="O" && selector[9].innerText=="O")
	{
		selector[1].classList.add('greenME');
		selector[5].classList.add('greenME');
		selector[9].classList.add('greenME');
		selector[5].style.setProperty("transition-delay",".09s");
		selector[9].style.setProperty("transition-delay",".18s");
	}
	if(selector[1].innerText=="O" && selector[4].innerText=="O" && selector[7].innerText=="O")
	{
		selector[1].classList.add('greenME');
		selector[4].classList.add('greenME');
		selector[7].classList.add('greenME');
		selector[4].style.setProperty("transition-delay",".09s");
		selector[7].style.setProperty("transition-delay",".18s");
	}
	if(selector[2].innerText=="O" && selector[5].innerText=="O" && selector[8].innerText=="O" )
	{
		selector[2].classList.add('greenME');
		selector[5].classList.add('greenME');
		selector[8].classList.add('greenME');
		selector[5].style.setProperty("transition-delay",".09s");
		selector[8].style.setProperty("transition-delay",".18s");
	}
	if(selector[3].innerText=="O" && selector[5].innerText=="O" && selector[7].innerText=="O")
	{
		selector[3].classList.add('greenME');
		selector[5].classList.add('greenME');
		selector[7].classList.add('greenME');
		selector[5].style.setProperty("transition-delay",".09s");
		selector[7].style.setProperty("transition-delay",".18s");
	}
	if(selector[3].innerText=="O" && selector[6].innerText=="O" && selector[9].innerText=="O")
	{
		selector[3].classList.add('greenME');
		selector[6].classList.add('greenME');
		selector[9].classList.add('greenME');
		selector[6].style.setProperty("transition-delay",".09s");
		selector[9].style.setProperty("transition-delay",".18s");
	}
	if(selector[4].innerText=="O" && selector[5].innerText=="O" && selector[6].innerText=="O")
	{
		selector[4].classList.add('greenME');
		selector[5].classList.add('greenME');
		selector[6].classList.add('greenME');
		selector[5].style.setProperty("transition-delay",".09s");
		selector[6].style.setProperty("transition-delay",".18s");
	}
	if(selector[7].innerText=="O" && selector[8].innerText=="O" && selector[9].innerText=="O")
	{
		selector[7].classList.add('greenME');
		selector[8].classList.add('greenME');
		selector[9].classList.add('greenME');
		selector[8].style.setProperty("transition-delay",".09s");
		selector[9].style.setProperty("transition-delay",".18s");
	}
	for(var i=1; i<=9; i++)
	{
		selector[i].style.setProperty("pointer-events","none");
	}
statusshow.innerHTML="<span style='color:#04f100'>'O'</span> is winner";
if(sound=="enable")
document.getElementById("playWin").play();
drawCon=false;
}

//winner selector of x and fx
if(selector[1].innerText=="X" && selector[2].innerText=="X" && selector[3].innerText=="X" || //one
   selector[1].innerText=="X" && selector[5].innerText=="X" && selector[9].innerText=="X" || //two
   selector[1].innerText=="X" && selector[4].innerText=="X" && selector[7].innerText=="X" || //three
   selector[2].innerText=="X" && selector[5].innerText=="X" && selector[8].innerText=="X" || //four
   selector[3].innerText=="X" && selector[5].innerText=="X" && selector[7].innerText=="X" || //five
   selector[3].innerText=="X" && selector[6].innerText=="X" && selector[9].innerText=="X" || //six
   selector[4].innerText=="X" && selector[5].innerText=="X" && selector[6].innerText=="X" || //seven
   selector[7].innerText=="X" && selector[8].innerText=="X" && selector[9].innerText=="X")   //eight
{	
	if(selector[1].innerText=="X" && selector[2].innerText=="X" && selector[3].innerText=="X")
	{
		selector[1].classList.add('blueME');
		selector[2].classList.add('blueME');
		selector[3].classList.add('blueME');
		selector[2].style.setProperty("transition-delay",".09s");
		selector[3].style.setProperty("transition-delay",".18s");
	}
	if(selector[1].innerText=="X" && selector[5].innerText=="X" && selector[9].innerText=="X")
	{
		selector[1].classList.add('blueME');
		selector[5].classList.add('blueME');
		selector[9].classList.add('blueME');
		selector[5].style.setProperty("transition-delay",".09s");
		selector[9].style.setProperty("transition-delay",".18s");
	}
	if(selector[1].innerText=="X" && selector[4].innerText=="X" && selector[7].innerText=="X")
	{
		selector[1].classList.add('blueME');
		selector[4].classList.add('blueME');
		selector[7].classList.add('blueME');
		selector[4].style.setProperty("transition-delay",".09s");
		selector[7].style.setProperty("transition-delay",".18s");
	}
	if(selector[2].innerText=="X" && selector[5].innerText=="X" && selector[8].innerText=="X" )
	{
		selector[2].classList.add('blueME');
		selector[5].classList.add('blueME');
		selector[8].classList.add('blueME');
		selector[5].style.setProperty("transition-delay",".09s");
		selector[8].style.setProperty("transition-delay",".18s");
	}
	if(selector[3].innerText=="X" && selector[5].innerText=="X" && selector[7].innerText=="X")
	{
		selector[3].classList.add('blueME');
		selector[5].classList.add('blueME');
		selector[7].classList.add('blueME');
		selector[5].style.setProperty("transition-delay",".09s");
		selector[7].style.setProperty("transition-delay",".18s");
	}
	if(selector[3].innerText=="X" && selector[6].innerText=="X" && selector[9].innerText=="X")
	{
		selector[3].classList.add('blueME');
		selector[6].classList.add('blueME');
		selector[9].classList.add('blueME');
		selector[6].style.setProperty("transition-delay",".09s");
		selector[9].style.setProperty("transition-delay",".18s");
	}
	if(selector[4].innerText=="X" && selector[5].innerText=="X" && selector[6].innerText=="X")
	{
		selector[4].classList.add('blueME');
		selector[5].classList.add('blueME');
		selector[6].classList.add('blueME');
		selector[5].style.setProperty("transition-delay",".09s");
		selector[6].style.setProperty("transition-delay",".18s");
	}
	if(selector[7].innerText=="X" && selector[8].innerText=="X" && selector[9].innerText=="X")
	{
		selector[7].classList.add('blueME');
		selector[8].classList.add('blueME');
		selector[9].classList.add('blueME');
		selector[8].style.setProperty("transition-delay",".09s");
		selector[9].style.setProperty("transition-delay",".18s");
	}
	for(var i=1; i<=9; i++)
	{
		selector[i].style.setProperty("pointer-events","none");
	}
statusshow.innerHTML="<span style='color:#0c00ca'>'X'</span> is winner";
if(sound=="enable")
document.getElementById("playWin").play();
drawCon=false;
}

if(selector[1].innerText!=="" && selector[2].innerText!=="" && selector[3].innerText!=="" && selector[4].innerText!=="" && selector[5].innerText!=="" && selector[6].innerText!=="" && selector[7].innerText!=="" && selector[8].innerText!=="" && selector[9].innerText!=="" && drawCon)
	{statusshow.innerHTML="<span style='color:red'>Draw</span>";}
}

function soundChange(){
	if(document.querySelector('#sound i').classList.contains("fa-volume-up"))
	{
		document.querySelector('#sound i').setAttribute("class","fas fa-volume-mute");
		document.querySelector('#sound i').style.color="red";
		sound="disabled";
	}
	else
	{ 
		document.querySelector('#sound i').setAttribute("class","fas fa-volume-up");
        document.querySelector('#sound i').style.color="green";
        sound="enable";
	}

}


	document.querySelector(".selMeX").onclick=function(){
		this.classList.add("xoroselect");
		document.querySelector(".selMeO").classList.remove("xoroselect");
		yourchoice="X";
	}
	document.querySelector(".selMeO").onclick=function(){
		this.classList.add("xoroselect");
		document.querySelector(".selMeX").classList.remove("xoroselect");
		yourchoice="O";
	}
   function start(){
   	document.querySelector(".status").style.setProperty("margin-bottom","-20px");
   	document.querySelector(".start").style.setProperty("height","0px");
   	document.querySelector(".restart").setAttribute("style","opacity:1");

   	if(yourchoice=="X")
   	setTimeout(function(){statusshow.innerHTML="first turn <span style='color:#0c00ca'>'X'</span>";},400);
    else
   	setTimeout(function(){statusshow.innerHTML="first turn <span style='color:#04f100'>'O'</span>";},400);
   }
 document.querySelector(".restart").onclick=function(){
 	for(i=1; i<=9; i++)
 	{
 		selector[i].innerText="";
 		selector[i].removeAttribute("style");
 		selector[i].classList.remove('greenME');
 		selector[i].classList.remove('blueME');
 		statusshow.innerText="";
    	document.querySelector(".status").removeAttribute("style");
   	    document.querySelector(".start").removeAttribute("style");
   	    document.querySelector(".restart").removeAttribute("style");
   	    firstClicked=true;
        lastClick="";
        drawCon=true;
 	}
 }