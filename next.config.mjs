/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pakistanpastpapers.s3.ap-southeast-1.amazonaws.com', 'pakistanpastpapersnews.s3.ap-southeast-1.amazonaws.com',
      'pakistanpastpapersblogs.s3.ap-southeast-1.amazonaws.com'
    ],
  }, 
  
  
};

export default nextConfig;


