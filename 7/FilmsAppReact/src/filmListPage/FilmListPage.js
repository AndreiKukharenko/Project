import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppHeader from '../common/AppHeader'

import AutoCompleteSearch from '../common/AutoCompleteSearch.js'
import OrderBy from '../common/OrderBy.js'
import FilmList from "../films/FilmList";
import axios from "axios";
import {connect} from "react-redux";
import changeFilms from "../actions/changeFilms";

class FilmListPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            orderBy: this.props.orderBy,
            films: this.props.films
        }
    }

    componentDidMount(){
        this.getFilms(this.props.orderBy, this.props.searchTitle);
    }

    getFilms(sortOrder, searchString){
        var self = this;
        axios({
            method:'get',
            url: "http://localhost:61095/Film/ReturnFilms",
        })
        .then(function (response) {
            if(response.status === 200){
                self.setState({films: response.data});
                //TODo: consider using special bool props
                self.props.dispatch(changeFilms(response.data))
            }else {
                alert("bad request");
            }
        })
        .catch(function(error){
            self.setState({error: error.message})
            console.log(error);
        });
    }

    render() {
        if (this.state.films) {
            return (
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppHeader/> 
                            <div>
                                <AutoCompleteSearch films = {this.state.films}/>
                                <OrderBy/>
                            </div>
                            <FilmList films = {this.props.films}/>
                        </div>
                    </MuiThemeProvider>
                </div>
            );
        }
        else if (this.state.error){
            return (<div> {this.state.error}</div>)
        }
        else {
            return (<div> Loading. Please wait</div>)
        }
    }
}

function mapStateToProps(state){
    return {
        searchTitle: state.searchTitle,
        orderBy: state.orderBy,
        films: state.films
    }
}

export default connect(mapStateToProps)(FilmListPage);