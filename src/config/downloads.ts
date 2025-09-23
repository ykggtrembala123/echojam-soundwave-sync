// Centralized download configuration
export const downloadLinks = {
  windows: "https://cdn.discordapp.com/attachments/1419137515503226920/1420168053651669173/EchoJam.rar?ex=68d46a11&is=68d31891&hm=92eaf65f4530ef90b757f2bc6168bc56c9dd8acef2e92b98dd757018013dea68&",
  mac: "https://cdn.discordapp.com/attachments/1419137515503226920/1420168053651669173/EchoJam.rar?ex=68d46a11&is=68d31891&hm=92eaf65f4530ef90b757f2bc6168bc56c9dd8acef2e92b98dd757018013dea68&",
  linux: "https://cdn.discordapp.com/attachments/1419137515503226920/1420168053651669173/EchoJam.rar?ex=68d46a11&is=68d31891&hm=92eaf65f4530ef90b757f2bc6168bc56c9dd8acef2e92b98dd757018013dea68&",
} as const;

export type Platform = keyof typeof downloadLinks;