import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function CreateCategories({ auth }) {
    const [name, setName] = useState("");

    const storeCategories = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Success!",
            text: "Successful Add Category!",
            icon: "success",
            confirmButtonColor: "#3b82f6",
            confirmButtonText: "Oke",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.post(route("categories.store"), {
                    name: name,
                });
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Category
                </h2>
            }
        >
            <Head title="Add Category" />
            <div className="w-11/12 md:w-4/6 lg:w-3/6 mx-auto pt-10">
                <div className="text-center text-blue-500 font-semibold text-xl">
                    <h2>Add Category</h2>
                </div>
                <form onSubmit={storeCategories}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter Name"
                        className="flex justify-center text-center w-full px-3 py-2 mt-5 leading-6 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="flex justify-center text-center text-white bg-blue-500 hover:bg-blue-600 w-full px-3 py-2 mt-5 leading-6 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        Add Category
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
