import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:1,
        tags: ['Apple']
    };

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags..!!</p>

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    }

    handleDecrement = () => {
        this.setState({count: this.state.count - 1});
    }

    render() { 

        return (
            <div> 
                <span className={this.getBadges()}>{this.formatCount()} </span> 
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm m-2'>Increase</button>
                <button onClick={this.handleDecrement} className='btn btn-secondary btn-sm m-2'> Decrease</button>
                
                {this.state.tags.length === 0 && 'Please create a new Tag'}
                {this.renderTags()} 
            </div>
        )
    }


    getBadges() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter ;