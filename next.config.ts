import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
};
module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig;
