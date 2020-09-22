import React, { Component } from 'react'
import Header from '../Componets/Header'

export class Main extends Component {
    constructor() {
        super();
        this.state = {
          search: ''
        }
      }
      search = (data) => {
        this.setState({ search: data });
      };
    render() {
        return (
            <div>
                <Header callback = {this.search} />
            </div>
        )
    }
}

export default Main
