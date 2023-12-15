/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            // Rewrite everything to `pages/index`
            {
                source: '/api/:path*',
                destination: 
                    process.env.NODE_ENV === 'development'
                        ? 'http://127.0.0.1:8000/api/:path*'
                        : '/api/',
            },
        ];
    },
};

module.exports = nextConfig;