
const NavBar = () => {

    const navItems = <>
        <button className="custom-font">Home</button>
        <button>Learn</button>
        <button>Community</button>
        <button>Developers</button>
    </>

    return (
        <div className="navbar bg-base-100 py-7 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                        {navItems}
                    </ul>
                </div>
                <img className="w-20" src="../../../public/logo.png" alt="LOGO" />
                <a style={{ fontFamily: "'JetBrains Mono', sans-serif" }} className="mx-3 font-semibold text-xl uppercase">Alishan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center justify-center gap-5 text-lg">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a style={{ fontFamily: "'JetBrains Mono', sans-serif" }} className="btn btn-primary normal-case btn-sm">Use Alishan</a>
            </div>
        </div>
    );
};

export default NavBar;