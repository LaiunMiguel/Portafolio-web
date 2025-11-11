export default function Navbar() {

    
    return (
        <nav className="p-5 bg-secondary text-white flex justify-center gap-6">
            <ul className="flex space-x-14">
                <li className="hover:underline font-bold"><a href="/">Home</a></li>
                <li className="hover:underline font-bold"><a href="/projects">Projects</a></li>
                <li className="hover:underline font-bold"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        
    )
}
