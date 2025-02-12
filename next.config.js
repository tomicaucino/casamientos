/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Ensure the app is exported as static files
    basePath: "/casamientos", // Replace with your GitHub repo name
    images: {
      unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
    },
    experimental: {
      appDir: true, // Ensure the appDir is enabled for Next.js 13+
    },
  };
  
  module.exports = nextConfig;