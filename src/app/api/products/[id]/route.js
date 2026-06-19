import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const PLATZI_API = "https://api.escuelajs.co/api/v1/products";

export async function PUT(request, { params }) {
  const { id } = await params;
  
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token");

    if (!token) {
    return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
    );
    }
    const body = await request.json();
    const updatedProduct = {
      title: body.title,
      price: Number(body.price),
      description: body.description
    };
    const res = await fetch(`${PLATZI_API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct)
    });
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

export async function DELETE(_request, { params }) {
    const { id } = await params;
  
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token");

    if (!token) {
    return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
    );
    }
    const res = await fetch(`${PLATZI_API}/${id}`, { method: "DELETE" });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}