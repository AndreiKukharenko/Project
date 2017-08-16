import React, { Component } from 'react';
import CardMedia from 'material-ui/Card';
import Img from 'react-image'

const getFilms = ()=>{
    return JSON.parse(localStorage.getItem("Films"));
}

const posterSmallStyles = {
    image: {
        display: 'block',
        float: 'left',
        height: '400px',
        width: '450px',
        alt: "rocket"
    },
    container:{
        padding: '10px',
        height: '450px', 
        borderSize: '1px',
        borderStyle: 'solid'
    },
    text: {
        fontSize:'25px'
    }
};   
 
class FilmPoster extends Component{
    constructor(props){
        super(props);
        this.state = {
            films: getFilms()
        }
      }
    render(){
        return(
            <div style = {posterSmallStyles.container}>
                <Img 
                    src="https://st.kp.yandex.net/im/kadr/3/0/2/kinopoisk.ru-Twin-Peaks-3020658.jpg"
                    //src=".../src/content/film_10.jpg"
                    style = {posterSmallStyles.image}
                />
             
                <h4 >{this.state.films[0].title}</h4>
                    <br/>
                <span style = {posterSmallStyles.text}>FilmDescription</span>
            </div>
        )
    }
}

export default FilmPoster;

