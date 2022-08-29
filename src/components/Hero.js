let heroImage = '../../images/heroImages.png'

export default function Hero() {
    return (
        <section id="hero">
            <div id='heroImages' className="">
                <img src={heroImage} alt='a collection of images highlighting some of the experiences you can book through airbnb, including cooking, dancing, swimming, and more.' />
            </div>

            <div id='heroText'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
            </div>
        </section>
    )
}