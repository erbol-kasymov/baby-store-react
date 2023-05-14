import { useEffect } from "react";
import DG from "2gis-maps"
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="о_нас" />
      <Wrapper className="page section section-center">
        <div className="wrap-art">
          <img src={aboutImg} alt="nice desk" />
          <article>
            <div className="title">
              <h2>О нас</h2>
              <div className="underline"></div>
            </div>
            <p>
              Доброго времени суток! Спасибо что посетили наш интернет магазин 
              детской одежды Дочки Сыночки. Мы сами родители и поэтому мы знаем на себе 
              что такое переживать за своего ребеночка, во что одет, как одет, и из какого
              материала сделана данная детская одежда. Именно поэтому мы закупаем детскую 
              одежду и предметы для новорожденных у известных и проверенных Российских 
              производителей - это Смоленская фабрика Юлла, ГлорияОпт и многие другие.
              Для производства изготовители закупают безвредный и высококачественный материал, 
              для того чтобы нашим деткам было комфортно и безопасно. В нашем магазине вы сможете
              полностью укомплектоваться для выписки малыша из родильного дома, так как у нас
              в магазине есть: конверты на выписку, наборы на выписку, детские пеленки, 
              также можете купить конверты на овчине, конверты на овчине в коляску (санки).
              Вы сможете у нас укомплектовать кроватку малыша, у нас в продаже всегд
              имеются детские подушки, детские одеяла, бортики в кроватку, детские наборы с балдахином.
            </p>
          </article>
        </div>
        <Map/>
      </Wrapper>
    </main>
  );
};

const Map = ( i => {
  useEffect(i => {
    let map
    map = DG.map("map-container", {
      center: [42.4881502, 78.3887306],
      zoom: 16
    })

    DG.marker([42.4881502, 78.3887306]).addTo(map).bindPopup('Open')
  })

  return(
    <div id="map-container" style={{width: '90%', height: '400px'}}>

    </div>
  )
})

const Wrapper = styled.section`

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 790px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .title-2{
    text-align: center;
  }
  .underline {
    margin-left: 0;
  }
  .wrap-art{
    display: grid;
    gap: 4rem;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 50px;
  }
  #map-container{
    width: 100vh;  
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    grid-template-columns: auto;
  }
`;
export default AboutPage;
