export const convertCSVToArray = async (filename) => {
	const res = {};

	let data = await fetch(`./data/${filename}`);
	data = await data.text();
	const lines = data.split("\n");
	const header = lines[0].split(",");
	console.log(header);
	header.forEach((head) => {
		res[head] = [];
	});
	for (let i = 1; i < lines.length; i++) {
		let line = lines[i].split(",");
		for (let i = 0; i < line.length; i++) {
			res[header[i]].push(line[i]);
		}
	}
	console.log(res, "ConverterFile");
	return res;
};
