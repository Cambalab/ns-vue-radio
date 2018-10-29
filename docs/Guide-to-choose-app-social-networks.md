## How to choose the app social networks

* Go to `app/config.js`

![01](./images/Guide-to-choose-app-social-networks/01s.png)

![02](./images/Guide-to-choose-app-social-networks/02s.png)

* Remove the sections that your app not use

![03](./images/Guide-to-choose-app-social-networks/03s.png)

![04](./images/Guide-to-choose-app-social-networks/04s.png)

* Add the sections that need your app

  - Go to [Social Icon](http://www.socicon.com/chart.php)

  - Search the icon social network
![05](./images/Guide-to-choose-app-social-networks/05s.png)

  - Put a json with this fields:
```
  {
    link2App: '<link-to-open-app-social-network>'
    link2Page: '<link-to-open-page-social-network>'
    iconId: '#\u<icon-id>'
    iconColor: '#<rgb-code-icon-color>'
    background: '#<rgb-code-background-color>'
  }
```
![06](./images/Guide-to-choose-app-social-networks/06s.png)

![07](./images/Guide-to-choose-app-social-networks/07s.png)

* Or use a background image
  - Put a background image
![08](./images/Guide-to-choose-app-social-networks/08s.png)

  - Use the field 'backgroundImage':
```
  {
    link2App: '<link-to-open-app-social-network>'
    link2Page: '<link-to-open-page-social-network>'
    iconId: '#\u<icon-id>'
    iconColor: '#<rgb-code-icon-color>'
    backgroundImage: '~/<path-to-image-from-"app/">'
  }
```
![09](./images/Guide-to-choose-app-social-networks/09s.png)

![10](./images/Guide-to-choose-app-social-networks/10s.png)
