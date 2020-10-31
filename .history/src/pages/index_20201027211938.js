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
          <div className="card gridcard h-100">
            <div className="card-body">
              <h5 className="card-title">Accept Payments</h5>
              <p className="card-text">
                Receive payments via multiple channels including Local and
                International Debit/Credit Cards, Online Banking, USSD etc.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <h5 className="card-title">Funds Transfer</h5>
              <p className="card-text">
                Send funds Account-to-Account between Commercial and
                Micro-Finance Banks
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <h5 className="card-title">Reference Data Services</h5>
              <p className="card-text">
                Validate your customer’s identity and associated information in
                an automated manner.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-sm-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <h5 className="card-title">Lending Support Services</h5>
              <p className="card-text">
              Expand your loan portfolio as well as your lendable ecosystem and ensure guaranteed repayments with near zero default rates. 
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <h5 className="card-title">Funds Transfer</h5>
              <p className="card-text">
                Send funds Account-to-Account between Commercial and
                Micro-Finance Banks
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <h5 className="card-title">Reference Data Services</h5>
              <p className="card-text">
                Validate your customer’s identity and associated information in
                an automated manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
