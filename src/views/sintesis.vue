<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .bg-terciario-t5.mb-3(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-auto.col-lg-5
          figure
            img(src='@/assets/curso/sintesis.png', alt='')
        .col-lg
          .p-4
            p.mb-0 El componente formativo Cocina fría: técnicas, preparaciones y emplatado profesional, ha capacitado al aprendiz en el arte y la técnica de la cocina fría, desde sus fundamentos históricos con la figura del #[em Garde Manger] y la importancia de la cadena de frío, hasta la ejecución y presentación profesional de preparaciones complejas. Se abordó el dominio de los cortes básicos y especializados, así como la construcción de ensaladas a partir de sus cuatro elementos estructurales (base, cuerpo, aderezo, guarnición).  
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p Se profundizó en la clasificación y elaboración de salsas frías (vinagretas, mayonesas) y aderezos saludables. Luego, el aprendiz se sumergió en preparaciones especializadas como el ceviche (acidificación), los patés y terrinas (<em>farce</em> y <em>mousseline</em>), las mousses, los sándwiches, canapés y las bebidas frías. 
        .bg-img.rounded-4.p-4.py-3.overflow-hidden.mb-4.mb-lg-0
          p.mb-0 Finalmente, se aplicaron los principios del emplatado profesional (balance, color, textura, altura) y las técnicas de decoración, aprendiendo a adaptar la presentación al tipo de servicio (buffet, a la carta, #[em delivery]) y a las necesidades del cliente. La integración de estas competencias posiciona al aprendiz como un experto en cocina fría, capaz de garantizar calidad, inocuidad y un alto valor estético en cada preparación.
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/sintesis-2.png", alt="")
    
    .row.justify-content-center
      .col-lg-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
