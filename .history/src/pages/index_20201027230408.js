import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Images
import DevImage from "../components/images/homepage"
import AcceptPay from "../components/images/cardacceptpay"

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
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <h5 className="card-title gridcard-title">Accept Payments</h5>
              <div class="row"></div>
              <p className="card-text col-6 gridcard-text">
                Receive payments via multiple channels including Local and
                International Debit/Credit Cards, Online Banking, USSD etc.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <h5 className="card-title gridcard-title">Funds Transfer</h5>
              <p className="card-text gridcard-text">
                Send funds Account-to-Account between Commercial and
                Micro-Finance Banks
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <h5 className="card-title gridcard-title">Reference Data Services</h5>
              <p className="card-text gridcard-text">
                Validate your customer’s identity and associated information in
                an automated manner.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <h5 className="card-title gridcard-title">Lending Support Services</h5>
              <p className="card-text gridcard-text">
              Expand your loan portfolio as well as your lendable ecosystem and ensure guaranteed repayments with near zero default rates. 
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <h5 className="card-title gridcard-title">Digital Financial Services</h5>
              <p className="card-text gridcard-text">
              Wide range of financial services accessed and delivered via Remita as well as Partner touch-points. These include Biller services, Wallet services, Cash-outs, etc.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <h5 className="card-title gridcard-title">Regulatory Payments</h5>
              <p className="card-text gridcard-text">
              Remit Tax and Pension payments to various Tax Authorities with corresponding schedules delivered to the relevant authorities via a simple API call. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
