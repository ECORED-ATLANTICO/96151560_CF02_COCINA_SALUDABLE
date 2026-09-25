<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Tema 5

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El emplatado y la decoración profesional constituyen la etapa final de una preparación culinaria, en la que se integran criterios de composición, equilibrio visual, proporción, color, textura y distribución de los alimentos. Su adecuada aplicación permite presentar las elaboraciones de manera ordenada y atractiva, facilitar su consumo y resaltar sus características sensoriales, sin perder de vista la funcionalidad, la inocuidad y los principios propios de una cocina saludable. Este capítulo enseña los principios y técnicas para que el aprendiz transforme sus preparaciones en obras de arte visual.
    
    .fullwidth-bg.fullwidth-bg--1
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Principios fundamentales del emplatado: balance, color, textura y altura 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p Orientan la organización de los alimentos para lograr presentaciones armónicas, funcionales y visualmente atractivas. Su aplicación permite distribuir adecuadamente los componentes, generar contrastes y destacar las características propias de cada preparación.
        .bg-img.bg-img--terciario.rounded-4.p-4.py-3
          p.mb-0 Aspectos como el balance, el color, la textura y la altura contribuyen a crear composiciones que estimulan la percepción sensorial y favorecen una experiencia gastronómica agradable. Un emplatado profesional se guía por cuatro principios fundamentales que, aplicados en conjunto, garantizan una presentación armoniosa y atractiva (Manual de Cocina Fría, s.f.; del Valle Araujo, 2012).     
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/2.png", alt="")
    
    .row.justify-content-center.align-items-center.z-2
      .col-sm-6.col-lg-3.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/3.png", alt="" data-aos="zoom-in-down")
      .col-xl-9
        TabsA.color-secundario.mb-4.mb-lg-0
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Balance (o armonía)")
            p.mb-0 Se refiere a la distribución de los componentes del plato (proteína, guarnición, salsa, aderezo) de manera equilibrada y ordenada, sin amontonarlos. Un plato bien balanceado invita al comensal a explorar cada elemento. Se puede lograr a través de la geometría (un montículo central con elementos alrededor), la asimetría (un elemento principal descentrado) o la disposición lineal. 
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Color")
            p.mb-0 Se refiere a la distribución de los componentes del plato (proteína, guarnición, salsa, aderezo) de manera equilibrada y ordenada, sin amontonarlos. Un plato bien balanceado invita al comensal a explorar cada elemento. Se puede lograr a través de la geometría (un montículo central con elementos alrededor), la asimetría (un elemento principal descentrado) o la disposición lineal. estableció sus funciones, que perduran hasta hoy.
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Textura")
            p.mb-0 La combinación de diferentes texturas en un solo plato crea una experiencia sensorial más rica y placentera. Combine una base suave o cremosa (un puré, una salsa) con un elemento crujiente (chips, frutos secos, semillas, picatostes), una proteína tierna y jugosa, y un vegetal firme y fresco. 
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Altura")
            p.mb-0 Integra técnicas tradicionales con tendencias de alimentación saludable, productos frescos, preparaUn plato plano y esparcido es poco atractivo. Construya el plato en capas o utilizando montículos para darle volumen y dinamismo. Los aros de emplatar son una herramienta excelente para crear torres o cilindros. Los elementos altos capturan la atención. 

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Técnicas de decoración con salsas, hierbas, vegetales tallados y elementos crujientes 

    img(data-aos="fade-up")(src="@/assets/curso/tema5/4.png", alt="")   
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.mb-3
          p.mb-0 La decoración culinaria complementa el emplatado al incorporar elementos que aportan contraste, volumen, color, textura y dinamismo a la presentación, procurando siempre que sean comestibles y mantengan relación con los sabores de la preparación.  

    p.mb-4.mb-lg-5.z-2 Su aplicación requiere precisión, creatividad y moderación para evitar composiciones recargadas y conservar el protagonismo del alimento principal. Para lograr este propósito, pueden emplearse diferentes tipos de decoración, entre los que se destacan las realizadas con salsas, hierbas, vegetales tallados y elementos crujientes. 

    .bg-carousel.p-4.z-2.rounded-4
      SlyderA(tipo="b")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-7.mb-4.mb-lg-0
              h5 Decoración con salsas 
              p.mb-0 Se utiliza una cuchara, una manga pastelera o una botella de dosificador para crear diferentes efectos:
              ul.lista-ul.mb-0
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  span #[em Tears] (lágrimas o gotas): puntos de salsa alrededor del plato. 
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  span #[em Dots] (puntos en línea): una hilera de puntos de salsa. 
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  span #[em Swipe] (trazo): un trazo largo y limpio de salsa hecho con el dorso de la cuchara. 
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  span #[em Spiral] (espiral): un hilo continuo de salsa en forma circular. 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/5.png', alt='')
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h5 Decoración con hierbas 
              p.mb-0 Las micro hierbas (albahaca, cilantro, perejil, rúcula) son muy apreciadas por su tamaño pequeño y sabor concentrado. También se pueden usar hojas de hierbas frescas enteras o picadas en #[em chiffonade]. 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/6.png', alt='')
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h5 Decoración con vegetales tallados
              p.mb-0 El tallado de vegetales, o #[em vegetable carving], es un arte ornamental. Con cuchillos especiales (cuchillos de tallado), se pueden crear figuras decorativas como flores de zanahoria, hojas de pepino, mariposas de rábano o cisnes de manzana, ideales para bufets y eventos especiales.  
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/7.png', alt='')
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h5 Elementos crujientes como decoración 
              p.mb-0 Chips de vegetales (betabel, camote, plátano, zanahoria), semillas tostadas (sésamo, calabaza, girasol), frutos secos picados, cebolla frita crujiente, quinoa inflada o germinados.  
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/8.png', alt='')

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Adecuación del emplatado al tipo de servicio (buffet, a la carta, delivery) y a las necesidades del cliente. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/9.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La adecuación del emplatado al tipo de servicio y a las necesidades del cliente permite ajustar la presentación, distribución, porción y conservación de los alimentos según las condiciones en que serán ofrecidos y consumidos. Cada modalidad requiere considerar aspectos particulares relacionados con el montaje, la manipulación, el transporte y la experiencia esperada, sin descuidar la calidad e inocuidad.
        .bg-img.rounded-4.p-4.py-3
          p.mb-0 Asimismo, resulta fundamental contemplar requerimientos específicos del consumidor.  El emplatado final no es una camisa de fuerza. El chef #[em Garde Manger] debe saber adaptar sus presentaciones a diferentes contextos operativos y a las necesidades específicas de los comensales. 

    p.mb-4 A continuación, se presentan las principales consideraciones 

    .row.justify-content-center.z-2
      .col-sm-9.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt.tarjeta.custom-2
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/10.png", alt="alt")
          .crd_hover_txt--body.p-4.py-3
            h4.mb-3 Servicio a la carta 
            p.mb-0 Elaborado y personalizado. La estética es primordial. Cada plato se emplata de forma individual y única. Se invierte tiempo en la decoración. La presentación justifica el precio.    
      .col-sm-9.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt.tarjeta.custom-2
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/11.png", alt="alt")
          .crd_hover_txt--body.p-4.py-3
            h4.mb-3 Buffet 
            p.mb-0 Enfoque en la producción en masa y la presentación en grandes fuentes. El emplatado se realiza en bandejas y fuentes grandes, buscando la abundancia, el color y la facilidad para que el comensal se sirva. Las decoraciones son más grandes y vistosas (esculturas de vegetales, tallados). 
      .col-sm-9.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt.tarjeta.custom-2
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/12.png", alt="alt")
          .crd_hover_txt--body.p-4.py-3
            h4.mb-3 Servicio #[em Express / Delivery] 
            p.mb-0 El emplatado se cambia por un empaque funcional. La prioridad es preservar la integridad, temperatura y textura del alimento durante el transporte. Se usan empaques separados para aderezos y elementos crujientes. 
      .col-sm-9.col-lg-6.col-xl-3.mb-4.mb-xl-0
        .crd_hover_txt.tarjeta.custom-2
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/13.png", alt="alt")
          .crd_hover_txt--body.p-4.pt-xl-2.py-3
            h4.mb-3 Necesidades del cliente (alergias, dietas) 
            p.mb-0 El chef debe estar preparado para modificar el emplatado y los ingredientes a petición del cliente. Ejemplo: "Sin gluten" (usar pan sin gluten, evitar salsas con harina), "Sin lactosa" (usar aderezos sin lácteos), "Sin aderezo" (servir el aderezo aparte). Es una muestra de profesionalismo y servicio al cliente. 

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
