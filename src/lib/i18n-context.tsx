"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { Locale, DEFAULT_LOCALE, t } from '@/lib/i18n';

interface I18nContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
    locale: DEFAULT_LOCALE,
    setLocale: () => { },
    t: (key: string) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

    const translate = (key: string) => {
        return t(locale, key as Parameters<typeof t>[1]);
    };

    return (
        <I18nContext.Provider value={{ locale, setLocale, t: translate }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    return useContext(I18nContext);
}
