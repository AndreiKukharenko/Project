class FilmPoster extends Component{
    render(){
        return(
            <div className = {"filmPoster"} >
                <span>Hello</span>

                <Link to={{
                    pathname: '/FilmDetails/' + this.props.filmId,
                }}>
                    <Img className = {"filmPoster__picture"}
                            src = {this.props.images.poster}
                            alt = {"poster"}
                    />
                <span className = {"filmPoster__title"} >{this.props.title}</span>
                </Link>
                <br/>
                <span>{this.props.description}</span>
                </div>
    )
}
}