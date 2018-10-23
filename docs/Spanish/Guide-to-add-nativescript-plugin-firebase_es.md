## Firebase Cloud Message

#### Para agregar el plugin Firebase Cloud Message a la aplicación de la radio hay que:

* Ejecutar el comando

`npm install nativescript-plugin-firebase`

* Modificar en el archivo `package.json` la version de nativescript-plugin-firebase, por la version "7.1.2"

![01](./GuideToAddFirebaseImage/01s.png)

* Ir al archivo `app/components/Home.vue`
  - descomentar la línea `// this.$store.commit("FIREBASE_INIT", this.$store);`

![02](./GuideToAddFirebaseImage/02s.png)

![03](./GuideToAddFirebaseImage/03s.png)

* Ir al archivo `app/store/index.js`
  - descomentar la línea `import firebase from 'nativescript-plugin-firebase'`

![04](./GuideToAddFirebaseImage/04s.png)
![05](./GuideToAddFirebaseImage/05s.png)
  - modificar la línea `firebase: null, //firebase,` por `firebase: firebase,`

![06](./GuideToAddFirebaseImage/06s.png)
![07](./GuideToAddFirebaseImage/07s.png)

Con esto tendremos agregado `nativescript-plugin-firebase`, sólo falta configurarlo, si no se realiza la [configuración](Guia-de-configuracion-de-firebase.md) la aplicación no va a funcionar conrrectamente.
