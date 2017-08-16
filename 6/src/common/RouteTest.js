import React, { Component } from 'react';

import FilmsJSON from "../content/filmsGallery.json"

export default class RouteTest extends Component{

    componentWillMount(){
        var data = FilmsJSON;
    }

    render(){
        console.log(FilmsJSON[0])
        return (
            <div>
                <span>Test</span>
                <span> {FilmsJSON[0].title}</span>
            </div>
        )
    }
}