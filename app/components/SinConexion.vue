<template>
    <AbsoluteLayout>
      <Image src="~/assets/images/blackgradient.png" stretch="aspectFit" top="0" width="100%"/>
      <FlexboxLayout flexDirection="column" justifyContent="space-between" top="100" width="100%">
        <StackLayout alignSelf="center" width="100%">
          <Label class="mdi text-center text-cyan" fontSize="36" :text="'\ue2c1'"  color="#32DAC4"></Label>
          <Label text="Se produjo un error de conexion" class="text-center text-cyan font-italic" marginTop="10" fontSize="14" />
          <StackLayout @tap="actualizarConexion()" class="text-left" orientation="horizontal" margin="20 0 10" padding="10 20" width="260" borderRadius="5" backgroundColor="#eee">
            <Label class="bold" fontSize="12" padding="0 10" color="#333" width="170" verticalAlignment="center">Actualizar conexion</Label>
            <Label class="mdi" fontSize="20" :text="'\ue5d5'" padding="0 10" color="#333" horizontalAlignment="right" verticalAlignment="center"></Label>
          </StackLayout>
        </StackLayout>
      </FlexboxLayout>
    </AbsoluteLayout>
</template>
<script>
import ConexionService from '../api/ConexionService'

export default {
  data: () => {
    return {}
  },
  methods: {
    actualizarConexion () {
      ConexionService.getProgramaActual().then((resp) => {
        if (resp.status !== null) {
          ConexionService.getProgramas().then((programas) => {
            if (programas.status !== null) {
              ConexionService.getPodcasts().then((podcasts) => {
                this.$store.commit('SET_CONEXION', podcasts.status !== null)
              }).catch((err) => console.log(err))
            } else {
              this.$store.commit('SET_CONEXION', false)
            }
          }).catch((err) => console.log(err))
        } else {
          this.$store.commit('SET_CONEXION', false)
        }
      }).catch((err) => console.log(err))
    }
  },
  mounted () {
    this.actualizarConexion()
    setInterval(() => {
      this.actualizarConexion()
    }, 20000)
  }
}
</script>
