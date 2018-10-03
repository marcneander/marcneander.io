import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

const propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool
};

const defaultProps = {
    className: '',
    isOpen: false
};

const IconBar = styled.span`
    transform-origin: 27px;
    transition: transform 0.2s;
    background-color: #fff;
    display: block;
    width: 29px;
    height: 3px;
    border-radius: 2px;

    & + & {
        margin-top: 6px;
    }
`;

const Button = styled.button`
    background-color: transparent;
    border-color: transparent;
    outline: 0;
    position: relative;
    float: right;
    padding: 10px;
    appearance: button;
    cursor: pointer;

    &.active {
        ${/* sc-custom 'div' */ IconBar} {
            &:nth-child(2) {
                transform: rotate(-45deg);
            }

            &:nth-child(3) {
                opacity: 0;
            }

            &:nth-child(4) {
                transform: rotate(45deg);
            }
        }
    }
`;

class OffcanvasButton extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        const { onClick } = this.props;

        e.preventDefault();

        onClick();
    }

    render() {
        const { className, isOpen } = this.props;

        const classNames = classnames(className, isOpen && 'active');

        return (
            <Button type="button" onClick={this.onClick} className={classNames}>
                <span className="sr-only">Toggle navigation</span>
                <IconBar />
                <IconBar />
                <IconBar />
            </Button>
        );
    }
}

OffcanvasButton.propTypes = propTypes;
OffcanvasButton.defaultProps = defaultProps;

export default OffcanvasButton;