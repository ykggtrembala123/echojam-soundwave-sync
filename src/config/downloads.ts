// Centralized download configuration
export const downloadLinks = {
  windows: "https://cdn.discordapp.com/attachments/1426642099960287322/1426802230584934470/EchoPlayer-waves.zip?ex=68ec8ca0&is=68eb3b20&hm=34ac721e92c27796c1364cca5edaf6d8b01cb348e8f7b259625defc7ec138216&",
  mac: "https://cdn.discordapp.com/attachments/1426642099960287322/1426802230584934470/EchoPlayer-waves.zip?ex=68ec8ca0&is=68eb3b20&hm=34ac721e92c27796c1364cca5edaf6d8b01cb348e8f7b259625defc7ec138216&",
  linux: "https://cdn.discordapp.com/attachments/1426642099960287322/1426802230584934470/EchoPlayer-waves.zip?ex=68ec8ca0&is=68eb3b20&hm=34ac721e92c27796c1364cca5edaf6d8b01cb348e8f7b259625defc7ec138216&",
} as const;

export type Platform = keyof typeof downloadLinks;
