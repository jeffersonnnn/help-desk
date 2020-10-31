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
            <div className="col-sm">
              Build and Integrate your pa 
            </div>
            <div className="col-sm">
              <DevImage />
            </div>
          </div>
        </section>
      </div>
  </Layout>
)

export default IndexPage
