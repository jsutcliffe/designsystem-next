import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (
        config
    ) => {
        config.optimization.minimizer.splice(1);
        return config
    },
    transpilePackages: ['@scottish-government/designsystem-react']
};

export default nextConfig;
