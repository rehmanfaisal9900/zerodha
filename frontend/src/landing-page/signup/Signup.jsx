import React from 'react'

const Signup = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center p-3">
      <div className="card border-0 shadow-sm p-4 rounded-3 bg-white" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="fw-bold mb-1 text-center text-dark">Signup</h3>
        <p className="text-muted text-center small mb-4">Create your account</p>

        <form>
          {/* Name Input */}
          <div className="mb-3">
            <label className="form-label text-secondary small fw-medium">Full Name</label>
            <input 
              type="text" 
              className="form-control bg-light fs-6" 
              placeholder="Enter your full name" 
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label className="form-label text-secondary small fw-medium">Email Address</label>
            <input 
              type="email" 
              className="form-control bg-light fs-6" 
              placeholder="Enter your email" 
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="form-label text-secondary small fw-medium">Password</label>
            <input 
              type="password" 
              className="form-control bg-light fs-6" 
              placeholder="Enter password" 
            />
          </div>

          {/* Submit Button */}
          <button 
            type="button" 
            className="btn btn-primary w-100 btn-lg text-white fw-medium"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )

}

export default Signup