"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./TermsAccordion.module.css";
import clsx from "clsx";
import { useI18n } from "@/lib/i18n-context";

export default function TermsAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { t } = useI18n();

    const terms = [
        { title: t('terms.howToBook.title'), content: t('terms.howToBook.content') },
        { title: t('terms.deposit.title'), content: t('terms.deposit.content') },
        { title: t('terms.design.title'), content: t('terms.design.content') },
        { title: t('terms.health.title'), content: t('terms.health.content') },
        {
            title: t('aftercare.title'),
            content: [
                t('aftercare.cleaning'),
                t('aftercare.recovery'),
                t('aftercare.healing'),
                t('aftercare.clothing'),
                t('aftercare.sun'),
                t('aftercare.water'),
                t('aftercare.questions'),
            ],
        },
    ];

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
            {terms.map((term, index) => (
                <div key={index} className={styles.item}>
                    <button
                        className={styles.trigger}
                        onClick={() => toggle(index)}
                    >
                        <span className={styles.title}>{term.title}</span>
                        <ChevronDown
                            size={16}
                            className={clsx(styles.icon, openIndex === index && styles.iconOpen)}
                        />
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className={styles.content}
                            >
                                <div className={styles.contentInner}>
                                    {Array.isArray(term.content) ? (
                                        <ul className={styles.contentList}>
                                            {term.content.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        term.content
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
