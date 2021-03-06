import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DevImage from "../components/images/homepage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="container">
        <section>
          <div className="row">
            <div className="col-6 home">
              Build and Integrate your payment products and solutions 
            </div>
            <div className="col-6">
              <DevImage />
            </div>
          </div>
        </section>
      </div>
  </Layout>
)

export default IndexPage
