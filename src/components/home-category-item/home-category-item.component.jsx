import { useNavigate } from "react-router-dom";
import "./home-category-item.styles";
import {
  BackgroundImage,
  HomeCategoryContainer,
  Body,
} from "./home-category-item.styles";

const HomeCategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <HomeCategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </HomeCategoryContainer>
  );
};

export default HomeCategoryItem;
