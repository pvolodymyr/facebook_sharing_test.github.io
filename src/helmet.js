import React from 'react'
import { Helmet } from 'react-helmet'

export const HelmetMetaTags = ({ url, description, title, quote, image }) => (
  <Helmet>
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:site_name" content="This is site name" />

    <meta name="csrf_token" content="" />
    <meta name="robots" content="noodp" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="_token" content="" />

    <meta property="title" content={title} />
    <meta property="quote" content={quote} />
    <meta name="description" content={description} />
    <meta property="image" content={image} />
    <meta property="og:title" content={title} />
    <meta property="og:quote" content={quote} />
    <meta property="og:image" content={image} />
    <meta content="image/*" property="og:image:type" />
    <meta property="og:description" content={description} />
    <meta data-rh="true" property="fb:app_id" content="542599432471018"></meta>

    <meta property="og:url" content="https://github.com" />
    <meta property="og:site_name" content="GitHub" />
    <meta property="og:title" content="Build software better, together" />
    <meta property="og:description" content="GitHub is where people build software. More than 50 million people use GitHub to discover, fork, and contribute to over 100 million projects." />
    <meta property="og:image" content="https://github.githubassets.com/images/modules/open_graph/github-logo.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="1200" />
    <meta property="og:image" content="https://github.githubassets.com/images/modules/open_graph/github-mark.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="620" />
    <meta property="og:image" content="https://github.githubassets.com/images/modules/open_graph/github-octocat.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="620" />
    <meta property="twitter:site" content="github" />
    <meta property="twitter:site:id" content="13334762" />
    <meta property="twitter:creator" content="github" />
    <meta property="twitter:creator:id" content="13334762" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="GitHub" />
    <meta property="twitter:description" content="GitHub is where people build software. More than 50 million people use GitHub to discover, fork, and contribute to over 100 million projects." />
    <meta property="twitter:image:src" content="https://github.githubassets.com/images/modules/open_graph/github-logo.png" />
    <meta property="twitter:image:width" content="1200" />
    <meta property="twitter:image:height" content="1200" />
    <meta name="page-subject" content="GitHub" />
  </Helmet>
)
