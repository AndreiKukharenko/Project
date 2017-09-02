import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppHeader from '../common/AppHeader'

import AutoCompleteSearch from '../common/AutoCompleteSearch.js'
import OrderBy from '../common/OrderBy.js'
import FilmList from "../films/FilmList";
import axios from "axios";
import {connect} from "react-redux";


class FilmListPage extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.getFilms(this.props.orderBy, this.props.searchTitle);
    }

    componentWillReceiveProps(nextProps) {
        //debugger
        this.getFilms(this.props.orderBy, this.props.searchTitle);
    } 

    getFilms(sortOrder, searchString){
        var self = this;
        axios({
            method:'get',
            url: "http://localhost:61095/Film/SortAndSearch",
            params: {
                sortOrder, 
                searchString
            }
        })
        .then(function (response) {
            if(response.status === 200){
                self.setState({films: response.data});
                //self.render()
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
        //debugger
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
                            <FilmList films = {this.state.films}/>
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
        orderBy: state.orderBy
    }
}

export default connect(mapStateToProps)(FilmListPage);