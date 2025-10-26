import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getServiceBySlug, services } from '@/data/services';
import styles from './service-gallery.module.css';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found | ES Celebrations',
    };
  }

  return {
    title: `${service.title} | ES Celebrations`,
    description: service.description,
  };
}

export default function ServiceGalleryPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className={styles.main}>
      {/* Header */}
      <div className={styles.header}>
        <Link href="/services" className={styles.backLink}>
          ← Back to Services
        </Link>
        <h1 className={styles.title}>{service.title}</h1>
      </div>

      {/* Gallery Grid */}
      <div className={styles.gallery}>
        {service.images.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <Image
              src={image}
              alt={`${service.title} - Image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </main>
  );
}