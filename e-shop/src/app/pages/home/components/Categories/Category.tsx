const Category = ({image, title, discount, className}: any) => {
  return (
    <li className= {`category-item ${className}`}>
      <div className="category">
        <div className="category-img">
          <img src={image} alt={title} />
        </div>
        <div className="category-content">
          {discount && <span className="badge badge-primary">{discount}</span>}
          <h4 className="category-title">{title}</h4>
          <a className="btn btn-secondary" href="">VIEW ALL</a>
        </div>
      </div>
    </li>
  )
};

export default Category;
