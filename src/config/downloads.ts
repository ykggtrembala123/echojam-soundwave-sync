// Centralized download configuration
export const downloadLinks = {
  windows: "https://cdn.discordapp.com/attachments/1426736839494205532/1428181300916916234/EchoJam-player.zip?ex=68f190fc&is=68f03f7c&hm=17d7a44cae8641129f7e0a92cf883712fdc99c11679036c47ae5c7f019a6eea5&",
  mac: "https://cdn.discordapp.com/attachments/1426736839494205532/1428181300916916234/EchoJam-player.zip?ex=68f190fc&is=68f03f7c&hm=17d7a44cae8641129f7e0a92cf883712fdc99c11679036c47ae5c7f019a6eea5&",
  linux: "https://cdn.discordapp.com/attachments/1426736839494205532/1428181300916916234/EchoJam-player.zip?ex=68f190fc&is=68f03f7c&hm=17d7a44cae8641129f7e0a92cf883712fdc99c11679036c47ae5c7f019a6eea5&",
} as const;

export type Platform = keyof typeof downloadLinks;
