/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: "@import 'src/shared/variable.scss';",
  },
};

export default nextConfig;
