## How to generate a keystore

The keytool command-line utility can generate a keystore. To use keytool to generate a keystore for code signing, run the following command:

`keytool -genkey -v -keystore <company’s-name.jks> -keyalg RSA -keysize 2048 -validity 10000 -alias <name-of-your-app>`

The keytool utility will ask you a number of questions, several of which are optional (name of organization, as well as the names of your city/state/country), but the most important ones are the passwords for both the keystore and the alias.

Put this .jks file somewhere safe, and do not forget the password for the keystore or for the alias. Android requires you to use this exact same .jks file to sign any and all updates to your app. Meaning, if you lose this .jks file, or its password, you will not be able to update your Android app. You’ll have to create a brand new entry in Google Play and your existing users will not be able to upgrade.
