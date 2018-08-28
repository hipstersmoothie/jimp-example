const Jimp = require('jimp');
// import Jimp from 'jimp/es';

// async function test() {
//   const canvas = await Jimp.create(1000, 1000, 0x0000ffff);
//   console.log();
//   canvas
//     .print(
//       font,
//       10,
//       500,
//       'One two three four fix six seven eight nine ten eleven twelve',
//       100
//     )
//     .write('modified.png', console.log);
// }

async function test(params) {
  const loadedFont = await Jimp.loadFont('./font/poke-font.fnt');
  const image = await Jimp.create(1000, 1000, 0x0000ffff);

  try {
    console.log(image);
    return image.print(
      loadedFont,
      0,
      0,
      'One two three four fix six seven eight nine ten eleven twelve',
      (err, image, y) => {
        console.log(err);
        image
          .print(
            loadedFont,
            0,
            y + 50,
            'thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty',
            500
          )
          .write('modified.png', console.log());
      }
    );
  } catch (error) {
    console.log(error);
  }
}

test();
