// import Particles from 'react-tsparticles';

// import particlesConfig from '../config/configParticles';
import BannerImg from '../images/banner.jpg';

const Banner = () => {
	return (
		<section id='banner'>
			<div className='particles-js-canvas-el' id='particles-js'>
				{/* <Particles
					height='100vh'
					width='100vw'
					params={particlesConfig}
				/> */}
			</div>
			<div className='backtotop'>
				<a href='#banner'>
					<i className='fa fa-angle-up' aria-hidden='true'></i>
				</a>
			</div>
			<div className='follow-us'>
				<span>Follow us</span>
				<a href='https://twitter.com/rhelegus' target='_blank'>
					<i className='fab fa-twitter'></i>
				</a>
				<a href='https://discord.gg/QDX46vfM4R' target='_blank'>
					<i className='fab fa-discord'></i>
				</a>
			</div>
			{/* <div className='banner-arrow'>
				<i className='fa fa-angle-left arrow-al' aria-hidden='true'></i>
				<i
					className='fa fa-angle-right arrow-ar'
					aria-hidden='true'
				></i>
			</div> */}
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 col-sm-8 col-md-6 landscape-m-auto tab-m-auto banner-img'>
						<img
							src={BannerImg}
							alt='banner-img'
							className='img-fluid'
						/>
						{/* <!--<a className="vid-btn venobox" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=ClUFJlGBuME"><i className="fa fa-play" aria-hidden="true"></i></a>*/}
					</div>
					<div className='col-lg-5 m-auto banner-txt'>
						<div className='banner-main'>
							<div className='banner-item'>
								<h3>Project</h3>
								<h3>Rhelegus</h3>
								<p>
									"If war is madness then Rhelegus is living
									in the apocalypse" - The True Gods of
									Xorbin. 7777 Programmatically Unique NFTs
									waiting to be awaken on the ETH Blockchain.
									<br />
									All priced at <b>ETH 0.077</b>
								</p>
								<a href='#' className='main-btn'>
									Mint Now
								</a>
							</div>
							{/* <div className="banner-item">
                            <h3>Gaming</h3>
                            <h3>Online Shop</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia repudiandae minima earum odit iure.</p>
                            <a href="#" className="main-btn">Join Community</a>
                        </div>*/}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
