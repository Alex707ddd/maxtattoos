"use client";

import { useI18n } from '@/lib/i18n-context';
import { LOCALES, Locale } from '@/lib/i18n';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
    const { locale, setLocale } = useI18n();

    return (
        <div className={styles.container}>
            {LOCALES.map((loc) => (
                <button
                    key={loc.code}
                    onClick={() => setLocale(loc.code)}
                    className={`${styles.button} ${locale === loc.code ? styles.active : ''}`}
                >
                    {loc.label}
                </button>
            ))}
        </div>
    );
}
