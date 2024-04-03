interface PageData {
  slug?: string;
	title: string;
  submenu?: Array<PageData>;
}

const cissyrMenu:Array<PageData> = [
  {
    slug: '/centro-de-salud-sexual-y-reproductiva/somos',
    title: 'Somos',
  },
  {
    slug: '/centro-de-salud-sexual-y-reproductiva/servicios',
    title: 'Servicios',
  },
  {
    slug: '/centro-de-salud-sexual-y-reproductiva/contacto/es',
    title: 'Contacto (ES)',
  },
  {
    slug: '/centro-de-salud-sexual-y-reproductiva/contacto/pr',
    title: 'Contato (PR)',
  },
];

const mainMenu:Array<PageData> = [
  {
    slug: '/nosotrxs',
    title: 'Nosotrxs',
  },
  {
    slug: '/centro-de-salud-sexual-y-reproductiva',
    title: 'CISSYR',
    submenu: cissyrMenu,
  },
  {
    slug: '/medios',
    title: 'Medios',
  },
  {
    slug: '/contacto',
    title: 'Contacto',
  }
];

export default mainMenu
export {
  type PageData,
  mainMenu,
  cissyrMenu,
}