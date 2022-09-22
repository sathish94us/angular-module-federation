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
//     uniqueName: "shell",
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

//         // leave this empty to have dynamic module federation:
//         remotes: {},

//         // shared: share({
//         //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
//         //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
//         //   "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
//         //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

//         //   ...sharedMappings.getDescriptors()
//         // })
//         shared: {
//           ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//         }
//     }),
//     sharedMappings.getPlugin()
//   ],
// };

const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    shared: shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    sharedMappings: ['@mf/store'],
});