// src/components/Home.tsx
import AboutMe from '../components/sections/AboutMe';
import Timeline from '../components/sections/Timeline';
import Activity from '../components/sections/ActivityPreview';
import Tools from '../components/sections/Tools'; 
import MyWorks from '../components/sections/MyWorksPreview';
import GithubActivity from '../components/sections/GithubActivity';

// Note: Home.css is mostly empty now since sections handle their own wrapper padding
import './Home.css'; 

const HomePage = () => {
    return (
        <div className="home-page-container fade-up">
            <AboutMe />
            <Timeline />
            <Tools />
            <Activity />
            <div className="section-divider"></div>
            <MyWorks />
            <GithubActivity />
        </div>
    );
};

export default HomePage;