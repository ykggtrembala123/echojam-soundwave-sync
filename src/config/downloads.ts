// Centralized download configuration
export const downloadLinks = {
  windows: "https://cdn.discordapp.com/attachments/1421520176008003636/1427827792690806876/EchoJam-player.zip?ex=68f047c1&is=68eef641&hm=512dbe571c4c42db53cf1ad3cb7f0734429dfe35a3a35d72615440b3d81c8f58&",
  mac: "https://cdn.discordapp.com/attachments/1421520176008003636/1427827792690806876/EchoJam-player.zip?ex=68f047c1&is=68eef641&hm=512dbe571c4c42db53cf1ad3cb7f0734429dfe35a3a35d72615440b3d81c8f58&",
  linux: "https://cdn.discordapp.com/attachments/1421520176008003636/1427827792690806876/EchoJam-player.zip?ex=68f047c1&is=68eef641&hm=512dbe571c4c42db53cf1ad3cb7f0734429dfe35a3a35d72615440b3d81c8f58&",
} as const;

export type Platform = keyof typeof downloadLinks;
