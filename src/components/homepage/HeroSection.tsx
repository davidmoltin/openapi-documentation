import React from 'react';
import Link from '@docusaurus/Link';
import {
  ShoppingBagRegular,
  BoardRegular,
  ServerRegular,
  BroadActivityFeedRegular,
} from '@fluentui/react-icons';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Composable Commerce',
    link: '/docs/commerce-cloud/getting-started/index.html',
    icon: BoardRegular,
    // lightImage: '/static/landing-page/hero/voice-graphic.png',
    // darkImage: '/static/landing-page/hero/voice-graphic-dark.png',
    text: 'A family of composable products for businesses that need to quickly & easily create unique experiences and next-level customer engagements that drive revenue.',
  },
  {
    title: 'Self Managed Commerce',
    link: 'https://documentation.elasticpath.com/commerce/docs/getting-started/index.html',
    icon: ServerRegular,
    // lightImage: '/static/landing-page/hero/livestream-graphic.png',
    // darkImage: '/static/landing-page/hero/livestream-graphic-dark.png',
    text: 'A headless commerce product for enterprises with sophisticated performance, data, or infrastructure needs. Delivers unparalleled customizability, control, and performance.',
  },
  {
    title: 'CX Studio',
    link: '/docs/cx-studio',
    icon: BroadActivityFeedRegular,
    // lightImage: '/static/landing-page/hero/video-graphic.png',
    // darkImage: '/static/landing-page/hero/video-graphic-dark.png',
    text: 'An e-commerce enabled content management system designed to empower your team to build exceptional experiences.',
  },
  {
    title: 'Product Experience Manager',
    beta: false,
    link: '/docs/pxm',
    icon: ShoppingBagRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Create unique product experiences that exceed your customer expectations and drive growth, all with less reliance on IT for custom work.',
  },
];

function HeroProduct({
  link,
  title,
  icon: Icon,
  text,
 // lightImage,
 // darkImage,
  beta,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group relative cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800'
      )}
    >
      <div className="p-6 !pb-6">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-text-400">{text}</p>
      </div>
    </Link>
  );
}

export default function HeroSection() {
  return (
    <>
      <section className="no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-3xl font-bold">
            Build your Composable Commerce vision with ease and speed
          </h2>
          <p className="max-w-3xl text-center text-text-400">
            Elastic Path's Developer Center: Sign up for a free trial, use our interactive learning tutorials, and experience first hand why developers love our platform
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-2">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </section>
    </>
  );
}
