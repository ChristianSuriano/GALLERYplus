
class Photo 
{
    constructor(id, userId, title, url, descrizione,tag) 
    {
      this.id = id;
      this.userId = userId;
      this.title = title;
      this.url = url;
      this.tag = tag;
      this.descrizione = function ()
      {
        descrizione = console.log(`Questa foto è stata scattata: ${this.title} e a questo indirizzo: ${this.url}`);
        return descrizione;
      }; 
    }
}


