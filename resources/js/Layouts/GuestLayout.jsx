import Logo from "../../../public/assets/images/logo.png";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
            <div>
                <Link href="/">
                    <h2 className="text-4xl font-semibold text-primary py-8">
                        My Notes
                    </h2>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
