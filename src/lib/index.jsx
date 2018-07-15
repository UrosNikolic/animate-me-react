import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AnimateMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: {},
            animatingStyles: {}
        };

        this.myRef = React.createRef();
        this.onScroll = this.onScroll.bind(this);
        this.addAnimatingStyles = this.addAnimatingStyles.bind(this);
    }

    isAnimated = false;

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    onScroll() {
        this.setState({
            position: this.myRef.current.getBoundingClientRect()
        });

        if ((this.state.position.top < window.innerHeight) && !this.isAnimated) {
            this.addAnimatingStyles();
            this.isAnimated = true;
            window.removeEventListener('scroll', this.onScroll);
        }
    }

    addAnimatingStyles() {
        this.setState({
            animatingStyles: {
                transform: this.props.transform,
                transformOrigin: this.props.transformOrigin,
                transitionDuration: `${this.props.transitionDuration}s`,
                transitionTimingFunction: this.props.transitionTimingFunction,
                transitionDelay: this.props.transitionDelay,
                opacity: this.props.opacity,
                marginTop: `${this.props.marginTop}px`,
                marginRight: `${this.props.marginRight}px`,
                marginBottom: `${this.props.marginBottom}px`,
                marginLeft: `${this.props.marginLeft}px`,
                width: this.props.width,
                height: this.props.height,
            }
        })
    }

    render() {
        return (
            <div className='animation-wrapper' style={this.state.animatingStyles} ref={this.myRef}>
                {this.props.children}
            </div>
        )
    }
}

AnimateMe.propTypes = {
    transform: PropTypes.string,
    transformOrigin: PropTypes.string,
    transitionDuration: PropTypes.number,
    transitionTimingFunction: PropTypes.string,
    transitionDelay: PropTypes.string,
    opacity: PropTypes.number,
    marginRight: PropTypes.string,
    marginLeft: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default AnimateMe;