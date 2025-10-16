// Centralized download configuration
export const downloadLinks = {
  windows: "https://files.catbox.moe/oqvvwp.rar",
  mac: "https://files.catbox.moe/oqvvwp.rar",
  linux: "https://files.catbox.moe/oqvvwp.rar",
} as const;

export type Platform = keyof typeof downloadLinks;
