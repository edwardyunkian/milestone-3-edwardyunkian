"use client";

import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState({ title: "", price: "", description: "" });
  const [editingId, setEditingId] = useState(null); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      /* 
          Because Platzi protect their initial seed data and do not permanently save PUT/DELETE requests, 
          the cacheBuster is used to add a timestamp to force the browser to ignore cached versions and fetch fresh data.
          The React state will also be updated manually in handle submit.
      */
      const cacheBuster = new Date().getTime();
      const prodRes = await fetch(`/api/products?t=${cacheBuster}`, { cache: "no-store" });
      const prodData = await prodRes.json();
      setProducts(prodData.slice(0, 100)); // limit the products shown to 100

      const userRes = await fetch("https://api.escuelajs.co/api/v1/users");
      const userData = await userRes.json();
      setUsers(userData.slice(0, 50)); // limit to 50 users
    } catch (error) {
      console.error("Failed to fetch data", error);
      setError("Failed to load dashboard data.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Number(formData.price) <= 0) {
    setError("Price must be greater than zero");
    return;
  }

    try {
      if (editingId) {
        const res = await fetch(`/api/products/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        
        setProducts((prevProducts) =>
          prevProducts.map((p) => (p.id === editingId ? { ...p, title: formData.title, price: Number(formData.price), description: formData.description } : p))
        );
      } else {
        await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        fetchData();
      }
      
      setFormData({ title: "", price: "", description: "" });
      setEditingId(null);
      
    } catch (error) {
      console.error("Failed to save product", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await fetch(`/api/products/${id}`, { method: "DELETE" });
      
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Failed to delete product", error);
    }
  };

  const handleEditClick = (product) => {
    setFormData({ title: product.title, price: product.price, description: product.description });
    setEditingId(product.id);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  if (isLoading) {
    return <div className="text-center py-24 text-xl font-bold">Loading Dashboard...</div>;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      {error && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-600">
            {error}
        </div>)
    }

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sticky top-24">
            <h2 className="text-xl font-semibold mb-4">
              {editingId ? "Edit Product" : "Add New Product"}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input 
                  type="text" 
                  required 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                <input 
                  type="number" 
                  min="1"
                  required 
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  required 
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none" 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full rounded-lg bg-gray-900 px-4 py-2 font-semibold text-white hover:bg-gray-800"
              >
                {editingId ? "Update Product" : "Create Product"}
              </button>
              
              {editingId && (
                <button 
                  type="button"
                  onClick={() => { setEditingId(null); setFormData({title:"", price:"", description:""}); }}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700 hover:bg-gray-50 mt-2"
                >
                  Cancel Edit
                </button>
              )}
            </form>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-12">
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm gap-4">
                  <div className="flex gap-4 items-center">
                    <img src={product.images[0]} alt={product.title} className="w-16 h-16 rounded object-cover bg-gray-100" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{product.title}</h3>
                      <p className="text-blue-600 font-medium">${product.price}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button 
                      onClick={() => handleEditClick(product)}
                      className="flex-1 sm:flex-none rounded bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-100"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(product.id)}
                      className="flex-1 sm:flex-none rounded bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 font-semibold text-gray-900">Avatar</th>
                    <th className="px-6 py-3 font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-3 font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-3 font-semibold text-gray-900">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4">
                        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full bg-gray-100" />
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 text-gray-500">{user.email}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700 capitalize">
                          {user.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}