import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navigation from '@/components/navigation/navigation';
import Footer from '@/components/footer/footer';
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
    <div className={styles.container}>
      <Navigation />
      
      {/* Hero Section */}
      <div className={styles.hero}>
        <Image
          src={service.featuredImage}
          alt={service.title}
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
      </div>

      {/* Title Overlay - positioned to overlap both sections */}
      <div className={styles.heroOverlay}>
      <div className={styles.heroInnerOverlay}>
        <h1 className={styles.heroTitle}>{service.title}</h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <main className={styles.main}>
        <div className={styles.gallery}>
          {service.images.slice(1).map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <Image
                src={image}
                alt={`${service.title} - Image ${index + 2}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}