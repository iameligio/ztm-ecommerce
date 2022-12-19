import { Link } from "react-router-dom";
import "./home-category-item.styles.scss";

const HomeCategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="home-category-container">
      <div
        className="background-image "
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="home-category-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default HomeCategoryItem;
