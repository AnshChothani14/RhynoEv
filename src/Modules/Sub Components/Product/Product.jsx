import React, { useState, useEffect } from 'react';
import './Product.css';
import { fat1, fat2, fat3 } from '../../../Assats/photos';
import products from '../../../Configration/Product';
import { mid, lite, pro } from '../../../Assats/photos';
import ParallaxEffectImg from '../../Design Components/TiltCard/TiltCard';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ index }) => {
    const validIndex = Math.max(0, Math.min(products.length - 1, index));
    const [selectedProduct, setSelectedProduct] = useState(products[validIndex]);
    const [selectedColor, setSelectedColor] = useState(selectedProduct ? selectedProduct.colorOptions[0] : null);
    const [selectedColorShadow, setSelectedColorShadow] = useState(selectedColor ? selectedColor.colorCode : '');
    const [bgPhoto, setBgPhoto] = useState(lite); 
    const [title, setTitle] = useState(true); 

    const navigate = useNavigate();

    useEffect(() => {
        switch (index) {
            case 0:
                setBgPhoto(lite);
                setTitle(true);
                break;
            case 1:
                setBgPhoto(mid);
                setTitle(false);
                break;
            default:
                setBgPhoto(pro);
                setTitle(false);
                break;
        }
    }, [index]);

    useEffect(() => {
        const product = products[validIndex];
        if (product) {
            setSelectedProduct(product);
            setSelectedColor(product.colorOptions[0]);
            setSelectedColorShadow(product.colorOptions[0].colorCode);
        }
    }, [validIndex]);

    const handleColorChange = (color) => {
        if (selectedProduct) {
            const colorOption = selectedProduct.colorOptions.find(c => c.name === color);
            if (colorOption) {
                setSelectedColor(colorOption);
                setSelectedColorShadow(colorOption.colorCode);
            }
        }
    };

    const handleViewProductClick = () => {
        navigate(`/product/${validIndex}`);
    };

    if (!selectedProduct) return <div>Product not found</div>;

    return (
        <div className='container-fluid glass main-product my-4'>
            <div className="container mb-5 pt-5 ps-4  trxt-center">
                <div className="name">
                    <h1>{selectedProduct.name}</h1>
                    <h6>{selectedProduct.tagline}</h6>
                </div>
                <div className="main-product d-flex container row">
                    <div className="product-img col-4">
                        {selectedColor && (
                            <>
                                <div className="img-product">
                                    <ParallaxEffectImg
                                        bgImage={bgPhoto}
                                        productImage={selectedColor.photo}
                                    />
                                </div>
                                <div className="color-options">
                                    {selectedProduct.colorOptions.map(option => (
                                        <div
                                            key={option.name}
                                            className="option"
                                            style={{ backgroundColor: option.colorCode }}
                                            onClick={() => handleColorChange(option.name)}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    <div className="product-info col-7">
                        <div className="fat-1 glass p-3 mb-5" style={{
                            boxShadow: `0 0 14px ${selectedColorShadow}`,
                            border: `2px solid ${selectedColorShadow};`
                        }}>
                            <div className="fat1name d-flex my-3 mb-0">
                                <img src={fat1} alt="" />
                                <h4 className='ms-3'>Technical Specs</h4>
                            </div>
                            <div className="main-fat-contant d-flex">
                                <div className="fat-contant-1">
                                    <div className="feature">Battery: {selectedProduct.featureContent.technicalSpecs.battery}</div>
                                    <div className="feature">Max range (at 30km/h): {selectedProduct.featureContent.technicalSpecs.maxRangeAt30kmh}</div>
                                    <div className="feature">Motor: {selectedProduct.featureContent.technicalSpecs.motor}</div>
                                    <div className="feature">Charging time: {selectedProduct.featureContent.technicalSpecs.chargingTime}</div>
                                </div>
                                <div className="fat-contant-2">
                                    <div className="feature">Battery warranty: {selectedProduct.featureContent.technicalSpecs.batteryWarranty}</div>
                                    <div className="feature">Max speed: {selectedProduct.featureContent.technicalSpecs.maxSpeed}</div>
                                    <div className="feature">Max range (at full speed): {selectedProduct.featureContent.technicalSpecs.maxRangeAtFullSpeed}</div>
                                    <div className="feature">Max range (at 45km/h): {selectedProduct.featureContent.technicalSpecs.maxRangeAt45kmh}</div>
                                </div>
                            </div>
                        </div>
                        <div className="fat-2 d-flex">
                            <div className="fat glass px-4 py-3" style={{
                                boxShadow: `0 0 14px ${selectedColorShadow}`,
                            }}>
                                <div className="fatname d-flex my-3">
                                    <img src={fat2} alt="" />
                                    <h4 className='ms-3'>Battery Features</h4>
                                </div>
                                <div className="fat-contant">
                                    <div className="feature">{selectedProduct.featureContent.batteryFeatures.type}</div>
                                    <div className="feature">Active Balancing: {selectedProduct.featureContent.batteryFeatures.activeBalancing ? 'Yes' : 'No'}</div>
                                    <div className="feature">Waterproof: {selectedProduct.featureContent.batteryFeatures.waterproofRating}</div>
                                </div>
                            </div>
                            <div className="fat glass px-4 py-3" style={{
                                boxShadow: `0 0 14px ${selectedColorShadow}`,
                                border: `2px solid ${selectedColorShadow};`
                            }}>
                                <div className="fatname d-flex my-3">
                                    <img src={fat3} alt="" />
                                    <h4 className='ms-3'>Other Key Benefits</h4>
                                </div>
                                <div className="fat-contant">
                                    {selectedProduct.featureContent.otherKeyBenefits.map(benefit => (
                                        <div className="feature" key={benefit}>{benefit}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-evenly">
                    <button className='CheckBtn btn-1 btn-1e my-5'>Buy Now</button>
                    <button className='CheckBtn btn-1 btn-1e my-5' onClick={handleViewProductClick}>View {selectedProduct.name}</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
