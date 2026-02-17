"use client";

import { useEffect, useState } from 'react';
import { getGalleryImages, getAllTags, TattooImage } from '@/lib/gallery-service';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './page.module.css';
import { useI18n } from '@/lib/i18n-context';

export default function Home() {
  const [images, setImages] = useState<TattooImage[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<TattooImage | null>(null);
  const { t } = useI18n();

  useEffect(() => {
    const allTags = getAllTags();
    setTags(['all', ...allTags]);
    setImages(getGalleryImages('all'));
  }, []);

  const handleFilterChange = (tag: string) => {
    setActiveFilter(tag);
    setImages(getGalleryImages(tag === 'all' ? undefined : tag));
  };

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/booking" className={styles.ctaButton}>
            {t('hero.cta')}
          </Link>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterContainer}>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleFilterChange(tag)}
              className={clsx(
                styles.filterButton,
                activeFilter === tag && styles.activeFilter
              )}
            >
              {tag === 'all' ? t('filter.all') : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className={styles.grid}>
        <AnimatePresence mode='popLayout'>
          {images.map((image, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              key={image.id}
              className={styles.gridItem}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.primaryTag}
                fill
                className={styles.gridImage}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className={styles.overlay} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightbox}
            onClick={() => setSelectedImage(null)}
          >
            <div className={styles.lightboxImageContainer}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.primaryTag}
                fill
                className={styles.lightboxImage}
              />
            </div>
            <p className={styles.lightboxCaption}>
              {t('lightbox.style')}: {selectedImage.primaryTag} — {t('lightbox.confidence')}: {(selectedImage.score * 100).toFixed(0)}%
            </p>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
