"use client";

import TermsAccordion from "@/components/booking/TermsAccordion";
import BookingForm from "@/components/booking/BookingForm";
import PriceEstimator from "@/components/booking/PriceEstimator";
import styles from "./page.module.css";
import { useI18n } from "@/lib/i18n-context";

export default function BookingPage() {
    const { t } = useI18n();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{t('booking.title')}</h1>
                <p className={styles.subtitle}>{t('booking.subtitle')}</p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{t('booking.terms')}</h2>
                <TermsAccordion />
            </section>

            <section className={styles.section}>
                <PriceEstimator />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{t('booking.form')}</h2>
                <BookingForm />
            </section>
        </div>
    );
}
