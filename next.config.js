/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = nextConfig

module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mov|mp4|webm)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "assets/videos/[name].[hash].[ext]",
          },
        },
      });
  
      return config;
    },
  };
  

