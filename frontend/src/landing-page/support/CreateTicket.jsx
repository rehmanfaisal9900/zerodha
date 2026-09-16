import React from 'react'


const CreateTicket = () => {
  return (
     <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="  fs-3 mt-5 mb-5">
          To create a Ticket , select a relevant topic.
        </h1>
        <div className="col-4 p-5  mb-5">
        <h4 className="">Account Opening</h4>
        <ul>
        <li><a href="#" class="hover:underline">Getting Started</a></li>
          <li><a href="#" class="hover:underline">Online Account Opening</a></li>
          <li><a href="#" class="hover:underline">Offline Account Opening</a></li>
          <li><a href="#" class="hover:underline">Company, Partnership and HUF Account</a></li>
          <li><a href="#" class="hover:underline">Non Resident Indian (NRI)</a></li>
        </ul>
      </div>

      <div className="col-4 p-5  mb-5">
        <h4 className="">Your Zerodha Account</h4>
         <li><a href="#" class="hover:underline">Login Credentials</a></li>
          <li><a href="#" class="hover:underline">Your Profile</a></li>
          <li><a href="#" class="hover:underline">Account Modification</a></li>
          <li><a href="#" class="hover:underline">CMR & DP ID</a></li>
          <li><a href="#" class="hover:underline">Nomination</a></li>
      </div>
      <div className="col-4 p-5  mb-5">
        <h4 className=""> Trading and Markets</h4>
        <li><a href="#" class="hover:underline">Trading FAQs</a></li>
          <li><a href="#" class="hover:underline">Kite Web & App</a></li>
          <li><a href="#" class="hover:underline">Margins & Leverage</a></li>
          <li><a href="#" class="hover:underline">Orders & Order Types</a></li>
          <li><a href="#" class="hover:underline">Corporate Actions</a></li>
      </div>
      <div className="col-4 p-5  mb-5">
        <h4 className="">Funds</h4>
       <li><a href="#" class="hover:underline">Adding Funds</a></li>
          <li><a href="#" class="hover:underline">Fund Withdrawal</a></li>
          <li><a href="#" class="hover:underline">eMandates</a></li>
          <li><a href="#" class="hover:underline">Adding Bank Accounts</a></li>
      </div>
      <div className="col-4 p-5  mb-5">
        <h4 className="">Console</h4>
       <li><a href="#" class="hover:underline">Portfolio & Holdings</a></li>
          <li><a href="#" class="hover:underline">Corporate Actions</a></li>
          <li><a href="#" class="hover:underline">Funds Statement</a></li>
          <li><a href="#" class="hover:underline">Reports & P&L</a></li>
          <li><a href="#" class="hover:underline">Tax Basics</a></li>
      </div>

      <div className="col-4 p-5 mb-5">
        <h4 className="">Coin</h4>
       <li><a href="#" class="hover:underline">Understanding Mutual Funds</a></li>
          <li><a href="#" class="hover:underline">About Coin</a></li>
          <li><a href="#" class="hover:underline">Buying and Selling MFs</a></li>
          <li><a href="#" class="hover:underline">National Pension System (NPS)</a></li>
          <li><a href="#" class="hover:underline">Government Securities & Bonds</a></li>
      </div>
      </div>

      </div>
  )
}

export default CreateTicket