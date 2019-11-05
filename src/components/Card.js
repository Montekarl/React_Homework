import React from 'react';

export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {showDesc: false,};
    }

    render() {
        const {showDesc} = this.state;
        const {title, background, date, rating, vote, desc} = this.props;

        return (
            <div className="card">
                <div className="card__image"
                     style={{
                         backgroundImage: `url(${background}`
                     }}/>

                <div className="card__title">
                    {title}
                </div>

                <div className="card__like">
                    <i className="fa fa-heart-o"/>
                </div>

                <div className="card__subtitle">
                    <span>{date}</span>
                    <span>{rating} ({vote} votes)</span>
                </div>

                <div className="card-info">
                    <div className="card-info__header">Aprašymas</div>
                    <button onClick={() => {
                        this.setState({showDesc: !showDesc})
                    }}>
                        Daugiau...
                    </button>
                    <div className="card-info__description">
                        {showDesc ? desc : null}
                    </div>
                </div>
            </div>
        )
    }
}