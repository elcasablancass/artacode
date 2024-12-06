import './Product.scss';

const Product = () => {
    return (
        <section className='arta-product'>
            <div className='arta-container'>
                <div className='arta-product__header'>
                    <h2>Our Greatest Product</h2>
                    <p>Explore our tailored solutions to fit your business needs</p>
                </div>
                <div className='arta-product__wrapper'>
                    <div className='arta-product__wrapper--card'>
                        <div className='card-thumbnail'>
                            <img
                                src={require("../../assets/images/ArtaCore.jpg")}
                                alt="Arta code connection"
                            />
                        </div>
                        <div className='card-detail'>
                            <h3>ArtaCore</h3>
                            <p>ArtaCore is a powerful CMS engine designed to simplify website management. Flexible with powerfull analytics dashboard & seamless integration.</p>
                        </div>
                        <div className='card-action'>
                            <button className='card-action__button arta-green-button'>Detail & Demo</button>
                        </div>
                    </div>
                    <div className='arta-product__wrapper--card'>
                        <div className='card-thumbnail'>
                            <img
                                src={require("../../assets/images/ArtaKu.jpg")}
                                alt="Arta code connection"
                            />
                        </div>
                        <div className='card-detail'>
                            <h3>ArtaKu</h3>
                            <p>The ArtaKu Cashier App is a user-friendly point-of-sale solution for businesses. Real-time inventory tracking, and detailed sales reports.</p>
                        </div>
                        <div className='card-action'>
                            <button className='card-action__button arta-green-button'>Detail & Demo</button>
                        </div>
                    </div> 
                    <div className='arta-product__wrapper--card'>
                        <div className='card-thumbnail'>
                            <img
                                src={require("../../assets/images/ArtaStock.jpg")}
                                alt="Arta code connection"
                            />
                        </div>
                        <div className='card-detail'>
                            <h3>ArtaStock</h3>
                            <p>ArtaStock is an intuitive inventory management solution that helps businesses track and manage stock in real time with auto mailing.</p>
                        </div>
                        <div className='card-action'>
                            <button className='card-action__button arta-green-button'>Detail & Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;