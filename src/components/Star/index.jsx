import '../../Styles/components/star.scss'

function Star({ active }) {
    return (
        <div className={'star ' + (active && 'star--fill')}> </div>
    )
}
export default Star