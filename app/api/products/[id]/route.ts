// app/api/products/[id]/route.ts
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params;
  const product = await fetchProductById(id); // Fetch product by ID dari database
  return NextResponse.json(product);
}
