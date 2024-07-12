import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function EditPost({ auth, post, categories }) {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [category, setCategory] = useState(post.category_id);

    const updatePost = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Save Changes?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3b82f6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, save it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await Swal.fire({
                    title: "Updated!",
                    text: "Your post has been updated.",
                    icon: "success",
                });
                Inertia.put(route("posts.update", post.id), {
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
            <Head title="Edit Notes" />
            <div className="w-11/12 md:w-4/6 lg:w-3/6 mx-auto pt-10">
                <div className="text-center text-blue-500 font-semibold text-xl">
                    <h2>Edit Notes</h2>
                </div>
                <form onSubmit={updatePost}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="flex justify-center text-center w-full px-3 py-2 mt-5 leading-6 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <textarea
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows="5"
                        className="flex justify-center text-center w-full px-3 py-2 mt-5 leading-6 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        className="flex justify-center text-center w-full px-3 py-2 mt-5 leading-6 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <button
                        type="submit"
                        className="flex justify-center text-center text-white bg-blue-500 hover:bg-blue-600 w-full px-3 py-2 mt-5 leading-6 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        Save
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
