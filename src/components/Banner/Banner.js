import "./style.css";

const Banner = ({ title, image, opacity }) => {
  return (
    <div className="banner-container">
      <div
        className={`banner-container__opaque-filter ${
          opacity === "light"
            ? "banner-container__opaque-filter__light"
            : "banner-container__opaque-filter__bold"
        }`}
      ></div>
      <img className="banner-container__image" src={image} alt="" />
      <h2 className="banner-container__title">{title}</h2>
    </div>
  );
};

export default Banner;