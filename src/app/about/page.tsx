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

            {/* Instagram */}
            <section className={styles.igSection}>
                <a
                    href="https://www.instagram.com/_maxtattoos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.igLink}
                >
                    <span className={styles.igIcon}>
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                    </span>
                    <span className={styles.igHandle}>@_maxtattoos</span>
                    <span className={styles.igFollowText}>Follow on Instagram</span>
                </a>
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
