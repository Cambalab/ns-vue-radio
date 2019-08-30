const config = {
  'jsondata': true,
  'colors': {
    'appBackgroundColor': {
      backgroundColor: '#432f4f'
    },
    'bottomNavigationBar': {
      activeColor: '#E500A2',
      backgroundColor: '#1a121f',
      inactiveColor: '#808080'
    },
    'panelBackgroundColor': {
      backgroundColor: '#1a121f'
    },
    'primaryText': {
      color: '#E500A2'
    },
    'secondaryText': {
      color: '#ffffff'
    }
  },
  'phoneNumber': '',
  'shareApp': {
    'playStoreUrl': '',
    'message': ''
  },
  'sections': [
    'Live',
    'Schedule',
    'WriteUs',
    'Podcasts',
    'Social'
  ],
  'socialNetworks': [
    {
      link2App: 'com.facebook',
      link2Page: 'https://www.facebook.com/',
      iconId: '\ue028',
      iconColor: '#fafafa',
      background: '#365899'
    },
    {
      link2App: 'com.instagram',
      link2Page: 'https://www.instagram.com/',
      iconId: '\ue044',
      iconColor: '#fafafa',
      backgroundImage: '~/assets/images/instagram.png'
    },
    {
      link2App: 'com.twitter',
      link2Page: 'https://www.twitter.com/',
      iconId: '\ue08d',
      iconColor: '#fafafa',
      background: '#006dbf'
    }
  ],
  'stream': 'https://',
  'writeEmailTo': []
}

export default config
