function SignIn() {
  return (
    <>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Sign-In</h2>
              <form action="">
                <div className="mb-3">
                  <label htmlFor="email" className="form-lable">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-lable">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-check-input"
                  />
                  <label htmlFor="remember" className="form-lable">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;