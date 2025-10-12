// Centralized download configuration
export const downloadLinks = {
  windows: "https://files.catbox.moe/nuohlg.zip",
  mac: "https://files.catbox.moe/nuohlg.zip",
  linux: "https://files.catbox.moe/nuohlg.zip",
} as const;

export type Platform = keyof typeof downloadLinks;
