<template>
  <FlexboxLayout flexDirection="column" justifyContent="space-between" backgroundColor="#000028">
    <StackLayout>
      <ListView for="programa in programasFiltrados" backgroundColor="#000028" separatorColor="gray">
        <v-template>
          <StackLayout height="75%">
            <Label :text="programa.nombre" color="#f63e00" verticalAlignment="center" textWrap="true"/>
            <Image :src="programa.imagen"/>
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
    <StackLayout class="spacer" height="25%">
      <ListPicker :items="dias" :selectedIndex="diaSeleccionado" @selectedIndexChange="cambioDeDia" color="white"/>
    </StackLayout>
  </FlexboxLayout>
</template>
<script>
  export default {
    data: () => {
      return {
        diaSeleccionado: 0,
        dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        programas: [
          {
            nombre: 'SELECCIÓN MUSICAL + PICANDO DISCOS',
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
        return this.programas.filter(this.seTransmiteDia)
      }
    },
    methods: {
      cambioDeDia(event) {
        this.diaSeleccionado = event.value
        console.log(this.programasFiltrados)
      },
      seTransmiteDia(programa) {
        let seTransmite = false;
        programa.horarios.map((horario => {
          console.log(horario.dias)
          console.log(this.dias[this.diaSeleccionado])
          if (horario.dias.includes(this.dias[this.diaSeleccionado])) {
            console.log('MATCH')
            seTransmite = true;
          }
        }))
        return seTransmite;
      }
    }
  };
</script>
