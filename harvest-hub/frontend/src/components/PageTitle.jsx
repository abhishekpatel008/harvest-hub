import React from 'react'

export default function PageTitle(props) {
    return (
        <h1 className="text-3xl text-center text-primary font-primary font-extrabold mt-4 py-2">{props.title}</h1>
    );
};
