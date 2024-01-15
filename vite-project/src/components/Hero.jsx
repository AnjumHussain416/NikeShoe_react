const Hero =() =>{
    return <main className="hero container">
        <div className="hero-content">
            <h1>Your Feet Deserves The Best</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur deserunt expedita odit odio maxime autem dolorum inventore saepe ex, ut assumenda recusandae maiores porro necessitatibus magnam impedit aperiam iste.</p>
        <div className="hero-button">
            <button>Buy Now</button>
            <button className="secondary-btn">Catageroy</button>
        </div>
        <div className="hero-btm">
            <p>Or, you can visit</p>

            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon.png" />
                <img src="/images/flipkart.png" alt="flipkart.png" />
            </div>

        </div>
        
        </div>
        <div className="hero-image">
        <img src="/images/nike.png" alt="nike.png" />
        </div>
    </main>
};

export default Hero;