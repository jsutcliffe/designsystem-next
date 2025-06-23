/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
        config.optimization.minimizer.splice(1);
        return config
    },
    transpilePackages: ['@scottish-government/designsystem-react']
};

export default nextConfig;
