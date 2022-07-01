import Images from '../../../../assets/images';

const Category = () => {
  return (
    <section className="section-category page-section">
      <div className="container">
        <ul className="row categories-list">
          <li className="category-item col-6 col-sm-12">
            <div className="category">
              <div className="category-img">
                <img src={Images.Category1} alt="New arrivalsare now in!" />
              </div>

              <div className="category-content">
                <h4 className="category-title">New arrivalsare now in!</h4>
                <a className="btn btn-secondary" href="">SHOW COLLECTION</a>
              </div>
            </div>
          </li>
          <li className="category-item col-3 col-sm-6">
            <div className="category">
              <div className="category-img">
                <img src={Images.Category2} alt="Basic t-shirts" />
              </div>
              <div className="category-content">
                <h4 className="category-title">
                  Basic t-shirts <br />
                  $29,99
                </h4>
                <a className="btn btn-secondary" href="">MORE DETAILS</a>
              </div>
            </div>
          </li>
          <li className="category-item col-3 col-sm-6">
            <div className="category">
              <div className="category-img">
                <img src={Images.Category3} alt="Sale this summer" />
              </div>
              <div className="category-content">
                <span className="badge badge-primary">-50%</span>
                <h4 className="category-title">
                  Sale this <br />
                  summer
                </h4>
                <a className="btn btn-secondary" href="">VIEW ALL</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Category;
