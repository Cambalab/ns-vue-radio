## Firebase Cloud Message

#### Para adicionar o plug-in do Firebase Cloud Message ao aplicativo de rádio, você precisa:

* Executar o Comando

`npm install nativescript-plugin-firebase`

* Modifique no arquivo `package.json` a versão do nativescript-plugin-firebase, pela versão" 7.1.

![01](../Spanish/GuideToAddFirebaseImage/01s.png)

* Abrir o arquivo `app/components/Home.vue`
  - descomentar a linha `// this.$store.commit("FIREBASE_INIT", this.$store);`

![02](../Spanish/GuideToAddFirebaseImage/02s.png)

![03](../Spanish/GuideToAddFirebaseImage/03s.png)

* Abrir o arquivo `app/store/index.js`
  - descomentar a linha `import firebase from 'nativescript-plugin-firebase'`

![04](../Spanish/GuideToAddFirebaseImage/04s.png)
![05](../Spanish/GuideToAddFirebaseImage/05s.png)
  - modificar a linha `firebase: null, //firebase,` por `firebase: firebase,`

![06](../Spanish/GuideToAddFirebaseImage/06s.png)
![07](../Spanish/GuideToAddFirebaseImage/07s.png)

Com isso, teremos adicionado `nativescript-plugin-firebase`, só precisa configurá-lo, se a [configuração] (Guide-of-configuracion-de-firebase.md) não for feita, o aplicativo não funcionará corretamente.
