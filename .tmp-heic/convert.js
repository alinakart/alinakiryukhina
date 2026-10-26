const fs = require("fs");
const convert = require("heic-convert");

const pairs = [
  [
    "c:\\Users\\Vica\\Downloads\\Telegram Desktop\\IMG_0526.HEIC",
    "c:\\Users\\Vica\\alinakiryukhina\\public\\artwork\\site\\portraits\\img-0526.jpg",
  ],
  [
    "c:\\Users\\Vica\\Downloads\\Telegram Desktop\\IMG_0528.HEIC",
    "c:\\Users\\Vica\\alinakiryukhina\\public\\artwork\\site\\portraits\\img-0528.jpg",
  ],
];

(async () => {
  for (const [src, out] of pairs) {
    const inputBuffer = fs.readFileSync(src);
    const outputBuffer = await convert({
      buffer: inputBuffer,
      format: "JPEG",
      quality: 0.9,
    });
    fs.writeFileSync(out, Buffer.from(outputBuffer));
    console.log("wrote", out, fs.statSync(out).size);
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
