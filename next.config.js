module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.extensions.push(".purs");

    config.module.rules.push({
      test: /\.purs$/,
      loader: "purs-loader",
      exclude: /node_modules/,
      options: {
        src: ["src/**/*.purs"],
        warnings: true,
        watch: true,
        spago: true,
        pscIde: true,
        psc: "psa"
      },
    });

    return config;
  },
};
