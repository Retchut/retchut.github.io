export interface InterestData {
	title: string;
	"subtitle-title": string;
	subtitle: string;
	imgName: string;
}

export interface InterestCategory {
	title: string;
	entries: InterestData[];
}
