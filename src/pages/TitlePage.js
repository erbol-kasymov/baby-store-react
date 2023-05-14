import React from "react";
import styled from 'styled-components'
import title from './../assets/title.webp'

const TitlePage = () => {
    const onClose = () => {
        let a = document.getElementById('wr')
        a.style.display ='none'
    }
    return(
        <main id="wr">
            <Wrapper>
                <div className="title"><img src={title}/></div>
                <button onClick={onClose}>OK</button>
            </Wrapper>
        </main>
    )
};

const Wrapper = styled.section`
    width: 90%;
    height: 150%;
    text-align: center;
    img{
        width:40%;
        border: 1px solid;
    }
`

export default TitlePage;