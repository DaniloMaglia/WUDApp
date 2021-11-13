import React from 'react';

export class Card extends React.Component<{ width: string, color: string}> {
    render() {
        return (
            <div className={`col-span-${this.props.width} bg-${this.props.color} shadow-xl border border-gray-200 rounded-xl my-20`}>{this.props.children}</div> // py-4 px-8
        );
    }
}

