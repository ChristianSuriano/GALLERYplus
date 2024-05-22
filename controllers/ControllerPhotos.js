const photo = require('../Models/myPhoto.js');

class PhotoInteraction
{
    static createFoto(id, userId, title, url, descrizione,tag)
    {
      const newPhoto = new Photo(id, userId, title, url, descrizione,tag);
      return newPhoto;
    }

    static readPhoto(newPhoto)
    {
        return {
                  id: newPhoto.id,
                  userId: newPhoto.userId,
                  tag: newPhoto.tag
               };
    }

    static updatePhoto(newPhoto, title, tag, descrizione)
    {
      newPhoto.title = title !== undefined ? title : newPhoto.title; //Operatore ternari che fungono da if ? / : else.
      newPhoto.tag = tag !== undefined ? tag : newPhoto.tag;

      if (descrizione !== undefined) 
      {
            newPhoto.descrizione = function() 
            {
              console.log(descrizione);
              return descrizione;
            };
            
            return newPhoto;
      }
  
    }

    static deletePhotoById(newPhoto, id) {
      const index = newPhoto.findIndex(photo => photo.id === id);
      newPhoto.splice(index, 1);
    }
    
}

