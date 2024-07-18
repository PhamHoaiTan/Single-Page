import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { games } from "../../assets/games/game";
import Suggestions from "../../components/Suggestions/Suggestions";
import "./ProductDetail.css";
import { gamesdiscount } from "../../assets/games/gamesdiscount";
import freegame from "../../assets/games/freegame";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../StoreContext/StoreContext";
function ProductDetail() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigator = useNavigate();
  const product =
    games.find((game) => game.id === id )||
    gamesdiscount.find((game) => game.id === id)||
    freegame.find((game) => game.id === id);

  const detailContain = useRef(null);
  const detailRight = useRef(null);
  const suggestion = useRef(null);
  const {addToCard } =
    useContext(StoreContext);

  const [widthContain, setWidthContain] = useState(0);
  const [topSuggest, setTopSuggest] = useState(0);
  const [heightDetailRight, setHeightDetailRight] = useState(0);

  useEffect(() => {
    if (detailContain.current && detailRight.current && suggestion.current) {
      setWidthContain(detailContain.current.offsetHeight);
      setHeightDetailRight(detailRight.current.offsetHeight);
      setTopSuggest(suggestion.current.offsetTop);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const detailRightid = document.getElementById("detailRight");
      if (window.innerWidth > 600) {
        const scrollY = window.scrollY;
        if (scrollY < topSuggest - heightDetailRight && scrollY < widthContain) {
          detailRightid.style.position = "fixed";
          detailRightid.style.top = "20%";
          console.log("use")
        } else if (scrollY >= topSuggest - heightDetailRight) {
          detailRightid.style.position = "absolute";
          detailRightid.style.top = `${topSuggest - heightDetailRight}px`;
        } else {
          detailRightid.style.position = "fixed";
          detailRightid.style.top = "20%";

        }
      } else {
        detailRightid.style.position = "static";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[widthContain, topSuggest, heightDetailRight]);

  if (!product) {
    return <div>Product not found</div>;
  }
  const hanldeToCart = ({addToCard,id}) =>{
    addToCard(id)
    navigator('/cart');
  }


  return (
    <div className="ProductDetail">
      <div className="name">
        <h1 className="deltail-h1">{product.name}</h1>
      </div>
      <div className="details-content" ref={detailContain}>
        {/* Detail Left */}
        <div className="detail-left">
          <img src={product.image} alt={product.name} />
          <div className="detail-description">
            <p>{product.description}</p>
          </div>
          <p>
            <span className="genres">Genres:</span>
            <br /> {product.genre}
          </p>
        </div>
        {/* Detail Right */}
        <div className="detail-right" id="detailRight" ref={detailRight}>
          <div className="base-game">
            <p>Base Game</p>
          </div>
          <p>{product.price}</p>
          <div className="detail-bt">
            <button className="buyNow" onClick={() =>hanldeToCart({addToCard,id})}>
              BUY NOW
            </button>
            <br></br>
            <button className="addToCard"  onClick={() => addToCard(id)}>ADD TO CARD</button>
          </div>
          <table>
            <tr>
              <td>
                <p className="p-left">Release Date</p>
              </td>
              <td>
                <p>{product.releaseDate}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="p-left">Developer</p>
              </td>
              <td>{product.developer}</td>
            </tr>
            <tr>
              <td>
                <p className="p-left">Publisher</p>
              </td>
              <td>{product.publisher} </td>
            </tr>
            <tr style={{ alignItems: "center" }}>
              <td>
                <p className="p-left">Platfrom</p>
              </td>
              <td>
                <img
                  src={assets.window_icon}
                  alt=""
                  style={{ width: "50px" }}
                />{" "}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="suggestion" ref={suggestion}>
        <Suggestions genre={product.genre} currentGameId={product.id} />
      </div>
    </div>
  );
}

export default ProductDetail;
