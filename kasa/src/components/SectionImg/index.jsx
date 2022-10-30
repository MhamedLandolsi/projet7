import PropTypes from 'prop-types'
import styled from 'styled-components'



function SectionImg({ img, text }) {
    const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    margin:15px;
    background-image:url('${img}');
    background-repeat: no-repeat;
    border-radius: 30px;
    width: 100%;
    color:white;
    background-origin: border-box;
    background-size: cover;
    background-position: bottom;
        `

    return (
        <Wrapper className='sectionImg'>
            <h2>{text}</h2>

        </Wrapper>
    )
}

SectionImg.protoType = {
    img: PropTypes.string,
    text: PropTypes.string
}
export default SectionImg

