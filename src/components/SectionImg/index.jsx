import PropTypes from 'prop-types'
import styled from 'styled-components'
import '../../Styles/components/sectionimg.scss'

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
    ),url('${props => props.img}');
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

function SectionImg({ img, text }) {
    return (
        <Wrapper img={img} className='section-img'>
            <p className='section-img_text'>{text}</p>
        </Wrapper>
    )
}

SectionImg.protoType = {
    img: PropTypes.string,
    text: PropTypes.string
}
export default SectionImg

