import React from "react";
function Carousel()
{
    return(
        <>
             <div id="demo" className="carousel slide" data-ride="carousel">

                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>


                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://previews.123rf.com/images/server/server1502/server150200626/36886176-night-view-of-the-streets-of-the-old-arab-city-dubai-uae.jpg" alt="Los Angeles" height="500" width="100%" />
                    </div>
                    <div className="carousel-item">
                    <img src="https://wallpapercave.com/wp/wp6429015.jpg" alt="New York" height="500" width="100%"/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://wallpaperaccess.com/full/646452.jpg" alt="New York" height="500" width="100%"/>
                    </div>
                </div>


                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>

                </div>
                <br/><br/>
        </>
    );
}

export default Carousel;