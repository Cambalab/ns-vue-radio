## Firebase Cloud Message

* It's necessary to have a [Google account](https://accounts.google.com/signup/v2/webcreateaccount?service=ahsid&continue=https%3A%2F%2Ffirebase.google.com%2F%3Frefresh%3D1&flowName=GlifWebSignIn&flowEntry=SignUp).

* Go to [firebase console](https://console.firebase.google.com/)

![01](./images/FirebaseConfigurationGuide/01s.png)

* Add the proyect

![02](./images/FirebaseConfigurationGuide/02s.png)

* Add the proyect name and continue.

![03](./images/FirebaseConfigurationGuide/03s.png)

* Create proyect

![04](./images/FirebaseConfigurationGuide/04s.png)

![05](./images/FirebaseConfigurationGuide/05s.png)

* Continue

![06](./images/FirebaseConfigurationGuide/06s.png)

* To add Firebase to your Android Application press the Android icon.

![07](./images/FirebaseConfigurationGuide/07s.png)

* Android package name (application id): `org.camba.radio`.
* Register app

![08](./images/FirebaseConfigurationGuide/08s.png)

* Download `google-services.json` file.

![09](./images/FirebaseConfigurationGuide/09s.png)

* Copy `google-services.json` file in `ns-vue-radio/app/App_Resources/Android/`

* [Add nativescript-plugin-firebase](Guia-para-agregar-nativescript-plugin-firebase.md)

* Run commands below:

`npm install`

`npm run clean`

`tns build android --bundle`

`tns run android --bundle`

* Once the application initialises you're registered in Firebase

![10](./images/FirebaseConfigurationGuide/10s.png)

![11](./images/FirebaseConfigurationGuide/11s.png)

![12](./images/FirebaseConfigurationGuide/12s.png)


* Go to `Console>Grow>Cloud Messaging` and press **Send your first message**

![13](./images/FirebaseConfigurationGuide/13s.png)
![14](./images/FirebaseConfigurationGuide/14s.png)

* Write notification title and content

![15](./images/FirebaseConfigurationGuide/15s.png)

![16](./images/FirebaseConfigurationGuide/16s.png)


![17](./images/FirebaseConfigurationGuide/17s.png)

* Next

![18](./images/FirebaseConfigurationGuide/18s.png)

* Topic

![19](./images/FirebaseConfigurationGuide/19s.png)

* Select the tab to open the app when recived the notification.

![20](./images/FirebaseConfigurationGuide/20s.png)

![21](./images/FirebaseConfigurationGuide/21s.png)

* Select a date to send the notification

![22](./images/FirebaseConfigurationGuide/22s.png)

![23](./images/FirebaseConfigurationGuide/23s.png)

* In custom data set *topic* as **key** and the tab to open app as **value**

![24](./images/FirebaseConfigurationGuide/24s.png)

* Click the Review button

![25](./images/FirebaseConfigurationGuide/25s.png)

* Click the Publish button

![26](./images/FirebaseConfigurationGuide/26s.png)

* And the notification will be send.

![27](./images/FirebaseConfigurationGuide/27s.png)
