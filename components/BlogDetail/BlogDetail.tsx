import React from 'react'
import { Blog } from '../../types/blog'

type Props = {
	blog: Blog
}

export default function BlogDetail({ blog }: Props) {
	return (
		<div>
			<h1>BlogDetail</h1>
			{blog.title}
		</div>
	)
}
