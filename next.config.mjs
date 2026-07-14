/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  basePath: process.env.NODE_ENV === "production" ? "/my-cv" : "",
  reactStrictMode: true,
  images: { domains: ["localhost"], unoptimized: true },
};

export default nextConfig;
