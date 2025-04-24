// app/api/search/route.js
import { NextResponse } from 'next/server';
import { performSemanticSearch } from '../../../lib/semanticSearch'; // Adjust path

export async function POST(request) {
  try {
    const { query, topK = 5 } = await request.json();

    if (!query) {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      );
    }

    const results = await performSemanticSearch(query, topK);

    return NextResponse.json({ results });
  } catch (error) {
    console.error('API Search Route Error:', error);
    return NextResponse.json(
      { error: 'Failed to perform search', details: error.message },
      { status: 500 }
    );
  }
}
