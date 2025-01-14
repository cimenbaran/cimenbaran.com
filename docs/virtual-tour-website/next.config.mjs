/** @type {import('next').NextConfig} */
export default {
  output: 'export', // Enables static export
  basePath: '/virtual-tour-website', // Set the base path for GitHub Pages
  images: {
    unoptimized: true, // Disable image optimization
  },
};