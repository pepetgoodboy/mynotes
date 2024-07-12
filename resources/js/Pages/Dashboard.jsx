import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Note from "../../../public/assets/images/note2.png";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4 text-gray-900 font-semibold">
                            Welcome {auth.user.name} !
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-[40%]">
                            <img src={Note} alt="Note" />
                        </div>
                        <div className="w-full md:w-[60%] flex flex-col justify-center md:-mt-14 px-4 font-medium">
                            <p className="p-2 text-gray-900 indent-8 text-justify">
                                Welcome to{" "}
                                <span className="text-primary text-xl font-semibold">
                                    My Notes!
                                </span>{" "}
                                We are a platform designed to help you store and
                                organize your important notes effortlessly and
                                securely. Whether it's creative ideas or daily
                                to-do lists,{" "}
                                <span className="text-primary text-xl font-semibold">
                                    My Notes
                                </span>{" "}
                                allows you to access your notes anytime,
                                anywhere. Start organizing your ideas and
                                inspirations with{" "}
                                <span className="text-primary text-xl font-semibold">
                                    My Notes
                                </span>{" "}
                                today!. Our user-friendly interface ensures that
                                managing your notes is intuitive and efficient.
                            </p>
                            <p className="p-2 text-gray-900 indent-8 text-justify">
                                With powerful features like tagging, searching,
                                and syncing across devices,{" "}
                                <span className="text-primary text-xl font-semibold">
                                    My Notes
                                </span>{" "}
                                empowers you to stay productive and organized.
                                Whether you're jotting down meeting minutes,
                                capturing brainstorming sessions, or simply
                                keeping track of important information,{" "}
                                <span className="text-primary text-xl font-semibold">
                                    My Notes
                                </span>{" "}
                                is your reliable companion for keeping
                                everything in one place.
                            </p>
                        </div>
                    </div>
                </div>
                <footer className="px-4 py-4 text-xs text-neutral-500 font-medium">
                    <p className="text-center">
                        &copy; 2024 My Notes by Kelompok 4 | All Rights Reserved
                        | Powered by Laravel{" "}
                    </p>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
