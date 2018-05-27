class Iframe{

    //constructor
    constructor(url, i){
        this.src = url;
        this.id = i;
    }

    importDivId(p,indice){
        let main = document.querySelector("main");
        if(window.location.pathname != p.getUrl()){
        
            //creation de l'iframe
            let ifrm = document.createElement("iframe");
            ifrm.id = this.id;
            ifrm.src = this.src;
            main.appendChild(ifrm);
            console.log(ifrm);

            //recuperation de l'element cible
            let div = document.querySelector(indice);
            //console.log(document.querySelector("#"+indice))
        }
        
        return main;
    }
}
