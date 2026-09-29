function ProductCard({ title, price, category }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        margin: "10px",
        width: "250px"
      }}
    >
      <h2>{title}</h2>
      <p>Price: Rs. {price}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default ProductCard;