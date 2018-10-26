// import React,{Component} from 'react';

// class Home extends Component {

//     render(){
//         return(
//             <layout>
//                 {
//                 (home.ribbon.ribbon_info_section.content)&&
//                 <div classNameName="ribbon-wrap text-center">
//                     <div classNameName="container">
//                         {home.ribbon.ribbon_info_section.content}
//                         <a classNameName="cta" title={ribbon.ribbon_info_section.cta.title} target ={(ribbon.ribbon_info_section.cta.open_in_new_tab)&&"_blank"} href={ribbon.ribbon_info_section.cta.link} id="ribbon-info" type="button">{ribbon.ribbon_info_section.cta.title}</a>
//                         <span classNameName="glyphicon glyphicon-remove icon-cancel" id="hide"></span> 
//                     </div>
//                 </div>
//                 }
//                 <section className="main-wrapper">	
// 		            <div className="banner-wrapper" style={{"backgroundImage":"url("+entry.banner_section.background_image+")"}} >
// 			        <Header />
// 			        <div className="container top">
// 			             <div className="row">
//                             <div className="col-md-6 col-sm-6 col-xs-12 intro-para">
//                                 <h1 className="cover-heading">{home.entry.banner_section.title}</h1>
//                                 <p><i>{entry.banner_section.desc}</i></p>
//                                 {
//                                 (entry.banner_section.cta.title.length)&&
//                                 <div className="cta-wrap">
//                                     <a href={entry.banner_section.cta.href} className="btn btn-primary">
//                                     {entry.banner_section.cta.title}</a>
//                                 </div>
//                                 }
//                             </div>
//                         </div>
// 		            </div>
// 		        </div>

//                 <div className="container">
//                     <div className="logo-wrap clearfix">
//                         <ul>
                        
//                         {
//                             home.entry.partners_section.company_logos.map((logo) => {
//                             return <li><img alt={logo.title} src={getAssetUrl(logo.logo)} /></li>
//                             })
//                         }
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="about-section">
//                     <div className="container">
//                         <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12 intro-wrap text-center">
//                             <h2>{entry.who_we_are.title}</h2>
//                             <p>{entry.who_we_are.desc}</p>
//                         </div>	
//                     </div>
//                 </div>

//                 <div className="services-wrap container" id="1">
//                     <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12 intro-wrap text-center">
//                         <h2>{entry.services_section.title}</h2>
//                         <p>{entry.services_section.desc}</p>
//                     </div>
//                     <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
//                         {
//                         entry.services_section.services.map((service) =>{
//                             return  <div className="services clearfix">				
//                                         <div className="{{loop.index == 2}}{% if loop.index == 2 or loop.index == 4 %} col-md-5 col-md-push-7 col-sm-5 col-sm-push-7 col-xs-5 col-xs-push-7 {% endif %} col-md-5 col-sm-5 col-xs-5">
//                                             <img src="{{getAssetUrl(service.image)}}"/>
//                                         </div>
//                                         <div className="{% if loop.index == 2 or loop.index == 4 %} col-md-7 col-md-pull-5 col-sm-7 col-sm-pull-5 col-xs-7 col-xs-pull-5 {% endif %} col-md-7 col-sm-7 col-xs-7">
//                                             <h3>{service.title}</h3>
//                                             <p>{service.desc}</p>
//                                         </div>
//                                     </div>
//                                 })
//                         }
//                     </div>	
//                 </div>

// 		<div className="solutions-wrap">
// 	     	<div className="container">
// 			    <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
// 			        <h2 className="text-center">{entry.solutions_section.title}</h2>
// 		            <div className="solutions-row clearfix">
// 		            	<div className="col-md-6 col-md-push-6 col-sm-12">
	
//                             {
//                             entry.solutions_section.solutions.map((sol)=>{
// 	                    	    return <img alt="" className="img-responsive" src={getAssetUrl(sol.image)} />
//                             })
//                             }
	        
// 	                    </div>
// 	                    <div className="col-md-6 col-md-pull-6 col-sm-12">
//                             {
//                                entry.solutions_section.solutions.map((sol) => {
//                                   return <div>
//                                         <h3>{sol.title} </h3>
//                                         <p>{sol.desc}</p>
//                                         <div className="topics">
//                                             {sol.topics}
//                                         </div>
//                                         </div> 
//                                }) 
//                             }
// 	                	</div>

// 		            </div>
// 				</div>
// 			</div>
// 		</div>	

// 		{ (entry.technology_section.show_hide)&&
// 		<div className="technology-wrap"  id="2" style="background-image:url({{getAssetUrl(entry.technology_section.background_image)}});">
// 			<div className="container">
// 				<div className="col-sm-5 col-sm-push-7">
// 					<h2>{entry.technology_section.title}</h2>
// 					<p>{entry.technology_section.desc}</p>
//                     { (entry.technology_section.cta.title)&&
// 					<div className="cta-wrap">
// 						<a href="{{entry.technology_section.cta.href}}" className="btn btn-primary">{entry.technology_section.cta.title}</a>
// 					</div>
//                     }
// 				</div>
// 				<div className="col-sm-7 col-sm-pull-5">
// 					<img src={getAssetUrl(entry.technology_section.icon_image)} className="img-responsive" />
// 				</div>
				
// 			</div>
// 		</div>
// 		}
            
//             {
//                 (!entry.technology_section.show_hide)&&
//                 <div className="divider container"></div>
//             }
			

// 		<div className="container testimonial-wrap" id="3">
// 			<div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12 intro-wrap text-center">
// 				<h2>{entry.customer_section.title}</h2>
// 				<p>{entry.customer_section.desc}</p>
// 			</div>
// 			<div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
// 				<div className="testimonials clearfix">
//                 {
//                     entry.customer_section.testimonial.map((customer)=>{
//                         return <div className="quote-wrapper">
//                                 <h3>{customer.quote}</h3>
//                                 <div className="customer">
//                                     <span className="comapany-logo"><img src={getAssetUrl(customer.logo)} alt={customer.logo.title} /></span>
//                                     <span className="customer">{customer.title}</span>
//                                 </div>
//                             </div>
//                     })
//                         }
//                         </div>
//                     </div>
//                 </div>

//                 <div className="action-banner" id="4" style="background-image:url({{getAssetUrl(entry.collaborate_section.background_image)}});">
//                     <div className="container text-center">
//                         <h2>{entry.collaborate_section.title}</h2>
//                         <div className="cta-wrap">
//                             <a href="{{entry.collaborate_section.cta.href}}" className="btn btn-secondary">{entry.collaborate_section.cta.title}</a>
//                         </div>
//                     </div>
//                 </div>
// 		        <Footer />
//                 </section>
//             </layout>
//         )
//     }

// }

// export default Home;

import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello Guys</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
