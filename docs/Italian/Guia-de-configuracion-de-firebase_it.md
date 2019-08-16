## Firebase Cloud Message

* È necessatio un [account Google](https://accounts.google.com/signup/v2/webcreateaccount?service=ahsid&continue=https%3A%2F%2Ffirebase.google.com%2F%3Frefresh%3D1&flowName=GlifWebSignIn&flowEntry=SignUp)

* Andare sulla [console](https://console.firebase.google.com/)

![01](./imagenesDeConfigFirebase/01s.png)

* Aggiungere un progetto

![02](./imagenesDeConfigFirebase/02s.png)
![03](./imagenesDeConfigFirebase/03s.png)

* Continuare

![04](./imagenesDeConfigFirebase/04s.png)

* Creare il progetto

![05](./imagenesDeConfigFirebase/05s.png)

* Continuare

![06](./imagenesDeConfigFirebase/06s.png)

* Aggiungere un'applicazione android

![07](./imagenesDeConfigFirebase/07s.png)

* Nome del pacchetto android (id dell'applicazione): `org.camba.radio`
* Registrare l'applicazione

![08](./imagenesDeConfigFirebase/08s.png)

* Scaricare il file `google-services.json`

![09](./imagenesDeConfigFirebase/09s.png)

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

![10](./imagenesDeConfigFirebase/10s.png)
![11](./imagenesDeConfigFirebase/11s.png)
![12](./imagenesDeConfigFirebase/12s.png)
![13](./imagenesDeConfigFirebase/13s.png)

* Andare su Console>Crescita>Cloud Messaging

![14](./imagenesDeConfigFirebase/14s.png)
![15](./imagenesDeConfigFirebase/15s.png)
![16](./imagenesDeConfigFirebase/16s.png)

* Scrivere il testo del messaggio

![17](./imagenesDeConfigFirebase/17s.png)

* Selezionare l'applicazione

![18](./imagenesDeConfigFirebase/18s.png)

* In opzioni avanzate>dati personali

![19](./imagenesDeConfigFirebase/19s.png)

* Dove dice chiave scrivere: topic

![20](./imagenesDeConfigFirebase/20s.png)

* Dove dice valore scrivere: il nome del canale che si desidera mostrare dopo aver visualizzato il messaggio nell'applicazione (live, programmazione, script, podcast, reti)

![21](./imagenesDeConfigFirebase/21s.png)

* infine possiamo finalmente avviare la nostra applicazione

![22](./imagenesDeConfigFirebase/22s.png)
