import React, {Component} from 'react';
import '../css/aboutMe.css';
import {base_url,days} from "../utils/constants";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        let date = localStorage.getItem("date_about_me");
        date = new Date(Number(date));
        let now = new Date(Date.now());
        let diff = days(now,date);
        if(diff>=30) {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const hero = {
                        "name": data.name,
                        "height": data.height,
                        "mass": data.mass,
                        "hair_color": data.hair_color,
                        "skin_color": data.skin_color,
                        "eye_color": data.eye_color,
                        "birth_year": data.birth_year,
                        "gender": data.gender
                    };
                    this.setState({hero});
                    localStorage.setItem("date_about_me",Date.now().toString());
                    localStorage.setItem("about_me",JSON.stringify(hero));
                });
        }else {
            let hero = localStorage.getItem("about_me");
            hero = JSON.parse(hero);
            this.setState({hero});

        }
    }

    componentWillUnmount() {
        console.log('AboutMe unmounted')
    }

    render() {
        return (
            <div>
                {(this.state.hero) &&
                    <div className={`farGalaxy hero_box`}>
                        <p><span className='hero_titles'>name:</span> {this.state.hero.name}</p>
                        <p><span className='hero_titles'>height:</span> {this.state.hero.height}</p>
                        <p><span className='hero_titles'>birth year:</span> {this.state.hero.birth_year}</p>
                        <p><span className='hero_titles'>gender:</span> {this.state.hero.gender}</p>
                        <p><span className='hero_titles'>mass:</span> {this.state.hero.mass}</p>
                        <p><span className='hero_titles'>hair color:</span> {this.state.hero.hair_color}</p>
                        <p><span className='hero_titles'>skin color:</span> {this.state.hero.skin_color}</p>
                        <p><span className='hero_titles'>eye color:</span> {this.state.hero.eye_color}</p>
                    </div>
                }
            </div>
        )

    }
}

export default AboutMe