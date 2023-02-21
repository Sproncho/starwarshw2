import React, {Component} from 'react';
import {base_url} from "../utils/constants";
import styles from '../css/farGalaxy.module.css';

class FarGalaxy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opening_crawl: 'Loading...'
        }
    }

    componentDidMount() {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            this.setState({opening_crawl})
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${base_url}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({opening_crawl: data.opening_crawl});
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }
    }

    render() {
        return (
            <p className={styles.farGalaxy}>{this.state.opening_crawl}</p>
        );
    }
}

export default FarGalaxy;