import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

export default function UserIndex({ auth, users }) {
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3b82f6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success",
                });
                Inertia.delete(route("users.destroy", id));
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
            <Head title="Users" />

            <div className="py-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6">
                        <Link
                            href={route("users.create")}
                            className="px-4 py-2 rounded-md bg-blue-500 text-white"
                        >
                            Add Users
                        </Link>
                        <div className="border border-neutral-200 rounded-lg overflow-auto mt-10">
                            <table className="min-w-full divide-y divide-neutral-200">
                                <thead className="bg-blue-500">
                                    <tr className="text-white">
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-start text-sm"
                                        >
                                            No
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-start text-sm"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-start text-sm"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-sm"
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-sm"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-200 bg-white">
                                    {users.map((user, index) => (
                                        <tr
                                            key={index}
                                            className="font-medium text-gray-900"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                {user.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm capitalize">
                                                {user.role}
                                            </td>
                                            <td className="flex justify-center items-center gap-2 mt-3">
                                                <Link
                                                    href={route(
                                                        "users.edit",
                                                        user.id
                                                    )}
                                                    className="flex items-center gap-[2px] text-sm"
                                                >
                                                    <FaRegEdit className="text-[#666666] text-xl" />
                                                    <p>Edit</p>
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(user.id)
                                                    }
                                                    className="flex items-center gap-[2px] text-sm"
                                                >
                                                    <MdOutlineDelete className="text-red-600 text-xl" />
                                                    <p>Delete</p>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {users.length === 0 && (
                                        <tr>
                                            <td
                                                colSpan="5"
                                                className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 font-medium"
                                            >
                                                No Users Found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
