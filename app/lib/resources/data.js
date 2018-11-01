const data = {
  'shows': [
    {
      'title': 'Show title',
      'hours': 'From 11:00 - 13:00, on Monday to Friday',
      'content': 'Show description',
      'init_hour': '11:00:00', // hh:mm:ss
      'days': '[u"1", u"2", u"3", u"4", u"5"]', // [Monday, Tuesday, Wednesday, Thursday, Friday]
      'image': '~/lib/resources/showsImages/purple.jpg' // url image
    },
    {
      'title': 'Show title',
      'hours': 'From 14:00 - 16:00, on Saturday and Sunday',
      'content': 'Show description',
      'init_hour': '14:00:00', // hh:mm:ss
      'days': '[u"6", u"7"]', // [Saturday, Sunday]
      'image': '~/lib/resources/showsImages/red.png' // url image
    }
  ],
  'podcasts': [
    {
      'title': 'Event',
      'content': '<p>This is a event description.</p>',
      'file_download': 'https://' // audio file
    },
    {
      'title': 'News',
      'content': '<p>This is a news description.</p>',
      'file_download': 'https://' // audio file
    }
  ],
  'progactual': {
    'programa': 'Current program name'
  }
}

export default data
