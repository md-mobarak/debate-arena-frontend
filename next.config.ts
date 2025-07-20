
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental.appDir as it's now stable in Next.js 13+
  // Remove experimental.esmExternals as it's not recommended
  transpilePackages: ['framer-motion']
}

export default nextConfig