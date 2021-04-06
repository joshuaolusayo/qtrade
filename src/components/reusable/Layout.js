import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import Navigation from "./Navigation";

const Layout = ({ component: Component, ...restOfProps }) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<Route
			render={(props) => (
				<div className="layout">
					<div className="container-fluid px-0">
						<div className="mobile d-md-none">
							<header className="d-flex justify-content-between align-items-center px-sm-3 d-md-none py-3">
								<Hamburger toggled={isOpen} toggle={setOpen} color="#09157f" />
								<span>{restOfProps.name}</span>
								<img className="object-fit-cover rounded-circle profile__pic" src="/assets/profile-img.png" alt="Ayomide" />
							</header>
							<Component {...restOfProps} />
							{isOpen ? (
								<div>
									<div className="layout-mobile-profile">
										<svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6.9998 16.3334C7.91647 16.3334 8.66647 15.5834 8.66647 14.6667H5.33313C5.33313 15.5834 6.0748 16.3334 6.9998 16.3334ZM11.9998 11.3334V7.16671C11.9998 4.60837 10.6331 2.46671 8.2498 1.90004V1.33337C8.2498 0.641707 7.69147 0.083374 6.9998 0.083374C6.30813 0.083374 5.7498 0.641707 5.7498 1.33337V1.90004C3.35813 2.46671 1.9998 4.60004 1.9998 7.16671V11.3334L0.924799 12.4084C0.399799 12.9334 0.766465 13.8334 1.50813 13.8334H12.4831C13.2248 13.8334 13.5998 12.9334 13.0748 12.4084L11.9998 11.3334Z" />
										</svg>
									</div>
									<Navigation />
								</div>
							) : (
								<></>
							)}
						</div>
						<div className="d-none d-md-grid layout--grid">
							<Navigation />
							<Component {...restOfProps} />
						</div>
					</div>
				</div>
			)}
		/>
	);
};

export default Layout;
