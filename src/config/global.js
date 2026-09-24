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
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: 'REF',
      link: 'LINK',
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
