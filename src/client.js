import sanityClient, { SanityClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
    projectId:process.env.PROJECT_SANITY_SHAREME_ID,
    dataset:'production',
    apiVersion:'2023-03-03',
    useCdn:true,
    token:process.env.PROJECT_SANITY_SHAREME_TOKEN,
}  
)