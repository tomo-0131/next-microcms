/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

interface Props {
	children: React.ReactNode
}

export const siteTitle: string = 'Next.js Blog'

const name = 'BearDev🐻'

export default function Layout({ children }: Props) {
	return (
		<div className="bg-[#292929] min-h-screen">
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<div className="flex justify-center items-center pt-12 ">
					<Link href="/">
						<img
							src="/images/white-bear-02.png"
							alt=""
							className="text-center h-24 w-24 rounded-full hover:duration-200 hover:scale-110"
						/>
					</Link>
				</div>
				<h1 className="text-3xl font-semibold tracking-[20px] text-gray-400 text-center pt-4 hover:text-white">
					{name}
				</h1>
			</header>

			<main>{children}</main>
		</div>
	)
}
