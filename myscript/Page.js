class Page{

    //constructeur
    constructor(n, nb){
        this.id = n;
        this.nbDePage = nb;
        this.url = "";
        this.mesLiens = [];
    }

    /****00 Getteur 00****/
    getPage(){
        return this.id;
    }
    getUrl(){
        let _urls = [];
        _urls = this.getTabUrl();
        return _urls[this.getId()];
    }
    getId(){
        return this.id    
    }
    actualId(){
        let liens = document.querySelectorAll("ul li a");
        for(let i = 0;i<liens.length;i++){
            let ref = liens.item(i).getAttribute('href');
            if(ref.includes(window.location.pathname)){
                this.id = i; // Il s'agit de l'indice de la page actuelle et de son div ;
            }
        }
        return this.id;
    }
    getTabUrl(){
        let liens = document.querySelectorAll("ul li a");
        let _urls = [];

        for(let i = 0;i<liens.length;i++){
            let ref = liens.item(i).getAttribute('href'); // recuperation du lien href de m syntaxe que celle de  win.loc.pathname

            //recuperation des url dans un tableau
            _urls.push(liens.item(i).getAttribute('href'));
        }
        this.mesLiens = _urls;
        return this.mesLiens;
    }

    //setteur
    setPage(n){
        this.id = n;
    }

    //methode
    pageSuivante(){
        this.id++;
        if(this.id > this.nbDePage){
            this.id = 0;
        }
        return this.id;
    }
    pagePrecedante(){
        this.id--;
        if(this.id < 0){
            this.id = this.nbDePage;
        }
        return this.id;
    }


}
