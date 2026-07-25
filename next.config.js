/** @type {import('next').NextConfig} */
const nextConfig = {
staticPageGenerationTimeout: 120, images: {
    domains: ['www.mgm.gov.tr', 'cdn.weatherapi.com'],
  },
};

export default nextConfig;
