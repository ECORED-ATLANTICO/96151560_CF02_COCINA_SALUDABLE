<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la cocina fría y el #[em Garde Manger]
  
    .row.justify-content-center.align-items-center
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        .bg-img.bg-img--terciario.rounded-4.p-4.mb-3
          p.mb-0 La cocina fría y el #[em Garde Manger] integran conocimientos, técnicas y criterios esenciales para la elaboración de preparaciones que requieren especial atención en la selección de ingredientes, manipulación, conservación, combinación de sabores, texturas y presentación. Su aplicación dentro de la cocina saludable permite desarrollar propuestas frescas, equilibradas y visualmente atractivas, manteniendo condiciones adecuadas de inocuidad y calidad durante todo el proceso culinario.  
        p.mb-0 Para dominar la cocina fría, el aprendiz debe primero comprender su contexto histórico, la organización del trabajo y los principios de seguridad que la rigen. Este capítulo establece los cimientos conceptuales y operativos indispensables.

    
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1	Definición, historia y evolución de la cocina fría

    img(data-aos="fade-up")(src="@/assets/curso/tema1/2.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 La cocina fría se define como el área dentro de una cocina profesional encargada de la preparación y servicio de alimentos que se consumen a temperatura fría, independientemente de si su proceso de elaboración incluye o no una cocción previa. Abarca una amplia variedad de preparaciones: ensaladas, aderezos, canapés, patés, terrinas, ahumados, escabeches, ceviches, sándwiches y todo tipo de entremeses fríos.
    
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema1/3.png", alt="")
      .col-lg-9
        p El término que designa a esta área y a su chef principal proviene del francés: Garde Manger, que significa literalmente "guardar para comer". Este nombre tiene un origen histórico que se remonta a la edad media. En los castillos y grandes casas señoriales, existía un área de almacenamiento de alimentos, generalmente ubicada en un sótano o zona fresca, llamada garde manger. 
        .bg-img.rounded-4.p-4
          p.mb-0 El responsable de esta despensa era el cier de la bouche o mayordomo, quien gestionaba las conservas, los quesos, los embutidos, las carnes saladas y ahumadas, y dispensaba los alimentos según fuera necesario 
    
    p.mb-4 Con el tiempo, y especialmente gracias a la labor de Auguste Escoffier a finales del siglo XIX y principios del XX, la cocina se reorganizó bajo el "sistema de brigadas". Escoffier estableció una jerarquía clara y funciones específicas para cada estación de trabajo, consolidando la figura del Garde Manger como una partida fundamental, responsable de la mise en place de las materias primas frescas, el despiece y limpieza de pescados y carnes, y la preparación de sopas frías, ensaladas, patés, terrinas y charcutería (Manual de Cocina Fría, s.f.; Jiménez Cadena, 2024).

    .row.justify-content-center.align-items-center
      .col-xl-9
        TabsA.color-secundario.custom-tabs.mb-4.mb-lg-0
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Edad media")
            p.mb-0 El #[em Garde Manger] era la despensa donde se almacenaban y conservaban alimentos para el invierno. La salazón, el ahumado y el secado eran técnicas clave. 
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Finales del siglo XIX y comienzos del XX ")
            p.mb-0 #[em Auguste Escoffier]
            p.mb-0 (1846-1935). Organizó la cocina en brigadas, profesionalizó la figura del #[em Garde Manger] y estableció sus funciones, que perduran hasta hoy.
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="FMediados y finales del siglo XX")
            p.mb-0 La expansión de la refrigeración y congelación transformó la conservación y producción de alimentos. La cocina fría amplió su repertorio e incorporó mayores controles de temperatura, higiene, almacenamiento e inocuidad.
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Actualidad")
            p.mb-0 Integra técnicas tradicionales con tendencias de alimentación saludable, productos frescos, preparaciones vegetales, control de porciones y presentaciones creativas. También incorpora nuevos equipos, tecnologías de conservación y criterios más rigurosos de sostenibilidad e inocuidad.
      .col-sm-6.col-lg-3.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/4.png", alt="" data-aos="zoom-in-down")
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2	El chef #[em Garde Manger]: funciones y jerarquía en la brigada de cocina

    p Dentro de la brigada de cocina clásica establecida por Escoffier, el chef Garde Manger ocupa una posición de alta relevancia, generalmente considerado el tercero en la jerarquía, después del chef ejecutivo y el sous chef. Sus funciones son amplias y requieren un conocimiento profundo de técnicas tanto de cocina caliente como de pastelería. 
    p.mb-5 Principales funciones del Garde Manger: 

    .bg-slider.p-3.px-2.p-md-4.rounded-4.mb-4.mb-lg-5
      .row.justify-content-center.align-items-center
        .col-lg-4.d-none.d-lg-block
          figure
            img.imgw-324(src='@/assets/curso/tema1/5.png', alt='')
        .col-lg-8
          SlyderF(columnas="col-xl-6")
            .tarjeta.tarjeta--blanca.p-4.pt-5
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img(src='@/assets/curso/tema1/6.svg' alt='')
              p.text-center.mb-0 #[strong Despiece y limpieza]: es responsable del despiece de aves, carnes y pescados, así como de la limpieza de mariscos y su preparación para otras partidas.
            .tarjeta.tarjeta--blanca.p-4.pt-5
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img(src='@/assets/curso/tema1/7.svg' alt='')
              p.text-center.mb-0 #[strong Preparación de conservas]: elabora y gestiona encurtidos, escabeches, ahumados y curados de carnes y pescados. 
            .tarjeta.tarjeta--blanca.p-4.pt-5
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img(src='@/assets/curso/tema1/8.svg' alt='')
              p.text-center.mb-0 #[strong Elaboración de patés, terrinas y galantinas]: dominar estas preparaciones es su sello distintivo. Implica la creación de farces, mousselines y la cocción precisa. 
            .tarjeta.tarjeta--blanca.p-4.pt-5
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img(src='@/assets/curso/tema1/9.svg' alt='')
              p.text-center.mb-0 #[strong Ensaladas y aderezos]: crea ensaladas simples y compuestas, así como una amplia gama de vinagretas, mayonesas y otras salsas frías. 
            .tarjeta.tarjeta--blanca.p-4.pt-5
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img(src='@/assets/curso/tema1/10.svg' alt='')
              p.text-center.mb-0 #[strong Canapés y sándwiches]: para cócteles, eventos y servicios de catering, el Garde Manger es el responsable del montaje estético y eficiente de estas preparaciones. 
            .tarjeta.tarjeta--blanca.p-4.pt-5
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img(src='@/assets/curso/tema1/11.svg' alt='')
              p.text-center.mb-0 #[strong Decoración y emplatado]: su labor final es presentar los platos con un alto estándar estético, cuidando la armonía de colores, texturas y alturas. 
            .tarjeta.tarjeta--blanca.p-4.pt-5
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img(src='@/assets/curso/tema1/12.svg' alt='')
              p.text-center.mb-0 #[strong Control de la cadena de frío]: es el guardián de las temperaturas seguras, vigilando que todos los productos perecederos se mantengan fuera de la "zona de peligro".  

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Jerarquía de la brigada de cocina con enfoque en el #[em Garde Manger] 
        img.mb-5.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/fig-mob.svg", alt="La figura representa la estructura organizativa de una brigada de cocina profesional. La información se distribuye desde los niveles de mayor responsabilidad y coordinación hacia áreas especializadas y funciones operativas, mostrando mediante conexiones la relación de autoridad y apoyo entre los integrantes. La composición permite comprender cómo se distribuyen las responsabilidades y cómo se articulan diferentes especialidades para facilitar el funcionamiento coordinado de la cocina.")
        img.mb-5.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/fig.svg", alt="La figura representa la estructura organizativa de una brigada de cocina profesional. La información se distribuye desde los niveles de mayor responsabilidad y coordinación hacia áreas especializadas y funciones operativas, mostrando mediante conexiones la relación de autoridad y apoyo entre los integrantes. La composición permite comprender cómo se distribuyen las responsabilidades y cómo se articulan diferentes especialidades para facilitar el funcionamiento coordinado de la cocina.")
        figcaption Nota. Adaptado del Manual de Cocina Fría (s.f.) y Ramos Velasco (2023).

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3	Higiene, cadena de frío y seguridad en cocina fría 















</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
