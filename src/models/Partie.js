export default class Partie {
    constructor(nom = "", desc = "")
    {
        this.id = Math.floor((1 + Math.random()) * 0x10000).toString(16);
        this.nom = nom;
        this.desc = desc;
        this.votes = new Array();
        this.date = new Date();  
    }
}