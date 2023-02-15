import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Digital Identity',
    Svg: require('@site/static/img/icons/undraw_profile_pic_identity.svg').default,
    description: (
      <>
        In today's digital age, managing and protecting your online identity is essential for your privacy and security.
      </>
    ),
  },
  {
    title: 'Free Micro Transactions',
    Svg: require('@site/static/img/icons/undraw_free-micro-transactions.svg').default,
    description: (
      <>
        Blockchain technology has revolutionized the way we think about money, transactions and streaming currencies from IoT devices
      </>
    ),
  },
  {
    title: 'Realtime Auditing',
    Svg: require('@site/static/img/icons/undraw_realtime-audit.svg').default,
    description: (
      <>
        Permissioned triple entry accounting will provide greater transparency, accuracy, and security serving as the base layer for future economies
      </>
    ),
  },
  {
    title: 'Tokenization',
    Svg: require('@site/static/img/icons/undraw_growth_curve.svg').default,
    description: (
      <>
        Future of tokenization is an exciting one, with numerous potential applications in a variety of industries that could lead to greater efficiency, transparency, and security.
      </>
    ),
  },
  {
    title: 'Green Energy',
    Svg: require('@site/static/img/icons/undraw_super_woman.svg').default,
    description: (
      <>
        Prices for alternative energy continue to plunge, making them more accessible and affordable for individuals and businesses alike.
      </>
    ),
  },
  {
    title: 'Precision Fermentation',
    Svg: require('@site/static/img/icons/undraw_photograph.svg').default,
    description: (
      <>
         The future of fermented foods in laboratories is one that could bring a wide range of new flavors, textures, and health benefits.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
