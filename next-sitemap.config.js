/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.BASE_URL || "https://blog.juhancoding.dev",
  generateRobotsTxt: true, // (optional)
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://blog.juhancoding.dev/server-sitemap.xml", // <==== Add here
    ],
  },
};
