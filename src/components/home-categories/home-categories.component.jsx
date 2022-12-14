import CategoryItem from "../category-item/category-item.component";
import "./home-categories.styles.scss";

const HomeCategories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default HomeCategories;
