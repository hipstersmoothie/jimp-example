import Jimp from 'jimp/es';

export default async () => {
  const image = await Jimp.read('./exampleImages/cops.jpg');
  const font = await Jimp.loadFont(Jimp.FONT_SANS_12_BLACK);
  const base64 = image
    .print(font, 0, 0, 'Hello world!')
    .getBase64Async(Jimp.AUTO);

  return base64;
};
