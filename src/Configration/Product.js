import {
    p1g,
    p1sil,
    p1r,
    p1wb,
    p1wblu,
    p2r,
    p2sil,
    p2w,
    p2b,
    p2black,
    p3vio,
    p3wb,
    p3blu,
    p3db,
    p3w
} from '../Assats/photos';

const products = [
    {
        name: "SE03 Lite",
        tagline: "Lightweight and Efficient",
        productType: "Lite",
        featureContent: {
            technicalSpecs: {
                battery: "1.2Kwh",
                maxRangeAt30kmh: "80 km",
                motor: "1000W",
                chargingTime: "4 hours (10A)",
                batteryWarranty: "2 years",
                maxSpeed: "40 km/hr",
                maxRangeAtFullSpeed: "50 km",
                maxRangeAt45kmh: "70 km"
            },
            otherKeyBenefits: [
                "Lightweight design",
                "Range prediction",
                "Comfortable ride",
                "Safe"
            ],
            batteryFeatures: {
                type: "LFP with 1000 cycles",
                activeBalancing: false,
                waterproofRating: "IP65"
            }
        },
        colorOptions: [
            { name: "violate", photo: p1g, colorCode: "#8A2BE2" },
            { name: "blue", photo: p1sil, colorCode: "#0000FF" },
            { name: "white", photo: p1r, colorCode: "#FFFFFF" },
            { name: "black", photo: p1wb, colorCode: "#000000" },
            { name: "Midnight Blue", photo: p1wblu, colorCode: "#191970" },
        ]
    },
    {
        name: "SE03",
        tagline: "Balanced and Reliable",
        productType: "Medium",
        featureContent: {
            technicalSpecs: {
                battery: "1.8Kwh",
                maxRangeAt30kmh: "100 km",
                motor: "1500W",
                chargingTime: "3.5 hours (12A)",
                batteryWarranty: "3 years",
                maxSpeed: "50 km/hr",
                maxRangeAtFullSpeed: "60 km",
                maxRangeAt45kmh: "90 km"
            },
            otherKeyBenefits: [
                "Fire-safe battery",
                "Range prediction",
                "Comfortable ride",
                "Safe"
            ],
            batteryFeatures: {
                type: "LFP with 1500 cycles",
                activeBalancing: true,
                waterproofRating: "IP67"
            }
        },
        colorOptions: [
            { name: "blue", photo: p2r, colorCode: "#0000FF" },
            { name: "blackish blue", photo: p2sil, colorCode: "#00008B" },
            { name: "violate", photo: p2w, colorCode: "#8A2BE2" },
            { name: "white", photo: p2b, colorCode: "#FFFFFF" },
            { name: "white and blue", photo: p2black, colorCode: "#ADD8E6" },
        ]
    },
    {
        name: "SE03  Pro",
        tagline: "Performance and Power",
        productType: "Pro",
        featureContent: {
            technicalSpecs: {
                battery: "2.5Kwh",
                maxRangeAt30kmh: "120 km",
                motor: "2000W",
                chargingTime: "2.5 hours (15A)",
                batteryWarranty: "4 years",
                maxSpeed: "60 km/hr",
                maxRangeAtFullSpeed: "80 km",
                maxRangeAt45kmh: "110 km"
            },
            otherKeyBenefits: [
                "Fire-safe battery",
                "Advanced range prediction",
                "Superior ride comfort",
                "Enhanced safety"
            ],
            batteryFeatures: {
                type: "LFP with 2000 cycles",
                activeBalancing: true,
                waterproofRating: "IP68"
            }
        },
        colorOptions: [
            { name: "blue", photo: p3vio, colorCode: "#0000FF" },
            { name: "blackish blue", photo: p3wb, colorCode: "#00008B" },
            { name: "violate", photo: p3blu, colorCode: "#8A2BE2" },
            { name: "white", photo: p3db, colorCode: "#FFFFFF" },
            { name: "white and blue", photo: p3w, colorCode: "#ADD8E6" },
        ]
    }
];

export default products;