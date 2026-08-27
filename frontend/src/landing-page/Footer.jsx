import React from 'react'
import logo from "../assets/images/logo.svg"
const Footer = () => {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)"}}>
    <div className='container mt-5 border-top' >
      <div className='row'>
       <div className='col pt-3'>
        <img src={logo} alt="" style={{width:"50%"}}/>
        <p className="text-xs text-muted mt-3">
              &copy; 2010 - 2026, Zerodha Broking Ltd.<br />All rights reserved.
            </p>
       </div>
       <div className='col pt-3'>
        <p>Company</p>
        <a href="#" className="hover:text-blue-600">About</a> <br />
              <a href="#" className="hover:text-blue-600">Products</a><br />
              <a href="#" className="hover:text-blue-600">Pricing</a><br />
              <a href="#" className="hover:text-blue-600">Referral programme</a><br />
              <a href="#" className="hover:text-blue-600">Careers</a><br />
              <a href="#" className="hover:text-blue-600">Zerodha.tech</a><br />
              <a href="#" className="hover:text-blue-600">Press & media</a><br />
              <a href="#" className="hover:text-blue-600">Zerodha Cares (CSR)</a><br />
       </div>
       <div className='col pt-3'>
        <p>Support</p>
        <a href="#" className="hover:text-blue-600">Contact us</a>
            <a href="#" className="hover:text-blue-600">Support portal</a>
            <a href="#" className="hover:text-blue-600">Z-Connect blog</a>
            <a href="#" className="hover:text-blue-600">List of charges</a>
            <a href="#" className="hover:text-blue-600">Downloads & resources</a>
            <a href="#" className="hover:text-blue-600">Videos</a>
            <a href="#" className="hover:text-blue-600">Market overview</a>
            <a href="#" className="hover:text-blue-600">How to file a complaint?</a>
       </div>
       <div className='col pt-3'>
        <p>Account</p>
        <a href="#" className="hover:text-blue-600">Open an account</a>
            <a href="#" className="hover:text-blue-600">Fund transfer</a>
            <a href="#" className="hover:text-blue-600">60 day challenge</a>
       </div>
      </div>
      <div className="text-small text-muted pt-5">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
          </p>
          <p className="font-medium">
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
        </div>
       
    </div>
    </footer>
  )
}

export default Footer