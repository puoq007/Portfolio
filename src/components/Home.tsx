// src/components/Home.tsx
import AboutMe from './AboutMe';
import Activity from './Activity';
import Tools from './Tools'; 
import MyWorks from './MyWorks';
import Contact from './Contact';

import './css/Home.css'; 

const HomePage = () => {
    return (
        <div className="home-page-container">
            {/* Section: About Me */}
            <section id="about-me-section">
                <AboutMe />
            </section>

            {/* Section: Tools (Skills & Expertise) */}
            <section id="tools-section">
                <Tools />
            </section>
            
            {/* Section: Activity */}
            <section id="activity-section">
                <Activity />
            </section>

            {/* Section: My Works */}
            <section id="my-works-section">
                <MyWorks />
            </section>

             {/* Section: Contact */}
            <section id="contact-section">
                <Contact />
            </section>

        </div>
    );
};

export default HomePage;