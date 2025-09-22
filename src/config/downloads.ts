// Centralized download configuration
export const downloadLinks = {
  windows: "https://example.com/echojam-windows.exe", // Update this URL when ready
  mac: "https://example.com/echojam-mac.dmg", // Update this URL when ready
  linux: "https://example.com/echojam-linux.appimage", // Update this URL when ready
} as const;

export type Platform = keyof typeof downloadLinks;