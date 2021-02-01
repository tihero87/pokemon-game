import React from 'react';
import s from './layout.module.css';

const Layout = ({id, title, urlBg, colorBg, children}) => {
    let myStyle = {};

    if (urlBg) { myStyle.backgroundImage = 'url(' + urlBg +')' }
    if (colorBg) { myStyle.backgroundColor = colorBg }


    return(
        <section className={s.root} id={id} style={myStyle}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title && title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {children}
                    </div>

                </article>

            </div>

        </section>
    )
};
export  default Layout;