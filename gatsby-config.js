module.exports = {
  pathPrefix: `/prime-dds`,
  siteMetadata: {
    title: "Prime DDS",
    author: "Prime DDS",
    description: "Dentist offices",
    siteUrl: "https://mdang.github.io/prime-dds/",
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // ** Share Dentistry
        // trackingId: `UA-180936970-1`,
        // ** Denstar Dental
        // trackingId: `UA-180936970-2'`,
        // ** Crystal Creek Dental
        // trackingId: `UA-180936970-3'`,
        // ** DFW Crown Dental
        // trackingId: `UA-180936970-4'`,
        // ** Prime Dental Garland
        // trackingId: `UA-180936970-5'`,
        // ** White Rock Dental
        // trackingId: `UA-180936970-6'`,
        // ** Prime Dental Plano
        // trackingId: `UA-180936970-7'`,
        // ** Fairview Dental
        trackingId: `UA-180936970-8'`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
