var cookies=0;
var cpc=1;
var cps=0;

var u1cost=10
var u2cost=20;

var usrname="";

if(localStorage.getItem("cookies")!=null)
cookies=parseInt(localStorage.getItem("cookies"))

if(localStorage.getItem("cpc")!=null)
cpc=parseInt(localStorage.getItem("cpc"))

if(localStorage.getItem("cps")!=null)
    cps=parseInt(localStorage.getItem("cps"))


if(localStorage.getItem("u1cost")!=null)
    u1cost=parseInt(localStorage.getItem("u1cost"))

if(localStorage.getItem("u2cost")!=null)
    u2cost=parseInt(localStorage.getItem("u2cost"))

/*if(localStorage.getItem("usrname")!=null)
    usrname=plocalStorage.getItem("usrname")*/

var ticksec=0;


let update = function () {
    setTimeout(arguments.callee, 1);
    document.title=cookies;
    --ticksec;
    if (ticksec<=0){
        ticksec=60;
        cookies+=cps;
        localStorage.setItem("cookies", cookies);
        localStorage.setItem("cpc", cpc);
        localStorage.setItem("cps", cps);
        localStorage.setItem("usrname", usrname);
        localStorage.setItem("u1cost", u1cost);
        localStorage.setItem("u2cost", u2cost);
    }
}();



let handleClicker = function(){
    document.querySelector("input[type=button]#Click").addEventListener("click",
    function (e) {
        cookies+=cpc;
        
    });
}();

//window.prompt("sometext","defaultText");
let handleForm = function(){
    document.getElementById("NewForm").addEventListener("click",
        function (e) {
            document.getElementById("sicout").style.display="None";
            document.getElementById("errorlog").style.display="None";
            document.getElementById("return").style.display="None";
            document.getElementById("form").style.display="";
            document.getElementById("Nom").value="veuillez, et ce sans vouloir vous contraindre, entrer votre no"
            for (let index = 0; index < 100; index++) {
               document.getElementById("Nom").value+="                                        "
            }
            document.getElementById("Action").value="Action"
            document.getElementById("select1").value=""
            document.getElementById("select2").value=""
            document.getElementById("cout").value="0"
        })
    document.getElementById("Action").addEventListener("input",
        function (e) {
            if( document.getElementById("Action").value=="Améliorer"){
                document.getElementById("sicout").style.display=""
            }
            else document.getElementById("sicout").style.display="None"
        })
        document.getElementById("select2").addEventListener("input",
            function (e) {
                if( document.getElementById("select2").value=="CPC"){
                    document.getElementById("cout").value=u1cost;
                }
                else if( document.getElementById("select2").value=="CPS"){
                    document.getElementById("cout").value=u2cost;
                }
            })
    document.getElementById("Validate").addEventListener("click",
        function (e) {
            if(usrname=="" && document.getElementById("Nom").value.length<50){
                console.log("yo")
                usrname=document.getElementById("Nom").value;
            }
            if(document.getElementById("Nom").value!=usrname){
                document.getElementById("errorlog").style.display="";
                document.getElementById("errorlog").textContent="Votre nom d'utilisateur n'est pas celui enregistré dans la base de donnée, ou est trop long.";
            }
            else{
                if(document.getElementById("Action").value=="Améliorer"){
                    if(document.getElementById("select1").value=="Increase"){
                        if(document.getElementById("select2").value=="CPC"){
                            if(document.getElementById("cout").value==u1cost+" cookies"){
                                if (cookies>=u1cost){
                                    cookies-=u1cost;
                                    u1cost=Math.round(u1cost*1.2);
                                    cpc+=1;
                                }
                                else{
                                    document.getElementById("return").style.display="";
                                    document.getElementById("return").textContent="Vos cookies sont insufisants.";
                                }
                            }
                            else{
                                document.getElementById("return").style.display="";
                                document.getElementById("return").textContent="Prix incorrect. Peut-être avez vous omis de préciser l'unité ? Ne pas oublier l'espace";
                            }
                        }
                        else if(document.getElementById("select2").value=="CPS"){
                            if(document.getElementById("cout").value==u2cost+" cookies"){
                                if (cookies>=u2cost){
                                    cookies-=u2cost;
                                    u2cost=Math.round(u2cost*1.1);
                                    cps+=1;
                                }
                                else{
                                    document.getElementById("return").style.display="";
                                    document.getElementById("return").textContent="Vos cookies sont insufisants.";
                                }
                            }
                            else{
                                document.getElementById("return").style.display="";
                                document.getElementById("return").textContent="Prix incorrect. Peut-être avez vous omis de préciser l'unité ? Ne pas oublier l'espace";
                            }
                        }
                        else{
                            document.getElementById("errorlog").style.display="";
                            document.getElementById("errorlog").textContent="Votre combinaison dans les menus déroulants n'est pas valide.";
                        }
                    }
                }
                else if(document.getElementById("Action").value=="Voir"){
                    if(document.getElementById("select1").value=="Get"){
                        if(document.getElementById("select2").value=="CPC"){
                            document.getElementById("return").style.display="";
                            document.getElementById("return").textContent="Vos Cookies Par Clicks : "+cpc;
                        }
                        else if(document.getElementById("select2").value=="CPS"){
                            document.getElementById("return").style.display="";
                            document.getElementById("return").textContent="Vos Cookies Par Secondes : "+cps;
                        }
                        else{
                            document.getElementById("errorlog").style.display="";
                            document.getElementById("errorlog").textContent="Votre combinaison dans les menus déroulants n'est pas valide.";
                        }
                    }
                }
                else{
                    document.getElementById("errorlog").style.display="";
                    document.getElementById("errorlog").textContent="L'action selectionée est invalide. Voulez vous améliorer ou voir ? Ne pas oublier la majuscule.";
                }
            }
            document.getElementById("form").style.display="None";
        })
}();

/*
let Gametick = function () {
    while (true) {
        setTimeout(update, 6);
    }
}();*/