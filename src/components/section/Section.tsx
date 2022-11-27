import "./Section.scss";
import Card from "./../card/Card";
import ginger from "../../assets/images/ginger.svg";
import corona from "../../assets/images/corona.svg";
import nootris from "../../assets/images/nootris.svg";
import { Button } from "../button";

const Section = () => {
  return (
    <section className="section">
      <h3 className="section__title">
        ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
        <span>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
      </h3>
      <div className="section__sale">
        <del>750</del>
        <span>690</span>
      </div>
      <div className="card-list">
        <Card size="regular" src={ginger} text1="Содержит" text2="имбирь" />
        <Card
          size="large"
          src={nootris}
          text1="+ Бесплатная доставка"
          text2="Специальная цена"
        />
        <Card
          size="regular"
          src={corona}
          text1="Нейтрализует "
          text2="вирусы"
        />
      </div>
      <Button text="Оформить заказ!" />
    </section>
  );
};

export default Section;
