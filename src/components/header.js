// import React from 'react'

// export default class Header extends React.Component {
//   render(){
//     return(
//       //if (not ribbon.ribbon_info_section.is_enable_on_only_home_page_) and (ribbon.is_ribbon_disabled)
//         // info-ribbbon section
//         <div className = "ribbon-wrap text-center">
//           <div className = "container">
//             {data.ribbon.ribbon_info_section.content}
//             <a className = "cta" title = {ribbon.ribbon_info_section.cta.title} href="{data.ribbon.ribbon_info_section.cta.link}" id="ribbon-info" type="button">{data.ribbon.ribbon_info_section.cta.title}</a>
//             <span className = "glyphicon glyphicon-remove icon-cancel" id = "hide"></span> 
//           </div>
//         </div>
//     )
//   }
// }

// {%- set ribbon = get('ribbon_content')-%}
//     {%- if (not ribbon.ribbon_info_section.is_enable_on_only_home_page_) and (ribbon.is_ribbon_disabled) -%}
//     <!-- info-ribbbon section -->
//     <div class="ribbon-wrap text-center">
//             <div class="container">
//                 {{ribbon.ribbon_info_section.content}}
//                 <a class="cta" title="{{ribbon.ribbon_info_section.cta.title}}" {% if ribbon.ribbon_info_section.cta.open_in_new_tab %} target="_blank" {% endif %} href="{{ribbon.ribbon_info_section.cta.link}}" id="ribbon-info" type="button">{{ribbon.ribbon_info_section.cta.title}}</a>
//                 <span class="glyphicon glyphicon-remove icon-cancel" id="hide"></span> 
//             </div>
//         </div>
//     {%- endif -%}
// {%- if entry.url == "/"-%}



//old code
// export const pageQuery = graphql`
//     query ab {
//       contentstackHomePage {
//         title
//       }
//     }`

//old code
// const Header = ({ siteTitle }) => (
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </div>
// )

// export default Header
