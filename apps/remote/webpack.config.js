// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");
// const { share, shareAll } = mf

// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(
//   path.join(__dirname, '../../tsconfig.base.json'),
//   [/* mapped paths to share */]);

// module.exports = {
//   output: {
//     uniqueName: "remote",
//     publicPath: "auto"
//   },
//   optimization: {
//     runtimeChunk: false
//   },
//   resolve: {
//     alias: {
//       ...sharedMappings.getAliases(),
//     }
//   },
//   experiments: {
//     outputModule: true
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//         library: { type: "module" },

//         // here you can expose your components and modules:
//         name: "remote",
//         filename: "remoteEntry.js",
//         exposes: {
//             './Module': './apps/remote/src/app/abc/abc.module.ts',
//             './TestMfe': './apps/remote/src/app/test-mfe/test-mfe.component.ts'
//         },

//         // this specifies the shared libraries so that these libraries are singelon instances -
//         // meaning that every application consumes the same:
//         // shared: share({
//         //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//         //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//         //   "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//         //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

//         //   ...sharedMappings.getDescriptors()
//         // })

//         shared: {
//           ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//         },

//     }),
//     sharedMappings.getPlugin()
//   ],
// };

const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Module": "./apps/remote/src/app/abc/abc.module.ts",
    "./TestMfe": "./apps/remote/src/app/test-mfe/test-mfe.component.ts",
  },
  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: "auto",
  }),
  sharedMappings: ["@mf/store"],
});
