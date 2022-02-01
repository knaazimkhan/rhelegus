const Header = () => {
	return (
		<nav
			className='navbar navbar-expand-lg navbar-light bg-light sticky-top'
			id='navber'
		>
			<div className='container'>
				<a className='navbar-brand' href='/'>
					RHELEGUS<span>.</span>
				</a>
				<div className='menu-main' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto menu-item'>
						{/* <li className="nav-item">
                        <a className="nav-link nl-m-top abc mobile-content-hide"><i className="fa fa-search" aria-hidden="true"></i></a>
                        <div className="search top-search">
                            <button type="button" className="close fix-close">×</button>
                            <form>
                                <input type="search" value="" placeholder="Search Here" />
                                <button type="submit" className="btn btn-primary">Search</button>
                            </form>
                        </div>
                    </li> */}
						{/* <li className="nav-item">
                        <a className="nav-link cart nl-m-top mobile-content-hide" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-shopping-bag" aria-hidden="true"></i><span>2</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nl-m-top account-icon" href="login.html"><i className="fa fa-user" aria-hidden="true"></i></a>
                    </li> */}
						<li className='nav-item'>
							<a className='nav-link menu-icon'>
								<i
									className='fa fa-bars'
									aria-hidden='true'
								></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='custom-menubar'>
				<ul className='nav-link-block'>
					<li>
						<a href='#banner' className='menu-link'>
							Home
						</a>
					</li>
					<li>
						<a href='#watch' className='menu-link'>
							Story
						</a>
					</li>
					<li>
						<a href='#games' className='menu-link'>
							Collection
						</a>
					</li>
					<li>
						<a href='#about' className='menu-link'>
							Specification
						</a>
					</li>
				</ul>
				{/* <ul className="responsive-nav">
                <li>
                    <a className="nav-link nl-m-top abc"><i className="fa fa-search" aria-hidden="true"></i></a>
                    <div className="search top-search">
                        <button type="button" className="close fix-close">×</button>
                        <form>
                            <input type="search" value="" placeholder="Search Here" />
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                </li>
                <li>
                    <a className="nav-link cart nl-m-top" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-shopping-bag" aria-hidden="true"></i><span>2</span></a>
                </li>
                <li>
                    <a className="nav-link nl-m-top" href="login.html"><i className="fa fa-user" aria-hidden="true"></i></a>
                </li>
            </ul> */}
				<div className='menu-close'>
					<a className='hide-menu-btn'>
						<i className='fa fa-times' aria-hidden='true'></i>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Header;
