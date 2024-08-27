import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import { arttir, azalt, sifirla } from "../../redux/reducers/counterReducer";

const Counter = () => {
  // değişkenler useSelector hook uyla getirilir
  const { text1, sayac } = useSelector((state) => state.counterReducer);

  const dispatch1 = useDispatch();

  return (
    <div className="app">
      <h2 className="counter-header"> Counter with Redux</h2>
      <h1>{sayac} </h1>
      {/* sayac */}
      <h2>{text1} </h2>
      {/* text1 */}
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch1(arttir())}
        >
          ARTTIR
        </button>

        <button
          className="counter-button zero"
          onClick={() => dispatch1(sifirla())}

          // sıfırla fonksiyonu
        >
          RESET
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch1(azalt())}

          // azalt fonksiyonu
        >
          AZALT
        </button>
      </div>
    </div>
  );
};

export default Counter;
