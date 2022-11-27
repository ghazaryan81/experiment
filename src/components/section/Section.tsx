import "./Section.scss";
import Card from "./../card/Card";
import ginger from "../../assets/images/ginger.svg";

import corona from "../../assets/images/corona.svg";

import nootris from "../../assets/images/nootris.svg";
import { Button } from "../button";

const Section = () => {
  return (
    <section className="section">
      <h1 className="section_title">
        ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
        <p>СО СКИДКОЙ -15% ПЕРВЫМ!</p>
      </h1>
      <div className="section_sale">
        <del>750</del>
        <span>690</span>
      </div>
      <div className="card">
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
