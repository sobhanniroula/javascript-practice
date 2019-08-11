import React, { Component } from 'react'
import axios from 'axios';

export default class AxiosComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        const URL = "https://openlibrary.org/api";

        axios.get(URL)
            .then((res) => res.data)
            .then((data) => console.log('The data is: ', data))
            .catch((e) => console.log('The error is: ', e));
      }


    render() {
        return (
            <div>
                <h3>Hello From Axios Component</h3>
            </div>
        )
    }
}
