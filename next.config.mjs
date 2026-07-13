/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  // basePath: "/my-cv", // Commented out for local development
  reactStrictMode: true,
  images: { domains: ["localhost"], unoptimized: true },
};

export default nextConfig;
