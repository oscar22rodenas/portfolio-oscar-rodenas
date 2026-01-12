export const languages = {
    es: 'Español',
    ca: 'Català',
    en: 'English'
};

export const defaultLang = 'es';

import es from './es.json';
import ca from './ca.json';
import en from './en.json';

export const ui = {
    es,
    ca,
    en
};

export function useTranslations(lang) {
    return function t(key) {
        const keys = key.split('.');
        let result = ui[lang];
        for (const k of keys) {
            if (result === undefined || result === null) {
                return key; // Return the key itself if any part of the path is not found
            }
            result = result[k];
        }
        return result || key;
    }
}
