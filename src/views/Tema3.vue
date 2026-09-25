<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ensaladas, aderezos y salsas frías 
  
    img(data-aos="fade-up")(src="@/assets/curso/tema3/1.png", alt="")   
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 Las ensaladas son el plato estrella de la cocina fría. Su versatilidad permite combinaciones infinitas, pero su éxito radica en comprender su estructura, el equilibrio de los aliños y la calidad de los ingredientes. Este capítulo desglosa cada uno de estos componentes. 
    
    .fullwidth-bg.fullwidth-bg--1
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1	Estructura de la ensalada: base, cuerpo, aderezo y guarnición 

    p Una gran ensalada no es una mezcla aleatoria de ingredientes. Se construye como una obra de arte, con cuatro elementos fundamentales que se complementan y equilibran (Jiménez Cadena, 2024; Manual de Cocina Fría, s.f.).

    .bg-carousel.p-4.z-2.rounded-4
      SlyderA(tipo="b")
        .tarjeta.tarjeta--blanca.p-4.rounded-4.px-5
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-7.mb-4.mb-lg-0
              h5 Base	
              p.mb-0 Sirve de "cama" o "lienzo" sobre el cual se construye la ensalada. Son hojas verdes (lechuga, espinaca, rúcula, radicchio, canónigos) que aportan volumen, textura crujiente y un sabor suave. También puede ser un ingrediente más sustancial como arroz, quinoa, pasta o una fruta a la que se le ha vaciado el interior (ej. un tomate, un aguacate o una piña).
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/3.png', alt='')
        .tarjeta.tarjeta--blanca.p-4.rounded-4.px-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h5 Cuerpo
              p.mb-0 Es el ingrediente principal que le da nombre y sustancia a la ensalada. Representa la parte más importante y el punto focal del plato. Puede ser una proteína (atún, pollo desmenuzado, camarones, salmón ahumado, queso), una legumbre (garbanzos, lentejas, frijoles) o una verdura predominante (ensalada de papa, de zanahoria). 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/4.png', alt='')
        .tarjeta.tarjeta--blanca.p-4.rounded-4.px-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h5 Aderezo 
              p.mb-0 Es el aliño que humedece, une y da sabor a todos los ingredientes. Aporta acidez, grasa, cremosidad, dulzor o picante, según el caso. Debe complementar y realzar el sabor del cuerpo, nunca dominarlo ni ocultarlo. 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/5.png', alt='')
        .tarjeta.tarjeta--blanca.p-4.rounded-4.px-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h5 Guarnición (o adorno)
              p.mb-0 Son los elementos decorativos y de contraste que añaden color, textura crujiente, sabor extra o altura al plato. Se colocan estratégicamente sobre el cuerpo o alrededor de él. Ejemplos: picatostes, frutos secos, semillas, hierbas frescas, rodajas de huevo duro, aceitunas, tiras de pimiento, chips de vegetales. 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/6.png', alt='')

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2	Clasificación de salsas frías: vinagretas (inestables), mayonesas y derivados (estables)

























</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
