export default {
  global: {
    Name: 'Cocina fría: técnicas, preparaciones y emplatado profesional',
    Description:
      '​​​Este componente formativo desarrolla las competencias para elaborar preparaciones de cocina fría de alta calidad. Aborda el dominio de cortes profesionales, la clasificación y preparación de ensaladas, aderezos, vinagretas y salsas frías. Profundiza en técnicas especializadas como la acidificación (ceviches, escabeches), la elaboración de patés, terrinas, galantinas, mousses, sándwiches, canapés y bebidas frías. Finaliza con los principios del emplatado profesional y la decoración de platos según las necesidades del cliente',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la cocina fría y el <em>Garde Manger</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición, historia y evolución de la cocina fría',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'El chef <em>Garde Manger</em>: funciones y jerarquía en la brigada de cocina',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Higiene, cadena de frío y seguridad en cocina fría',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'El flujo de trabajo en la cocina fría: <em>mise en place</em> y organización del puesto',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Dominio de cortes en verduras y frutas ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Clasificación de los cortes básicos (juliana, <em>brunoise</em>, bastón, macedonia, rodajas)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Cortes especializados (<em>chiffonade</em>, <em>tourné</em>, <em>concassé</em>, chips, paisana)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Aplicación práctica de los cortes según el tipo de preparación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ensaladas, aderezos y salsas frías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Estructura de la ensalada: base, cuerpo, aderezo y guarnición',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Clasificación de salsas frías: vinagretas (inestables), mayonesas y derivados (estables)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Preparación de aderezos y vinagretas saludables.',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ensaladas simples y compuestas: ejemplos y elaboración.',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Preparaciones especializadas de cocina fría. ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Ceviches y escabeches: la acidificación como método de cocción y conservación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Patés, terrinas y galantinas: la <em>farce</em> y la <em>mousseline</em>',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: '<em>Mousses</em>: elaboración, diferencias y aplicaciones',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Sándwiches, <em>canapés</em> y pasabocas: técnicas de montaje y conservación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Bebidas frías: jugos, granizados, smoothies y malteadas saludables',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Emplatado y decoración profesional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Principios fundamentales del emplatado: balance, color, textura y altura',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Técnicas de decoración con salsas, hierbas, vegetales tallados y elementos crujientes',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Adecuación del emplatado al tipo de servicio (buffet, a la carta, <em>delivery</em>) y a las necesidades del cliente',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acidificación',
      significado:
        'Método de "cocción" de proteínas (pescado, mariscos) mediante su inmersión en un medio ácido (jugo de limón, vinagre), que desnaturaliza sus proteínas.',
    },
    {
      termino: '<em>Brunoise</em>',
      significado:
        'Corte en dados muy pequeños, de aproximadamente 2 a 3 mm por lado. se obtiene picando finamente la juliana.',
    },
    {
      termino: '<em>Canapé</em>',
      significado:
        'Pequeña preparación salada que se sirve como aperitivo, consistente en una base (pan, masa, vegetal) cubierta con un <em>topping</em> decorativo.',
    },
    {
      termino: 'Ceviche',
      significado:
        'Plato latinoamericano que consiste en pescado o mariscos crudos cortados en cubos y "cocidos" en jugo de limón o naranja agria, mezclado con cebolla, cilantro y ají.',
    },
    {
      termino: '<em>Chiffonade</em>',
      significado:
        'Corte de hierbas o verduras de hoja en tiras muy finas, logrado al enrollar las hojas y cortarlas perpendicularmente.',
    },
    {
      termino: '<em>Concassé</em>',
      significado:
        'Técnica y corte específico para el tomate que implica escaldarlo, pelarlo, despepitarlo y cortar su pulpa en cubos pequeños.',
    },
    {
      termino: 'Emplatado',
      significado:
        'El arte de disponer y decorar los alimentos en el plato de manera estética y funcional, considerando la armonía de colores, texturas, sabores y alturas.',
    },
    {
      termino: 'Escabeche',
      significado:
        'Método de conservación y preparación que consiste en cocer un alimento y sumergirlo en una mezcla hirviente de aceite, vinagre y especias, sirviéndose frío.',
    },
    {
      termino: '<em>Farce</em>',
      significado:
        'Mezcla de carnes magras, grasas, huevos, crema y especias, procesada hasta obtener una pasta fina, utilizada como relleno en <em>patés</em>, terrinas y galantinas.',
    },
    {
      termino: '<em>Garde Manger</em>',
      significado:
        'Término francés que designa tanto el área de la cocina fría como al chef especializado en ella. literalmente significa "guardar para comer".',
    },
    {
      termino: 'Galantina',
      significado:
        'Preparación donde una pieza de ave o pescado se deshuesa, se rellena con una <em>farce</em>, se enrolla y se cocina. se sirve fría.',
    },
    {
      termino: 'Juliana',
      significado:
        'Corte en tiras finas y alargadas, de aproximadamente 3-4 cm de largo por 2 mm de ancho.',
    },
    {
      termino: 'Macedonia',
      significado:
        'Corte en dados medianos y uniformes, de aproximadamente 5 a 8 mm por lado.',
    },
    {
      termino: '<em>Mise en Place</em>',
      significado:
        'Término francés que significa "poner en su lugar". se refiere a la organización y preparación previa de todos los ingredientes y utensils necesarios para el servicio.',
    },
    {
      termino: '<em>Mousse</em>',
      significado:
        'Preparación ligera y aireada, dulce o salada, que se elabora incorporando un elemento aireado (claras o crema batida) a una base saborizada.',
    },
    {
      termino: '<em>Mousseline</em>',
      significado:
        'Tipo de <em>farce</em> de textura muy fina y aireada, elaborada con partes iguales de proteína cruda y crema de leche.',
    },
    {
      termino: '<em>Paté</em>',
      significado:
        'Preparación de cocina fría que consiste en una <em>farce</em> de carnes (a menudo hígado) envuelta en una masa y horneada. se sirve frío.',
    },
    {
      termino: 'Terrina',
      significado:
        'Preparación similar al <em>paté</em>, pero cocida a baño maría en un molde (terrina) sin masa. se sirve fría en rebanadas.',
    },
    {
      termino: '<em>Tourné</em>',
      significado:
        'Corte decorativo en forma de barril o de siete caras, aplicado principalmente a verduras.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación de Chefs del Ecuador. (2018). <em>Guía de técnicas culinarias</em>.',
      link: 'https://www.nestle.com.ec/sites/g/files/pydnoa396/files/2019-07/guia%20de%20tecnicas%20culinarias%20digital%20%28002%29.pdf',
    },
    {
      referencia: 'Cadena, J., & Francisco, E. (2024). <em>Cocina Fría</em>.',
      link: 'https://intesud-repositoriodigital.edu.ec/jspui/handle/INTESUD/117',
    },
    {
      referencia:
        'Codex Alimentarius Commission. (2023). <em>Principios generales de higiene de los alimentos (CXC 1-1969)</em>. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) y Organización Mundial de la Salud (OMS).',
      link: 'https://www.fao.org/fao-who-codexalimentarius',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1979, 24 de enero). Ley 9 de 1979, por la cual se dictan Medidas Sanitarias. <em>Diario Oficial</em> No. 35308.',
      link: '',
    },
    {
      referencia:
        'del Valle Araujo, A. (2012). <em>Preparación de Alimentos III</em>. Red Tercer Milenio.',
      link: '',
    },
    {
      referencia:
        'Gisslen, W. (2017). <em>Professional Cooking</em> (9th ed.). John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Manual de Cocina Fría - Carrera de Profesional Gastronómico. (s.f.). [Documento interno, Instituto Argentino de Gastronomía].',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (1997, 10 de diciembre). Decreto 3075 de 1997, por el cual se reglamenta parcialmente la Ley 09 de 1979. <em>Diario Oficial</em> No. 43246.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013, 22 de julio). Resolución 2674 de 2013, por la cual se reglamenta el artículo 14 de la Ley 09 de 1979. <em>Diario Oficial</em> No. 48877.',
      link: '',
    },
    {
      referencia:
        'Velasco, J. C. R. (2024, 18 de julio). <em>Técnicas básicas de cocina</em>. Sello Editorial Unicomfacauca.',
      link: 'https://selloeditorial.unicomfacauca.edu.co/Publicaciones/catalog/book/19',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
