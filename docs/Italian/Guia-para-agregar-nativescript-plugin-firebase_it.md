## Firebase Cloud Message



#### Per aggiungere il plugin Firebase Cloud Message all'aplicazione della radio devi:

* Eseguire il comando

`npm install nativescript-plugin-firebase`

* Modificare nel file `package.json` la versione di nativescript-plugin-firebase, per la versione "7.1.2"

![01](./imagenesDeGuiaParaAgregarFirebase/01s.png)

* Andare nel file `app/components/Home.vue`
  - decommentare la riga `// this.$store.commit("FIREBASE_INIT", this.$store);`

![02](./imagenesDeGuiaParaAgregarFirebase/02s.png)

![03](./imagenesDeGuiaParaAgregarFirebase/03s.png)

* Andare nel file `app/store/index.js`
  - decommentare la riga `import firebase from 'nativescript-plugin-firebase'`

![04](./imagenesDeGuiaParaAgregarFirebase/04s.png)
![05](./imagenesDeGuiaParaAgregarFirebase/05s.png)
  - modificare la riga `firebase: null, //firebase,` in `firebase: firebase,`

![06](./imagenesDeGuiaParaAgregarFirebase/06s.png)
![07](./imagenesDeGuiaParaAgregarFirebase/07s.png)

Con questa procedura avremo aggiunto `nativescript-plugin-firebase`, rimane solo da configurare, se non si realizza la [configurazione](Guia-de-configuracion-de-firebase.md) l'applicazione non funzionerà correttamente.
