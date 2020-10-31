import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DevImage from "../components/images/homepage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 jumbotext">
          Build and Integrate your payment products and solutions
        </div>
        <div className="col-md-6 d-none d-md-block jumboimg">
          <DevImage />
        </div>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
