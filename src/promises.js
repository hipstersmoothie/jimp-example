
Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
.then(font => {
  return Jimp.read('./template_docs/file1.png')
    .then(image => {
      image.print(font, 628, 205, '' + params.first_value);
      image.print(font, 830, 260, '' + params.second_value);

      return image.write(
        './cache/' + params.order_id + '/send1.png',
        'async'
      );
    })
    .then(Jimp.read('./template_docs/file2.png'))
    .then(image2 => {
      image2.print(font, 480, 200, getDate());
      image2.write('./cache/' + params.order_id + '/send2.png');

      return image.writeAsync('./cache/' + params.order_id + '/send1.png');
    });
})
.then(() => {
  // convertImagesToPDF({
  //   input: [
  //     './cache/' + params.order_id + '/send1.png',
  //     './cache/' + params.order_id + '/send2.png'
  //   ],
  //   output: './cache/' + params.order_id + '/to_sign.pdf'
  // });
  console.log('Completed');
});
