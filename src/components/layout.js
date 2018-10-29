import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'
import '../../static/main.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query footer {
        contentstackFooter {
          footer_section {
            copyrights_text
          } 
        }
        contentstackHeader {
          logo_section {
            logo {
              url
            }
            link
          }
          nav_section {
           nav_menu {
             title
             link
           }
          }
        }
        contentstackRibbonContent{
          ribbon_info_section {
            is_enable_on_only_home_page_
            content
            cta {
              title
              open_in_new_tab
              link
            }
          }
          is_ribbon_disabled
        }

      }
    `}

    render={data => (
      <>
        <Helmet
          // title={data.site.siteMetadata.title}
          title = "Yo!"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header header = {data.contentstackHeader} ribbon = {data.contentstackRibbonContent} />
        {children}
        <Footer footer = { data.contentstackFooter }/>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
