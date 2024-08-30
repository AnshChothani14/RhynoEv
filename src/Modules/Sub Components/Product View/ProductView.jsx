import React from 'react';
import './productView.css'
import { useParams } from 'react-router-dom';
import products from '../../../Configration/Product';
import { bf, keyB, TSGif } from '../../../Assats/photos';

const ProductView = () => {
    const { index } = useParams();
    const product = products[parseInt(index)];

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container">
            <div className="title-PP text-center">
                <h1>{product.name}</h1>
                <h5>{product.tagline}</h5>
            </div>
            <div className="fat-1">
                <div className="row justify-contant-between mt-5">
                <div className="fat-img col-5 ">
                    <img src={TSGif} alt=""  className='w-100 h-100' />
                </div>
                <div className="fat-des  col-5">
                    <h2>Technical Specifications</h2>
                    <ul>
                 <li>Battery: {product.featureContent.technicalSpecs.battery}</li>
                 <li>Max Range (30km/h): {product.featureContent.technicalSpecs.maxRangeAt30kmh}</li>
                 <li>Motor: {product.featureContent.technicalSpecs.motor}</li>
                 <li>Charging Time: {product.featureContent.technicalSpecs.chargingTime}</li>
                 <li>Battery Warranty: {product.featureContent.technicalSpecs.batteryWarranty}</li>
                 <li>Max Speed: {product.featureContent.technicalSpecs.maxSpeed}</li>
                 <li>Max Range (Full Speed): {product.featureContent.technicalSpecs.maxRangeAtFullSpeed}</li>
                 <li>Max Range (45km/h): {product.featureContent.technicalSpecs.maxRangeAt45kmh}</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="fat-2">
            <div className="row justify-contant-between row-2 mt-5">
                <div className="fat-img col-5 ">
                    <img src={keyB} alt=""  className='w-100 h-100' />
                </div>
                <div className="fat-des  col-5">
                    <h2>Other Key Benefits</h2>
                    <ul>
                 {product.featureContent.otherKeyBenefits.map((benefit, index) => (
                     <li key={index}>{benefit}</li>
                 ))}
             </ul>
                </div>
                </div>
            </div>
            <div className="fat-3">
            <div className="row justify-contant-between mt-5">
                <div className="fat-img col-5 ">
                    <img src={bf} alt=""  className='w-100 h-100' />
                </div>
                <div className="fat-des  col-5">
                    <h2>Battery Features</h2>
                    <ul>
                 <li>Type: {product.featureContent.batteryFeatures.type}</li>
                 <li>Active Balancing: {product.featureContent.batteryFeatures.activeBalancing ? "Yes" : "No"}</li>
                 <li>Waterproof Rating: {product.featureContent.batteryFeatures.waterproofRating}</li>
             </ul>
                </div>
                </div>
            </div>
            <div className="color-options">
            <h1>Color Options</h1>
<div className="color-options-container">
    {product.colorOptions.map((color, index) => (
        <div key={index} className="color-card">
            <div className="center-box">
                <div className="animated-border-box-glow"></div>
                <div className="animated-border-box">
                    <img src={color.photo} alt={color.name} className="color-image" />
                    <h4 className="color-name">{color.name}</h4>
                </div>
            </div>
        </div>
    ))}
</div>


            </div>
            <div className="w-100 d-flex justify-content-center">
                    <button className='CheckBtn btn-1 btn-1e my-5'>Buy Now</button>
                </div>
        </div>
    );
}

export default ProductView;





