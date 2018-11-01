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
      'title': '#Trabajo | Juan Cruz Lucero (CEPA): \'un país sin industria es un país para pocos\'',
      'content': '<p>El Centro de Econom&iacute;a Pol&iacute;tica Argentina present&oacute; un nuevo informe sobre despidos y suspensiones en los primeros ocho meses del a&ntilde;o. Empleos precarios y p&eacute;rdida de 90 mil puestos de trabajo en los &uacute;ltimos tres a&ntilde;os.</p>\r\n\r\n<p><iframe frameborder=\"0\" height=\"30px\" scrolling=\"no\" src=\"https://archive.org/embed/CEPADespidosYSuspensionesen2018\" width=\"100%\"></iframe></p>\r\n',
      'file_download': 'https://archive.org/download/CEPADespidosYSuspensionesen2018/2018.09.27%20-%20Juan%20Cruz%20Lucero%20-%20Integrante%20Cepa%20-%20Informe%20de%20Cepa.mp3',
      'is_published': true,
      'pub_date': '2018-09-28T13:11:00Z'
    }
  ],
  'progactual': {
    'programa': 'Current program name'
  }
}

export default data
