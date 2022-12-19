import HomeCategoryItem from "../home-category-item/home-category-item.component";
import "./home-categories.styles.scss";

const HomeCategories = ({ categories }) => {
  return (
    <div className="home-categories-container">
      {categories.map((category) => (
        <HomeCategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default HomeCategories;
