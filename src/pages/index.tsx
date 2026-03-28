import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.hero__title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.hero__subtitle}>
          Full Stack Engineer & Software Architect
        </p>
        <p className={styles.heroDescription}>
          Especializado en la creación de ecosistemas digitales escalables con 
          <strong> Laravel 11, Nuxt 3 y arquitecturas orientadas a eventos.</strong>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{backgroundColor: 'var(--nerv-orange)', color: 'white', border: 'none'}}>
            Explorar Portfolio Técnico 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Portfolio | ${siteConfig.title}`}
      description="Portfolio de Ingeniería de Javier Legrand - Full Stack Developer especializado en Laravel y Nuxt.">
      <HomepageHeader />
      <main>
        <section style={{padding: '4rem 0', textAlign: 'center', backgroundColor: 'var(--ifm-background-color)'}}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>🚀 Ecosistemas</h3>
                <p>Diseño de plataformas interconectadas (Marketplaces, Civic Tech) con bases de datos compartidas y lógica polimórfica.</p>
              </div>
              <div className="col col--4">
                <h3>🛠️ Stack Moderno</h3>
                <p>Desarrollo de alto rendimiento usando <strong>FrankenPHP</strong>, SSR con Nuxt 3 y comunicación en tiempo real con Ably.</p>
              </div>
              <div className="col col--4">
                <h3>📈 Escalabilidad</h3>
                <p>Implementación de patrones de diseño, testing automatizado y despliegue continuo (CI/CD) para productos en producción.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}