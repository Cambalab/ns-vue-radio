import * as fs from "file-system";

var documents = fs.knownFolders.currentApp();
var jsonFile = documents.getFile('./resources/data.json');
var array;
var jsonData;

class jsonreader {
    constructor() {
        this.jsonData = {}
        this.array = []
        jsonFile.readText()
            .then(function (content) {
                try {
                    jsonData = JSON.parse(content);
                    array = new observableArrayModule.ObservableArray(jsonData);
                    console.log(jsonData)
                    console.log(array)
                } catch (err) {
                    throw new Error('Could not parse JSON file');
                }
            }, function (error) {
                throw new Error('Could not read JSON file');
            });
    }

    get(id) {
        let data = []
        switch (id) {
            case "/programas/api":
                console.log('switch', this.array)
                data = 
                data = 
                    {
                        status : 200,
                        // data : this.array.programas
                        data : 
                        [
                            {
                                "title": "Señal de ajuste",
                                "horario": "Lunes a viernes a las 9",
                                "content": "Una propuesta periodística para arrancar la mañana con la mejor música. Conduce: Martín Iglesias",
                                "hora_inicio": "09:00:00",
                                "hora_fin": "10:00:00",
                                "dias": "[u'1', u'2', u'3', u'4', u'5']",
                                "image": "http://www.ahijuna.fm/media/se%C3%B1al.jpg"
                            },
                            {
                                "title": "Comunidad Imaginada",
                                "horario": "Lunes a las 18",
                                "content": "una propuesta para analizar la realidad internacional desde una visión latinoamericana",
                                "hora_inicio": "18:00:00",
                                "hora_fin": "20:00:00",
                                "dias": "[u'1']",
                                "image": "http://www.ahijuna.fm/media/comunidad_imaginada.jpg"
                            }
                        ]
                        // */
                    }
                
                break;
        
            default:
                break;
        }
        return Promise.resolve(data)
    }

}

export default jsonreader
