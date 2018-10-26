## Firebase Cloud Message

* É necessário [uma conta no Google](https:/accounts.google.com/signup/v2/webcreateaccount?service=ahsid&continue=https%3A%2F%2Ffirebase.google.com%2F%3Frefresh%3D1&flowName=GlifWebSignIn&flowEntry=SignUp)

* Ir ao [console](https:/console.firebase.google.com/)

![01](./images/ConfigFirebase/01s.png)

* Adiciona o projeto

![02](./images/ConfigFirebase/02s.png)
![03](./images/ConfigFirebase/03s.png)

* Criar o projeto

![04](./images/ConfigFirebase/04s.png)

* Continuar

![05](./images/ConfigFirebase/05s.png)

* Adicione uma aplicação android

![06](./images/ConfigFirebase/06s.png)

* Nome do pacote Android (ID do aplicativo): `org.camba.radio`
* Registrar a aplicação

![07](./images/ConfigFirebase/07s.png)

* Baixe o arquivo `google-services.json`

![08](./images/ConfigFirebase/08s.png)

* Execute o comando:

`git clone http://gitlab.camba.coop/camba/ns-vue-radio.git ns-vue-radio`

* Copie o arquivo:

`google-services.json`

para

`ns-vue-radio/app/App_Resources/Android/`

* [Adicione o nativescript-plugin-firebase](Guia-para-agregar-nativescript-plugin-firebase.md)

* Execute os comandos:

`npm install`

`npm run clean`

`tns build android --bundle`

`tns run android --bundle`

* Uma vez que o aplicativo foi iniciado e o Firebase foi registrado:

![10](../Spanish/ConfigFirebaseImage/10s.png)
![11](../Spanish/ConfigFirebaseImage/11s.png)
![12](./images/ConfigFirebase/12s.png)
![13](../Spanish/ConfigFirebaseImage/13s.png)

* Ir a Console>Crescimento>Cloud Messaging

![14](../Spanish/ConfigFirebaseImage/14s.png)
![15](../Spanish/ConfigFirebaseImage/15s.png)
![16](../Spanish/ConfigFirebaseImage/16s.png)

* Escreva o texto da mensagem

![17](../Spanish/ConfigFirebaseImage/17s.png)

* Selecione o aplicativo

![18](../Spanish/ConfigFirebaseImage/18s.png)

* Nas opções avançadas> dados personalizados

![19](../Spanish/ConfigFirebaseImage/19s.png)

* Onde diz chave para escrever: tópico

![20](../Spanish/ConfigFirebaseImage/20s.png)

* Onde diz o valor escrever: o nome do canal que você deseja mostrar depois de visualizar o msg no aplicativo (ao vivo, programação, scripts, podcasts, redes)

![21](../Spanish/ConfigFirebaseImage/21s.png)

* Finalmente, enviamos nossa notificação

![22](../Spanish/ConfigFirebaseImage/22s.png)
