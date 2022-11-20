import PropTypes from 'prop-types'
import styled from 'styled-components'

function SectionImg({ img, text }) {
    const Wrapper = styled.div`
    display: flex;
    height: 223px;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    margin: 16px 0;
    background-image: linear-gradient(
        #d3cdcd9c, 
        #d3cdcd9c
    ),url('${img}');
    background-repeat: no-repeat;
    border-radius: 30px;
    color:white;
    background-origin: border-box;
    background-size: cover;
    background-position: bottom;
    @media screen and (max-width: 767px) {
        height: 111px;
    }
        `

    const Text = styled.p`
    font-size:48px;
    font-weight: 500;
    padding-top: 4%;

    @media screen and (max-width: 767px) {
        font-size:24px;
        width: 218px;
        padding-top: 2%;

    }
    `    
    return (
        <Wrapper className='section-img'>
            <Text>{text}</Text>
        </Wrapper>
    )
}

SectionImg.protoType = {
    img: PropTypes.string,
    text: PropTypes.string
}
export default SectionImg

