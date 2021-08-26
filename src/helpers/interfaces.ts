export interface PortfolioItem {
	id: number;
	title: string;
	desc: string;
	tools: ToolItem[];
	github: string;
	link: string;
}

export interface ToolItem {
	id: number;
	name: string;
}
