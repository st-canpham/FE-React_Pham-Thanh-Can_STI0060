const Product = ({thumbnail, price, name, discount}: any) => {
  return (
    <a href="#" className="product">
      <div className="product-img">
        <img src={thumbnail} alt={name} />
      </div>
      {discount && <span className="badge badge-primary badge-top-left">{`${discount * 100}%`}</span>}
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <div className="product-price">
          {discount && <p className="price-discount">{price - discount * price}</p>}
          <p className="price-current">{price}</p>
        </div>
      </div>
    </a>  
  )
};

export default Product;