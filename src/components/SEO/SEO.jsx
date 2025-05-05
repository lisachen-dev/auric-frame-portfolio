import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ pageInfo }) => {
  if (!pageInfo) return null;

  const { LinkedIn, pageUrl, title, tagline } = pageInfo || {};

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={tagline} />

      {/* Open Graph (for LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={tagline} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />

      {/* Optional LinkedIn profile link */}
      {LinkedIn && <meta property="og:site_name" content={LinkedIn} />}

      {/* Canonical URL for SEO */}
      <link rel="canonical" href={pageUrl} />
    </Helmet>
  );
};

export default SEO;
