document.addEventListener('DOMContentLoaded', init, false);

function init(){
    /*const j = new java("Emmario", 20);
    j.say();
    console.log("yo");*/

    /** Un obj page javascript correspond a nos div html
          charge grace a l'iframe qui vont defiler
            les un a cote des autres **/

    /** 1.On charge les information de la page actuelle
        -on lui passe en paramettre sont indice
        et le nombre total de page **/
    let liens = document.querySelectorAll("ul li a");
    let idx = getIndice(liens);
    const p = new Page(idx, nbDePage());
    let ref1 = liens.item(idx).getAttribute('href');

    p.pagePrecedante();
    
    /** teste
    console.log(p.getId());
    console.log(p.getUrl()); **/

    /** 2.On cree l'iframe  **/
    let tabIb = creeID("w"); // recuperation d'un tableau de formule generale wx ou x allant de 0 a x
    
    /** @param{chemin,indicePerso} **/
    const ifr_droit = new Iframe(p.getUrl(), p.getId());
    let div_d = ifr_droit.importDivId(p,tabIb[p.getId()]);
    
    /*
    console.log(div_d);
    console.log(tabIb[p.getId()]);*/
    /*
    p.actualId();
    p.pageSuivante();
    const ifr_gauche = new Iframe(p.getUrl(), p.getId()); 
    let div_g = ifr_gauche.importDivId(tabIb[p.getId()]);
*/
     /** recup du div dans l'iframe **/



}
//pour recuperer l'indice de la page
/** on recuperer les element du menu
afin de comparer le href a window.loctation**/
function getIndice(liens){
    /** mes variables **/
    let id = null;

    /** recherche de l'id **/
    for(let i = 0;i<liens.length;i++){
        let ref = liens.item(i).getAttribute('href'); // recuperation du lien href de m syntaxe que celle de  win.loc.pathname

        if(window.location.pathname == ref){
            id = i; // Il s'agit de l'indice de la page actuelle et de son div ;
        }
    }
    return id;
}
/** fonction retournant le nombre de page **/
function nbDePage(){
    let liens = document.querySelectorAll("ul li a");
    return liens.length - 1;
}
/** fonction permettant de cree des id
    @param{String} **/
function creeID(a){
    let id = []; // un string

    for(let i = 0;i<nbDePage();i++){
        id[i]=a+""+i; //guillemets pr securité
    }
    return id;
}


/*
document.addEventListener('DOMContentLoaded', init, false);


function init(){
    let ifrm = document.querySelector("iframe").contentDocument;
    ifrm.addEventListener('Loaded', f);
}
function f(){
    console.log(document.querySelector("#p"));
}*/
