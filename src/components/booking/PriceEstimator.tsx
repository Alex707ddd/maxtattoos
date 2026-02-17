"use client";

import { useState } from 'react';
import { useI18n } from '@/lib/i18n-context';
import styles from './PriceEstimator.module.css';

type Currency = 'USD' | 'VND';

const SIZE_PRICES: Record<string, { USD: [number, number]; VND: [number, number] }> = {
    small: { USD: [80, 150], VND: [2000000, 3800000] },
    medium: { USD: [150, 400], VND: [3800000, 10000000] },
    large: { USD: [400, 800], VND: [10000000, 20000000] },
    xl: { USD: [800, 2000], VND: [20000000, 50000000] },
};

const STYLE_MULTIPLIER: Record<string, number> = {
    'minimalist': 0.9,
    'lettering': 0.85,
    'black and grey': 1.0,
    'traditional': 1.0,
    'geometric': 1.05,
    'sketch style': 1.0,
    'japanese': 1.15,
    'portrait': 1.25,
    'realistic': 1.3,
    'color': 1.1,
};

function formatPrice(num: number, currency: Currency): string {
    if (currency === 'VND') {
        return new Intl.NumberFormat('vi-VN').format(Math.round(num / 1000) * 1000) + ' ₫';
    }
    return '$' + new Intl.NumberFormat('en-US').format(Math.round(num));
}

export default function PriceEstimator() {
    const { t } = useI18n();
    const [size, setSize] = useState('medium');
    const [style, setStyle] = useState('black and grey');
    const [currency, setCurrency] = useState<Currency>('USD');

    const base = SIZE_PRICES[size][currency];
    const mult = STYLE_MULTIPLIER[style] || 1;
    const low = base[0] * mult;
    const high = base[1] * mult;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{t('price.title')}</h2>

            <div className={styles.fields}>
                <div className={styles.field}>
                    <label className={styles.label}>{t('price.size')}</label>
                    <select className={styles.select} value={size} onChange={e => setSize(e.target.value)}>
                        <option value="small">{t('price.sizeSmall')}</option>
                        <option value="medium">{t('price.sizeMedium')}</option>
                        <option value="large">{t('price.sizeLarge')}</option>
                        <option value="xl">{t('price.sizeXL')}</option>
                    </select>
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>{t('price.style')}</label>
                    <select className={styles.select} value={style} onChange={e => setStyle(e.target.value)}>
                        {Object.keys(STYLE_MULTIPLIER).map(s => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>{t('price.currency')}</label>
                    <div className={styles.currencyButtons}>
                        <button
                            className={`${styles.currencyBtn} ${currency === 'USD' ? styles.currencyActive : ''}`}
                            onClick={() => setCurrency('USD')}
                        >
                            USD $
                        </button>
                        <button
                            className={`${styles.currencyBtn} ${currency === 'VND' ? styles.currencyActive : ''}`}
                            onClick={() => setCurrency('VND')}
                        >
                            VND ₫
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.result}>
                <span className={styles.resultLabel}>{t('price.estimate')}</span>
                <span className={styles.resultValue}>
                    {formatPrice(low, currency)} — {formatPrice(high, currency)}
                </span>
            </div>

            <p className={styles.disclaimer}>{t('price.disclaimer')}</p>
        </div>
    );
}
