import React from 'react';
import "../css/contact.css";
import {base_url, days} from "../utils/constants";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: ['wait...']
        };
    }

    async fillPlanets(url) {
        const response = await fetch(url);
        const json = await response.json();
        const planets = json.map(item => item.name);
        localStorage.setItem("planets",JSON.stringify(planets));
        this.setState({planets});
    }

    componentDidMount() {
        let date = localStorage.getItem("date_contact");
        date = new Date(Number(date));
        let now = new Date(Date.now());
        let diff = days(now,date);
        if(diff >= 30) {
            this.fillPlanets(`${base_url}/v1/planets`);
            localStorage.setItem("date_contact",Date.now().toString());
        }else{
            let planets = JSON.parse(localStorage.getItem("planets"));
            this.setState({planets})
        }
    }

    componentWillUnmount() {
        console.log('Contact unmounted')
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <label>First Name
                        <input type="text" name="firstname" placeholder="Your name.."/>
                    </label>
                    <label>Planet
                        <select name="planet">{
                            this.state.planets.map((item, index) => <option value={item} key={index}>{item}</option>)
                        }
                        </select>
                    </label>
                    <label>Subject
                        <textarea name="subject" placeholder="Write something.."/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Contact