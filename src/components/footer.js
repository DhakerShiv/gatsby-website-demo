import React from 'react'

const Footer = data => (
  <footer className = "footer footer-section">
    <div className = "container">
      <div className = "row">
        <div className = "legal-wrap col-md-12">
          {data.footer.copyright_text}
          <ul className = "footer-link pull-right">
            {/* for(footer in footer.footer_section.footer_nav){
              <li><a href = {footer.link}>{footer.link}</a></li>
            } */}
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

// export default class Footer extends React.Component {
//   render () {
//     return (
//       <footer className = "footer footer-section">
//         <div className = "container">
//           <div className = "row">
//             <div className = "legal-wrap col-md-12">
//               {data.footer.footer_section.copyrights_text}
//               <ul className = "footer-link pull-right">
//                 for(footer in data.footer.footer_section.footer_nav){
//                   <li><a href = {footer.link}>{footer.link}</a></li>
//                 }
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>
//     )
//   } 
// }

// {%- set footer = get("footer") -%}
// <footer class="footer footer-section">
//     <div class="container">
//         <div class="row">
//             <div class="legal-wrap col-md-12">
//                 {{footer.footer_section.copyrights_text}}
//                 <ul class="footer-links pull-right">
//                     {%- for footer in footer.footer_section.footer_nav -%}
//                     <li><a href="{{footer.link}}">{{footer.title}}</a></li>
//                     {%- endfor -%}
//                 </ul>
//             </div>
//         </div>
//     </div>
// </footer>