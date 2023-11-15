
import { createClient, Entry } from 'contentful';

const client = createClient({
  space: 'g1d2xkvo3r1p',
  accessToken: '4OFKuiDOBYK97ZN-dWwC5a3hGKlFNqAE9dvssWw0EfU',
});

interface ContentfulEntryFields {
  title: string;
  content: object;
  metaDescription: string;
  featuredImage: object
  // Add any other fields you need
}

export interface ContentfulEntry extends Entry<ContentfulEntryFields> {}

export const getSingleEntry = async (entryId: string): Promise<ContentfulEntry | null> => {
  try {
    const response = await client.getEntry<ContentfulEntryFields>(entryId);
    return response as ContentfulEntry;
  } catch (error) {
    // Handle error, log, or throw as needed
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