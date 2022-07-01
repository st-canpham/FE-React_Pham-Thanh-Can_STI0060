const Subcribe = () => {
  return (
    <section className="section-subcribe">
      <div className="container">
        <div className="subcribe row">
          <div className="col-6 col-sm-12">
            <h2 className="subcribe-title">
              Subscribe to our newsletter andreceive exclusive offers every week
            </h2>
          </div>
          <div className="col-6 col-sm-12">
            <form className="subcribe-form" action="">
              <input className="form-control" type="email" placeholder="Enter your email" />
              <button className="subcribe-btn btn btn-primary">SUBCRIBE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Subcribe;
