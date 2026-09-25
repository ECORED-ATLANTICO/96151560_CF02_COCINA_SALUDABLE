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

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/14.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La cocina fría es especialmente vulnerable a la contaminación por microorganismos patógenos, ya que muchas de sus preparaciones (ensaladas, ceviches, sándwiches, #[em patés]) no reciben un tratamiento térmico final que elimine las bacterias. Por lo tanto, el cumplimiento de las Buenas Prácticas de Manufactura (BPM) y el control riguroso de la cadena de frío son sus principios de seguridad más importantes.
        .bg-img.bg-img--terciario.rounded-4.p-4
          p.mb-0 La cadena de frío es el sistema que garantiza que los alimentos perecederos se mantengan a una temperatura segura y constante (generalmente entre 0°C y 4°C para refrigeración, y -18°C o menos para congelación) desde su recepción hasta su consumo. Su ruptura es una de las principales causas de Enfermedades Transmitidas por Alimentos (ETA).  

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 1.
      span Aplicación práctica de la cadena de frío en cocina fría
    .tabla-a.color-secundario.tabla-a--text-left.mb-5.z-2
      table
        thead
          tr(style="background-color: #FFFEF0")
            th Etapa
            th(colspan="2") Acción del Garde Manger 
            th(colspan="2") Por qué es crítico 
        tbody
          tr
            td Recepción 
            td(colspan="2") Verificar la temperatura de los productos con termómetro. Carnes, pescados y lácteos deben llegar a ≤ 4°C. Los congelados a ≤ -18°C. 
            td(colspan="2") Un producto recibido a temperatura inadecuada ya ha iniciado su deterioro y proliferación bacteriana. 
          tr
            td Almacenamiento 
            td(colspan="2") Almacenar inmediatamente en neveras o congeladores. Organizar por tipo: alimentos cocidos arriba, crudos abajo para evitar contaminación cruzada. 
            td(colspan="2") Mantener la temperatura estable (evitar abrir la puerta innecesariamente) es vital para ralentizar el crecimiento bacteriano. 
          tr
            td Preparación 
            td(colspan="2") Trabajar con lotes pequeños, no dejando los ingredientes fuera de refrigeración por más de 30 minutos. Usar recipientes con hielo para mantener frías las salsas. 
            td(colspan="2") El tiempo fuera de frío es acumulativo. Cada minuto que un alimento pasa en la "zona de peligro" (5°C - 60°C) aumenta el riesgo de ETA. 
          tr
            td Servicio 
            td(colspan="2") Mantener ensaladas, salsas y patés en fuentes de baño maría con hielo o en refrigeradores de mostrador. 
            td(colspan="2") El alimento debe permanecer fuera de la zona de peligro hasta el momento de ser consumido. 

    p.mb-4 Después de reconocer los aspectos relacionados con la aplicación práctica de la cadena de frío en cocina fría, resulta importante comprender cómo se articulan las diferentes etapas para conservar adecuadamente los alimentos y preparaciones.  

    .bg-primario-p10.mb-4
      .row.justify-content-center.align-items-center
        .col-auto.col-lg-5
          figure
            img(src='@/assets/curso/tema1/15.png', alt='')
        .col-lg
          .p-4
            p.mb-0 El control continuo de la temperatura, desde la recepción y el almacenamiento hasta la preparación y el servicio, contribuye a preservar su calidad e inocuidad y a prevenir riesgos asociados con una manipulación inadecuada. A continuación, se representa de manera secuencial este proceso y los controles que deben mantenerse durante su desarrollo: 

    .row.justify-content-center
      .col-sm-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/16.png", alt="alt")
          .crd_hover_txt--body.p-4
            h4.mb-3 Recepción  
            p.mb-0 Verifique temperatura (≤ 4°C) y aspecto de los productos. Rechace si hay ruptura de cadena.    
      .col-sm-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/17.png", alt="alt")
          .crd_hover_txt--body.p-4
            h4.mb-3 Almacenamiento 
            p.mb-0 Guarde los productos en nevera o congelador de inmediato. Use el método PEPS. 
      .col-sm-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/18.png", alt="alt")
          .crd_hover_txt--body.p-4
            h4.mb-3 Preparación controlada 
            p.mb-0 No descongele a temperatura ambiente. Trabaje con porciones pequeñas. Refrigere si la preparación se demora. 
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/19.png", alt="alt")
          .crd_hover_txt--body.p-4
            h4.mb-3 Servicio con baño de hielo 
            p.mb-0 Use baños de hielo para mantener las preparaciones frías durante el servicio. Nunca mezcle sobras con preparaciones frescas. 

    p.mb-4 Además de la cadena de frío, el #[em Garde Manger] debe aplicar rigurosamente:

    .row.align-items-stretch
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img.imgw-84(src='@/assets/curso/tema1/20.svg' alt='')
          .tarjeta.bg-primario-p10
            .p-4
              p.mb-0 #[strong Limpieza y desinfección (tren de lavado de 5 pasos)]: especialmente importante al cambiar de tipo de alimento (ej. después de cortar pollo crudo y antes de tocar vegetales para ensalada).
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img.imgw-84(src='@/assets/curso/tema1/21.svg' alt='')
          .tarjeta.bg-primario-p10
            .p-4
              p.mb-0 #[strong Prevención de contaminación cruzada]: uso de tablas de colores (verde para vegetales, rojo para carnes, azul para pescados) y cuchillos diferenciados.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img.imgw-84(src='@/assets/curso/tema1/22.svg' alt='')
          .tarjeta.bg-primario-p10
            .p-4
              p.mb-0 #[strong Higiene personal]: lavado de manos frecuente (5 momentos), uniforme limpio, uñas cortas, cabello recogido. Un manipulador enfermo no debe manipular alimentos.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4	El flujo de trabajo en la cocina fría: #[em mise en place] y organización del puesto 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La eficiencia en una cocina profesional depende de una planificación meticulosa. El término francés mise en place significa "poner en su lugar" y es la práctica fundamental para cualquier cocinero, pero especialmente para el Garde Manger, donde los tiempos de servicio son muy rápidos y los pedidos pueden ser numerosos y variados. Una correcta mise en place para cocina fría se divide en dos categorías (Jiménez Cadena, 2024; Ramos Velasco, 2023):

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-sm-10.col-lg-6.mb-4.mb-lg-0
        .bg-img.bg-img--sqrt.rounded-4.p-4.mb-3.h-100
          .row.justify-content-center.align-items-center
            .col-4.col-lg-3.col-xl-2
              figure
                img.mb-4.mg-xl-0(src='@/assets/curso/tema1/24.svg', alt='')
            .col-xl-10
              h5 #[em Mise en place] constante
              p.mb-0 Es la preparación base que se realiza con anticipación, independientemente del menú del día. Incluye:
              ul.lista-ul.mb-0
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  span Lavar, desinfectar y secar las lechugas y hojas verdes.
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  span Tener preparados cortes básicos (juliana de zanahoria, brunoise de cebolla, macedonia de vegetales).
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  span Elaborar salsas madre frías (mayonesa, vinagreta base, salsa golf, salsa tártara).
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  span Tener listos fondos, caldos y reducciones.	 
      .col-sm-10.col-lg-6
        .bg-img.bg-img--sqrc.rounded-4.p-4.mb-3.h-100
          .row.justify-content-center.align-items-center
            .col-4.col-lg-3.col-xl-2
              figure
                img.mb-4.mg-xl-0(src='@/assets/curso/tema1/25.svg', alt='')
            .col-xl-10
              h5 #[em Mise en place] variable
              p.mb-0 Es la preparación específica para el menú del día, basada en la rotación de inventarios y los pedidos. Incluye:
              ul.lista-ul.mb-0
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  span Cortar los vegetales específicos de las ensaladas del día (ej. aguacate, mango, pepino).
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  span Marinar y cortar el pescado para el ceviche de turno.
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  span Preparar las guarniciones especiales (chips de betabel, crutones de pan integral, semillas tostadas).
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  span Montar los canapés o sándwiches según los pedidos.	 

    p.mb-4.mb-lg-5  La organización del puesto de trabajo en la estación del Garde Manger es fundamental para desarrollar las preparaciones de cocina fría de manera ordenada, eficiente y segura. Para lograrlo, la estación puede estructurarse en áreas funcionales destinadas a operaciones específicas, las cuales son:  

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 2.
      span Organización del puesto de trabajo (estación del #[em Garde Manger])
    .tabla-a.color-secundario.tabla-a--text-left.mb-5.z-2
      table
        thead
          tr(style="background-color: #FFFEF0")
            th(colspan="2") Zona de la estación 
            th(colspan="3") Elementos 
            th(colspan="2") Función 
        tbody
          tr
            td(colspan="2") Zona de corte 
            td(colspan="3") Tabla de picar (verde para vegetales), juego de cuchillos (chef, puntilla, fileteador), mandolina, afilador (chaira). 
            td(colspan="2") Realizar todos los cortes de vegetales, frutas y proteínas. 
          tr
            td(colspan="2") Zona de preparación de salsas 
            td(colspan="3") Batidora de mano o procesador de alimentos, #[em bowls], cucharas, espátulas, ingredientes para salsas (aceite, vinagre, yemas, hierbas). 
            td(colspan="2") Emulsionar vinagretas, mayonesas y otras salsas frías. 
          tr
            td(colspan="2") Zona de montaje 
            td(colspan="3") Mesón limpio, pinzas, cucharas para servir, aros de emplatar, mangas pasteleras, fuente para baño de hielo. 
            td(colspan="2") Ensamblar ensaladas, emplatar patés y terrinas, decorar platos. 
          tr
            td(colspan="2") Zona de almacenamiento temporal 
            td(colspan="3") Recipientes herméticos etiquetados con fecha, papel #[em film], bandejas gastronorm. 
            td(colspan="2") Guardar los ingredientes ya cortados y las salsas preparadas en refrigeración. 

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .bg-audio.rounded-4.px-4.py-4.py-lg-0
          .row.align-items-center.justify-content-center
            .col-sm-8.col-lg-8
              p A continuación, se invita a ir al siguiente podcast: 
              TarjetaAudio.mb-3.color-terciario(
                texto="El Garde Manger organización mise en place y control de la cadena de frío en la cocina fría. "
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")
            .col-8.col-sm-4
              figure
                img.imgw-281(src="@/assets/curso/common/mic.png", alt="")
 
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
