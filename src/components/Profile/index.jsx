import '../../Styles/components/profile.scss'

function Profile({firstname, img}) {
    
    return (
        <div className="profile">
            <div className="profile-name">{firstname}</div>
            <img className="profile-picture" src={img} alt="profile img"></img>
        </div>
    )
}

export default Profile