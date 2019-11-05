import React from 'react';
import Card from './Card';
import Zanrai from './Zanrai'
import axios from 'axios';
import {endpoints, getImageUrl} from '../config';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            genres: [],
            Genre_Chosen: [],
        };
    }

    Rusiavimas = id => {
        this.setState({
            Genre_Chosen: id
        })
    }

    componentDidMount() {
        axios.all([
            axios.get(endpoints.mostPopularMovies()),
            axios.get(endpoints.genres())
        ])
            .then(axios.spread((PagalPop, PagalZanra) => {
                this.setState({
                    list: PagalPop.data.results
                })
                this.setState({
                    genres: PagalZanra.data.genres
                })
            }));
    }

    componentDidUpdate(prevProps, prevState) {
        const {Genre_Chosen} = this.state;
        if (Genre_Chosen !== prevState.Genre_Chosen) {
            axios.get(endpoints.genreMovies(this.state.Genre_Chosen))
                .then(data => {
                    this.setState({
                        list: data.data.results
                    })
                })
        }
    }

    render() {
        return (
            <div>
                <Zanrai
                    genres={this.state.genres}
                    rusiuoti={this.Rusiavimas}
                />
                <div className="cards">
                    {this.state.list.map((card) => (
                        <Card
                            key={card.original_title}
                            background={getImageUrl(card.backdrop_path)}
                            date={card.release_date}
                            rating={card.vote_average}
                            votes={card.vote_count}
                            desc={card.overview}
                            title={card.original_title}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
