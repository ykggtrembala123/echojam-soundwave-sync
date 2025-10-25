// Centralized download configuration
export const downloadLinks = {
  windows: "https://cdn.discordapp.com/attachments/1420614879026479145/1431663165845803048/EchoJam.rar?ex=68fe3bb9&is=68fcea39&hm=2c690a6fa0f1ae3b2019eb96a43a2bb30512c023e79b6eef69654f34fafccd5b&",
  mac: "https://cdn.discordapp.com/attachments/1420614879026479145/1431663165845803048/EchoJam.rar?ex=68fe3bb9&is=68fcea39&hm=2c690a6fa0f1ae3b2019eb96a43a2bb30512c023e79b6eef69654f34fafccd5b&",
  linux: "https://cdn.discordapp.com/attachments/1420614879026479145/1431663165845803048/EchoJam.rar?ex=68fe3bb9&is=68fcea39&hm=2c690a6fa0f1ae3b2019eb96a43a2bb30512c023e79b6eef69654f34fafccd5b&",
} as const;

export type Platform = keyof typeof downloadLinks;
