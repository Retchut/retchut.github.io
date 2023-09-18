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

export { buildRows };
