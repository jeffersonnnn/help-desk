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
    <div className="container">
    <div className="row my-5">
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Accept Payments</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">FUnds Transfer</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Reference</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
    </div>

    </div>
  </Layout>
)

export default IndexPage
