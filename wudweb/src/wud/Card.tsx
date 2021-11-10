import React from 'react';

export class Card extends React.Component<{ width: string, color: string}> {
    render() {
        return (
            <div className={`col-span-${this.props.width} bg-${this.props.color} py-4 px-8 shadow-lg rounded-lg my-20`}>{this.props.children}</div>
        );
    }
}
