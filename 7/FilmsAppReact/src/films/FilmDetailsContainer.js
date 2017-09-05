import React, { Component } from 'react';
import FilmDetails from "./FilmDetails";
import axios from "axios";

export default class FilmDetailsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
        this.getCurrentFilm = this.getCurrentFilm.bind(this)
    }

    getCurrentFilm (){
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
                self.setState({currentFilm: response.data});
            }else {
                alert("bad request");
            }
        })
        .catch(function(error){
            console.log(error);
        });
    }

    componentDidMount(){
        this.getCurrentFilm();
    }
    
    render(){
        if (this.state.currentFilm) {
            return(
                <div >
                    <FilmDetails currentFilm = { this.state.currentFilm}  reRender = {this.getCurrentFilm}/>
                </div>
            )
        }else{
            return(
                <div></div>
            );
        }
    }
}
