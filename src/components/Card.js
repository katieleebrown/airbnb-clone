export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }

    return (
        <div className="card">
            {badgeText && <div className="badge">
                <h6>{badgeText}</h6>
            </div>}
            <img src={'../../images/' + props.card.coverImg} alt='event' />
            <div className='cardStats'>
                <i class="fa-solid fa-star"></i>
                <span>{props.card.stats.rating}</span>
                <span className='muted'>&#40;{props.card.stats.reviewCount}&#41; &#183; {props.card.location}</span>
            </div>
            <p>{props.card.title}</p>
            <p><strong>From ${props.card.price}</strong> / person</p>
        </div>
    )
}