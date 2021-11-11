type Author = {
	name: string;
};

export type Message = {
	createdAt: Date;
	message: string;
	by: Author;
};
