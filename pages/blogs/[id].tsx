import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React from 'react'
import BlogDetail from '../../components/BlogDetail/BlogDetail'
import { client } from '../../libs/client'
import { Blog } from '../../types/blog'

type Props = {
	blog: Blog
}

export default function BlogDetailId({ blog }: Props) {
	return (
		<>
			<BlogDetail blog={blog} />
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const id = context.params?.id as string
	console.log(id)
	const data = await client.get({ endpoint: 'blogs', contentId: id })

	return {
		props: {
			blog: data,
		},
	}
}
