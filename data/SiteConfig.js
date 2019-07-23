const config = {
  siteTitle: 'Hanpages', // Site title.
  siteTitleShort: 'Hanpages', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Hanpages', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://www.hanpages.com', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'Han is a University Computer Science student who likes to put down his understanding of concepts and others', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: '', // GA tracking ID.
  disqusShortname: 'han', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'Han', // Username to display in the author segment.
  userEmail: 'yahyafarhan48@gmail.com', // Email used for RSS feed's author segment
  userTwitter: '', // Optionally renders 'Follow Me' in the UserInfo segment.
  userLocation: 'Accra, Ghana', // User location to display in the author segment.
  userAvatar: '', // User avatar to display in the author segment.
  userDescription:
    'I\'m an open sourcerer and an aspiring AI specialist', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/doc-han',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/',
      iconClassName: 'fa fa-twitter'
    },
    {
      label: 'Email',
      url: 'mailto:yahyafarhan48@gmail.com',
      iconClassName: 'fa fa-envelope'
    }
  ],
  copyright: 'Copyright © 2019. Han', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0' // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
