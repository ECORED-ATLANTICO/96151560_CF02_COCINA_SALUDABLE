<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Dominio de cortes en verduras y frutas

    .bg-img.bg-img--terciario.rounded-4.p-4.overflow-hidden.mb-4.mb-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-1.d-none.d-lg-block.px-1
            figure
              img.imgw-64(src="@/assets/curso/tema2/1.svg", alt="")
          .col-lg-11
            p.mb-0 El dominio del cuchillo es la firma del profesional. En la cocina fría, un corte preciso, uniforme y estético no es solo una cuestión de presentación; determina la textura, la integración de sabores, la cocción (cuando la hay) y la percepción de calidad del plato. Este capítulo enseña al aprendiz la técnica y la aplicación de los cortes más importantes, desde los básicos hasta los especializados.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1	Clasificación de los cortes básicos (juliana, #[em brunoise], bastón, macedonia, rodajas)

    .fullwidth-bg.fullwidth-bg--1

    p.mb-4.mb-lg-5.z-2 Los cortes básicos son la base de toda la cocina. Sus dimensiones están estandarizadas a nivel internacional para asegurar uniformidad y facilitar la comunicación entre profesionales.

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 3.
      span Cortes básicos en cocina: dimensiones, técnica y usos
    .tabla-a.color-secundario.tabla-a--text-left.mb-5.z-2
      table
        thead
          tr(style="background-color: #FFFEF0")
            th(colspan="2") Nombre del corte 
            th(colspan="2") Dimensiones (largo x ancho x alto) 
            th(colspan="3") Técnica de ejecución 
            th(colspan="3") Usos principales en cocina fría 
        tbody
          tr
            td(colspan="2") Juliana
            td(colspan="2") 3-4 cm x 2 mm x 2 mm
            td(colspan="3") Corte en láminas finas, luego en tiras finas.
            td(colspan="3") Ensaladas verdes, guarniciones de sándwiches, salteados.
          tr
            td(colspan="2") Brunoise
            td(colspan="2") 2-3 mm x 2-3 mm x 2-3 mm
            td(colspan="3") Picar finamente la juliana.
            td(colspan="3") Salsas frías, rellenos de tartaletas, guarniciones de precisión.
          tr
            td(colspan="2") Bastón
            td(colspan="2") 5-6 cm x 7 mm x 7 mm
            td(colspan="3") Corte en rebanadas gruesas, luego en bastones.
            td(colspan="3") Verduras para servir como guarnición, vegetales crudos con #[em dip].
          tr
            td(colspan="2") Macedonia
            td(colspan="2") 5-8 mm x 5-8 mm x 5-8 mm
            td(colspan="3") Corte en láminas de 5-8 mm, luego en tiras, luego en dados.
            td(colspan="3") Ensaladas de verduras (ensalada rusa), ensaladas de frutas.
          tr
            td(colspan="2") Rodajas (#[em Rondelle])
            td(colspan="2") 2-5 mm de grosor
            td(colspan="3") Cortes perpendiculares al eje del vegetal.
            td(colspan="3") Zanahoria, pepino, calabacín para ensaladas o encurtidos.

    p.mb-4.mb-lg-5.z-2 Una vez reconocidas las características y aplicaciones de los diferentes cortes, resulta útil visualizar su forma, tamaño y proporción para facilitar su identificación y correcta ejecución durante la preparación de los alimentos. A continuación, se presenta gráficamente algunos de los cortes más utilizados en frutas y verduras. 


    .row.justify-content-center.align-items-stretch.z-2
      .col-10.col-sm-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .bg-secundario-s5.p-4.rounded-4.h-100
          figure
            img.imgw-100.mb-3(src="@/assets/curso/tema2/2.png", alt="")
          h5.text-center Juliana
          p.text-center.mb-0 Tiras finas (3-4 cm x 2 mm). Como fósforos.
      .col-10.col-sm-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .bg-secundario-s5.p-4.rounded-4.h-100
          figure
            img.imgw-100.mb-3(src="@/assets/curso/tema2/3.png", alt="")
          h5.text-center #[em Brunoise] 
          p.text-center.mb-0 Dados muy pequeños (2-3 mm). Se pica a partir de la juliana. 
      .col-10.col-sm-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .bg-secundario-s5.p-4.rounded-4.h-100
          figure
            img.imgw-100.mb-3(src="@/assets/curso/tema2/4.png", alt="")
          h5.text-center Bastón
          p.text-center.mb-0 Tiras gruesas (5-6 cm x 7 mm). Perfecto para vegetales crudos.
      .col-10.col-sm-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .bg-secundario-s5.p-4.rounded-4.h-100
          figure
            img.imgw-100.mb-3(src="@/assets/curso/tema2/5.png", alt="")
          h5.text-center Macedonia
          p.text-center.mb-0 Dados medianos (5-8 mm). Para ensaladas de papa o frutas. 
      .col-10.col-sm-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .bg-secundario-s5.p-4.rounded-4.h-100
          figure
            img.imgw-100.mb-3(src="@/assets/curso/tema2/6.png", alt="")
          h5.text-center Rodajas (#[em Rondelle])
          p.text-center.mb-0 Discos circulares de grosor uniforme (2-5 mm).

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2	Cortes especializados (#[em chiffonade], #[em tourné], #[em concassé], chips, paisana)

    p.mb-4.mb-lg-5.z-2 Además de los básicos, existen cortes para aplicaciones específicas que requieren una técnica más depurada o un conocimiento particular del ingrediente: 

    .row.justify-content-center.align-items-center
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/7.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta color-primario")
          div(titulo="<em>Chiffonade</em>")
            .me-lg-5
              p Enrollar las hojas de hierbas o verduras (albahaca, espinaca, lechuga) sobre sí mismas y cortarlas en tiras muy finas.
              p #[strong Aplicación en cocina fría]: decoración de platos, ensaladas, salsas frías (pesto), aderezos.
              p #[strong Herramienta principal]: cuchillo chef bien afilado.
          div(titulo="<em>Tourné</em>")
            .me-lg-5
              p Corte decorativo en forma de barril o de siete caras que se realiza con el cuchillo puntilla. Requiere práctica y destreza. 
              p #[strong Aplicación en cocina fría]: guarnición de lujo para buffets, vegetales en escabeche, presentaciones de alta cocina. 
              p #[strong Herramienta principal]: cuchillo puntilla. 
          div(titulo="<em>Concassé</em>")
            .me-lg-5
              p Técnica específica para tomate: escaldar, pelar, despepitar y cortar la pulpa en cubos pequeños (brunoise). 
              p #[strong Aplicación en cocina fría]: base para salsas frías (salsa de tomate fría), guarnición para ensaladas, ceviches, tartaletas. 
              p #[strong Herramienta principal]: Cuchillo chef, olla para escaldar, bowl con hielo. 
          div(titulo="Chips")
            .me-lg-5
              p Láminas muy finas de vegetales (papa, betabel, zanahoria, camote, plátano) obtenidas con mandolina, que luego se hornean, deshidratan o fríen. 
              p #[strong Aplicación en cocina fría]: decoración crujiente para ensaladas, cremas frías, patés y terrinas. Aporta textura y color. 
              p #[strong Herramienta principal]: mandolina, horno o deshidratador. 
          div(titulo="Paisana")
            .me-lg-5
              p Corte rectangular de aproximadamente 1 cm x 1 cm x 0.5 cm (largo x ancho x grosor). 
              p #[strong Aplicación en cocina fría]: Guarniciones para sopas frías, ensaladas rústicas, potajes. 
              p #[strong Herramienta principal]: cuchillo chef. 

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3	Aplicación práctica de los cortes según el tipo de preparación

    p.mb-4.mb-lg-5.z-2 La elección del corte no es azarosa; cada preparación exige un corte específico que optimiza su sabor, textura y presentación. Un error en el corte puede arruinar un plato. 

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 4.
      span Tipos de preparación
    .tabla-a.color-secundario.tabla-a--text-left.mb-5.z-2
      table
        thead
          tr(style="background-color: #FFFEF0")
            th Preparación en cocina fría 
            th Corte recomendado 
            th(colspan="2") Razón técnica 
        tbody
          tr
            td Ensalada de atún 
            td Macedonia (5-8 mm)
            td(colspan="2") Los vegetales (apio, zanahoria, pepinillos) deben ser del tamaño de las proteínas desmenuzadas para combinar en cada bocado. 
          tr
            td Ceviche de pescado
            td Cubos (1-1.5 cm)
            td(colspan="2") El pescado se "cocina" en el ácido cítrico. Cortes uniformes garantizan una "cocción" pareja y una textura agradable. 
          tr
            td Canapés
            td #[em Brunoise] (2-3 mm)
            td(colspan="2") Los ingredientes de cobertura (vegetales, huevo, atún) deben ser muy pequeños y uniformes para que cada pequeño bocado sea perfecto y estético. 
          tr
            td Ensalada #[em Waldorf]
            td Macedonia o Juliana (manzana y apio)
            td(colspan="2") Los cortes en tiras o dados mantienen la textura crujiente de los ingredientes. La juliana es más elegante. 
          tr
            td #[em Sándwich] club
            td Rodajas finas o Juliana
            td(colspan="2") El pepino en rodajas finísimas y la lechuga en juliana facilitan el armado y la mordida del sándwich, evitando que los ingredientes se salgan. 
          tr
            td Terrina o #[em Paté]
            td #[em Brunoise] (para ingredientes añadidos como pistachos o pimientos)
            td(colspan="2") Los ingredientes añadidos deben ser pequeños para no romper la textura homogénea de la #[em farce] y distribuirse uniformemente. 
          tr
            td Sopa fría (gazpacho)
            td #[em Brunoise] (para las guarniciones)
            td(colspan="2") Las guarniciones del gazpacho (pepino, pimiento, cebolla) se sirven en #[em brunoise] para que floten en el líquido y aporten textura en cada cucharada. 

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .bg-audio.rounded-4.px-4.py-4.py-lg-0
          .row.align-items-center.justify-content-center
            .col-sm-8.col-lg-8
              p A continuación, se invita a ir al siguiente podcast: 
              TarjetaAudio.mb-3.color-terciario(
                texto="¿Qué valor ofrezco al cliente? La propuesta de valor como base del emprendimiento"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")
            .col-8.col-sm-4
              figure
                img.imgw-281(src="@/assets/curso/common/mic.png", alt="")



















              

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
