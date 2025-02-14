import React, { useState } from "react";

export const Header = ({ 
    allProducts, 
    setAllProducts, 
    total, 
    setTotal, 
    countProducts, 
    setCountProducts 
}) => {
    const [active, setActive] = useState(false);
    
    const onDeleteProduct = (product) => {
        const results = allProducts.filter(item => item.id !== product.id);
        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };

    const onClearCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    return (
        <header>
            <h1>Tienda de Libros</h1>
            <div className="container-icon">
                <div 
                    className="container-cart-icon" 
                    onClick={() => setActive(!active)}
                >
                    <img 
                        src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png" 
                        alt="carrito" 
                        className="icon-cart" 
                    />
                    <div className="count-products">
                        <span id="contador-productos">{countProducts}</span>
                    </div>
                </div>
                <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                    {allProducts.length ? (
                        <>
                            <div className="row-product">
                                {allProducts.map(product => (
                                    <div className="cart-product" key={product.id}>
                                        <div className="info-cart-product">
                                            {/* Nueva funcionalidad: Muestra la imagen del producto */}
                                            <img 
                                                src={product.urlImage} 
                                                alt={product.title} 
                                                className="cart-product-image" 
                                            />
                                            <div>
                                                <span className="cantidad-producto-carrito">{product.quantity}</span>
                                                <p className="titulo-producto-carrito">{product.title}</p>
                                                <span className="precio-producto-carrito">${product.price}</span>
                                            </div>
                                        </div>
                                        <img 
                                            src="https://static.vecteezy.com/system/resources/previews/024/696/736/non_2x/red-close-icon-free-png.png" 
                                            alt="cerrar" 
                                            className="icon-close" 
                                            onClick={() => onDeleteProduct(product)} 
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="cart-total">
                                <h3>Total:</h3>
                                <span className="total-pagar">${total}</span>
                            </div>
                            <button className="btn-clear-all" onClick={onClearCart}>
                                Vaciar Carrito
                            </button>
                        </>
                    ) : (
                        <p className="cart-empty">El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
};
