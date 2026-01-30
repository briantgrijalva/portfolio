import { GetServerSideProps } from 'next';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:xhtml="http://www.w3.org/1999/xhtml">
     <url>
       <loc>https://briantgrijalva.com</loc>
       <xhtml:link rel="alternate" hreflang="es" href="https://briantgrijalva.com/es"/>
       <xhtml:link rel="alternate" hreflang="en" href="https://briantgrijalva.com"/>
       <xhtml:link rel="alternate" hreflang="x-default" href="https://briantgrijalva.com"/>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://briantgrijalva.com/es</loc>
       <xhtml:link rel="alternate" hreflang="es" href="https://briantgrijalva.com/es"/>
       <xhtml:link rel="alternate" hreflang="en" href="https://briantgrijalva.com"/>
       <xhtml:link rel="alternate" hreflang="x-default" href="https://briantgrijalva.com"/>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
