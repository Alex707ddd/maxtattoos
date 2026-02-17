"use client";

import styles from "./layout.module.css";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { I18nProvider, useI18n } from "@/lib/i18n-context";
import LanguageSwitcher from "@/components/LanguageSwitcher";

function InnerLayout({ children }: { children: React.ReactNode }) {
    const { t } = useI18n();

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link href="/" className={styles.logo}>
                        Max Tattoos
                    </Link>
                    <nav className={styles.nav}>
                        <Link href="/" className={styles.navLink}>{t('nav.portfolio')}</Link>
                        <Link href="/about" className={styles.navLink}>{t('nav.about')}</Link>
                        <Link href="/booking" className={`${styles.navLink} ${styles.bookLink}`}>{t('nav.booking')}</Link>
                    </nav>
                    <div className={styles.headerRight}>
                        <LanguageSwitcher />
                        <a href="https://instagram.com/_maxtattoos" target="_blank" rel="noopener noreferrer" className={styles.igLink}>
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>
            </header>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerSocials}>
                        <a href="https://instagram.com/_maxtattoos" target="_blank" rel="noopener noreferrer" className={styles.igLink}>
                            <Instagram size={22} />
                        </a>
                    </div>
                    <p className={styles.footerText}>© {new Date().getFullYear()} Max Tattoos. {t('footer.rights')}</p>
                </div>
            </footer>
        </>
    );
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <I18nProvider>
            <InnerLayout>{children}</InnerLayout>
        </I18nProvider>
    );
}
