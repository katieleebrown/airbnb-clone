export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt='event' />
            <div className='cardStats'>
                <i class="fa-solid fa-star"></i>
                <span>{props.rating}</span>
                <span className='muted'>&#40;{props.reviewCount}&#41; &#183; {props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}