import React from 'react';
import SearchBar from './SearchBar';
import AddButton from './AddButton';


const EventDashboard = (props) => { 
    return (
        <div className="container">
            <AddButton />
            <SearchBar />
            <h1>Hellow beachboy</h1>
        </div>


    );
}

export default EventDashboard;