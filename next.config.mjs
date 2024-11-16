/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/my-cv",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
