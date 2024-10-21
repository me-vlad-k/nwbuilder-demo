import nwbuild from "nw-builder";

console.log("Building NW.js for macOS arm64 architecture...\n\n");

nwbuild({
  // if your app data that goes into the Info.plist file is not updating
  // you might need to remove caches here:
  // /Users/your-username/Library/Application Support/your-app-bundle-name
  app: {
    // name: This is the internal name of the application.
    // It’s used in system processes and might not be visible to users.
    name: "NWBuilder DEMO",

    // icon: The path to the app’s icon, which should be in .icns
    // format (Apple’s icon file format). This icon is used for
    // the app’s representation in the Finder, Dock, and other macOS UI components.
    icon: "./public/nwb-demo.icns",

    // LSApplicationCategoryType: This defines the app’s category for the App Store,
    // helping users find your app based on what it does.
    // The value here indicates that the app falls under the "Graphics Design"
    // category. Here is a few examples of how it could be named
    // e.g public.app-category.entertainment, public.app-category.developer-tools
    LSApplicationCategoryType: "public.app-category.graphics-design",

    // CFBundleIdentifier: This is a unique identifier for the app’s bundle,
    // usually in reverse DNS format. It distinguishes the app from others
    // and is used by the system for various tasks like sandboxing,
    // signing, and app identification.
    CFBundleIdentifier: "com.nwbuilder.demo",

    // CFBundleName: This is the short, user-visible name of the app that
    // appears under its icon in the Finder and Dock.
    CFBundleName: "NWBuilder Demo App",

    // CFBundleDisplayName: This is the full, user-visible name of the app.
    // It can be longer or more descriptive than CFBundleName and may be
    // used in various places like the menu bar, About dialog, or app metadata.
    CFBundleDisplayName: "NWBuilder Demo Application",

    // CFBundleSpokenName: This is an alternative name used for text-to-speech
    // operations. For example, when macOS reads app names aloud to users,
    // it uses this value instead of the visible app name.
    CFBundleSpokenName: "Demo App Built with NW Builder",

    // CFBundleVersion: This is the build version number. It identifies a
    // specific build or iteration of the app. Developers typically use
    // this for internal tracking of bug fixes and updates. It is often more
    // granular than the release version.
    CFBundleVersion: "0.0.1",

    // CFBundleShortVersionString: This is the public release version number,
    // which is shown to users (e.g., in the App Store or About dialogs).
    // It reflects major, minor, and patch releases of the app.
    CFBundleShortVersionString: "0.1",

    // is not supported in 4.9.0
    // NSHumanReadableCopyright: This is the copyright notice displayed to users.
    // It provides legal information about the app's ownership and copyright year.
    NSHumanReadableCopyright: "© 2024 NWBuilder Demo Inc. All rights reserved.",

    // is not supported in 4.9.0
    // NSLocalNetworkUsageDescription: This key explains why the app needs access
    // to the local network, which is required by macOS privacy guidelines. This
    // description is shown to users when the app requests permission to access
    // the local network. It helps users understand what the network access
    // is for, ensuring transparency.
    NSLocalNetworkUsageDescription:
      "NWBuilder Demo requires access to the local network for device discovery.",
  },
  mode: "build",
  version: "0.92.0", // don't put version letter as v0.92.0
  flavor: "normal",
  platform: "osx",
  arch: "arm64",
  downloadUrl: "https://dl.nwjs.io",
  manifestUrl: "https://nwjs.io/versions",
  cacheDir: "./node_modules/nw",
  srcDir: "./package.json ./src/**",
  outDir: "./build/macos-arm64",
  managedManifest: "./package.build.nw.json", // Managed manifest that uses for nw.js docs
  nodeAddon: false, // Rebuild Node native addons
  cache: true, // existing cache or removes and redownloads it.
  ffmpeg: false, // if true the chromium ffmpeg is replaced by community version with proprietary codecs.
  glob: true, // If true, the program will treat wildcards (e.g., *, **, ?) as file matching patterns.
  logLevel: "info",
  // zip: "zip", // If true, "zip", "tar" or "tgz" the outDir directory is compressed.
});

/**
 * Don't use { zip: false } it will delete all the files from build. Just comment it out.
 */
