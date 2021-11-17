import React from 'react';

export class Card extends React.Component<{ width: string, color: string}> {
    render() {
        return (
            <div className={`h-screen col-span-${this.props.width} bg-${this.props.color} shadow-xl border border-gray-200 rounded-xl`}>{this.props.children}</div> // py-4 px-8
        );
    }
}

