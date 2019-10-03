const {
  bottomNavigationBar: {
    activeColor: navActiveColor,
    backgroundColor: appBackgroundColor,
    inactiveColor: navInactiveColor
  },
  colors: {
    backgroundColor: navBackgroundColor,
    primaryText,
    secondaryText
  },
  sections,
  social: {
    facebookUrl,
    instagramUrl,
    twitterUrl
  },
  stream,
  currentShowEndpoint,
  showsEndpoint,
  podcastsEndpoint,
  writeEmailTo
} = CUSTOMIZATION

const config = {
  'jsondata': true,
  'colors': {
    'appBackgroundColor': {
      backgroundColor: appBackgroundColor || '#432f4f'
    },
    'bottomNavigationBar': {
      activeColor: navActiveColor || '#E500A2',
      backgroundColor: navBackgroundColor || '#1a121f',
      inactiveColor: navInactiveColor || '#808080'
    },
    'panelBackgroundColor': {
      backgroundColor: navBackgroundColor || '#1a121f'
    },
    'primaryText': {
      color: primaryText || '#E500A2'
    },
    'secondaryText': {
      color: secondaryText || '#ffffff'
    }
  },
  'phoneNumber': '',
  'shareApp': {
    'playStoreUrl': '',
    'message': ''
  },
  'sections': sections || [
    'Live',
    'Schedule',
    'WriteUs',
    'Podcasts',
    'Social'
  ],
  'socialNetworks': [
    {
      link2App: 'com.facebook',
      link2Page: facebookUrl,
      iconId: '\ue028',
      iconColor: '#fafafa',
      background: '#365899'
    },
    {
      link2App: 'com.instagram',
      link2Page: instagramUrl,
      iconId: '\ue044',
      iconColor: '#fafafa',
      backgroundImage: '~/assets/images/instagram.png'
    },
    {
      link2App: 'com.twitter',
      link2Page: twitterUrl,
      iconId: '\ue08d',
      iconColor: '#fafafa',
      background: '#006dbf'
    }
  ],
  'stream': stream,
  'endpointUrls': {
    currentShow: currentShowEndpoint || '/api/programs/current',
    shows: showsEndpoint || '/api/programs',
    podcasts: podcastsEndpoint || '/api/podcasts'
  },
  'writeEmailTo': writeEmailTo
}

export default config
