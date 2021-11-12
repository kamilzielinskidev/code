type User = {
	name: string;
};

export type Message = {
	createdAt: Date;
	message: string;
	by: User;
};
