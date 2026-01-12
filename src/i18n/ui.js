export const languages = {
    es: 'Español',
    ca: 'Català',
    en: 'English'
};

export const defaultLang = 'es';

export const ui = {
    es: {
      'nav.home': 'Inicio',
      'nav.about': 'Sobre mí',
      'nav.experience': 'Experiencia',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto'
    },
    ca: {
      'nav.home': 'Inici',
      'nav.about': 'Sobre mi',
      'nav.experience': 'Experiència',
      'nav.projects': 'Projectes',
      'nav.contact': 'Contacte'
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact'
    }
};

export function useTranslations(lang) {
    return function t(key) {
        return ui[lang][key] || key;
    }
}
