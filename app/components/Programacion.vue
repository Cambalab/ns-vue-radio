<template>
  <FlexboxLayout class="backgroundColorApp" flexDirection="column" justifyContent="space-between">
    <StackLayout flexGrow="2" height="100%">
      <ListView for="programa in programasFiltrados" height="100%" separatorColor="transparent">
        <v-template>
          <StackLayout xmlns:Card="nativescript-cardview" width="100%">
            <CardView radius="6" margin="10" backgroundColor="white" elevation="5" ripple="true">
              <StackLayout>
                <StackLayout width="100%" height="200">
                  <Image :src="programa.image" stretch="aspectFill"/>
                </StackLayout>
                <StackLayout class="p-x-12 p-y-12" borderTopWidth="1px" borderTopColor="#eee">
                  <Label :text="programa.title" color="#333" textWrap="true"/>
                  <Label :text="programa.horario" fontSize="10" color="#555" textWrap="true"/>
                  <Label :text="programa.content" fontSize="11" marginTop="10" color="#555" textWrap="true"/>
                </StackLayout>
              </StackLayout>
            </CardView>
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
    <StackLayout class="spacer" height="22%" flexShrink="0">
      <ListPicker :items="dias" :selectedIndex="diaPicker" @selectedIndexChange="cambioDeDia" class="panelBackgroundColorApp secondaryTextColorApp"/>
    </StackLayout>
  </FlexboxLayout>
</template>
<script>
import ProgramasService from '../api/ProgramasService'

export default {
  data: () => {
    return {
      ultimoCambio: new Date(),
      diaSeleccionado: 1,
      diaPicker: 0,
      dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      programas: []
    }
  },
  mounted () {
    ProgramasService.getProgramas().then((programas) => {
      if (programas.status === 200) {
        this.programas = programas.data
      }
    }).catch((err) => console.log(err))
  },
  computed: {
    programasFiltrados () {
      return this.programas.filter(this.seTransmiteDia).sort((a, b) => { return a.hora_inicio < b.hora_inicio ? -1 : 1 })
    }
  },
  methods: {
    seleccionarDia () {
      this.diaSeleccionado = this.diaPicker + 1
    },
    cambioDeDia (event) {
      this.ultimoCambio = new Date()
      this.diaPicker = event.value
      setTimeout(() => {
        if ((new Date() - this.ultimoCambio) >= 500) {
          this.seleccionarDia()
        }
      }, 500)
    },
    seTransmiteDia (programa) {
      return programa.dias.includes(this.diaSeleccionado)
    }
  }
}
</script>
