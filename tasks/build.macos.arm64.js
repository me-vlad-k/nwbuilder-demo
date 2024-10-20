import nwbuild from "nw-builder";

console.log("Building NW.js for macOS arm64 architecture...\n\n");

nwbuild({
  glob: true, // If true, the program will treat wildcards (e.g., *, **, ?) as file matching patterns.
  cache: true, // If true the existing cache is used. Otherwise it removes and redownloads it.
  mode: "build",
  flavor: "normal",
  platform: "osx",
  arch: "arm64",
  downloadUrl: "https://dl.nwjs.io",
  cacheDir: "./node_modules/nw",
  outDir: "./build",
  srcDir: "./package.json ./src/**",
  managedManifest: "./package.build.nw.json",
  // zip: "zip", // If true, "zip", "tar" or "tgz" the outDir directory is compressed.
  app: {
    name: "NWBuilder DEMO",
    icon: "./public/nwb-demo.icns",
    CFBundleDisplayName: "NWBuilder Demo",
  },
});

/**
 * Don't use { zip: false } it will delete all the files from build. Just comment it out.
 */
