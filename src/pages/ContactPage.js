import { useEffect } from "react";
import DG from "2gis-maps"
import styled from "styled-components";
import { ContactElement, PageHero } from "../components";

const ContactPage = () => {
  return (
    <main>
      <PageHero title="контакты" />
      <Wrapper className="page section section-center">
        <div className="wrap-art">
          <div className="title">
            <h2>Контакты</h2>
            <div className="underline"></div>
          </div>
          <p className="text-center">
            Вы сможете у нас укомплектовать кроватку малыша, у нас в продаже всегд
            имеются детские подушки, детские одеяла, бортики в кроватку, детские наборы с балдахином.
          </p>
        </div>
        <ContactElement/>
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

  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
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
  #map-container{
    width: 100vh;  
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    grid-template-columns: auto;
  }
`;
export default ContactPage;