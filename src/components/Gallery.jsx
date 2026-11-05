import React from "react";
import portfolioData from '../data/portfolio.json'

export default function Gallery() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', padding: '2rem' }}>
            {portfolioData.map((item) => (
                <div key={item.id} style={{ background: '#111', borderRadius: '8px', overflow: 'hidden' }}>
                    <img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '1rem', color: '#fff' }}>
                        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>{item.title}</h3>
                        <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{item.category}</span>
                    </div>
                </div>
            ))}

        </div>
    )
}