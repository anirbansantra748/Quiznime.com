const questions = [
	{
		question: 'Who is the protagonist in "One Piece"?',
		options: [
			"Luffy D. Monkey",
			"Naruto Uzumaki",
			"Ichigo Kurosaki",
			"Gon Freecss",
		],
		answer: "Luffy D. Monkey",
		url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Ff4%2F51%2F0d%2Ff4510d2f883ea8c154080c6330f0602b--monkey-d-luffy-monkeys.jpg&f=1&nofb=1&ipt=dd8cc80c336ace94df7f1999c261fb9015143df6f3afb1380d011304d668435f&ipo=images",
	},
	{
		question: 'What is the name of the Death Note owner in "Death Note"?',
		options: ["Ryuk", "Light Yagami", "L Lawliet", "Misa Amane"],
		answer: "Light Yagami",
		url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F35700000%2FLight-Yagami-death-note-35716957-1440-900.jpg&f=1&nofb=1&ipt=f358a4dec97f07eabcc31e254d4fdc551c07f1b3b6bc313ec1b6fb0f0d7cb8ba&ipo=images",
	},
	{
		question:
			'Which anime features a school for ninjas called "Naruto Uzumaki"?',
		options: ["Naruto", "Bleach", "Dragon Ball Z", "My Hero Academia"],
		answer: "Naruto",
		url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-hZN-ovS0eII%2FWUS9iNKFq6I%2FAAAAAAAAFdQ%2F5rSS3FPeKpw862jWowZEoZGIOsfgFglfQCLcBGAs%2Fs1600%2Fnrtosh.jpg&f=1&nofb=1&ipt=81db4eb6d0514fc4fe60e46c1acb8a0c6ccf6c98abd53a268a87e071b7e01378&ipo=images",
	},
	{
		question:
			'In "Attack on Titan," what are the giant humanoid creatures known as?',
		options: ["Titans", "Zombies", "Mecha", "Kaiju"],
		answer: "Titans",
		url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages7.alphacoders.com%2F757%2F757109.jpg&f=1&nofb=1&ipt=e037390e9a9a3537364358f8a0ab1f448bdc469d31ea5f0f990ce506eef2265b&ipo=images",
	},
	{
		question:
			'What is the name of the virtual reality MMORPG in "Sword Art Online"?',
		options: [
			"Sword Art Online",
			"Elder Tale",
			"Aincrad",
			"ALfheim Online",
		],
		answer: "Sword Art Online",
		url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpapertip.com%2Fwmimgs%2F99-994847_sword-art-online-aincrad-kirito.jpg&f=1&nofb=1&ipt=b1fbf12430f9914098b52adb77f2deb7baf3cb7ac317cbddff7f2c82d15ee24e&ipo=images",
	},
	{
		question:
			'Which anime is set in the fictional world of "Amestris" and follows two brothers in search of the Philosophers Stone?',
		options: [
			"Fullmetal Alchemist",
			"Hunter x Hunter",
			"Cowboy Bebop",
			"One Piece",
		],
		answer: "Fullmetal Alchemist",
		url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F36600000%2FFull-Metal-Alchemist-image-full-metal-alchemist-36621492-4845-3263.jpg&f=1&nofb=1&ipt=da45a66eb38400f6e15063b5bdfcd5615868ad2a9cdf2dd312582bf9c08ecf3a&ipo=images",
	},
	{
		question:
			'What is the primary power of "One Punch Man" protagonist Saitama?',
		options: [
			"Super Speed",
			"Teleportation",
			"Invincibility",
			"Super Strength",
		],
		answer: "Super Strength",
		url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nawpic.com%2Fmedia%2F2020%2Fone-punch-man-nawpic-11.jpg&f=1&nofb=1&ipt=b5c97cca1e7b1ba891c29fde5dd825e05d3f7f735ec5e4ef838f95226962d8b3&ipo=images",
	},
	{
		question:
			'In "My Neighbor Totoro," what are the names of the two sisters who encounter Totoro?',
		options: [
			"Mai and Satsuki",
			"Kiki and Lala",
			"Chihiro and Yubaba",
			"Haru and Mei",
		],
		answer: "Mai and Satsuki",
		url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmediad.publicbroadcasting.net%2Fp%2Fshared%2Fnpr%2Fstyles%2Fx_large%2Fnprshared%2F201805%2F218599389.jpg&f=1&nofb=1&ipt=f6c03efea12b14f8521a4646e605fd237c15f6bfd8b4cdf97dc994e8645af8ab&ipo=images",
	},
	{
		question:
			'Which anime follows the adventures of a group of pirates searching for the "One Piece" treasure?',
		options: ["One Piece", "Fairy Tail", "Black Clover", "Bleach"],
		answer: "One Piece",
		url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-zeavcnJ6eWk%2FWr-PtpY-rAI%2FAAAAAAAAAfc%2FN9W_4Jw7Zmwaz6UoH9FZ5jlDpkv_9HnGACLcBGAs%2Fs1600%2Fone%252Bpiece.jpg&f=1&nofb=1&ipt=00529af0be817cf2c6e460d8b901aadf2d00c04596ca6c1789274785e25d5145&ipo=images",
	},
	{
		question:
			'What is the main goal of the "Akatsuki" organization in "Naruto"?',
		options: [
			"Collecting rare animals",
			"World domination",
			"Eradicating all ninjas",
			"Gathering powerful jutsu",
		],
		answer: "World domination",
		url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanimecorner.me%2Fwp-content%2Fuploads%2F2021%2F08%2Flove-after-world-domination-teaser-pv.png&f=1&nofb=1&ipt=964465d2b827f863e35a42ef2eba22dad067b0d12fbc4afa1e0784d24479fbbe&ipo=images",
	},
];

module.exports = { data: questions };