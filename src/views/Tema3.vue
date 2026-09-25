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
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-7.mb-4.mb-lg-0
              h5 Base	
              p.mb-0 Sirve de "cama" o "lienzo" sobre el cual se construye la ensalada. Son hojas verdes (lechuga, espinaca, rúcula, radicchio, canónigos) que aportan volumen, textura crujiente y un sabor suave. También puede ser un ingrediente más sustancial como arroz, quinoa, pasta o una fruta a la que se le ha vaciado el interior (ej. un tomate, un aguacate o una piña).
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/2.png', alt='')
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h5 Cuerpo
              p.mb-0 Es el ingrediente principal que le da nombre y sustancia a la ensalada. Representa la parte más importante y el punto focal del plato. Puede ser una proteína (atún, pollo desmenuzado, camarones, salmón ahumado, queso), una legumbre (garbanzos, lentejas, frijoles) o una verdura predominante (ensalada de papa, de zanahoria). 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/3.png', alt='')
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h5 Aderezo 
              p.mb-0 Es el aliño que humedece, une y da sabor a todos los ingredientes. Aporta acidez, grasa, cremosidad, dulzor o picante, según el caso. Debe complementar y realzar el sabor del cuerpo, nunca dominarlo ni ocultarlo. 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/4.png', alt='')
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h5 Guarnición (o adorno)
              p.mb-0 Son los elementos decorativos y de contraste que añaden color, textura crujiente, sabor extra o altura al plato. Se colocan estratégicamente sobre el cuerpo o alrededor de él. Ejemplos: picatostes, frutos secos, semillas, hierbas frescas, rodajas de huevo duro, aceitunas, tiras de pimiento, chips de vegetales. 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/5.png', alt='')

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Clasificación de salsas frías: vinagretas (inestables), mayonesas y derivados (estables) 

    p Las salsas frías desempeñan un papel importante en la cocina al complementar las preparaciones mediante el aporte de sabor, aroma, textura, humedad y contraste. Su elaboración requiere comprender el comportamiento de sus ingredientes, especialmente la forma en que se integran las fases líquidas y grasas.  

    .bg-img.bg-img--terciario.rounded-4.p-4.z-2.py-3.mb-5
      p.mb-0 El aderezo o salsa fría es el alma de la ensalada. Desde el punto de vista técnico, las salsas frías se clasifican en dos grandes grupos según su estabilidad (Manual de Cocina Fría, s.f.; del Valle Araujo, 2012). 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Vinagretas (emulsiones inestables) 

    .bg-primario-p10.mb-4
      .row.justify-content-center.align-items-center
        .col-auto.col-lg-5
          figure
            img(src='@/assets/curso/tema1/15.png', alt='')
        .col-lg
          .p-4
            p.mb-0 Son mezclas temporales de un aceite (generalmente 3 partes) y un vinagre o jugo de cítrico (1 parte). Se llaman inestables porque, si se dejan reposar, el aceite y el vinagre se separan. Para estabilizarlas temporalmente y lograr una emulsión más duradera, se añaden agentes emulsionantes como la mostaza, la miel, la pasta de tomate o las yemas de huevo (que la convertirían en mayonesa). Las vinagretas son la opción más ligera y saludable.

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 5.
      span Tipos de vinagretas y sus aplicaciones
    .tabla-a.color-secundario.tabla-a--text-left.mb-5.z-2
      table
        thead
          tr(style="background-color: #FFFEF0")
            th Tipo de vinagreta 
            th(colspan="2") Ingredientes clave 
            th Proporción 
            th Aplicación en cocina fría 
        tbody
          tr
            td Vinagreta clásica 
            td(colspan="2") Aceite de oliva, vinagre de vino, sal, pimienta. 
            td 3:1 
            td Ensaladas verdes simples. 
          tr
            td Vinagreta de mostaza y miel 
            td(colspan="2") Aceite de oliva, vinagre de manzana, mostaza de Dijon, miel. 
            td 3:1 
            td Ensaladas con pollo, queso de cabra o frutas. 
          tr
            td Vinagreta balsámica 
            td(colspan="2") Aceite de oliva, vinagre balsámico (preferiblemente reducido), ajo en polvo. 
            td 3:1 
            td Ensaladas con tomate, #[em mozzarella] y albahaca (Caprese). 
          tr
            td Vinagreta de frutos rojos 
            td(colspan="2") Aceite de oliva, vinagre de frambuesa o puré de frutos rojos, miel. 
            td 3:1 
            td Ensaladas con pato, frutos secos o quesos azules. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Emulsiones estables (mayonesas y derivados)

    p.mb-4 Son salsas cremosas y permanentes que se logran emulsionando una yema de huevo (que actúa como emulsionante natural) con aceite. La mayonesa es la salsa madre fría de la que derivan muchas otras salsas al añadirle diferentes ingredientes (del Valle Araujo, 2012).

    .row.justify-content-center.mb-4
      .col-sm-9.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/7.png", alt="alt")
          .crd_hover_txt--body.p-4.py-3
            h4.mb-3 Proporción clásica de la mayonesa:
            p.mb-0 1 yema de huevo por cada 150 cm³ de aceite. Esta proporción permite obtener una emulsión estable, cremosa y con la consistencia característica de la mayonesa. 
      .col-sm-9.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/8.png", alt="alt")
          .crd_hover_txt--body.p-4.py-3
            h4.mb-3 Técnica:
            p.mb-0 Se bate la yema con una pizca de sal y una gota de vinagre o limón. Luego, se añade el aceite en forma de hilo, sin dejar de batir, hasta lograr una emulsión firme y brillante. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Salsas derivadas de la mayonesa
    
    p.mb-4.mb-lg-5.z-2 Son preparaciones frías obtenidas al incorporar a una mayonesa base diferentes ingredientes, como hierbas, especias, vegetales, encurtidos o condimentos. Estas variaciones permiten modificar su sabor, aroma, color y textura, adaptándolas al acompañamiento de diferentes preparaciones. 

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-stretch.z-2
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .bg-cards.rounded-4.p-4.h-100
          figure
            img.imgw-105.mb-4(src="@/assets/curso/tema3/9.png", alt="alt")
          p.mb-4.text-center #[strong Salsa golf]: mayonesa + #[em kétchup] + un chorrito de coñac o jugo de naranja. Acompaña mariscos y cócteles de camarón. 
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .bg-cards.rounded-4.p-4.h-100
          figure
            img.imgw-105.mb-4(src="@/assets/curso/tema3/10.png", alt="alt")
          p.mb-4.text-center #[strong Salsa tártara]: mayonesa + pepinillos en vinagre picados en #[em brunoise] + alcaparras + cebollín + perejil + un toque de mostaza. Acompaña pescados fritos o mariscos.  
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .bg-cards.rounded-4.p-4.h-100
          figure
            img.imgw-105.mb-4(src="@/assets/curso/tema3/11.png", alt="alt")
          p.mb-4.text-center #[strong Salsa rosa]: mayonesa + salsa de tomate (#[em kétchup]) + un toque de pimienta y paprika. Acompaña ensaladas de frutas o cócteles de camarón. 
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .bg-cards.rounded-4.p-4.h-100
          figure
            img.imgw-105.mb-4(src="@/assets/curso/tema3/12.png", alt="alt")
          p.mb-4.text-center #[strong Salsa alioli]: mayonesa + ajo machacado + un poco de limón. Es una emulsión de aceite y ajo (originariamente no llevaba huevo, pero la versión moderna sí). Acompaña carnes, pescados, vegetales a la plancha o como #[em dip]. 

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Preparación de aderezos y vinagretas saludables 

    .bg-img.bg-img--terciario.rounded-4.p-4.overflow-hidden.mb-4.mb-lg-0
      .row.justify-content-center.align-items-center
        .col-lg-1.d-none.d-lg-block.px-1
          figure
            img.imgw-64(src="@/assets/curso/tema3/13.svg", alt="")
        .col-lg-11
          p.mb-0 En el marco de la cocina saludable, los aderezos tradicionales pueden modificarse para reducir calorías y grasas saturadas sin sacrificar el sabor. La clave está en usar ingredientes de calidad y técnicas que potencien los sabores naturales. 

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 6.
      span Aderezos saludables para ensaladas
    .tabla-a.color-secundario.tabla-a--text-left.z-2
      table
        thead
          tr(style="background-color: #FFFEF0")
            th(colspan="2") Nombre del aderezo 
            th(colspan="3") Ingredientes base 
            th(colspan="3") Técnica de preparación 
            th(colspan="2") Perfil de sabor 
        tbody
          tr
            td(colspan="2") Vinagreta de #[em yogur] y hierbas 
            td(colspan="3") #[em Yogur] natural griego (0% grasa), jugo de limón, eneldo fresco, perejil, ajo en polvo, sal y pimienta. 
            td(colspan="3") Mezclar todos los ingredientes en un #[em bowl] con un batidor de mano. Ajustar la acidez con el limón y la sal. 
            td(colspan="2") Cremoso, ácido, refrescante. 
          tr
            td(colspan="2") Aliño de aguacate y cilantro 
            td(colspan="3") Pulpa de aguacate maduro, jugo de limón, cilantro fresco, un diente de ajo, agua (para ajustar consistencia), sal. 
            td(colspan="3") Licuar todos los ingredientes hasta obtener una crema homogénea. 
            td(colspan="2") Cremoso, untuoso, con un toque herbáceo. 
          tr
            td(colspan="2") Vinagreta balsámica reducida 
            td(colspan="3") Vinagre balsámico (de buena calidad). 
            td(colspan="3") Poner el vinagre en una olla pequeña a fuego medio-bajo. Reducir hasta que adquiera una textura almibarada y se haya reducido a la mitad. No lleva aceite. 
            td(colspan="2") Dulce, ácido, con cuerpo. 
          tr
            td(colspan="2") Salsa de mostaza y miel ligera 
            td(colspan="3") Mostaza de Dijon, miel de abeja pura, vinagre de manzana, un chorrito de aceite de oliva (opcional), agua (para aligerar). 
            td(colspan="3") Emulsionar con un batidor de mano. Si queda muy espesa, añadir un poco de agua. El balance de lo dulce y lo ácido es perfecto. 
            td(colspan="2") Dulce, picante, ácido. 

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Ensaladas simples y compuestas: ejemplos y elaboración. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las ensaladas constituyen preparaciones fundamentales dentro de la cocina fría, debido a su versatilidad y a la posibilidad de combinar ingredientes frescos con diferentes sabores, colores, texturas y aportes nutricionales. Su elaboración requiere considerar la calidad y frescura de las materias primas, los cortes, la proporción de los ingredientes, el aderezo, la inocuidad y la presentación final. De acuerdo con su composición, pueden clasificarse principalmente en simples y compuestas. 

    .row.justify-content-center
      .col-sm-10.col-lg-9.col-xl-6.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/15.png", alt="alt")
          .crd_hover_txt--body.p-4.py-3
            h4.mb-2.mb-sm-3 Ensaladas simples 
            p.mb-1 Se elaboran con uno o pocos ingredientes principales, generalmente vegetales o frutas, procurando conservar sus características naturales. Pueden complementarse con un aderezo sencillo. 
            p.mb-0 #[strong Ejemplo]: ensalada de tomate y pepino; hojas verdes con vinagreta; zanahoria rallada con limón. 
      .col-sm-10.col-lg-9.col-xl-6.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/16.png", alt="alt")
          .crd_hover_txt--body.p-4.py-3
            h4.mb-2.mb-sm-3 Ensaladas compuestas 
            p.mb-1 Integran varios ingredientes de diferentes grupos alimentarios, permitiendo desarrollar preparaciones con mayor variedad de sabores, texturas y nutrientes. Pueden incorporar vegetales, frutas, cereales, leguminosas o proteínas. 
            p.mb-0 #[strong Ejemplo]: ensalada de pollo con vegetales; ensalada de garbanzos; ensalada de quinua con verduras; ensalada de atún y vegetales. 

    p.mb-4.mb-lg-5.z-2 Dentro de las ensaladas compuestas existen preparaciones clásicas que se distinguen por la combinación particular de ingredientes, aderezos, texturas y formas de presentación. Conocer estas elaboraciones permite comprender diferentes maneras de estructurar una ensalada y, a su vez, reconocer alternativas que pueden adaptarse a los principios de una alimentación saludable. A continuación, se presentan algunas de las ensaladas más representativas de la cocina internacional. 


    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 7.
      span Ejemplos de ensaladas compuestas internacionales
    .tabla-a.color-secundario.tabla-a--text-left.z-2
      table
        thead
          tr(style="background-color: #FFFEF0")
            th(colspan="2") Nombre de la ensalada 
            th(colspan="3") Ingredientes clave (cuerpo) 
            th(colspan="3") Aderezo típico 
            th(colspan="2") Guarnición 
        tbody
          tr
            td(colspan="2") Ensalada César 
            td(colspan="3") Lechuga romana, pechuga de pollo a la plancha (o crutones). 
            td(colspan="3") Salsa César (mayonesa, anchoas, ajo, queso parmesano, limón). 
            td(colspan="2") Queso parmesano en láminas, crutones de pan. 
          tr
            td(colspan="2") Ensalada #[em Waldorf]
            td(colspan="3") Manzana verde (Granny Smith), apio, nueces. 
            td(colspan="3") Mayonesa (o yogur griego para una versión ligera), jugo de limón. 
            td(colspan="2") Hojas de lechuga como base. 
          tr
            td(colspan="2") Ensalada #[em Nicoise] 
            td(colspan="3") Atún en agua (o fresco sellado), anchoas, huevo duro, aceitunas negras, ejotes (habichuelas), papa cocida. 
            td(colspan="3") Vinagreta de mostaza y vino tinto. 
            td(colspan="2") Alcaparras, anchoas fileteadas. 
          tr
            td(colspan="2") Ensalada #[em Griega] 
            td(colspan="3") Queso feta, tomate, pepino, cebolla morada, aceitunas negras (Kalamata). 
            td(colspan="3") Vinagreta de orégano y vinagre de vino tinto. 
            td(colspan="2") Orégano seco espolvoreado. 

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
