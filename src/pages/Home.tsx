// src/components/Home.tsx
import AboutMe from '../components/sections/AboutMe';
import Activity from '../components/sections/ActivityPreview';
import Tools from '../components/sections/Tools'; 
import MyWorks from '../components/sections/MyWorksPreview';
import Contact from '../components/sections/Contact';
import GithubActivity from '../components/sections/GithubActivity';

// Note: Home.css is mostly empty now since sections handle their own wrapper padding
import './Home.css'; 

const HomePage = () => {
    return (
        <div className="home-page-container fade-up">
            <AboutMe />
            <Tools />
            <Activity />
            <div className="section-divider"></div>
            <MyWorks />
            <GithubActivity />
            <Contact />
        </div>
    );
};

export default HomePage;