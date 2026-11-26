function Header() {
    return (
        <nav>
            <div className="logo-container">
                <img src="/src/assets/lan.jpg" alt="Logo" />
                <p className="logo">Reactify</p>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <label>
                <input type="search" placeholder="Search..." />
            </label>
        </nav>
    )
}

export default Header