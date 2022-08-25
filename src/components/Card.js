import cardImage from './images/katieZaferes.png'

export default function Card() {
    return (
        <div className="cardHolder">
            <div className="card">
                <img src={cardImage} />
                <div className='cardStats'>
                    <i class="fa-solid fa-star"></i>
                    <span>5.0</span>
                    <span className='muted'>&#40;6&#41; &#183; USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </div>
        </div>
    )
}