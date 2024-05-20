//ciao ragazzi
// struttura dati
//relazione N a N
//1 persona puo' avere piu' foto(1,N)
//1 foto puo' avere piu' persone (1,N)
//
class Media{ 
    mediaID,
    // mediaType: photo
    url: ulr,
    metaData: metadata
    personID: //corrisponde all'id della persona
        metaInformazioni (categoria, apartenenza ad album, relazione fra persone di una foto)
    // abbiamo bisogno di una tabella che mette in corrispondenza id foto e id persona
    
    

}
class Persona{
    personID: 

}

class Photo{

}

class Video{

}
class Ad{ }
class App{ }
class Filter{ }

// servira' un db
// serve il login tramite app thirdparty

//funzioni
function addMedia() { }//inserire foto video
function addAd() { }//per inserire pubblicita'
function eraseDouble() { }//cancella i doppioni
function connectContacts() { }//collega i contatti da mostrare nella home
function connectSocial() { }// collegamento tra social
function connectMetaData() { }// collegare i metadatati alle foto o video
function filterMedia() { }//richiama i metadati


// ogni singola foto avra' un id OWNER  , CHE CONTERRA' L'ID DELLO USER, in modo da recur=perare le informazioni aggiuntive
//concetto di TAGS: un utente puo' apparire in piu' foto , una foto puo' avere piu' utenti-> creiamo una tabella USERS/FOTO che contiene id utente e id foto
//la domanda da farsi e': data questa funzionalita' i dati sono organizzati in maniera corretta?
//dobbiamo avere le informazioni dell'utente che abbiamo davanti(focus:id)
//mantenere le informazioni dell'utente loggato in quel momento;

