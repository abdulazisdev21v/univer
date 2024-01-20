import React from "react";
import pana from "../img/pana.png";
import game from "../img/game.png";

const Contact = () => {
  return (
    <div id="contact_text">
      <div className="container">
        <div className="contact_text">
          <button>Математика</button>
          <h2>
            Машинное <br />
            обучение
          </h2>
          <h2>
            Введение в <br />
            программирование
          </h2>
          <h2>
            Креативное <br /> письмо
          </h2>
        </div>
        <div className="btn_con">
          <input type="Задать вопрос?" placeholder="Задать вопрос?" />
          <input type="Поиск" placeholder="Задать вопрос?" />
        </div>

        <div className="block_contact">
          <div className="contact_btn">
            <div className="contac">
              <img src={pana} alt="" />
              <div className="image">
                <h3>Алия Акматова</h3>
                <h4>Студент УЦА</h4>
              </div>
              <img className="png_create" src={game} alt="" />
            </div>
            <div className="windov">
              <div className="windov_text">
                <h5>
                  Что такое матрицы и какие операции можно выполнить с ними?
                </h5>
                <h6>20 минут назад</h6>
                <div className="input">
                  <input type="text" placeholder="Ответить" />
                  <input type="text" placeholder="Комментарии 15" />
                  <input type="text" placeholder="Ответы 2" />
                </div>
              </div>
            </div>
          </div>
          <div className="contac">
            <div className="contact_btn"></div>
            <img src={pana} alt="" />
            <div className="image">
              <h3>Алия Акматова</h3>
              <h4>Студент УЦА</h4>
            </div>
            <img className="png_create" src={game} alt="" />
          </div>
          <div className="windov">
            <div className="windov_text">
              <h5>
                Что такое матрицы и какие операции можно выполнить с ними?
              </h5>
              <h6>20 минут назад</h6>
              <div className="input">
                <input type="text" placeholder="Ответить" />
                <input type="text" placeholder="Комментарии 15" />
                <input type="text" placeholder="Ответы 2" />
              </div>
            </div>
          </div>
          <div className="contact_btn">
            <div className="contac">
              <img src={pana} alt="" />
              <div className="image">
                <h3>Алия Акматова</h3>
                <h4>Студент УЦА</h4>
              </div>
              <img className="png_create" src={game} alt="" />
            </div>
            <div className="windov">
              <div className="windov_text">
                <h5>
                  Что такое матрицы и какие операции можно выполнить с ними?
                </h5>
                <h6>20 минут назад</h6>
                <div className="input">
                  <input type="text" placeholder="Ответить" />
                  <input type="text" placeholder="Комментарии 15" />
                  <input type="text" placeholder="Ответы 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
