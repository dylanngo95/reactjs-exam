import React, { useEffect, useState } from 'react';
import BreadcrumbComponent from '../breadcrumb/Breadcrumb';


const Effect = () => {
    let [count, setCount] = useState(0);
    let [name, setName] = useState(null);

    useEffect(() => {

        if (!name) {
            const gitHubUrl = `https://api.github.com/users/dylanngo95`;
            fetch(gitHubUrl)
                .then((res) =>
                    res.json()
                )
                .then((result) => {
                    console.log(result);
                    setName(result.login);
                })
        }

        setName("tinh ngo");
        console.log("use Effect");
        document.title = `Count ${count}`;

        setCount(1);
        console.log(name);
        return function cleanup() {
            console.log('component will unmount');
        }
    },
    [name]
    );

    if (name === null) {
        return 'Waiting...'
    }
    return name ? name : 'Annonymous'
}


const About = () => {
    let [showEffect, setShowEffect] = useState(1);
    function onClick() {
        setShowEffect(!showEffect);
    }
    return (
        <>
            <BreadcrumbComponent />
            <button onClick={onClick}>
                Switch Effect
            </button>
            {showEffect ? <Effect /> : null}
        </>
    );
}

export default About;