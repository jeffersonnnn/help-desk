import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DevImage from "../components/"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="container">
        <section>
          <div className="row">
            <div className="col-sm">
              One column
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
