// Centralized download configuration
export const downloadLinks = {
  windows: "https://cdn.discordapp.com/attachments/1419137515503226920/1419843319697248426/EchoJam.rar?ex=68d33ba2&is=68d1ea22&hm=f3ebb56c43c724f20b3b28a95ee2828213e68b0ca2b575d02ebfba13e02ed2cd&",
  mac: "https://cdn.discordapp.com/attachments/1419137515503226920/1419843319697248426/EchoJam.rar?ex=68d33ba2&is=68d1ea22&hm=f3ebb56c43c724f20b3b28a95ee2828213e68b0ca2b575d02ebfba13e02ed2cd&",
  linux: "https://cdn.discordapp.com/attachments/1419137515503226920/1419843319697248426/EchoJam.rar?ex=68d33ba2&is=68d1ea22&hm=f3ebb56c43c724f20b3b28a95ee2828213e68b0ca2b575d02ebfba13e02ed2cd&",
} as const;

export type Platform = keyof typeof downloadLinks;