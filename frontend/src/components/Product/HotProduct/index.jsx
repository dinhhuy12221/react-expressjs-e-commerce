
const HotProduct = ({ product }) => {
  return (
    <div className="hot-product">
        <div className="thumbnail">
            <div className="badge">
                <span className="btn">{product.discount}%</span>
            </div>
            <img src={product.image} alt="NOT FOUND" />
        </div>
        <div className="main">
            <div className="prices"></div>
            <div className="main">
                <span className="name"></span>
                <span className="status"></span>
            </div>
        </div>
    </div>
  )
}

export default HotProduct
