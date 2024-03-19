import React from 'react';
import Link from '@docusaurus/Link';
import { Icon } from '../Icon';

function SDK({ to, name }: { name: string; to?: string }) {
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center rounded-lg border border-secondary-700 p-2.5 text-inherit hover:border-primary hover:text-primary hover:no-underline"
    >
      <span className="font-medium">{name}</span>
    </Link>
  );
}

export default function SDKs() {
  return (
    <section className="mx-auto mb-32 flex w-full max-w-6xl flex-col p-4 py-0">
      <span className="mb-2 uppercase tracking-wider text-text-400">
        Explore our guides and product documentation
      </span>

      <h3 className="mb-12 text-4xl">
        Elastic Path Composable Commerce
      </h3>

      <div className="mb-10">
        <h4 className="mb-2 text-2xl">Products</h4>

        <p className="mb-6 text-text-400">
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="Getting Started"
            to="/docs/commerce-cloud/getting-started/"
          />
          <SDK
            name="API Overview"
            to="/docs/commerce-cloud/api-overview"
          />
          <SDK
            name="Product Experience Manager"
            to="/docs/pxm/"
          />
          <SDK
            name="Composer"
            to="/docs/composer"
          />
          <SDK
            name="Payments"
            to="/docs/payments"
          />
          <SDK
            name="Self Managed Commerce"
            to="https://documentation.elasticpath.com"
          />
          <SDK
            name="Developer Tools"
            to="/docs/commerce-cloud/developer-tools"
          />
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-2xl">Frontends</h4>

        <p className="mb-6 text-text-400">
          Our easy to use frontends allow you to launch new experiences quickly
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="CX Studio"
            to="/web-core"
          />
          <SDK
            name="Composable CLI"
            to="/react-web-core"
          />
          <SDK
            name="JS SDK"
            to="/flutter-core"
          />
        </div>
      </div>
    </section>
  );
}
