import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/homepage/HeroSection';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';
import ResourcesSection from '../components/homepage/ResourcesSection';
import HelpSection from '../components/homepage/HelpSection';
import Head from '@docusaurus/Head';
import GuidesAndSamples from '../components/homepage/GuidesAndSamples';
import SDKs from '../components/homepage/SDKs';

export default function Homepage() {
  return (
    <Layout
      description="The UnPlatform approach will acclerate you to the future 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >

      <HeroSection />

      <GuidesAndSamples />

      <SDKs />

      <APIReferenceSection />

      <div className="z-0">
        <ResourcesSection />
        <HelpSection className="-mb-6" />
      </div>

      <HomeFooter />
    </Layout>
  );
}
