// Centralized download configuration
export const downloadLinks = {
  windows: "https://cdn.discordapp.com/attachments/1419137515503226920/1420185689395302440/EchoJam.rar?ex=68d47a7e&is=68d328fe&hm=5e1b2a72cef1c728b733dc37503699cc763e0ca694db1ea905cf0d6d5a4ff34e&",
  mac: "https://cdn.discordapp.com/attachments/1419137515503226920/1420185689395302440/EchoJam.rar?ex=68d47a7e&is=68d328fe&hm=5e1b2a72cef1c728b733dc37503699cc763e0ca694db1ea905cf0d6d5a4ff34e&",
  linux: "https://cdn.discordapp.com/attachments/1419137515503226920/1420185689395302440/EchoJam.rar?ex=68d47a7e&is=68d328fe&hm=5e1b2a72cef1c728b733dc37503699cc763e0ca694db1ea905cf0d6d5a4ff34e&",
} as const;

export type Platform = keyof typeof downloadLinks;