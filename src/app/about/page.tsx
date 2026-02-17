"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";

export default function AboutPage() {
    const { t } = useI18n();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{t('about.title')}</h1>
                <p className={styles.intro}>{t('about.intro')}</p>
            </header>

            {/* Stats */}
            <div className={styles.stats}>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>167+</span>
                    <span className={styles.statLabel}>{t('about.stats.works')}</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>13K+</span>
                    <span className={styles.statLabel}>{t('about.stats.followers')}</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>5+</span>
                    <span className={styles.statLabel}>{t('about.stats.experience')}</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>8</span>
                    <span className={styles.statLabel}>{t('about.stats.styles')}</span>
                </div>
            </div>

            {/* Story */}
            <section className={styles.storySection}>
                <h2 className={styles.sectionTitle}>{t('about.story.title')}</h2>
                <p className={styles.storyText}>{t('about.story.p1')}</p>
                <p className={styles.storyText}>{t('about.story.p2')}</p>
                <p className={styles.storyText}>{t('about.story.p3')}</p>
            </section>

            {/* Specialties */}
            <section className={styles.storySection}>
                <h2 className={styles.sectionTitle}>{t('about.specialties.title')}</h2>
                <div className={styles.specialties}>
                    <div className={styles.specialtyItem}>
                        <span className={styles.specialtyIcon}>👤</span>
                        <span className={styles.specialtyName}>{t('about.specialties.portrait')}</span>
                    </div>
                    <div className={styles.specialtyItem}>
                        <span className={styles.specialtyIcon}>🖤</span>
                        <span className={styles.specialtyName}>{t('about.specialties.blackgrey')}</span>
                    </div>
                    <div className={styles.specialtyItem}>
                        <span className={styles.specialtyIcon}>🔍</span>
                        <span className={styles.specialtyName}>{t('about.specialties.realism')}</span>
                    </div>
                    <div className={styles.specialtyItem}>
                        <span className={styles.specialtyIcon}>🐉</span>
                        <span className={styles.specialtyName}>{t('about.specialties.japanese')}</span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className={styles.cta}>
                <p className={styles.ctaText}>{t('about.cta')}</p>
                <Link href="/booking" className={styles.ctaButton}>
                    {t('hero.cta')}
                </Link>
            </div>
        </div>
    );
}
