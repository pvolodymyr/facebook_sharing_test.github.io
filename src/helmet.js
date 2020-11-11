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
  </Helmet>
)
