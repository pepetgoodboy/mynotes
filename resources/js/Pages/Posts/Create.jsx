import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function CreatePost({ auth, categories }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const storePost = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Success!",
            text: "Successful Add Notes",
            icon: "success",
            confirmButtonColor: "#3b82f6",
            confirmButtonText: "Oke",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.post(route("posts.store"), {
                    title: title,
                    content: content,
                    category_id: category,
                });
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Notes
                </h2>
            }
        >
            <Head title="Add Notes" />
            <div className="w-11/12 md:w-4/6 lg:w-3/6 mx-auto pt-10">
                <div className="text-center text-blue-500 font-semibold text-xl">
                    <h2>Add Notes</h2>
                </div>
                <form onSubmit={storePost}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="Enter Title"
                        className="flex justify-center text-center w-full px-3 py-2 mt-5 leading-6 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <textarea
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows="5"
                        placeholder="Enter Fill"
                        className="flex justify-center text-center w-full px-3 py-2 mt-5 leading-6 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        className="flex justify-center text-center w-full px-3 py-2 mt-5 leading-6 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="" disabled>
                            Select a category
                        </option>
                        {categories.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <button
                        type="submit"
                        className="flex justify-center text-center text-white bg-blue-500 hover:bg-blue-600 w-full px-3 py-2 mt-5 leading-6 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        Add Notes
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
