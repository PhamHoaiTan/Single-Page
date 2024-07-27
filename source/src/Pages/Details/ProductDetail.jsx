import React, { useContext, useEffect } from "react";
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
    games.find((game) => game.id === id) ||
    gamesdiscount.find((game) => game.id === id) ||
    freegame.find((game) => game.id === id);
  const { addToCard } = useContext(StoreContext);
  const hanldeToCart = ({ addToCard, id }) => {
    addToCard(id);
    navigator("/cart");
  };
  return (
    <div className="ProductDetail">
      <div className="name">
        <h1 className="detail-h1">{product.name}</h1>
      </div>
      <div className="details-content">
        {/* Detail Left */}
        <div className="detail-left">
          <img src={product.image} alt={product.name} className="detail-image"/>
          <div className="detail-description">
            <p>{product.description}</p>
          </div>
          <p>
            <span className="genres">Genres:</span>
            <br /> {product.genre}
          </p>
        </div>
        {/* Detail Right */}
        <div className="detail-right">
          <div className="base-game">
            <p>Base Game</p>
          </div>
          <p className="price">${product.price}</p>
          <div className="detail-bt">
            <button
              className="buyNow"
              onClick={() => hanldeToCart({ addToCard, id })}
            >
              BUY NOW
            </button>
            <button className="addToCard" onClick={() => addToCard(id)}>
              ADD TO CART
            </button>
          </div>
          <table>
            <tbody>
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
              <tr>
                <td>
                  <p className="p-left">Platform</p>
                </td>
                <td>
                  <img
                    src={assets.window_icon}
                    alt="platform-icon"
                    className="platform-icon"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="suggestion">
        <Suggestions genre={product.genre} currentGameId={product.id} />
      </div>
    </div>
  );
}

export default ProductDetail;
