import Link from "next/link";

const NavBar: React.FC = () => {
    return(
        <div className="sticky top-0 bg-slate-900 text-white w-full flex justify-center space-x-5 py-6 text-xl">
            <Link href={"/"}>Home</Link>
            <Link href={"/pets"}>Pets</Link>
            <Link href={"/add-pet"}>Add Pet</Link>
        </div>
    )
}

export default NavBar;