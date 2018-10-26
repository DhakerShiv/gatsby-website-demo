import React,{Component} from 'react'

class Header extends Component {
  
	render(){
    const ribbon = this.props.ribbon
    const header = this.props.header
			return(
				<div>
          
          {console.log(ribbon)}
          {console.log(header)}
					{(!(ribbon.ribbon_info_section.is_enable_on_only_home_page_) && ribbon.is_ribbon_disabled)?
						<div className="ribbon-wrap text-center">
									<div className="container">
											{ribbon.ribbon_info_section.content}
											<a className="cta" title={ribbon.ribbon_info_section.cta.title}  target={(ribbon.ribbon_info_section.cta.open_in_new_tab)&&"_blank"} href="{ribbon.ribbon_info_section.cta.link}" id="ribbon-info" type="button">{ribbon.ribbon_info_section.cta.title}</a>
											<span className="glyphicon glyphicon-remove icon-cancel" id="hide"></span> 
									</div>
						</div>: null}
						{
              //(window.location.pathname==='/')?
              (true)?
							<header>
								<nav className={(ribbon.ribbon_info_section.is_enable_on_only_home_page_ || ribbon.is_ribbon_disabled)&&"custom-margin"} id="navbar">
											<div className="container">
													<div className="navbar-header">
															<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
																	<span className="sr-only">Toggle navigation</span>
																	<span className="icon-bar"></span>
																	<span className="icon-bar"></span>
																	<span className="icon-bar"></span>
															</button>
                              {console.log(header.logo_section.logo.url)}
															<a className="navbar-brand" href="#"><img src={header.logo_section.logo.url} alt="" width="100"/></a>
													</div>
													<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
															<ul className="nav navbar-nav navbar-right">
																	{
																	header.nav_section.nav_menu.map((menu) => {
																		return <li key = {menu.link}><a className={(menu.title === 'Contact Us')?'waypoint btn btn-primary':'waypoint'} href={menu.link}>{menu.title}</a></li>
																	})
																}	
															</ul>
													</div>
											</div>
									</nav>
							</header>:
							<header>
							<nav className="navbar secondary-nav">
									<div className="container">
											<div className="navbar-header">
													<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
															<span className="sr-only">Toggle navigation</span>
															<span className="icon-bar"></span>
															<span className="icon-bar"></span>
															<span className="icon-bar"></span>
													</button>
													<a className="navbar-brand" href={header.logo_section.link}><img src={header.logo_section.logo.url} alt="" /></a>
											</div>
											<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
													<ul className="nav navbar-nav navbar-right">
															{
																header.nav_section.nav_menu.map((menu)=>{
																	return <li key = {menu.link}><a className={(menu.title === 'Contact Us')?'btn btn-primary':''} href={menu.link}>{menu.title}</a></li>
																})
															}
													</ul>
											</div>
									</div>
							</nav>
					</header>
					
						}
				</div>
			)
		}
}

export default Header;