import React from 'react'

import './Banner.css';

const Banner = () => {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '....' : string;
    }

    return (
        <header
            className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("data:image/jpeg;base64,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")`,
                backgroundPosition: "center center",
            }}>

            <div className='banner_content'>
                <h1 className='banner_title'>
                    Movie Name
                </h1>
                <div className="banner_buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>
                    {truncate(`This is test description
                    This is test description
                    This is test description
                    This is test description
                    This is test description
                    This is test description`, 150)}
                </h1>
            </div>

            <div className='banner_fadebutton' />

        </header>
    )
}

export default Banner