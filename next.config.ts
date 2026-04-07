import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old Webflow URLs → new Next.js routes
      { source: "/home", destination: "/", permanent: true },
      { source: "/about-us", destination: "/nosotros", permanent: true },
      { source: "/service", destination: "/servicios", permanent: true },
      { source: "/price", destination: "/contacto", permanent: true },
      { source: "/contact", destination: "/contacto", permanent: true },
      { source: "/contact-us", destination: "/contacto", permanent: true },
      { source: "/thank-you", destination: "/", permanent: true },
      { source: "/doctor/dra-sofia-garcia", destination: "/equipo", permanent: true },
      { source: "/doctor/:slug", destination: "/equipo", permanent: true },
      // Catch any other old Webflow paths with dashes
      { source: "/------", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
