function Topbar() {
    return (
        <div className="topbar">

            <input
                className="search"
                placeholder="Search posts, analytics, team..."
            />

            <button className="create-btn">
                + Create Post
            </button>

        </div>
    );
}

export default Topbar;