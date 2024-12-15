import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  newsletter: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email(),
    }),
    async handler({ email }) {
      const { CODA_API_KEY, CODA_DOC_ID, CODA_TABLE_ID, CODA_EMAIL_COLUMN_ID } = import.meta.env;
      
      const response = await fetch(
        `https://coda.io/apis/v1/docs/${CODA_DOC_ID}/tables/${CODA_TABLE_ID}/rows`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${CODA_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            rows: [
              {
                cells: [
                  {
                    column: CODA_EMAIL_COLUMN_ID,
                    value: email
                  }
                ]
              }
            ]
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Coda API error: ${response.statusText}`);
      }

      return { success: true };
    }
  })
}; 