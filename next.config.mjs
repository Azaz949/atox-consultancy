/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
      images: {
        remotePatterns:[
          {
            protocol: 'https',
            hostname: 'tecdn.b-cdn.net',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
          },
          
        ]
      },
};

export default nextConfig;
