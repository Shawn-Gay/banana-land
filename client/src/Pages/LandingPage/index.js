import React from 'react'

import BananaTitle from './Components/BananaTitle'

import "./landing-page.css"

export default function LandingPage() {
    return (
        <div className="landing-page-container">
                <img src="./banana bundle.png" alt="banana" />
                <BananaTitle />
            <div className="lp-footer-container">
                <div>test</div>
            </div>
        </div>
    )
}
