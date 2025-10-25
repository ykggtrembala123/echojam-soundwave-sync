// Centralized download configuration
export const downloadLinks = {
  windows: "https://files.catbox.moe/sru3mc.rar",
  mac: "https://files.catbox.moe/sru3mc.rar",
  linux: "https://files.catbox.moe/sru3mc.rar",
} as const;

export type Platform = keyof typeof downloadLinks;
