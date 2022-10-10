export type Category = {
	id: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	revisedAt: string
	name: string
}

export type Blog = {
	id: string
	title: string
	body: string
	tag?: string
	eyecatch: {
		url: string
		height: number
		width: number
	}
	createdAt: string
	updatedAt: string
	publishedAt: string
	limit: number
	totalCount: number
	offset: number
	category: Category[]
}
