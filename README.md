![nwbuilder-demo repository logo](https://github.com/me-vlad-k/nwbuilder-demo/blob/main/public/nwb-demo-icon_128x128.png)

# 🔫 nwbuilder-demo

I've decided to create a demo project for [nw-builder](https://github.com/nwutils/nw-builder) to test and demonstrate its functionality. The documentation is quite vague (at the moment of writing), and I'm personally struggling to get started, so having a fully functional demo would really help connect the dots.

## 🌗 Demo uses nw-builder v.4.9.0

I've tested the latest versions (from 4.10.0 to 4.11.4) of nw-builder and found that 4.9.0 is the most stable, at least for my needs. This is the only version that allowed me to successfully build for the ARM64 architecture.

## 🔮 Mystery Issues Tracker

### NW.js with nw-builder. App icon missing/blank in MacOS ARM64 build.

Issue: [#1279](https://github.com/nwutils/nw-builder/issues/1279) from the official nw-builder repository.

The problem was with the **.icns** file itself. I had found a dummy icon somewhere on the web, and since it was created incorrectly, it caused this weird behavior.

> [!IMPORTANT]
> Make sure to create your **.icns** file correctly before you start gasping in panic—it's very important! 😄 When using an app to create a .icns file, you should start with a **1024x1024 PNG** file to ensure everything looks sharp on Retina displays. If you somehow miss some icon dimensions, such as 64x64 or others, macOS will display blank icons instead of the missing ones.

There are many apps available on the web that can create .icns files for you. A few examples are iLove Icns Creator, Image2Icon, and many others, including command-line utilities.

I also removed the "icon": "./src/icon.png" from the NW.js manifest, as it doesn't seem to play any role in displaying an icon for macOS.

**Here is a list of icon resolutions needed:**

- `icon_16x16.png`
- `icon_16x16@2x.png`
- `icon_32x32.png`
- `icon_32x32@2x.png`
- `icon_128x128.png`
- `icon_128x128@2x.png`
- `icon_256x256.png`
- `icon_256x256@2x.png`
- `icon_512x512.png`
- `icon_512x512@2x.png`
