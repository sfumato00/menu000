export type Category = {
    name: string;
    slug: string;
    description: string;
    items: Item[];
};

export type Item = {
    name: string;
    slug: string;
    description: string;
    calorie: number;
};