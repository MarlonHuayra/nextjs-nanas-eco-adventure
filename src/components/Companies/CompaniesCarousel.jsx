"use client";
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
const data = [
    { imgSrc: "/images/Companies/birdseye.svg" },
    { imgSrc: "/images/Companies/break.svg" },
    { imgSrc: "/images/Companies/keddar.svg" },
    { imgSrc: "/images/Companies/shield.svg" },
    { imgSrc: "/images/Companies/tandov.svg" },
    { imgSrc: "/images/Companies/tree.svg" },
];

// CAROUSEL SETTINGS
export default class CompaniesCarousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
            ],
        };

        return (
            <div className="text-center bg-lightpink">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index}>
                                <img src={item.imgSrc} alt={`Image of ${item.imgSrc}`} className="mx-auto" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
