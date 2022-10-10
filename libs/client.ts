import { createClient } from 'microcms-js-sdk'

export const client = createClient({
	serviceDomain: 'bear-blog',
	apiKey: process.env.MICRO_CMS_API_KEY || '',
})
