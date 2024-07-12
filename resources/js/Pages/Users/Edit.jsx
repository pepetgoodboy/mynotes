import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function EditUser({ auth, user }) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [role, setRole] = useState(user.role);

    const updateUser = async (e) => {
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
                    text: "User has been updated.",
                    icon: "success",
                });
                Inertia.put(route("users.update", user.id), {
                    name: name,
                    email: email,
                    role: role,
                });
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Users
                </h2>
            }
        >
            <Head title="Edit Users" />

            <div className="w-11/12 md:w-4/6 lg:w-3/6 mx-auto pt-10">
                <div className="text-center text-blue-500 font-semibold text-xl">
                    <h2>Edit Users</h2>
                </div>
                <form onSubmit={updateUser}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="flex justify-center text-center w-full px-3 py-2 mt-5 leading-6 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex justify-center text-center w-full px-3 py-2 mt-5 leading-6 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        className="flex justify-center text-center w-full px-3 py-2 mt-5 leading-6 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select a role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
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
