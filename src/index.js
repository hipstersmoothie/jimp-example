const Jimp = require('jimp');

Jimp.read('./exampleImages/dice.png')
  .then(image => {
    image
      .scale(0.2)
      .getBuffer(Jimp.AUTO, (err, res) =>
        console.log('callback for write', res)
      )
      .greyscale()
      .write('image-small-greyscale.jpg');
  })
  .catch(err => console.log('err', err));
