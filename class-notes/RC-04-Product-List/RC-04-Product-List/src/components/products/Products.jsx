import ProductCard from "./ProductCard";
const Products = ({ products }) => {
  return (
    <div className="urun-list">
      {products.map((ürün) => (
        <div>
          {/*//! Buradan spreadle açarak gönderip objenin propertylerini props objesine yerleştirme */}

          <ProductCard {...ürün} />



          {/*//! Best Practice Alt Componente Gönderme */}
          {/*//! Buradan açmadan gönderip alt componentte karşılayıp içini açma */}

          {/* <ProductCard ürün={ürün}/> */}

          

          {/* bütün diziyi bu sayfada alttaki gibi bastırabilirdik, ama best practice burada map le dönüp başka sayfada bastırmak */}
          {/* <h3>{ürün.price}</h3>
        <img src={ürün.image} alt="" /> */}
        </div>
      ))}
    </div>
  );
};

export default Products;
