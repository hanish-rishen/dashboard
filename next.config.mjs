/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
      dirs: ['pages', 'components', 'public'],
    },
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  };
  
  export default nextConfig;