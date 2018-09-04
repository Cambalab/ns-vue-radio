<template>
  <FlexboxLayout flexDirection="column" justifyContent="space-between" backgroundColor="#32DAC4">
    <StackLayout flexGrow="2" height="100%">
      <ListView for="programa in programasFiltrados" height="100%" backgroundColor="#32DAC4" separatorColor="transparent">
        <v-template>
          <StackLayout xmlns:Card="nativescript-cardview" width="100%">
            <CardView radius="6" margin="10" backgroundColor="white" elevation="5" ripple="true">
              <StackLayout>
                <StackLayout width="100%" height="200">
                  <Image :src="programa.imagen" stretch="aspectFill"/>
                </StackLayout>
                <StackLayout class="p-x-12 p-y-12" borderTopWidth="1px" borderTopColor="#eee">
                  <Label :text="programa.nombre" color="#333" textWrap="true"/>
                  <Label :text="programa.horarioLegible" fontSize="10" color="#555" textWrap="true"/>
                  <Label :text="programa.descripcion" fontSize="11" marginTop="10" color="#555" textWrap="true"/>
                </StackLayout>
              </StackLayout>
            </CardView>
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
    <StackLayout class="spacer" height="22%" flexShrink="0">
      <ListPicker :items="dias" :selectedIndex="diaPicker" @selectedIndexChange="cambioDeDia" class="grey" color="white"/>
    </StackLayout>
  </FlexboxLayout>
</template>
<script>
  export default {
    data: () => {
      return {
        ultimoCambio: new Date(),
        diaSeleccionado: 0,
        diaPicker: 0,
        dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        programas: [
          {
            nombre: 'SELECCIÓN MUSICAL + PICANDO DISCOS',
            descripcion: 'Una propuesta periodística para arrancar la mañana con la mejor música. Conduce: Martín Iglesias',
            horarioLegible: 'Lunes a viernes de 7 a 9 y de 13:30 a 15',
            horarios: [
              {
                dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
                horas: ['7:00-9:00','13:30-15:00']
              }
            ],
            imagen: 'http://www.ahijuna.fm/media/picandodiscos.png'
          },
          {
            nombre: 'SEÑAL DE AJUSTE',
            descripcion: 'Una propuesta periodística para arrancar la mañana con la mejor música. Conduce: Martín Iglesias',
            horarioLegible: 'Lunes a viernes de 9 a 10',
            horarios: [
              {
                dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
                horas: ['9:00-10:00']
              }
            ],
            imagen: 'http://www.ahijuna.fm/media/se%C3%B1al.jpg'
          },
          {
            nombre: '¿ERA NECESARIO?',
            descripcion: 'Una propuesta periodística para arrancar la mañana con la mejor música. Conduce: Martín Iglesias',
            horarioLegible: 'Lunes de 15 a 16',
            horarios: [
              {
                dias: ['Lunes'],
                horas: ['15:00-16:00']
              }
            ],
            imagen: 'http://www.ahijuna.fm/media/17545313_1379919475397745_4999283521759979202_o.jpg'
          },
          {
            nombre: 'INFORMATIVO RED COLMENA',
            descripcion: 'Una propuesta periodística para arrancar la mañana con la mejor música. Conduce: Martín Iglesias',
            horarioLegible: 'Sabados y domingos de 7 a 8',
            horarios: [
              {
                dias: ['Sábado', 'Domingo'],
                horas: ['7:00-8:00']
              }
            ],
            imagen: 'http://www.ahijuna.fm/media/socol.jpg'
          }
        ]
      }
    },
    computed: {
      programasFiltrados() {
        return this.programas.filter(this.seTransmiteDia);
      }
    },
    methods: {
      seleccionarDia() {
        this.diaSeleccionado = this.diaPicker;
      },
      cambioDeDia(event) {
        this.ultimoCambio = new Date();
        this.diaPicker = event.value;
        setTimeout(()=>{
          if((new Date() - this.ultimoCambio) >= 500) {
            this.seleccionarDia();
          }
        },500)
      },
      seTransmiteDia(programa) {
        let seTransmite = false;
        programa.horarios.map((horario => {
          if (horario.dias.includes(this.dias[this.diaSeleccionado])) {
            seTransmite = true;
          }
        }))
        return seTransmite;
      }
    }
  };
</script>
