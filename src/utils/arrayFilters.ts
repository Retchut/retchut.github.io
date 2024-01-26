function buildRows<T extends number | string | object>(data: T[], colNum: number): T[][] {
	const rows: T[][] = [];

	for (let i = 0; i < data.length; i++) {
		if (i % colNum === 0) {
			rows.push([data[i]]);
		} else {
			rows[Math.floor(i / colNum)].push(data[i]);
		}
	}

	return rows;
}

function splitArray<T extends number | string | object>(data: T[], num: number): T[][] {
	const middle = Math.ceil(data.length / num);

	return [data.slice(0, middle), data.slice(middle)];
}

export { buildRows, splitArray };
