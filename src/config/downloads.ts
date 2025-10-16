// Centralized download configuration
export const downloadLinks = {
  windows: "https://cdn.discordapp.com/attachments/1428134547219943465/1428224340977123409/EchoPlayer.rar?ex=68f1b912&is=68f06792&hm=87e5327e0801c31568a659ac152233c00d7505bc7e53ef2e5a1ba099c63aa5a8&",
  mac: "https://cdn.discordapp.com/attachments/1428134547219943465/1428224340977123409/EchoPlayer.rar?ex=68f1b912&is=68f06792&hm=87e5327e0801c31568a659ac152233c00d7505bc7e53ef2e5a1ba099c63aa5a8&",
  linux: "https://cdn.discordapp.com/attachments/1428134547219943465/1428224340977123409/EchoPlayer.rar?ex=68f1b912&is=68f06792&hm=87e5327e0801c31568a659ac152233c00d7505bc7e53ef2e5a1ba099c63aa5a8&",
} as const;

export type Platform = keyof typeof downloadLinks;
