import React from 'react'
import Adeika from '../images/adeika.jpg'
import './css/Testimony.css';

const Testimony = () => {
  return (
    <div className='testimony'>
        <section>
            <h1>Testimonies & Recommendations</h1>
        </section>
        <aside>
            <div className="rec-one">
                <img src={Adeika} alt="Adeika, Blessing Isoyiza" />
                <h2>Adeika, Blessing Isoyiza</h2>
                <p>I was opportune to work on a project using React.Js with
                     Raji Sarafadeen and he proved very competent.</p>
            </div>
            <div className="rec-two">
                <img src={Adeika} alt="Adeika, Blessing Isoyiza" />
                <h2>Adeika, Blessing Isoyiza</h2>
                <p>I was opportune to work on a project using React.Js with
                     Raji Sarafadeen and he proved very competent.</p>
            </div>
            <div className="rec-three">
                <img src={Adeika} alt="Adeika, Blessing Isoyiza" />
                <h2>Adeika, Blessing Isoyiza</h2>
                <p>I was opportune to work on a project using React.Js with
                     Raji Sarafadeen and he proved very competent.</p>
            </div>
            <div className="rec-four">
                <img src={Adeika} alt="Adeika, Blessing Isoyiza" />
                <h2>Adeika, Blessing Isoyiza</h2>
                <p>I was opportune to work on a project using React.Js with
                     Raji Sarafadeen and he proved very competent.</p>
            </div>
           
        </aside>
    </div>
  )
}

export default Testimony