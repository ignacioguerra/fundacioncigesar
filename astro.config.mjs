import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/prensa': '/medios/',
    '/somos': '/centro-de-salud-sexual-y-reproductiva/somos/',
    '/servicios': '/centro-de-salud-sexual-y-reproductiva/servicios/',
    '/contacto-ar': '/centro-de-salud-sexual-y-reproductiva/contacto/es/',
    '/contacto-pr': '/centro-de-salud-sexual-y-reproductiva/contacto/pr/',
    '/vasectomia': '/centro-de-salud-sexual-y-reproductiva/servicios/#vasectomia',
    '/ginecologia': '/centro-de-salud-sexual-y-reproductiva/servicios/#ginecologia',
    '/obstetricia': '/centro-de-salud-sexual-y-reproductiva/servicios/#obstetricia',
    '/psicologia': '/centro-de-salud-sexual-y-reproductiva/servicios/#psicologia',
    '/capacitaciones': '/centro-de-salud-sexual-y-reproductiva/capacitaciones/',
    '/nosotrxs': '/nosotros',
  }
});
