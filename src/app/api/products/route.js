import { NextResponse } from "next/server";

const PLATZI_API = "https://api.escuelajs.co/api/v1/products";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const res = await fetch(PLATZI_API, { cache: "no-store" });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.title || !body.price || !body.description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    /* 
      The code is focused on core CRUD concepts (Title, Price, Description) 
      and not on building a third-party image upload system. 
      Since the Platzi API requires 'categoryID' and 'images' to create a product, 
      default dummy data is created for these two specific fields.
    */

    const newProduct = {
      title: body.title,
      price: Number(body.price),
      description: body.description,
      categoryId: 1, 
      images: ["https://i.imgur.com/QkIa5tT.jpeg"]
    };

    const res = await fetch(PLATZI_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct)
    });
    
    const data = await res.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}