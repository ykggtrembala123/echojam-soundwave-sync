// Centralized download configuration
export const downloadLinks = {
  windows: "https://cdn.discordapp.com/attachments/1419137515503226920/1420503952579100782/EchoJam.rar?ex=68d5a2e5&is=68d45165&hm=3dfeba13079de849bed230e2eb785c0bb166678a62f7db5b1ed96b3ea&",
  mac: "https://cdn.discordapp.com/attachments/1419137515503226920/1420503952579100782/EchoJam.rar?ex=68d5a2e5&is=68d45165&hm=3dfeba13079de849bed230e2eb785c0bb166678a62f7db5b1ed96b3ea&",
  linux: "https://cdn.discordapp.com/attachments/1419137515503226920/1420503952579100782/EchoJam.rar?ex=68d5a2e5&is=68d45165&hm=3dfeba13079de849bed230e2eb785c0bb166678a62f7db5b1ed96b3ea&",
} as const;

export type Platform = keyof typeof downloadLinks;