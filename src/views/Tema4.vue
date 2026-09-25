<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Preparaciones especializadas de cocina fría
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        .bg-img.bg-img--terciario.p-4.rounded-4.mb-3
          p.mb-0 Las preparaciones especializadas de cocina fría reúnen técnicas que permiten transformar y combinar ingredientes para obtener productos con características particulares de sabor, textura, conservación y presentación. Su elaboración exige precisión en los procedimientos, adecuada manipulación de las materias primas, control de temperatura e inocuidad, además de criterios estéticos que contribuyan a lograr preparaciones equilibradas, atractivas y acordes con los principios de la cocina saludable.
        p.mb-0 Más allá de las ensaladas, la cocina fría alberga un mundo de preparaciones que van desde el uso del ácido como agente "cocción" hasta la elaboración de patés, terrinas, mousses y canapés. Estas preparaciones son el sello distintivo de un #[em Garde Manger] experto. 
    
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1	Ceviches y escabeches: la acidificación como método de cocción y conservación 

    img(data-aos="fade-up")(src="@/assets/curso/tema4/2.png", alt="")   
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 El ceviche es quizás el plato más emblemático de la cocina fría en Latinoamérica. Se basa en el principio de la acidificación: las proteínas del pescado o marisco crudo se desnaturalizan al entrar en contacto con el ácido cítrico del jugo de limón o naranja agria, adquiriendo una textura firme y opaca similar a la cocción por calor (Jiménez Cadena, 2024).
    
    p.mb-4.mb-lg-5.z-2 A continuación, se presenta de manera secuencial las etapas básicas para su preparación:

    .row.justify-content-center.align-items-center
      .col-xl-9
        TabsA.color-secundario.custom-tabs.mb-4.mb-lg-0
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Selección y corte ")
            p.mb-0 Seleccionar pescado de excelente frescura y calidad, (corvina, robalo, lenguado) mantenerlo refrigerado y retirar piel, espinas u otras partes no deseadas. Realizar cortes uniformes entre 1 y 1.5 cm que favorezcan una textura agradable, una distribución homogénea de los ingredientes y una presentación adecuada. 
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Acidificación")
            p.mb-0 Incorporar jugo de limón al pescado cortado y controlar cuidadosamente el tiempo de contacto (entre 5 y 10 minutos), para obtener la textura y acidez deseadas. La acidificación modifica sensorialmente el pescado, pero no sustituye las medidas de inocuidad ni una cocción térmica. 
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Sabor y presentación")
            p.mb-0 La expansión de la refrigeración y congelación transformó la conservación y producción de alimentos. La cocina fría amplió su repertorio e incorporó mayores controles de temperatura, higiene, almacenamiento e inocuidad.
      .col-sm-6.col-lg-3.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/3.png", alt="" data-aos="zoom-in-down")

    p.mb-4.mb-lg-5.z-2 Para obtener un ceviche de calidad es necesario considerar varios aspectos que influyen directamente en su inocuidad, textura, sabor y presentación final. La elección adecuada de la materia prima, el control del proceso de preparación y la armonía entre los ingredientes permiten conservar la identidad de esta elaboración y lograr un resultado fresco y equilibrado. A continuación, se presentan los principales puntos clave que deben tenerse en cuenta durante su elaboración.

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 8.
      span Puntos clave para un ceviche seguro y delicioso
    .tabla-a.color-secundario.tabla-a--text-left.z-2
      table
        thead
          tr(style="background-color: #FFFEF0")
            th Factor crítico 
            th(colspan="2") Recomendación técnica 
            th(colspan="2") Por qué es importante 
        tbody
          tr
            td Frescura del pescado 
            td(colspan="2") Usar pescado de la máxima calidad, con cadena de frío impecable. El pescado debe oler a mar, tener ojos brillantes y carne firme. 
            td(colspan="2") El ácido no mata todas las bacterias. Si el pescado no es fresco, el ceviche será un riesgo para la salud.
          tr
            td Tipo de pescado 
            td(colspan="2") Pescados blancos de carne firme: corvina, robalo, lenguado, mero, pez sierra, atún. 
            td(colspan="2") Las carnes firmes mantienen su textura durante la acidificación y no se deshacen.
          tr
            td Tiempo de maceración 
            td(colspan="2") De 5 a 15 minutos, dependiendo del tamaño del corte (cubos de 1-1.5 cm). 
            td(colspan="2") Un tiempo excesivo sobre cocina el pescado, volviéndolo gomoso y seco.
          tr
            td Equilibrio de sabores 
            td(colspan="2") El ácido se equilibra con el dulzor de la cebolla morada, el picante del ají, el fresco del cilantro y la cremosidad del maíz o la yuca. 
            td(colspan="2") Un buen ceviche es una sinfonía de sabores: ácido, dulce, picante, salado y umami. 
          tr
            td La "Leche de tigre" 
            td(colspan="2") Es el jugo resultante de la maceración del pescado con limón, cebolla, ají, cilantro y otros ingredientes. Se sirve aparte o como parte del ceviche. 
            td(colspan="2") Es la esencia del ceviche, rica en sabor y considerada un afrodisíaco. 

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2	Patés, terrinas y galantinas: la #[em farce] y la #[em mousseline] 

    p.mb-4.mb-lg-5.z-2 Estas preparaciones representan la haute cuisine de la cocina fría. Son elaboraciones que requieren técnica, paciencia, precisión y una presentación impecable. Son el patrimonio del Garde Manger (Manual de Cocina Fría, s.f.; del Valle Araujo, 2012). A continuación, se muestran sus características más importantes 

    .bg-carousel.p-4.z-2.rounded-4.mb-4
      SlyderA(tipo="b")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-7.mb-4.mb-lg-0
              h5 Paté (en #[em croûte]):
              p.mb-0 Es una mezcla de carnes picadas (#[em farce]), generalmente de hígado y cerdo, condimentada con especias (especias para paté: pimienta, paprika, tomillo, laurel, clavo, nuez moscada), envuelta en una masa (pasta quebrada o pasta para paté) y horneada. Se sirve frío. Su origen se remonta a los romanos. 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/4.png', alt='')
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h5 Terrina
              p.mb-0 Es conceptualmente similar al paté, pero se cocina sin pasta en un molde de barro, porcelana o acero inoxidable llamado "terrina". La terrina con farce se cocina suavemente al baño maría, se prensa con un peso y se sirve fría en rebanadas. Su nombre proviene del material del molde original (terracota). 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/5.png', alt='')
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h5 Galantina
              p.mb-0 Es una preparación donde una pieza de ave (pollo, pato, pavo) o pescado se deshuesa por completo, se rellena con una farce y otros ingredientes (pistachos, jamón, trufas, frutas cristalizadas), se enrolla y se cocina (generalmente se pocha). Se sirve fría, a menudo decorada con vegetales en gelatina (#[em aspic]). El término proviene del francés antiguo #[em "géline"] (gallina).  
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/6.png', alt='')
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h5 #[em La farce] (o relleno) 
              p.mb-0 Es el corazón de estas preparaciones. Es una mezcla de proteínas (carne magra, grasa, hígado), huevos, crema de leche y especias, procesada hasta obtener una textura fina y homogénea 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/7.png', alt='')
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h5 #[em La mousseline] 
              p.mb-0 Es un tipo de farce de textura muy fina y aireada, lograda al procesar la carne con crema de leche y claras de huevo. La proporción ideal para una #[em mousseline] es de partes iguales de proteína (carne, pescado o ave) y crema de leche (Manual de Cocina Fría, s.f.). 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/8.png', alt='')

    .bg-img.p-4.z-2.rounded-4
      p.mb-0 Cuidados en la preparación de una #[em mousseline]:
        ul.checklist.ms-3
          li
            span.ps-2 La carne debe estar bien fría (no superar los 14°C) para evitar que se corte la emulsión.
          li
            span.ps-2 Procesar la carne fría con los condimentos. Luego, tamizar para eliminar nervios y obtener una textura fina.
          li
            span.ps-2 Incorporar la crema de leche bien fría en forma de hilo, procesando solo hasta integrar. No sobreprocesar o se cortará la mezcla.
          li
            span.ps-2 La cocción de la mousseline debe ser suave (baño maría) y la temperatura interna no debe superar los 85°C. Temperaturas corazón: pollo 66°C, pescado 62°C, cerdo 74°C.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3	#[em Mousses]: elaboración, diferencias y aplicaciones

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El término #[em "mousse"] significa "espuma" en francés. En gastronomía, una mousse es una preparación ligera y aireada, que puede ser dulce o salada, fría o caliente. Su textura esponjosa se logra incorporando un elemento aireado (claras de huevo a punto de nieve, crema de leche batida, o una combinación de ambas) a una base saborizada. A menudo se añade gelatina (grenetina) para darle firmeza (del Valle Araujo, 2012; Manual de Cocina Fría, s.f.). 

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 9.
      span Puntos clave para un ceviche seguro y delicioso
    .tabla-a.color-secundario.tabla-a--text-left.z-2.mb-5
      table
        thead
          tr(style="background-color: #FFFEF0")
            th Factor crítico
            th(colspan="2") Recomendación técnica 
            th(colspan="2") Por qué es importante 
        tbody
          tr
            td Frescura del pescado 
            td(colspan="2") Usar pescado de la máxima calidad, con cadena de frío impecable. El pescado debe oler a mar, tener ojos brillantes y carne firme. 
            td(colspan="2") El ácido no mata todas las bacterias. Si el pescado no es fresco, el ceviche será un riesgo para la salud.
          tr
            td Tipo de pescado 
            td(colspan="2") Pescados blancos de carne firme: corvina, robalo, lenguado, mero, pez sierra, atún. 
            td(colspan="2") Las carnes firmes mantienen su textura durante la acidificación y no se deshacen.
          tr
            td Tiempo de maceración 
            td(colspan="2") De 5 a 15 minutos, dependiendo del tamaño del corte (cubos de 1-1.5 cm). 
            td(colspan="2") Un tiempo excesivo sobre cocina el pescado, volviéndolo gomoso y seco. 
          tr
            td Equilibrio de sabores
            td(colspan="2") El ácido se equilibra con el dulzor de la cebolla morada, el picante del ají, el fresco del cilantro y la cremosidad del maíz o la yuca. 
            td(colspan="2") Un buen ceviche es una sinfonía de sabores: ácido, dulce, picante, salado y umami. 
          tr
            td La "Leche de tigre" 
            td(colspan="2") Es el jugo resultante de la maceración del pescado con limón, cebolla, ají, cilantro y otros ingredientes. Se sirve aparte o como parte del ceviche. 
            td(colspan="2") Es la esencia del ceviche, rica en sabor y considerada un afrodisíaco. 

    p.mb-4 Preparación de una #[em mousse] fría (estructura básica):
    .row.justify-content-center.align-items-stretch.z-2.mb-4.mb-lg-5
      .col-10.col-sm-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .bg-cards.p-4.px-xl-3.rounded-4.h-100
          figure
            img.imgw-100.mb-3(src="@/assets/curso/tema4/10.svg", alt="")
          p.mb-0.text-center #[strong Base saborizada:] procesar o licuar el ingrediente principal (ej. salmón ahumado, espárragos cocidos, chocolate derretido) con un poco de crema o líquido. 
      .col-10.col-sm-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .bg-cards.p-4.px-xl-3.rounded-4.h-100
          figure
            img.imgw-100.mb-3(src="@/assets/curso/tema4/11.svg", alt="")
          p.mb-0.text-center #[strong Gelatina:] hidratar la grenetina en agua fría y luego disolverla en la base caliente (si la base está fría, calentar una pequeña porción y disolver allí la gelatina). 
      .col-10.col-sm-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .bg-cards.p-4.px-xl-3.rounded-4.h-100
          figure
            img.imgw-100.mb-3(src="@/assets/curso/tema4/12.svg", alt="")
          p.mb-0.text-center #[strong Elemento aireado:] batir la crema de leche (muy fría) a punto de nieve o las claras de huevo a punto de nieve.
      .col-10.col-sm-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .bg-cards.p-4.px-xl-3.rounded-4.h-100
          figure
            img.imgw-100.mb-3(src="@/assets/curso/tema4/13.svg", alt="")
          p.mb-0.text-center #[strong Incorporación:] mezclar la gelatina disuelta con la base. Luego, incorporar el elemento aireado con movimientos envolventes (de abajo hacia arriba) para no perder el aire. 
      .col-10.col-sm-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .bg-cards.p-4.px-xl-3.rounded-4.h-100
          figure
            img.imgw-100.mb-3(src="@/assets/curso/tema4/14.svg", alt="")
          p.mb-0.text-center #[strong Refrigeración:] verter en moldes y refrigerar por al menos 4 horas hasta que cuaje. 

    .row.justify-content-center.align-items-center
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta color-primario")
          div(titulo="Base")
            .me-lg-5
              p Procesar el salmón ahumado hasta obtener una mezcla fina y homogénea. Incorporar los ingredientes de sabor y ajustar la sazón, procurando conservar las características propias del pescado y obtener una base adecuada para continuar la preparación. 
          div(titulo="Gelatina")
            .me-lg-5
              p Hidratar la gelatina según sus características y disolverla correctamente. Incorporarla a la base de salmón de manera gradual y uniforme, evitando la formación de grumos, para favorecer la estabilidad y consistencia del mousse durante la refrigeración. 
          div(titulo="Aireado")
            .me-lg-5
              p Batir la crema de leche fría hasta obtener una textura semimontada, ligera y estable, evitando exceder el batido. Este procedimiento incorpora aire y contribuye a proporcionar al mousse una consistencia suave, cremosa y agradable. 
          div(titulo="Incorporación")
            .me-lg-5
              p Integrar la crema semimontada con la base de salmón mediante movimientos suaves y envolventes. Realizar el procedimiento gradualmente para conservar el aire incorporado y conseguir una mezcla homogénea, ligera y con la consistencia característica del mousse. 
          div(titulo="Emplatado")
            .me-lg-5
              p Distribuir el mousse en recipientes, moldes o elementos de presentación y refrigerar hasta alcanzar la consistencia adecuada. Al servir, complementar con ingredientes que aporten contraste de color, sabor y textura, procurando una presentación limpia, equilibrada y atractiva. 

      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/15.png", alt="" data-aos="zoom-in-down")

      separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.4	Sándwiches, canapés y pasabocas: técnicas de montaje y conservación 

    .bg-primario-p10.mb-4
      .row.justify-content-center.align-items-center
        .col-auto.col-lg-5
          figure
            img(src='@/assets/curso/tema4/16.png', alt='')
        .col-lg
          .p-4
            p.mb-0 Los sándwiches, canapés y pasabocas constituyen preparaciones versátiles dentro de la cocina fría, cuya elaboración requiere aplicar criterios técnicos relacionados con la selección y combinación de ingredientes, el equilibrio de sabores, colores y texturas, así como el manejo adecuado de las porciones. Su preparación también demanda precisión durante el montaje, cuidado en la presentación y aplicación de condiciones apropiadas de conservación, con el propósito de mantener la frescura, calidad e inocuidad hasta el momento del servicio. Son ideales para menús de almuerzo, eventos, cócteles y bufets. La estética y la practicidad son clave (Manual de Cocina Fría, s.f.; del Valle Araujo, 2012). 

    .row.justify-content-center.mb-2
      .col-sm-10.col-lg-9.col-xl-6.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta.custom-1
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/17.png", alt="alt")
          .crd_hover_txt--body.p-4
            h4.mb-2.mb-sm-3 Sándwiches 
            p.mb-0 El origen del sándwich se atribuye a John Montagu, IV Conde de Sándwich (1718-1792), quien, para no interrumpir sus largas sesiones de juego de cartas, pidió que le sirvieran la carne entre dos rebanadas de pan. Hoy existen innumerables versiones: fríos (club sandwich, vegetariano), calientes a la plancha (croque-monsieur, hamburguesas) y abiertos (tostadas, #[em bruschetta]). 
      .col-sm-10.col-lg-9.col-xl-6.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta.custom-1
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/18.png", alt="alt")
          .crd_hover_txt--body.p-4
            h4.mb-2.mb-sm-3 Canapés
            p.mb-1 Son pequeñas bases (generalmente de pan, masa hojaldre, vegetales o galletas) cubiertas con un #[em topping] sabroso y decorativo. Su nombre proviene del francés "canapé", que significa "sofá", haciendo alusión a la base sobre la que se "sienta" el alimento. Son los reyes de los cócteles. 

    p.mb-4.mb-lg-5.z-2 Para elaborar un sándwich o canapé saludable es importante considerar criterios que permitan combinar adecuadamente el valor nutricional con las características sensoriales y la presentación. La selección de ingredientes frescos, el equilibrio entre sus componentes, el control de las porciones y la aplicación de buenas prácticas de manipulación contribuyen a obtener preparaciones atractivas, variadas y apropiadas para una alimentación saludable. A continuación, se presentan algunas claves que orientan su elaboración. 

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 10.
      span Claves para un buen sándwich o canapé saludable
    .tabla-a.color-secundario.tabla-a--text-left.z-2.mb-5
      table
        thead
          tr(style="background-color: #FFFEF0")
            th Componente 
            th(colspan="2") Recomendación para cocina saludable 
            th(colspan="2") Ejemplo 
        tbody
          tr
            td Pan / base 
            td(colspan="2") Usar pan integral, de centeno, de masa madre, o sin pan (usar vegetales como base). 
            td(colspan="2") Pan integral de espelta, pan de centeno, lechuga como base, rodajas de pepino. 
          tr
            td Proteína 
            td(colspan="2") Elegir proteínas magras, sin procesar o bajas en sodio. 
            td(colspan="2") Pechuga de pavo o pollo natural, atún al agua, sardinas, queso fresco, hummus. 
          tr
            td Vegetales 
            td(colspan="2") Incluir una variedad de vegetales frescos para aportar color, textura, fibra y nutrientes. 
            td(colspan="2") Lechuga, tomate, pepino, cebolla morada, aguacate, champiñones, pimientos asados.
          tr
            td Aderezo / salsa 
            td(colspan="2") Usar aderezos ligeros a base de yogur, mostaza, aguacate o hummus, en lugar de mayonesa comercial. 
            td(colspan="2") Mostaza de Dijon, yogur con hierbas, guacamole, hummus, pesto sin queso. 
          tr
            td Técnica de montaje 
            td(colspan="2") Para canapés fríos, montar sobre el base justo antes de servir. Para canapés calientes, montar y congelar, luego hornear. 
            td(colspan="2") Los canapés con base de masa se congelan para que no se humedezcan. Los canapés fríos se decoran al momento de servir. 

    .bg-img.p-4.z-2.rounded-4
      p.mb-0 #[strong #[em Croque-Monsieur y Croque-Madame]] son sándwiches calientes clásicos franceses.  
        ul.checklist.ms-3
          li
            span.ps-2 El #[em Croque-Monsieur] se compone de pan de molde, jamón, queso #[em Gruyère] o #[em Emmental], y una fina capa de salsa bechamel, gratinado al horno o a la plancha.  
          li
            span.ps-2 El #[em Croque-Madame] es idéntico, pero coronado con un huevo frito, cuya yema aporta cremosidad y contrasta con la textura crujiente del pan y el queso gratinado. Se sirve caliente, generalmente con la yema ligeramente líquida. 
 
    separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5	Bebidas frías: jugos, granizados, #[em smoothies] y malteadas saludables 

    p La coctelería sin alcohol (mocktails) y las bebidas de frutas son un complemento esencial de la cocina fría. La clave está en usar frutas frescas, endulzantes naturales y técnicas que preserven los nutrientes (del Valle Araujo, 2012; SENA, 2026). 
    p.mb-4 A continuación, se muestran los tipos de bebidas frías:  

    .row.justify-content-center.mb-2
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/19.png", alt="alt")
          .crd_hover_txt--body.p-4.pt-3
            h4.mb-2.mb-sm-3 Jugos naturales 
            p.mb-1 Bebida obtenida al licuar frutas y/o verduras con agua. Se puede colar o no. 
            p.mb-1 #[strong Tenica]: licuar y, opcionalmente, colar para eliminar la fibra (aunque es mejor conservarla). 
            p.mb-0 #[strong Ejemplo]: Jugo verde: espinaca, apio, pepino, manzana verde, limón y jengibre. 
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/20.png", alt="alt")
          .crd_hover_txt--body.p-4.pt-3
            h4.mb-2.mb-sm-3 Granizados o raspados 
            p.mb-1 Preparación semisólida de textura arenosa, hecha a base de jugo de fruta, agua y un endulzante. 
            p.mb-1 #[strong Tenica]: licuar frutas congeladas con un poco de agua o jugo natural. Evitar los azúcares refinados. 
            p.mb-0 #[strong Ejemplo]: granizado de frutos rojos con #[em stevia]. 
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/21.png", alt="alt")
          .crd_hover_txt--body.p-4.pt-3
            h4.mb-2.mb-sm-3 #[em Smoothies] o malteadas saludables 
            p.mb-1 Bebida densa, cremosa y nutritiva, hecha en licuadora de alta velocidad con frutas, verduras, lácteos o leches vegetales. No se cuela. 
            p.mb-1 #[strong Tenica]: licuar todos los ingredientes. La clave es la proporción de líquido y sólido. 
            p.mb-0 #[strong Ejemplo]: #[em smoothie bowl]: plátano congelado, espinaca, leche de almendras, semillas de chía, cubierto con granola y frutas frescas 


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
