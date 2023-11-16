import React from "react";
import "./Main.css";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaChevronCircleRight } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

function Main() {
  const products = [
    {
      img: "./imgs/product1.png",
      name: "Эндоваскулярная хирургия",
      btn: "Посмотреть все",
    },
    {
      img: "./imgs/product2.png",
      name: "Лабораторная диагностика",
      btn: "Посмотреть все",
    },
    {
      img: "./imgs/product3.png",
      name: "Кардиохирургия",
      btn: "Посмотреть все",
    },
    {
      img: "./imgs/product4.png",
      name: "ДИАБЕТ",
      btn: "Посмотреть все",
    },
    {
      img: "./imgs/product5.png",
      name: "ЭНДОУРОЛОГИЯ",
      btn: "АРИТМОЛОГИЯ",
    },
    {
      img: "./imgs/product6.png",
      name: "Эндоваскулярная хирургия",
      btn: "Посмотреть все",
    },
  ];

  return (
    <div className="Main">
      <div className="header">
        <div className="navbar">
          <div className="nav">
            <ul>
              <li>
                <CiLocationOn
                  style={{
                    background: "rgb(189, 186, 186)",
                    borderRadius: "50px",
                    fontSize: "35px",
                    color: "black",
                  }}
                />{" "}
                <div>
                  г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
                </div>
              </li>
              <li>
                <FaPhoneSquareAlt
                  style={{
                    background: "rgb(189, 186, 186)",
                    borderRadius: "50px",
                    fontSize: "35px",
                    color: "black",
                  }}
                />{" "}
                +998 71 276-62-53 <br />
                +998 71 276-62-54
              </li>
              <li>
                <img src="./imgs/logo.png" alt="" />
              </li>
            </ul>
          </div>
          <div className="navLogo">
            <ul>
              <li>
                <FaSearch style={{ fontSize: "25px", color: "black" }} />
              </li>
              <li>
                <FaFacebookF
                  style={{
                    background: "rgb(189, 186, 186)",
                    borderRadius: "50px",
                    fontSize: "30px",
                    color: "black",
                  }}
                />{" "}
                Мы на Facebook
              </li>
              <li>
                <select name="" id="">
                  <option value="ru">Русский</option>
                  <option value="uz">Uzbek</option>
                  <option value="eng">English</option>
                </select>
              </li>
              <li><div className="menu">
            <IoMdMenu style={{
                    borderRadius: "50px",
                    fontSize: "30px",
                    color: "black", 
                    cursor: "pointer"
                  }}/>
          </div></li>
            </ul>
          </div>
          
        </div>
        <div className="headerLinks">
          <ul>
            <li>МАГАЗИН</li>
            <li>О КОМПАНИИ </li>
            <li>ПРОДУКЦИЯ</li>
            <li>УСЛУГИ</li>
            <li>АКЦИИ И НОВОСТИ </li>
            <li>ОБРАТНАЯ СВЯЗЬ</li>
          </ul>
        </div>
        <div className="headerAnaliz">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="sliderOne">
                <div className="sliderText">
                  <h1>
                    Анализатор <br /> ABL800 FLEX
                  </h1>
                  <p>
                    Ориентированный на среднюю или высокую <br />
                    производительность тестов, анализатор ABL800 FLEX <br />{" "}
                    измеряет полный набор параметров, включая <br />
                    pH, газы крови, электролиты, метаболиты и <br />
                    показатели оксиметрии
                  </p>
                  <button>Подробнее</button>
                </div>
                <div className="sliderImg">
                  <img src="./imgs/slide.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sliderOne">
                <div className="sliderText">
                  <h1>
                    Анализатор <br /> ABL800 FLEX
                  </h1>
                  <p>
                    Ориентированный на среднюю или высокую <br />
                    производительность тестов, анализатор ABL800 FLEX <br />{" "}
                    измеряет полный набор параметров, включая <br />
                    pH, газы крови, электролиты, метаболиты и <br />
                    показатели оксиметрии
                  </p>
                  <button>Подробнее</button>
                </div>
                <div className="sliderImg">
                  <img src="./imgs/slide.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sliderOne">
                <div className="sliderText">
                  <h1>
                    Анализатор <br /> ABL800 FLEX
                  </h1>
                  <p>
                    Ориентированный на среднюю или высокую <br />
                    производительность тестов, анализатор ABL800 FLEX <br />{" "}
                    измеряет полный набор параметров, включая <br />
                    pH, газы крови, электролиты, метаболиты и <br />
                    показатели оксиметрии
                  </p>
                  <button>Подробнее</button>
                </div>
                <div className="sliderImg">
                  <img src="./imgs/slide.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="products">
        <h1>ПРОДУКЦИЯ</h1>
        <div className="productsBox">
          {products.map((item, index) => (
            <div key={index} className="productsCard">
              <img src={item.img} alt="" />
              <h1>{item.name}</h1>
              <button>{item.btn}</button>
            </div>
          ))}
        </div>
        <div className="productsLink">
          <a href="">
            Перейти в каталог нашей продукции
            <FaChevronCircleRight />
          </a>
        </div>
      </div>

      <div className="xizmatlar">
        <h1>УСЛУГИ</h1>
        <div className="xizmatlarBox">
          <div className="xizmatlarCard">
            <img src="./imgs/servic 1.png" alt="" />
            <h3>СЕРВИС ОБОРУДОВАНИЯ</h3>
            <p>
              Компания предоставляет сервисное обслуживание по всем
              предоставляемым продуктам. У наших инженеров имеется опыт и
              сертификаты фирм производителей......
            </p>
            <button>Подробнее</button>
          </div>
          <div className="xizmatlarCard">
            <img src="./imgs/servic 1.png" alt="" />
            <h3>СЕРВИС ОБОРУДОВАНИЯ</h3>
            <p>
              Компания предоставляет сервисное обслуживание по всем
              предоставляемым продуктам. У наших инженеров имеется опыт и
              сертификаты фирм производителей......
            </p>
            <button>Подробнее</button>
          </div>
          <div className="xizmatlarCard">
            <img src="./imgs/servic 1.png" alt="" />
            <h3>СЕРВИС ОБОРУДОВАНИЯ</h3>
            <p>
              Компания предоставляет сервисное обслуживание по всем
              предоставляемым продуктам. У наших инженеров имеется опыт и
              сертификаты фирм производителей......
            </p>
            <button>Подробнее</button>
          </div>
        </div>
      </div>

      <div className="company">
        <h1>О КОМПАНИИ</h1>
        <div className="companyBox">
          <div className="companyImg">
            <img src="./imgs/logo.png" alt="" />
          </div>
          <div className="companyText">
            <h3>
              Группа компаний MEDOL создавалась высококвалифицированными <br />
              специалистами в сфере медицины, инженерии и экономики, за плечами{" "}
              <br />
              которых значительный опыт на рынке высоких медицинских технологий,{" "}
              <br />
              которая имеет свои представительства в разных уголках Земли. В{" "}
              <br />
              2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical{" "}
              <br />
              Online Services". Цель компании построить прозрачный долгосрочный{" "}
              <br />
              бизнес, принести пользу обществу путем развития и внедрения <br />
              передовых технологий в систему здравоохранения Республики
              Узбекистан.
            </h3>
            <button>Узнать больше</button>
          </div>
        </div>
      </div>

      <div className="news">
        <h1>НОВОСТИ</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="news1">
        <h1>НОВОСТИ</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="newsbox">
              <img src="./imgs/hos.png" alt="" />
              <h3>
                Mастер-класс в исполнении <br /> Галлямова Эдуарда <br />{" "}
                Абдулхаевича
              </h3>
              <h4>26.07.2021</h4>
              <p>
                С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
                Специализированный <br /> Научно-Практический Медицинский Центр{" "}
                <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
                Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
                Services» был <br /> проведен мастер-класс в исполнении...
              </p>
              <button>Подробнее</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="partner">
        <h1>ПАРТНЕРЫ</h1>
        <div className="partnerBox">
          <img src="./imgs/part1.png" alt="" />
          <img src="./imgs/part1.png" alt="" />
          <img src="./imgs/part3.png" alt="" />
          <img src="./imgs/part4.png" alt="" />
          <img src="./imgs/part1.png" alt="" />
          <img src="./imgs/part2.png" alt="" />
          <img src="./imgs/part3.png" alt="" />
          <img src="./imgs/part4.png" alt="" />
        </div>
      </div>

      <div className="footer">
        <div className="footerBox">
          <ul>
            <li>
              <h3>Контакты</h3>
            </li>
            <li>
              <h3>
                г.Ташкент, Чиланзар <br />
                10 квартал, дом 3/1
              </h3>
            </li>
            <li>
              <h3>
                +998 71 276-62-53 <br /> +998 71 276-62-54
              </h3>
            </li>
            <li>
              <h3>О компании</h3>
              <p>История</p>
              <p>Партнеры</p>
              <p>Вакансии</p>
            </li>
            <li>
              <h3>Продукция</h3>
              <p>Эндоваскулярная хирургия</p>
              <p>Аритмология</p>
              <p>Кардиохирургия</p>
              <p>Лабораторная диагностика</p>
              <p>Хирургия</p>
              <p>Эндоурология</p>
              <p>Нейрохирургия</p>
              <p>Анестезиология и реанимация</p>
              <p>Диабет</p>
            </li>
            <li>
              <h3>Услуги</h3>
              <p>Сервис</p>
              <p>Регистрации</p>
              <p>Услуги логистики</p>
            </li>
          </ul>
        </div>
        <div className="footerCard">
          <img src="./imgs/logo.png" alt="" />
          <p>Наша цель – построить прозрачный, <br />долгосрочный бизнес, приносить огромную <br />пользу населению, путем решения глобальных <br />вопросов. Внедряя инновационные <br />технологии на рынок Узбекистана.</p>
        </div>

       <div className="footerP">
        <p>© 2021 ООО «Medical Online Services»</p>
        <p>Сайт разработан компанией <span>www.uz</span></p>
       </div>
      </div>
    </div>
  );
}

export default Main;
