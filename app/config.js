const config = {
  'jsondata': true,
  'colors': {
    'appBackgroundColor': {
      backgroundColor: customization.colors.backgroundColor || '#432f4f'
    },
    'bottomNavigationBar': {
      activeColor: customization.bottomNavigationBar.activeColor || '#E500A2',
      backgroundColor: customization.bottomNavigationBar.backgroundColor || '#1a121f',
      inactiveColor: customization.bottomNavigationBar.inactiveColor || '#808080'
    },
    'panelBackgroundColor': {
      backgroundColor: customization.bottomNavigationBar.backgroundColor || '#1a121f'
    },
    'primaryText': {
      color: customization.colors.primaryText || '#E500A2'
    },
    'secondaryText': {
      color: customization.colors.secondaryText || '#ffffff'
    }
  },
  'phoneNumber': '',
  'shareApp': {
    'playStoreUrl': '',
    'message': ''
  },
  'sections': customization.sections || [
    'Live',
    'Schedule',
    'WriteUs',
    'Podcasts',
    'Social'
  ],
  'socialNetworks': [
    {
      link2App: 'com.facebook',
      link2Page: customization.social.facebookUrl,
      iconId: '\ue028',
      iconColor: '#fafafa',
      background: '#365899'
    },
    {
      link2App: 'com.instagram',
      link2Page: customization.social.instagramUrl,
      iconId: '\ue044',
      iconColor: '#fafafa',
      backgroundImage: '~/assets/images/instagram.png'
    },
    {
      link2App: 'com.twitter',
      link2Page: customization.social.twitterUrl,
      iconId: '\ue08d',
      iconColor: '#fafafa',
      background: '#006dbf'
    }
  ],
  'stream': customization.stream,
  'writeEmailTo': customization.writeEmailTo
}

export default config
