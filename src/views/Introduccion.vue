<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    img(data-aos="fade-up")(src="@/assets/curso/introduccion/1.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 La cocina fría, conocida en el argot profesional como la partida del Garde Manger, es mucho más que un área de preparación de alimentos que no requieren calor. Es una disciplina fundamental en la gastronomía que exige un alto grado de precisión técnica, una sensibilidad estética refinada y un profundo conocimiento de la inocuidad alimentaria.   

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p Mientras que la cocina caliente seduce con los aromas que se desprenden durante la cocción, la cocina fría debe conquistar al comensal a través de la frescura de sus ingredientes, la nitidez de sus cortes, la explosión de sabores en boca y una presentación visual impecable que anticipa el deleite.
        .bg-img.bg-img--terciario.rounded-4.p-4.py-3.overflow-hidden.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block.px-1
              figure
                img(src="@/assets/curso/introduccion/3.svg", alt="")
            .col-lg-11
              p.mb-0 Dominar la cocina fría es, por lo tanto, la marca de un profesional completo y meticuloso. De esta área dependen desde las entradas más sencillas —una ensalada verde con una vinagreta equilibrada— hasta las elaboraciones más complejas y prestigiosas, como una terrina de pato con gelatina de oporto, un buffet de canapés para un evento de gala o un ceviche con la textura perfecta. El Garde Manger es el artista de la precisión, el guardián de la cadena de frío y el responsable de que cada bocado frío sea una experiencia inolvidable.
        p.mb-0 El presente componente formativo, Cocina fría: técnicas, preparaciones y emplatado profesional, ha sido meticulosamente diseñado para transformar al aprendiz en un experto en esta apasionante disciplina. El viaje formativo se inicia con el estudio de los fundamentos históricos y organizacionales de la cocina fría, conociendo la figura del chef Garde Manger y la importancia vital de la cadena de frío.
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/introduccion/2.png", alt="")
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/introduccion/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Posteriormente, se adentra en el dominio de los cortes, la base técnica sobre la que se construye toda preparación. Luego, explora el universo de las ensaladas, aderezos, vinagretas y salsas frías, para continuar con preparaciones más complejas como ceviches, patés, terrinas, galantinas, mousses, sándwiches y bebidas. 
    
    p El recorrido culmina en el arte del emplatado y la decoración, donde el aprendiz aprenderá a presentar sus creaciones como auténticas obras de arte visual, adaptándolas a las necesidades y expectativas de cada cliente y cada tipo de servicio.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
