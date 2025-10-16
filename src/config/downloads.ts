// Centralized download configuration
export const downloadLinks = {
  windows: "https://cdn.discordapp.com/attachments/1428134547219943465/1428194877669118053/EchoJam.msi?ex=68f19da1&is=68f04c21&hm=5907f0c09e0365eef6d604d3185958ff0c1456b9e96692359c8b8a3683964178&",
  mac: "https://cdn.discordapp.com/attachments/1428134547219943465/1428194877669118053/EchoJam.msi?ex=68f19da1&is=68f04c21&hm=5907f0c09e0365eef6d604d3185958ff0c1456b9e96692359c8b8a3683964178&",
  linux: "https://cdn.discordapp.com/attachments/1428134547219943465/1428194877669118053/EchoJam.msi?ex=68f19da1&is=68f04c21&hm=5907f0c09e0365eef6d604d3185958ff0c1456b9e96692359c8b8a3683964178&",
} as const;

export type Platform = keyof typeof downloadLinks;
