import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: [
        '@scottish-government/design-system',
        '@scottish-government/designsystem-react'
    ]
};

export default nextConfig;
