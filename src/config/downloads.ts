// Centralized download configuration
export const downloadLinks = {
  windows: "https://cdn.discordapp.com/attachments/1424577697996210247/1434062301920628786/EchoJamPlayer.zip?ex=6906f618&is=6905a498&hm=b2a5d16b332963f21f520ec6c050bd3589eddf403d6906d72c22d2ec2c5b7655&",
  mac: "https://files.catbox.moe/sru3mc.rar",
  linux: "https://files.catbox.moe/sru3mc.rar",
} as const;

export type Platform = keyof typeof downloadLinks;
