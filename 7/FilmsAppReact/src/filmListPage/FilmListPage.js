import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppHeader from '../common/AppHeader'

import AutoCompleteSearch from '../common/AutoCompleteSearch.js'
import OrderBy from '../common/OrderBy.js'
import FilmList from "../films/FilmList";
import axios from "axios";
import {connect} from "react-redux";
import changeFilms from "../actions/changeFilms";
import setUserName from "../actions/setUserName";


class FilmListPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            orderBy: this.props.orderBy,
        }
    }

    componentDidMount(){
        this.getFilms(this.props.orderBy, this.props.searchTitle);
        this.getCurrentUserName();
    }

    componentWillReceiveProps(nextProps) {
        var array1 = nextProps.films;
        var array2 = this.props.films;
        function arraysAreEqual(arr1,arr2){
            if(arr2 instanceof Object ||
                arr2 === undefined){
                return false
            }
            else return (arr1.join('') === arr2.join(''));
          }
        //debugger
        if ( arraysAreEqual(array1, array2)
                || nextProps.searchTitle !== this.props.searchTitle
                || nextProps.orderBy !== this.props.orderBy){
            this.getFilms(this.props.orderBy, this.props.searchTitle);
        }
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


    getCurrentUserName(){
        var self = this;
        axios({
            method:'get',
            url: "http://localhost:61095/Film/GetCurrentUsername",
        })
        .then(function (response) {
            if(response.status === 200){
                //self.setState({films: response.data});
                self.props.dispatch(setUserName(response.data))
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
        orderBy: state.orderBy,
        films: state.films
    }
}

export default connect(mapStateToProps)(FilmListPage);