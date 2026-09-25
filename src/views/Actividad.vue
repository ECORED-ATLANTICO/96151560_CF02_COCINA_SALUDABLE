<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Domina la cocina fría: técnicas, preparaciones y emplatado.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la capacidad del aprendiz para reconocer los cortes adecuados según la preparación, identificar las partes de una ensalada, clasificar las salsas frías, distinguir las técnicas de preparación (ceviche, paté, terrina, <em>mousse</em>, canapé) y aplicar los principios del emplatado profesional.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'El término "<em>Garde Manger</em>" proviene del francés y su significado literal está relacionado con:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '"Guardar para comer", haciendo referencia a las antiguas despensas de los castillos europeos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '"Mesa fría", en alusión a la temperatura de servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '"Cocina del chef", en honor a Auguste Escoffier.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                '"Preparar con anticipación", similar al concepto de mise en place.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El <em>Garde Manger</em> era originalmente el área de almacenamiento de alimentos en los castillos, y hoy designa al chef encargado de la cocina fría.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'En la organización del trabajo en cocina fría, la "<em>mise en place</em>" se divide en dos categorías. ¿Cuál de las siguientes afirmaciones es correcta?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La mise en place constante incluye preparaciones como marinar el pescado para el ceviche o montar canapés para un evento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La mise en place variable son las preparaciones base que se realizan independientemente del menú del día.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La <em>mise en place</em> constante son las preparaciones base (lechugas lavadas, cortes básicos, salsas madre), mientras que la variable es la específica para el menú del día.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La mise en place constante y la variable son términos intercambiables que se refieren a la misma acción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La mise en place constante son las preparaciones base (lechugas lavadas, cortes básicos, salsas madre). La variable es la específica para el menú del día.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'La cadena de frío es un principio de seguridad fundamental en la cocina fría porque:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Muchas preparaciones no reciben un tratamiento térmico final que elimine las bacterias, por lo que la temperatura debe controlarse estrictamente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Es una norma estética que garantiza que los platos se vean más brillantes y atractivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ayuda a que las salsas emulsionen mejor y no se corten.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Es un requisito exclusivo para la conservación de lácteos, no para otros alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ensaladas, ceviches y sándwiches no se calientan antes de servir, por lo que la temperatura debe controlarse strictly / estrictamente desde la recepción hasta el servicio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la definición correcta de los cortes "juliana" y "<em>brunoise</em>"?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La juliana es un corte en dados muy pequeños de 2-3 mm, ideal para salsas y rellenos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La juliana son tiras finas (3-4 cm x 2 mm), mientras que la <em>brunoise</em> es el corte en dados pequeños de 2-3 mm.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La <em>brunoise</em> son tiras largas y finas, y la juliana es un corte en cubos medianos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ambos cortes son idénticos y se diferencian únicamente por el tipo de vegetal utilizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La juliana son tiras finas (3-4 cm x 2 mm). La <em>brunoise</em> es el corte en dados pequeños de 2-3 mm.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'La técnica de corte "<em>chiffonade</em>" se utiliza para:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obtener láminas muy finas de vegetales para hacer chips crujientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Realizar un corte decorativo en forma de barril con el cuchillo puntilla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Enrollar hojas de hierbas o verduras y cortarlas en tiras muy finas, ideal para decoración.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Pelar y despepitar tomates para obtener una pulpa en cubos pequeños.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La chiffonade es perfecta para albahaca, espinaca o lechuga, aportando una textura delicada y una presentación elegante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'La estructura de una ensalada se compone de cuatro elementos fundamentales. Estos son:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Salsa, proteína, carbohidratos y vegetales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Base (hojas verdes), cuerpo (proteína o ingrediente principal), aderezo (aliño) y guarnición (elementos decorativos y de contraste).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ingrediente principal, acompañante, salsa y decoración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Frutas, verduras, aderezo y crutones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Estos cuatro elementos (base, cuerpo, aderezo y guarnición) son fundamentales para construir una ensalada equilibrada y profesional.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'En la clasificación de las salsas frías, ¿cuál de las siguientes afirmaciones es correcta?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La vinagreta es una emulsión estable que no se separa con el reposo, a diferencia de la mayonesa que es inestable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tanto la vinagreta como la mayonesa son emulsiones estables y permanentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La vinagreta es inestable (se separa al reposar) y la mayonesa es una emulsión estable gracias a la yema de huevo como emulsionante.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La mayonesa es inestable y la vinagreta es estable gracias a la mostaza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Es al revés: la vinagreta es inestable (se separa al reposar) y la mayonesa es una emulsión estable gracias a la yema de huevo como emulsionante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'El ceviche es un plato emblemático de la cocina fría latinoamericana. Su técnica de preparación se basa en:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cocción del pescado a baja temperatura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La fermentación del pescado en salmuera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El ahumado en frío del pescado para darle sabor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El principio de acidificación, donde el ácido cítrico del limón desnaturaliza las proteínas del pescado, "cociéndolo" sin aplicar calor.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Esta es la ciencia detrás del ceviche. Por eso es fundamental usar pescado de la máxima frescura.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la diferencia principal entre una terrina y un paté?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La terrina se cocina en un molde de barro sin masa, a baño maría, mientras que el paté va envuelto en masa y se hornea.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La terrina es siempre dulce, mientras que el paté es salado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El paté se sirve caliente y la terrina fría.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La terrina utiliza pescado y el paté utiliza carne de cerdo exclusivamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La terrina no lleva masa y se cuece a baño maría; el paté (en croûte) va envuelto en masa y se hornea.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'En el contexto de la cocina fría, la "mousseline" y la "mousse" son dos preparaciones diferentes. ¿Cuál de las siguientes afirmaciones es correcta?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La mousseline es una preparación ligera y aireada que se sirve fría y no requiere cocción, elaborada con ingredientes cocidos y gelatina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La mousseline es una farce de textura fina con partes iguales de proteína cruda y crema, que requiere cocción, mientras que la mousse se sirve fría con gelatina.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La mousse y la mousseline son el mismo tipo de preparación y se elaboran de manera idéntica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La mousseline es un tipo de salsa y la mousse es un tipo de ensalada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La <em>mousseline</em> es una farce de textura fina con partes iguales de proteína cruda y crema, que requiere cocción. La <em>mousse</em> es la que se sirve fría con gelatina.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'El origen del sándwich se atribuye a:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un chef francés del siglo XIX que buscaba una comida rápida para los trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un inventor estadounidense que lo popularizó durante la gran depresión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'John Montagu, IV Conde de Sándwich, quien pidió su carne entre dos panes para no interrumpir su juego de cartas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Los antiguos romanos, quienes comían pan con carne en sus banquetes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Esta anécdota histórica es el origen del sándwich como lo conocemos hoy.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'En la elaboración de canapés fríos con base de masa, se recomienda una técnica específica para mantener su textura. Esta técnica consiste en:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bañarlos en mantequilla derretida para sellarlos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Servirlos inmediatamente después de armarlos para que no pierdan frescura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Hornearlos ligeramente antes de servir para que estén calientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Armarlos y congelarlos inmediatamente para que no se humedezcan, y decorarlos después de descongelar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Esta técnica evita que la masa absorba humedad del relleno y mantenga su textura crujiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'El principio de "balance" en el emplatado profesional se refiere a:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Usar muchos colores diferentes en el plato para que sea visualmente atractivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La distribución armónica de los componentes del plato, sin amontonarlos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Asegurar que todos los ingredientes tengan el mismo tamaño y forma.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Colocar el elemento principal en el centro exacto del plato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El balance se refiere a la distribución armónica de los componentes del plato. El color es otro principio independiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'La técnica de decoración conocida como "<em>swipe</em>" consiste en:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Colocar pequeños puntos de salsa alrededor del plato.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Espolvorear hierbas picadas sobre el plato de manera irregular.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Hacer un trazo largo y limpio de salsa con el dorso de una cuchara, y luego colocar el elemento principal sobre él.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tallar vegetales con formas de flores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El "swipe" es una de las técnicas más elegantes y utilizadas en el emplatado moderno.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'El corte "<em>tourné</em>" se caracteriza por:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obtener láminas muy finas de vegetales para hacer chips crujientes como decoración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ser un corte decorativo en forma de barril o de siete caras, realizado con cuchillo puntilla.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Enrollar hojas de verduras y cortarlas en tiras finas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser un corte en dados pequeños para salsas y rellenos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El tourné es un corte decorativo en forma de barril realizado con cuchillo puntilla. Los chips se hacen con mandolina.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'La galantina es una preparación de la cocina fría que se caracteriza por:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ser un plato donde se deshuesa un ave o pescado, se rellena con una farce, se enrolla y se cocina. Se sirve fría.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Ser una preparación ligera y aireada que se sirve fría y lleva gelatina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ser una mezcla de carnes picadas envuelta en masa y horneada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser un plato de pescado crudo marinado en jugo de limón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La galantina es una de las preparaciones más representativas de la alta cocina fría.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Para un servicio tipo delivery, el enfoque del emplatado debe ser:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Priorizar la estética elaborada con decoraciones complejas, aunque el alimento se enfríe durante el transporte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La presentación en fuentes grandes y abundantes para que el cliente se sirva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La funcionalidad del empaque para preservar temperatura y textura, no decoraciones complejas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La personalización de cada plato de forma única y artesanal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Para delivery, la prioridad es la funcionalidad del empaque para preservar temperatura y textura, no decoraciones complejas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'El corte "bastón" es un corte en tiras gruesas que se utiliza para:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Salsas y rellenos de precisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verduras para servir como guarnición, como papas horneadas o vegetales crudos con dip.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ensaladas verdes y guarniciones de sándwiches.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Decoración de platos de alta cocina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El bastón es el corte clásico para papas a la francesa y vegetales crudos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Los canapés calientes, a diferencia de los canapés fríos, se preparan de la siguiente manera:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se descongelan en la heladera antes de hornearse, al igual que los canapés fríos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se hornean inmediatamente después de armarlos, sin necesidad de congelación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se fríen en aceite caliente antes de servir.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se llevan del freezer directamente al horno, sin descongelar, para que no se humedezcan.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Los canapés calientes se llevan del freezer directamente al horno, sin descongelar, para que no se humedezcan.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La salsa golf es una derivación de la mayonesa que se caracteriza por:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ser una mezcla de mayonesa con kétchup y un chorrito de coñac o jugo de naranja, ideal para mariscos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Ser una mezcla de mayonesa con pepinillos y alcaparras para acompañar pescados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ser una vinagreta con mostaza y miel para ensaladas con pollo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ser una salsa a base de mayonesa y ajo para acompañar carnes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La salsa golf se deriva de una mezcla de mayonesa con kétchup y un chorrito de coñac o jugo de naranja, ideal para mariscos',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
