/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? 'standalone' : 'export',
    basePath: isDev ? '' : '/java-master',
    assetPrefix: isDev ? '' : '/java-master',
};

export default nextConfig;