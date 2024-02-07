
require('dotenv').config()
import { createClient, Entry } from 'contentful';


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_API!,
});

interface ContentfulEntryFields {
  contentTypeId : string,
  fields: {
    title: string,
    slug: string,
    body: string,
    content: object
    metaDescription: string
    featuredImage: object
  }
}

export interface ContentfulEntry extends Entry<ContentfulEntryFields> {}

export const getSingleEntry = async (entryId: string): Promise<ContentfulEntry | null> => {
  try {
    const response = await client.getEntry<ContentfulEntryFields>(entryId);
    return response as ContentfulEntry;
  } catch (error) {
    console.error('Error fetching entry:', error);
    return null;
  }
};


export const getEntriesByType = async (contentType: string) => {
  try {
    const entries = await client.getEntries({
      content_type: contentType
    })

    return entries.items
  } catch (err) {
    console.error('Error', err)
    return null
  }
}

export const getEntryBySlug = async (slug: string): Promise<Entry<any> | null> => {
  try {
    const entries = await client.getEntries({
      content_type: 'article',
      'fields.slug': slug,
    })

    if (entries.items.length >0) {
      return entries.items[0]
    }

    return null
  } catch(err) {
    console.error('Error', err)
    return null
  }
}

export const getAllSlugs = async (): Promise<string[]> => {
  try {
    const entries = await client.getEntries({
      content_type: 'article'
    })

    const slugs = entries.items.map((entry) => entry.fields.slug) as string[]
    return slugs

  } catch (err) {
    console.error('Error', err)
    return []
  }
}