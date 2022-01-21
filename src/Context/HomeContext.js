import React from 'react';

export const HomeContext = React.createContext();

export const initialHomeState = [
    {
        id: 0,
        post: `“Tailwind CSS is the only framework that Ive seen scale
        on large teams. Its easy to customize, adapts to any design,
        and the build size is tiny.”`,
        image: 'post.jpg',
        name: 'Sarah Dayan',
        companyName: 'Staff Engineer, Algolia'
    },
    {
        id: 1,
        post: `Thanks to @tailwindcss, CSS started to make sense to me.`,
        image: 'post.jpg',
        name: 'Nuno Maduro',
        companyName: 'Core Team Member @laravelphp'
    },
    {
        id: 2,
        post: `If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.`,
        image: 'post.jpg',
        name: 'Guillermo Rauch',
        companyName: 'Vercel'
    },
    {
        id: 3,
        post: `With Tailwind I can offer my clients faster turnaround times on custom WordPress themes, both for initial builds and for future revisions.`,
        image: 'post.jpg',
        name: 'Greg Sullivan',
        companyName: 'WordPress Developer'
    },
    {
        id: 4,
        post: `Tailwind has been a total game-changer for our dev team. It allows us to move faster, keep our UI consistent, and focus on the work we want to do instead of writing CSS.`,
        image: 'post6.jpg',
        name: 'Jake Ryan Smith',
        companyName: 'WordPress Developer'
    }
];