import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 

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
              two column
            </div>
          </div>
        </section>
      </div>
  </Layout>
)

export default IndexPage
