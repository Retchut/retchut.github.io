interface FrontData {
	title: string[];
	subtitle: string;
}

interface BackData {
	technologies: string[];
}

interface CardData {
	frontData: FrontData;
	backData: BackData;
}

export { CardData, FrontData, BackData };
