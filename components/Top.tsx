import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Blog } from '../types/blog'

type Props = {
	blogs: Array<Blog>
}

export default function Top({ blogs }: Props) {
	return (
		<div className="max-w-7xl flex justify-center items-center mx-auto pt-12">
			<article>
				<h1 className="text-3xl text-gray-300 tracking-[12px] text-center pb-4">
					BLOG✍️
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2">
					{blogs.map((blog) => (
						<div className="p-10">
							<Link href={`/blogs/${blog.id}`}>
								<Image
									src={blog.eyecatch.url}
									height={blog.eyecatch.height}
									width={blog.eyecatch.width}
									alt=""
									className="cursor-pointer shadow-xl rounded-2xl transition hover:scale-105 hover:ease-in hover:duration-200"
								/>
							</Link>
							<div className="text-center mt-5">
								<a
									href={`/blogs/${blog.id}`}
									className="relative text-lg text-gray-300 text-center pb-8"
								>
									{blog.title}
								</a>
								<br />

								<small className="text-gray-300">
									<span className="">
										{new Date(blog.publishedAt).toLocaleString()}
									</span>
									<br />
									<div className="mt-4 space-x-2 cursor-pointer">
										{blog.category.map((item) => (
											<span className="border-[2px] p-2 rounded-xl hover:bg-white hover:text-black hover:border-[#292929]">
												<span>{item.name}</span>
											</span>
										))}
									</div>
								</small>
							</div>
						</div>
					))}
				</div>
			</article>
		</div>
	)
}
