## Firebase Cloud Message

* È necessario un [account Google](https://accounts.google.com/signup/v2/webcreateaccount?service=ahsid&continue=https%3A%2F%2Ffirebase.google.com%2F%3Frefresh%3D1&flowName=GlifWebSignIn&flowEntry=SignUp)

* Andare sulla [console](https://console.firebase.google.com/)

![01](./images/01s.png)

* Aggiungere un progetto

![02](./images/02s.png)

* Inserisci il nome del progetto e accetti i termini di Firebase

![03](./images/05s.png)

* Continuare e scogli si vuoi fare la configurazione di Google Analytics:

![04](./images/06s.png)

* Quando é stato presto il progetto, aggiungi l'applicazione android:

![07](./images/07s.png)

* Nome del pacchetto android (id dell'applicazione): `org.camba.radio`
* Registrare l'applicazione

![08](./images/08s.png)

* Scaricare il file `google-services.json`

![09](./images/09s.png)
![10](./images/10s.png)

* Eseguire il comando:

`git clone http://gitlab.camba.coop/camba/ns-vue-radio.git ns-vue-radio`

* Copiare il file:

`google-services.json`

in

`ns-vue-radio/app/App_Resources/Android/`

* [Aggiungere nativescript-plugin-firebase](Guia-para-agregar-nativescript-plugin-firebase_it.md)

* Eseguire i comandi:

`npm install`

`npm run clean`

`tns build android --bundle`

`tns run android --bundle`

* Una volta avviata l'applicazione e registrato Firebase

![14](./images/14s.png)
![11](./images/11s.png)
![12](./images/12s.png)
![13](./images/13s.png)

* Andare su Console>Espandi>Cloud Messaging

![15](./images/15s.png)

* Scrivi il titolo ed il testo della notifica

![17](./images/17s.png)

* Selezioni l'applicazione

![18](./images/18s.png)

* In opzioni aggiuntive>dati personalizzati dove dice "chiave" scrivere "topic" e dove dice "valore" scrivere il nome del canale che si desidera mostrare dopo avere visualizzato il messaggio nell'applicazione (live, programmazione, script, podcast, reti)

![21](./images/21s.png)

* Vedremo questo annuncio perche non avvete ancora suscriti alle notfica. Ignoralo e avvia l'applicazione

![22](./images/22s.png)
