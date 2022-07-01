const Cart = () => {
  return (
    <main>
      <section className="cart">
        <div className="container">
          <div className="cart-empty js-cart-empty hide">
            <div className="cart-empty-img">
              <img src="img/empty-cart.png" alt="no items in cart" />
            </div>
            <a href="/index.html" className="btn btn-primary">SHOP NOW</a>
          </div>
          <div className="row cart-not-empty js-cart-not-empty">
            <ul className="cart-list js-cart-list col-7"></ul>
            <div className="cart-total col-5">
              <p>TOTAL: <span className="js-total-price">0</span></p>
              <button className="btn btn-primary">PAY</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cart;