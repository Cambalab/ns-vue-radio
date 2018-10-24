## Firebase Cloud Message

* Se necesita una [cuenta de Google](https://accounts.google.com/signup/v2/webcreateaccount?service=ahsid&continue=https%3A%2F%2Ffirebase.google.com%2F%3Frefresh%3D1&flowName=GlifWebSignIn&flowEntry=SignUp)

* Ir a [la consola](https://console.firebase.google.com/)

![01](./ConfigFirebaseImage/01s.png)

* Añadir el proyecto

![02](./ConfigFirebaseImage/02s.png)
![03](./ConfigFirebaseImage/03s.png)

* Continuar

![04](./ConfigFirebaseImage/04s.png)

* Crear proyecto

![05](./ConfigFirebaseImage/05s.png)

* Continuar

![06](./ConfigFirebaseImage/06s.png)

* Añadir una aplicacion android

![07](./ConfigFirebaseImage/07s.png)

* Nombre del paquete android(id de la aplicación): `org.camba.radio`
* Registrar aplicación

![08](./ConfigFirebaseImage/08s.png)

* Descargar el archivo `google-services.json`

![09](./ConfigFirebaseImage/09s.png)

* Ejecutar el comando:

`git clone http://gitlab.camba.coop/camba/ns-vue-radio.git ns-vue-radio`

* Copiar el archivo:

`google-services.json`

en

`ns-vue-radio/app/App_Resources/Android/`

* [Agregar nativescript-plugin-firebase](Guia-para-agregar-nativescript-plugin-firebase.md)

* Ejecutar los comandos:

`npm install`

`npm run clean`

`tns build android --bundle`

`tns run android --bundle`

* Una vez que la aplicación inició y se registró el Firebase

![10](./ConfigFirebaseImage/10s.png)
![11](./ConfigFirebaseImage/11s.png)
![12](./ConfigFirebaseImage/12s.png)
![13](./ConfigFirebaseImage/13s.png)

* Ir a Consola>Crecimiento>Cloud Messaging

![14](./ConfigFirebaseImage/14s.png)
![15](./ConfigFirebaseImage/15s.png)
![16](./ConfigFirebaseImage/16s.png)

* Escribir el texto del mensaje

![17](./ConfigFirebaseImage/17s.png)

* Seleccionar la aplicacion

![18](./ConfigFirebaseImage/18s.png)

* En las opciones avanzadas>datos personalizados

![19](./ConfigFirebaseImage/19s.png)

* Donde dice clave escribir: topic

![20](./ConfigFirebaseImage/20s.png)

* Donde dice valor escribir: el nombre del canal que se quiere que se muestre luego de ver el msj en la aplicacion (vivo, programacion, escribinos, podcasts, redes)

![21](./ConfigFirebaseImage/21s.png)

* Finalmente enviamos nuestra notificación

![22](./ConfigFirebaseImage/22s.png)
