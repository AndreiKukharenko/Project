import React, { Component } from 'react';
import FilmDetails from "./FilmDetails";
import axios from "axios";

export default class FilmDetailsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        var self = this;
        axios({
            method:'get',
            url: "http://localhost:61095/Film/ReturnFilmById",
            params: {
                id: this.props.match.params.filmId
            }
        })
        .then(function (response) {
            if(response.status === 200){
                console.log(response.data);
                self.setState({currentFilm: response.data});
            }else {
                alert("bad request");
            }
        })
        .catch(function(error){
            console.log(error);
        });
    }

    render(){
        if (this.state.currentFilm) {
            return(
                <div >
                    <FilmDetails currentFilm = { this.state.currentFilm} />
                </div>
            )
        }else{
            return(
                <div></div>
            );
        }
    }
}
