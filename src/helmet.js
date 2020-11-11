import React from 'react'
import { Helmet } from 'react-helmet'

export const HelmetMetaTags = () => (
  <Helmet>
    <meta property="og:title" content="European Travel Destinations" />
    <meta property="og:description" content="Offering tour packages for individuals or groups." />
    <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg" />
    <meta property="og:url" content="http://euro-travel-example.com/index.htm" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:site_name" content="European Travel, Inc." />
    <meta name="twitter:image:alt" content="Alt text for image" />
    <meta property="fb:app_id" content="your_app_id" />
    <meta name="twitter:site" content="@website-username" />
  </Helmet>
)
