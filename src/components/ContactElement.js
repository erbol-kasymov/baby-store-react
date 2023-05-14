import React from "react";
import styled from "styled-components";
import {FaWhatsapp, FaInstagram, FaCar, FaFlag, FaMapMarkerAlt, FaPhone} from "react-icons/fa";

const ContactElement = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <div>
            <h3>График работы</h3>
            <div className="graphick-raboty">
                <span>Мы работаем каждый день с 09:00 до 18:00 без выходных</span>
                <div className="social">
                    <span>Мы в соц.сетях: </span>
                    <span><a href="https://www.instagram.com/karakol_dochki_synochki/#">{<FaInstagram/>}</a></span>
                    <span><a href="https://wa.me/996700844891">{<FaWhatsapp/>}</a></span>
                </div>
                <span>{<FaCar/>} Доставка по всему КР {<FaFlag/>}</span>
            </div>
        </div>
        <div>
            <h3>СВЯЗАТЬСЯ С НАМИ</h3>
            <div className="contacts">
                <div>
                    <h5>Каракол</h5>
                    <span><a href="https://go.2gis.com/vgpkd6">{<FaMapMarkerAlt/>} г.Каракол ул.Токтогула 104</a></span>
                    <span><a href="https://wa.me/996700844891">{<FaWhatsapp/>} +996700844891</a></span>
                    <span><a href="https://www.instagram.com/karakol_dochki_synochki/#">{<FaInstagram/>} @karakol_dochki_synochki</a></span>
                </div>
                <div>
                    <h5>Бишкек</h5>
                    <span><a href="https://go.2gis.com/qpiuoe">{<FaMapMarkerAlt/>} г.Бишкек ул.Айылчиева 78</a></span>
                    <span><a href="https://wa.me/996502225422">{<FaPhone/>} +996995211176</a></span>
                    <span><a href="https://www.instagram.com/dochki_synochky6/#">{<FaInstagram/>}@dochki_synochki_bishkek</a></span>
                </div>
                <div>
                    <h5>Токмок</h5>
                    <span><a href="https://go.2gis.com/6f9wq">{<FaMapMarkerAlt/>} г.Токмок ул.Шамсинская 43/А</a></span>
                    <span><a href="https://wa.me/996502225422">{<FaPhone/>} +996424206</a></span>
                    <span><a href="https://www.instagram.com/dochki_synochki_tokmok/#">{<FaInstagram/>}@dochki_synochki_tokmok</a></span>
                </div>
            </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: flex;
  gap: 80px;
  justify-content: center;
  align-items: start;
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  span{
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 10px 0;
  }
  .graphick-raboty{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
  }
  .social{
    display: flex;
    gap: 20px;
    padding: 30px 0;
    border-top: 1px solid var(--clr-primary-5);
    border-bottom: 1px solid var(--clr-primary-5);
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .wrap-art{
    margin-bottom: 50px;
  }
  .contacts{
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .contacts div{
    padding-right: 10px;
    display: grid;
    gap: 20px;
    border-right: 1px solid var(--clr-primary-5);
  }
  .contacts div:nth-child(3){
    border: none;
    padding: 0;
  }
  #map-container{
    width: 100vh;  
    margin: 0 auto;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    div{
        text-align: center;
        justify-content: center;
        align-items: center;
    }
  }
`;
export default ContactElement;