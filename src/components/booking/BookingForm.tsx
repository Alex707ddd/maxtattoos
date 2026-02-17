"use client";

import styles from "./BookingForm.module.css";
import { useI18n } from "@/lib/i18n-context";

export default function BookingForm() {
    const { t } = useI18n();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(t('booking.success'));
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label className={styles.label} htmlFor="name">{t('booking.name')}</label>
                <input className={styles.input} type="text" id="name" required placeholder="John Doe" />
            </div>

            <div className={styles.field}>
                <label className={styles.label} htmlFor="email">{t('booking.email')}</label>
                <input className={styles.input} type="email" id="email" required placeholder="john@example.com" />
            </div>

            <div className={styles.field}>
                <label className={styles.label} htmlFor="placement">{t('booking.placement')}</label>
                <input className={styles.input} type="text" id="placement" placeholder="e.g. Left inner forearm" />
            </div>

            <div className={styles.field}>
                <label className={styles.label} htmlFor="size">{t('booking.size')}</label>
                <input className={styles.input} type="text" id="size" placeholder="e.g. 5x5 inches" />
            </div>

            <div className={styles.field}>
                <label className={styles.label} htmlFor="description">{t('booking.description')}</label>
                <textarea
                    className={styles.textarea}
                    id="description"
                    required
                    placeholder="Describe your idea in detail..."
                />
            </div>

            <button type="submit" className={styles.submitButton}>
                {t('booking.submit')}
            </button>
        </form>
    );
}
