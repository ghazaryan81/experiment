import bannerImage from "../../assets/images/lemon.png";
import "./Banner.scss";
const Banner = () => {
  return (
    <section className="banner">
      <h1>АКТИВИРУЙ ИММУНИТЕТ!</h1>
      <p className="banner-about_1">
        Всего пять секунд в день помогут укрепить иммунитет <br />и повысить
        защитные силы организма
      </p>
      <h2>NOOTRIS ПОМОГАЕТ</h2>
      <p className="banner-about_2">
        Вашему организму во время пандемии <br />и сезонных простуд
      </p>
      <img src={bannerImage} alt="img" />
    </section>
  );
};

export default Banner;
