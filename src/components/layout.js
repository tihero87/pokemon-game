import React from 'react';
import s from '../css/layout.module.css';

const Layout = ({id, title, descr, urlBg, colorBg}) => {
    const bgimg = urlBg;
    let myStyle;
    colorBg ? myStyle = {background: colorBg} : myStyle = {
        backgroundImage: 'url(' + bgimg + ')',
    };


    return(
        <section className={s.root} id={id} style={myStyle}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title && title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc.full}>
                        <p>{descr && descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
};
export  default Layout;