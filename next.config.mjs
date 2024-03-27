/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'images.unsplash.com', // To allow all hosts give **
            protocol: 'https'
        }]
    }
};

export default nextConfig;
