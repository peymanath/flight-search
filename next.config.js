module.exports = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'https://api.beta.safrat.me/:path*',
            },
        ];
    },
    reactStrictMode: true,
};
