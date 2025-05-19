import React from 'react';
import { Link } from 'react-router-dom';

const ClubsPage = () => {
  return (
    <div id='home-page'>
        <div id='club-page-top'>
            <div id='create-club-container'>
                <div id='movie-clubs'>
                    Movie Clubs
                </div>
                <button id='create-club'>
                    + Create Club
                </button>
            </div>
        </div>
        <div id='club-page-top'>
            <input id='search-clubs'/>
        </div>
        <div id='club-page-bottom'>
            <div id='clubs-container'>
                <div id='club-container'>
                    <div id='club'>
                        <div id='club-title'>
                            Classic Cinema Club
                        </div>
                        <div id='club-date'>
                            Created by jane Smith on 1/15/2023
                        </div>
                        <div id='club-detail'>
                            For lovers of classic films from the golden age of Hollywood
                        </div>
                        <div id='view-club-container'>
                            <Link to="/clubs/thread">
                                <button id='view-club'>
                                    View Club
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>    
                <div id='club-container'>
                    <div id='club'>
                        <div id='club-title'>
                            Classic Cinema Club
                        </div>
                        <div id='club-date'>
                            Created by jane Smith on 1/15/2023
                        </div>
                        <div id='club-detail'>
                            For lovers of classic films from the golden age of Hollywood
                        </div>
                        <div id='view-club-container'>
                            <button id='view-club'>
                                View Club
                            </button>
                        </div>
                    </div>
                </div>    
                <div id='club-container'>
                    <div id='club'>
                        <div id='club-title'>
                            Classic Cinema Club
                        </div>
                        <div id='club-date'>
                            Created by jane Smith on 1/15/2023
                        </div>
                        <div id='club-detail'>
                            For lovers of classic films from the golden age of Hollywood
                        </div>
                        <div id='view-club-container'>
                            <button id='view-club'>
                                View Club
                            </button>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  );
};

export default ClubsPage;