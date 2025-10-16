// Centralized download configuration
export const downloadLinks = {
  windows: "https://www.dropbox.com/scl/fi/79l91dbwchrrgmunqu2ge/EchoPlayer.rar?dl=1",
  mac: "https://www.dropbox.com/scl/fi/79l91dbwchrrgmunqu2ge/EchoPlayer.rar?dl=1",
  linux: "https://www.dropbox.com/scl/fi/79l91dbwchrrgmunqu2ge/EchoPlayer.rar?dl=1",
} as const;

export type Platform = keyof typeof downloadLinks;
