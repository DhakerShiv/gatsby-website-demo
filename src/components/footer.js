import React from 'react'

const Footer = data => (
  <footer className = "footer footer-section">
    <div className = "container">
      <div className = "row">
        <div className = "legal-wrap col-md-12">
          {data.footer.footer_section.copyrights_text}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer