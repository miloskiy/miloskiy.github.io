module.exports = {
  siteMetadata: {
    title: "GYG design system",
    description: "Design system for GetYourGuide",
    keywords: "gatsby,theme,carbon",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carbon Design Gatsby Theme",
        icon: "src/images/favicon.svg",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#FF5533",
        display: "browser",
      },
    },
    'gatsby-theme-carbon'
  ],
};
