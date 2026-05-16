import React from 'react'

function Section({id,children,className='' }){
return (
    <section
    id={id}
    className={`scroll-mt-20 px-10 py-12 ${className}`}
    >
        <div className={`max-w-6xl mx-auto ${className}`}>
            {children}
        </div>
    </section>
)
}

export default Section;