import imagemin from 'imagemin';
import webp from 'imagemin-webp';

const produceWebP = async (source='images', destination='images/webp') => {
  await imagemin([`${source}/*.png`], {
    destination: destination,
    plugins: [
      webp({
        lossless: true
      })
    ]
  })
  console.log('PNGs processed')
  await imagemin([`${source}/*.{jpg,jpeg}`], {
    destination: destination,
    plugins: [
      webp({
        quality: 65
      })
    ]
  })
  console.log('JPGs and JPEGs processed')
}

produceWebP();