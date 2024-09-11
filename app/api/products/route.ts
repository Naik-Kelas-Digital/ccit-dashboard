// app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await fetchProductsFromDatabase(); // Fetch dari database
  return NextResponse.json(products);
}
