// // import { defineConfig } from "cypress";

// // export default defineConfig({
// //   component: {
// //     devServer: {
// //       framework: "react",
// //       bundler: "vite",
// //     },
// //   },
// // });

// // import { defineConfig } from "cypress";

// // export default defineConfig({
// //   component: {
// //     devServer: {
// //       framework: "react",
// //       bundler: "vite",
// //     },
// //   },
// //   e2e: {
// //     setupNodeEvents(on, config) {
// //       const {
// //         addMatchImageSnapshotPlugin,
// //       } = require("cypress-image-snapshot/plugin");
// //       addMatchImageSnapshotPlugin(on, config);
// //       return config;
// //     },
// //   },
// // });

// import { defineConfig } from "cypress";
// import { addMatchImageSnapshotPlugin } from "cypress-image-snapshot/plugin";

// export default defineConfig({
//   component: {
//     devServer: {
//       framework: "react",
//       bundler: "vite",
//     },
//   },
//   e2e: {
//     setupNodeEvents(on, config) {
//       // Add the image snapshot plugin
//       addMatchImageSnapshotPlugin(on, config);

//       // Return the modified config
//       return config;
//     },
//   },
// });

import { defineConfig } from "cypress";
import { addMatchImageSnapshotPlugin } from "cypress-image-snapshot/plugin";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      // Add the image snapshot plugin for Component Testing
      addMatchImageSnapshotPlugin(on, config);

      // Return the modified config
      return config;
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Add the image snapshot plugin for E2E Testing
      addMatchImageSnapshotPlugin(on, config);

      // Return the modified config
      return config;
    },
  },
});
