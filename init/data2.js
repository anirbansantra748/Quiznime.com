const images = [
  {
    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Ff4%2F51%2F0d%2Ff4510d2f883ea8c154080c6330f0602b--monkey-d-luffy-monkeys.jpg&f=1&nofb=1&ipt=dd8cc80c336ace94df7f1999c261fb9015143df6f3afb1380d011304d668435f&ipo=images",
    options: ['Luffy D. Monkey', 'Naruto Uzumaki', 'Ichigo Kurosaki', 'Gon Freecss'],
    answer:"Luffy D. Monkey",
  },
  {
    url:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F35700000%2FLight-Yagami-death-note-35716957-1440-900.jpg&f=1&nofb=1&ipt=f358a4dec97f07eabcc31e254d4fdc551c07f1b3b6bc313ec1b6fb0f0d7cb8ba&ipo=images",
    options: ['Ryuk', 'Light Yagami', 'L Lawliet', 'Misa Amane'],
    answer:"Light Yagami",
  },
  {
    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-hZN-ovS0eII%2FWUS9iNKFq6I%2FAAAAAAAAFdQ%2F5rSS3FPeKpw862jWowZEoZGIOsfgFglfQCLcBGAs%2Fs1600%2Fnrtosh.jpg&f=1&nofb=1&ipt=81db4eb6d0514fc4fe60e46c1acb8a0c6ccf6c98abd53a268a87e071b7e01378&ipo=images",
    options: ['Naruto', 'Bleach', 'Dragon Ball Z', 'My Hero Academia'],
    answer:"Naruto",
  },
  {
    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nawpic.com%2Fmedia%2F2020%2Fone-punch-man-nawpic-11.jpg&f=1&nofb=1&ipt=b5c97cca1e7b1ba891c29fde5dd825e05d3f7f735ec5e4ef838f95226962d8b3&ipo=images",
    options: ['Ryuk', 'Light Yagami', 'Saitama', 'Misa Amane'],
    answer:"Saitama",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fbleach%2Fimages%2F2%2F20%2FIchigo_Kurosaki.png&f=1&nofb=1&ipt=76abceca6c55a5c51b58ff264a0a89c76cbfe888dd0e0af9be7e2c14d3d129ed&ipo=images",
    options: ['Byakuya Kuchiki', 'Renji Abarai', 'Uryu Ishida', 'Ichigo Kurosaki'],
    answer: "Ichigo Kurosaki",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fhunterxhunter%2Fimages%2F0%2F0d%2FGon_Freecss.png&f=1&nofb=1&ipt=3064f2e87f7381d0b9318dd9259da708b777cc4775c1a35c7d4f531fb6e4b218&ipo=images",
    options: ['Killua Zoldyck', 'Gon Freecss', 'Hisoka', 'Leorio'],
    answer: "Gon Freecss",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Ftokyoghoul%2Fimages%2F0%2F01%2FKaneki_Re%2_3.jpg&f=1&nofb=1&ipt=3461b5c460194dd11f6be8a60b163f00db0d400cc5986d1d40a3038c86c2bdf94&ipo=images",
    options: ['Touka Kirishima', 'Ken Kaneki', 'Haise Sasaki', 'Rize Kamishiro'],
    answer: "Ken Kaneki",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fattackontitan%2Fimages%2F0%2F01%2FEren_Yeager_%28Anime%29_character_image.png&f=1&nofb=1&ipt=b44ee174d16969f5d7ccf17be31650ab1311046c4a5879a6c374c34b6a4c86d1&ipo=images",
    options: ['Mikasa Ackerman', 'Armin Arlert', 'Levi Ackerman', 'Eren Yeager'],
    answer: "Eren Yeager",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Ffairytail%2Fimages%2F0%2F02%2FNatsu_Dragneel_%28anime%29.png&f=1&nofb=1&ipt=8a4f9bb383f0bebd93c8649130c4156e4d7e44cc8ec703ff473f31797ef6dddb&ipo=images",
    options: ['Gray Fullbuster', 'Lucy Heartfilia', 'Erza Scarlet', 'Natsu Dragneel'],
    answer: "Natsu Dragneel",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fonepiece%2Fimages%2F1%2F1e%2FShanks_Anime_Post_Timeskip_Infobox.png&f=1&nofb=1&ipt=0119c81650b1a3f8e3a4e3e75b30914153a81301cc812e8ca21652b981d48d11b&ipo=images",
    options: ['Blackbeard', 'Red-Haired Shanks', 'Kaido', 'Whitebeard'],
    answer: "Red-Haired Shanks",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdragonball%2Fimages%2F4%2F4b%2FGoku_Son_GT.png&f=1&nofb=1&ipt=f0911c06e72721c3d262a56b0edf60d5755563f5c184b57d42b83907cbdd2bda&ipo=images",
    options: ['Goku Black', 'Vegeta', 'Goku (GT)', 'Frieza'],
    answer: "Goku (GT)",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fmyheroacademia%2Fimages%2F0%2F05%2FShoto_Todoroki_%28Anime%29.png&f=1&nofb=1&ipt=a2ad37be5ed1240d6ea997b2f82b6d4f86dcb495bea1391774dd8535d6e048b4&ipo=images",
    options: ['Ochaco Uraraka', 'Shoto Todoroki', 'Tenya Iida', 'Katsuki Bakugo'],
    answer: "Shoto Todoroki",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fnaruto%2Fimages%2F1%2F18%2FSasuke_Part_1.png&f=1&nofb=1&ipt=8f5349dfec1b27197f61ac6aa4fbc6d7d6da9f44cc4d3b7f250a04b77b36f46a&ipo=images",
    options: ['Naruto Uzumaki', 'Kakashi Hatake', 'Sasuke Uchiha', 'Sakura Haruno'],
    answer: "Sasuke Uchiha",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fhunterxhunter%2Fimages%2F1%2F13%2FHisoka_Madhouse.png&f=1&nofb=1&ipt=22b6076dd46d37ef5b16696020f77c40b5f0d7d21fc1a2e7e5d05540b178c1cb3&ipo=images",
    options: ['Gon Freecss', 'Killua Zoldyck', 'Hisoka', 'Leorio'],
    answer: "Hisoka",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Ftokyoghoul%2Fimages%2F5%2F56%2FTouka_TG_%282%29.jpg&f=1&nofb=1&ipt=08652c1fbde4f6e4cc1eab59f5b0577d6fb1411f53ce792ff7eab83fcce743ac3&ipo=images",
    options: ['Touka Kirishima', 'Ken Kaneki', 'Haise Sasaki', 'Rize Kamishiro'],
    answer: "Touka Kirishima",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fattackontitan%2Fimages%2F4%2F48%2FLevi_Ackerman_%28Anime%29_character_image.png&f=1&nofb=1&ipt=3f78a0b5a2f6728c542f843d86a465b07cc2ab31e62b429b3ec41f83930942312&ipo=images",
    options: ['Mikasa Ackerman', 'Armin Arlert', 'Levi Ackerman', 'Eren Yeager'],
    answer: "Levi Ackerman",
  },
];
module.exports = { data2: images };