import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ProjectCaseStudy.css';

interface ArchNode {
  icon: string;
  title: string;
  tech: string;
}

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface ProjectData {
  id: number;
  title: string;
  category: string;
  course: string;
  intro: string;
  challenge: string;
  architecture: ArchNode[];
  features: Feature[];
  outcome: string;
  tags: string[];
  externalLink?: string;
}

const allProjects: ProjectData[] = [
  {
    id: 1,
    title: 'Obesity Risk Analysis & Predictive Model',
    category: 'Data Science',
    course: 'Introduction to Data Science',
    intro: 'An analytical model that evaluates obesity risk levels based on individuals\' dietary habits and physical metrics, leveraging machine learning tools to extract actionable health insights.',
    challenge: 'Raw health survey data is often inconsistent and difficult to interpret manually. The challenge was to clean, process, and analyze a multi-variable dataset to accurately classify obesity risk, without writing custom ML code from scratch.',
    architecture: [
      { icon: '📊', title: 'Data Source', tech: 'UCI Dataset (CSV)' },
      { icon: '⚙️', title: 'Processing', tech: 'RapidMiner Studio' },
      { icon: '🧠', title: 'Model', tech: 'Decision Tree / Naive Bayes' },
    ],
    features: [
      { icon: '🧹', title: 'Data Preprocessing', desc: 'Handled missing values, outliers, and normalized continuous attributes.' },
      { icon: '📈', title: 'Multi-class Classification', desc: 'Classified subjects into 7 obesity categories with accuracy evaluation.' },
      { icon: '📋', title: 'Visual Reporting', desc: 'Generated confusion matrices and ROC curves to validate model performance.' },
    ],
    outcome: 'The model achieved strong classification accuracy, demonstrating that dietary and physical data are reliable predictors of obesity risk. This project introduced me to the full data science pipeline — from raw data to insight.',
    tags: ['RapidMiner', 'Data Science', 'Machine Learning', 'Classification', 'Dataset', 'Obesity'],
  },
  {
    id: 2,
    title: 'Enterprise Network Architecture Design',
    category: 'Networking',
    course: 'Data Communications & Networks',
    intro: 'A comprehensive network topology simulation featuring cross-router communication, subnetting, VLAN configuration, and inter-VLAN routing across a simulated enterprise environment.',
    challenge: 'Designing a multi-segment network where devices in different VLANs and subnets can communicate reliably while maintaining logical isolation. The configuration had to survive live packet testing with zero dropped pings.',
    architecture: [
      { icon: '🖥️', title: 'Devices', tech: 'Cisco Routers & Switches (Packet Tracer)' },
      { icon: '🌐', title: 'Protocols', tech: 'OSPF / Static Routing' },
      { icon: '🔀', title: 'Segmentation', tech: 'VLANs, Trunks, Subnets' },
    ],
    features: [
      { icon: '📡', title: 'Subnetting', desc: 'Calculated and assigned IP address ranges across multiple network segments.' },
      { icon: '🔒', title: 'VLAN Isolation', desc: 'Configured trunk ports and access ports to segment traffic by department.' },
      { icon: '↔️', title: 'Inter-VLAN Routing', desc: 'Enabled routing between VLANs using router-on-a-stick and Layer 3 switching.' },
    ],
    outcome: 'All devices successfully communicated across routers and VLANs. This project built a strong foundation in IP addressing, routing logic, and enterprise network segmentation strategies.',
    tags: ['Cisco', 'Packet Tracer', 'VLAN', 'OSPF', 'Subnetting', 'Networking'],
  },
  {
    id: 3,
    title: 'Car Rental Management Web Platform',
    category: 'Web Development',
    course: 'Web Application Development',
    intro: 'A full-featured car rental web application with Role-Based Access Control (User, Admin, Approver), featuring a UI designed in Figma and a PHP/MySQL backend managed via XAMPP.',
    challenge: 'Building a web system that accommodates three distinct user roles with different permissions — users browsing and booking, admins managing the fleet, and approvers validating requests — while maintaining a clean, intuitive interface.',
    architecture: [
      { icon: '🎨', title: 'UI Design', tech: 'Figma' },
      { icon: '🌐', title: 'Frontend', tech: 'HTML, CSS, JavaScript' },
      { icon: '🗄️', title: 'Backend', tech: 'PHP + MySQL (XAMPP)' },
    ],
    features: [
      { icon: '👤', title: 'Role-Based Access', desc: 'Three distinct roles: User (browse/book), Admin (manage fleet), Approver (validate bookings).' },
      { icon: '📅', title: 'Booking System', desc: 'Users can view available vehicles, submit booking requests, and track approval status.' },
      { icon: '🗃️', title: 'Database Integration', desc: 'Structured MySQL database with tables for users, vehicles, bookings, and approval logs.' },
    ],
    outcome: 'Delivered a functional multi-role web application. This project cemented my skills in full-stack web development, session management, and designing relational databases for business workflows.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP', 'Figma', 'RBAC'],
  },
  {
    id: 4,
    title: 'Smart IoT Environment Monitoring System',
    category: 'IoT & Embedded Systems',
    course: 'Embedded Systems & Internet of Things',
    intro: 'A wireless soil moisture monitoring system using an ESP32 microcontroller that triggers hardware alerts and sends real-time telemetry to a custom Node-RED dashboard via MQTT over the internet.',
    challenge: 'Reliably capturing soil sensor data from an embedded device and transmitting it wirelessly to a remote dashboard, while ensuring the system responds in real-time with LED alerts when thresholds are breached.',
    architecture: [
      { icon: '🔌', title: 'Hardware', tech: 'ESP32 + Soil Moisture Sensor' },
      { icon: '📡', title: 'Communication', tech: 'MQTT over Wi-Fi' },
      { icon: '📊', title: 'Dashboard', tech: 'Node-RED + MQTT Broker' },
    ],
    features: [
      { icon: '💧', title: 'Moisture Detection', desc: 'Capacitive soil sensor reads moisture levels and compares against a configurable threshold.' },
      { icon: '🚨', title: 'Hardware Alert', desc: 'LED indicator activates immediately when moisture drops below the defined threshold.' },
      { icon: '📡', title: 'Real-time Dashboard', desc: 'Data streamed via MQTT to Node-RED, displaying live status charts and alerts remotely.' },
    ],
    outcome: 'The system reliably detected moisture changes and updated the remote dashboard with sub-second latency. This project gave me hands-on experience with embedded C programming, MQTT protocol, and IoT system integration.',
    tags: ['ESP32', 'Arduino', 'MQTT', 'Node-RED', 'IoT', 'Embedded', 'C/C++'],
  },
  {
    id: 5,
    title: 'AI Object Detection & Classification System',
    category: 'AI / Machine Learning',
    course: 'Artificial Intelligence Applications',
    intro: 'A computer vision pipeline using a pre-trained Faster R-CNN model to detect, localize, and classify predefined objects in user-uploaded images, outputting labeled bounding boxes and confidence scores.',
    challenge: 'Implementing an object detection system without training a model from scratch — the challenge was to correctly configure a pre-trained Faster R-CNN model, preprocess input images, and post-process detection results into meaningful visual output.',
    architecture: [
      { icon: '🖼️', title: 'Input', tech: 'User-uploaded images (JPEG/PNG)' },
      { icon: '🧠', title: 'Model', tech: 'Faster R-CNN (pre-trained, PyTorch)' },
      { icon: '📤', title: 'Output', tech: 'Bounding boxes + Labels + Confidence Scores' },
    ],
    features: [
      { icon: '🔍', title: 'Object Detection', desc: 'Identifies and localizes multiple objects within a single image using region proposal networks.' },
      { icon: '🏷️', title: 'Classification', desc: 'Labels each detected object with its class name and a confidence score.' },
      { icon: '📊', title: 'Visual Output', desc: 'Draws bounding boxes and labels directly on the image for clear, interpretable results.' },
    ],
    outcome: 'The pipeline successfully detected and classified objects in test images with high confidence. This project introduced me to transfer learning and the power of pre-trained neural networks for solving real-world vision tasks.',
    tags: ['Python', 'PyTorch', 'Faster R-CNN', 'Computer Vision', 'Object Detection', 'Deep Learning'],
  },
  {
    id: 6,
    title: 'Corporate Meeting Room Booking App',
    category: 'Mobile Development',
    course: 'Mobile Application Development',
    intro: 'A cross-platform mobile application for managing corporate meeting room reservations, with a modern Figma-designed UI, Role-Based Access Control, and a Flutter/Dart frontend connected to a backend database.',
    challenge: 'Translating a complex multi-role booking workflow into an intuitive mobile UX, ensuring the app feels native on both Android and iOS while managing real-time room availability and a multi-step approval flow.',
    architecture: [
      { icon: '🎨', title: 'UI Design', tech: 'Figma (Mobile Prototyping)' },
      { icon: '📱', title: 'Frontend', tech: 'Flutter (Dart)' },
      { icon: '🗄️', title: 'Backend', tech: 'PHP + MySQL (XAMPP)' },
    ],
    features: [
      { icon: '📅', title: 'Room Scheduling', desc: 'Browse available rooms by date/time, view capacity and amenities, and submit booking requests.' },
      { icon: '✅', title: 'Approval Workflow', desc: 'Requests route through an Approver role before confirmation, with real-time status updates.' },
      { icon: '🔐', title: 'Secure Auth', desc: 'Role-based login system for User, Admin, and Approver with session management.' },
    ],
    outcome: 'Delivered a polished, functional mobile application that successfully handles the full booking lifecycle. This project deepened my skills in Flutter state management, REST API integration, and mobile UX design principles.',
    tags: ['Flutter', 'Dart', 'Figma', 'MySQL', 'XAMPP', 'RBAC', 'Mobile App', 'Cross-Platform'],
  },
  {
    id: 7,
    title: 'Automated Vehicle Reservation System',
    category: 'Database & Backend',
    course: 'Database Systems',
    intro: 'A vehicle reservation platform with a carefully architected relational database schema, supporting fleet management, user accounts, and a full booking lifecycle — implemented with PHP and MySQL via XAMPP.',
    challenge: 'Designing a normalized database that prevents double-booking, maintains data integrity across concurrent users, and supports complex queries for reporting — while keeping the web interface simple and responsive.',
    architecture: [
      { icon: '🗺️', title: 'Schema Design', tech: 'ER Diagram → Relational Model' },
      { icon: '🗄️', title: 'Database', tech: 'MySQL (XAMPP)' },
      { icon: '🌐', title: 'Web Interface', tech: 'PHP + HTML/CSS/JS' },
    ],
    features: [
      { icon: '🏗️', title: 'Normalized Schema', desc: 'Relational database with FK constraints, preventing data redundancy and maintaining referential integrity.' },
      { icon: '🔄', title: 'Real-time Availability', desc: 'Queries check vehicle schedules in real-time, preventing double-booking at the database level.' },
      { icon: '📊', title: 'Admin Dashboard', desc: 'Fleet managers can view all bookings, filter by status, and update vehicle availability.' },
    ],
    outcome: 'The system handled complex booking scenarios without data conflicts. This project gave me a deep understanding of database normalization, transaction management, and building data-driven web applications.',
    tags: ['MySQL', 'PHP', 'XAMPP', 'Database Design', 'ER Diagram', 'SQL', 'RBAC'],
  },
  {
    id: 8,
    title: 'Power System Efficiency & Simulation Analysis',
    category: 'Electrical Engineering',
    course: 'Fundamentals of Electrical Engineering',
    intro: 'A simulation and analysis project focused on optimizing electrical power system efficiency through power factor correction, studying the effects of reactive power on voltage regulation and energy consumption.',
    challenge: 'Understanding and quantifying how low power factor degrades system performance — increased current draw, higher energy losses, and voltage instability — and then simulating corrective measures to validate the improvement.',
    architecture: [
      { icon: '⚡', title: 'Simulation Tool', tech: 'MATLAB / PSCAD' },
      { icon: '📐', title: 'Analysis', tech: 'Reactive Power & Power Factor Study' },
      { icon: '🔋', title: 'Correction', tech: 'Capacitor Banks & Synchronous Condensers' },
    ],
    features: [
      { icon: '📉', title: 'Power Factor Analysis', desc: 'Measured the impact of reactive power on active power efficiency across multiple load scenarios.' },
      { icon: '⚡', title: 'System Simulation', desc: 'Simulated voltage regulation, current flow, and energy loss under low and corrected power factor conditions.' },
      { icon: '🔋', title: 'Correction Strategies', desc: 'Evaluated capacitor banks and synchronous condensers as reactive power compensation methods.' },
    ],
    outcome: 'Power factor correction reduced simulated energy losses by a significant margin and improved voltage stability. This project bridged theoretical electrical engineering with practical system optimization techniques.',
    tags: ['Power Systems', 'Power Factor', 'Simulation', 'Reactive Power', 'Energy Efficiency', 'MATLAB'],
  },
  {
    id: 9,
    title: 'ISP-Grade Network Simulation (OSPF, BGP, MPLS)',
    category: 'Advanced Networking',
    course: 'Service Provider Network',
    intro: 'A highly scalable Service Provider network architecture simulated in GNS3, implementing OSPF for internal routing, eBGP/iBGP for inter-AS communication, and MPLS for optimized data forwarding and VPN support.',
    challenge: 'Configuring a multi-AS network where different Autonomous Systems must exchange routing information securely and efficiently, while MPLS labels reduce forwarding overhead and enable traffic engineering across the backbone.',
    architecture: [
      { icon: '🖥️', title: 'Simulation', tech: 'GNS3 (Cisco IOS)' },
      { icon: '🌐', title: 'Internal Routing', tech: 'OSPF (Area 0)' },
      { icon: '↔️', title: 'Inter-AS', tech: 'eBGP + iBGP + MPLS' },
    ],
    features: [
      { icon: '📡', title: 'OSPF Configuration', desc: 'Configured OSPF across backbone routers for fast, loop-free intra-AS routing convergence.' },
      { icon: '🌍', title: 'BGP Peering', desc: 'Established eBGP sessions between AS boundaries and iBGP full-mesh within the provider core.' },
      { icon: '🚀', title: 'MPLS Forwarding', desc: 'Enabled MPLS label switching to reduce routing table lookups and support Layer 3 VPN services.' },
    ],
    outcome: 'All AS boundaries communicated correctly with optimized MPLS forwarding paths. This project provided enterprise-grade networking experience mimicking real-world ISP infrastructure design.',
    tags: ['OSPF', 'BGP', 'eBGP', 'iBGP', 'MPLS', 'GNS3', 'Cisco', 'Service Provider'],
  },
  {
    id: 10,
    title: 'Smart Home Assistant Educational Kit',
    category: 'IoT Education',
    course: 'Computer Engineering Project',
    intro: 'A comprehensive, beginner-friendly learning kit and laboratory curriculum focused on Home Assistant and IoT integration — designed to guide learners from basic sensor setup to complex smart home automation.',
    challenge: 'Creating educational materials that are technically accurate yet accessible to beginners with no prior IoT experience — balancing depth of content with approachability, and ensuring labs can be completed with affordable hardware.',
    architecture: [
      { icon: '📚', title: 'Learning Kit', tech: 'Step-by-step Lab Guides (PDF/Web)' },
      { icon: '🏠', title: 'Platform', tech: 'Home Assistant (Raspberry Pi / VM)' },
      { icon: '🔌', title: 'Hardware', tech: 'ESP32, DHT11, PIR Sensors' },
    ],
    features: [
      { icon: '📖', title: 'Structured Curriculum', desc: 'Modules progress from Home Assistant setup → sensor integration → automation scripts → dashboard creation.' },
      { icon: '🔬', title: 'Hands-on Labs', desc: 'Each module includes a practical lab with step-by-step instructions, expected output, and troubleshooting tips.' },
      { icon: '🎯', title: 'Beginner-Friendly', desc: 'Designed for high school students, undergraduates, and hobbyists with no prior IoT background.' },
    ],
    outcome: 'The kit was validated through peer testing and received positive feedback for clarity and completeness. This project strengthened my ability to communicate complex technical concepts to diverse audiences.',
    tags: ['Home Assistant', 'IoT', 'ESP32', 'Automation', 'Smart Home', 'Education', 'Raspberry Pi'],
  },
  {
    id: 11,
    title: 'Jig Inventory Management System',
    category: 'Full-Stack Enterprise',
    course: 'Co-operative Education / Internship',
    intro: 'A production-ready enterprise web application for managing manufacturing tools (Jigs) in an industrial environment. Built with Blazor WebAssembly and .NET 8, deployed via Docker with CI/CD pipeline integration.',
    challenge: 'Traditional jig management relies on manual spreadsheets or legacy systems, leading to lost tools, production delays, and audit failures. The goal was to build a robust real-time tracking system for high-volume production cycles.',
    architecture: [
      { icon: '💻', title: 'Frontend', tech: 'Blazor WebAssembly (.NET 8)' },
      { icon: '⚙️', title: 'Backend API', tech: '.NET Web API (C#)' },
      { icon: '🗄️', title: 'Database', tech: 'Microsoft SQL Server' },
    ],
    features: [
      { icon: '📱', title: 'QR Code Check-in/out', desc: 'Fast and accurate jig identification using QR scanning in real-time.' },
      { icon: '🔐', title: 'Role-Based Access', desc: 'Admin, Technician, and Viewer roles with fine-grained permission control.' },
      { icon: '📊', title: 'Reporting Dashboard', desc: 'Comprehensive analytics on jig usage, maintenance schedules, and audit history.' },
    ],
    outcome: 'The JIG IMS reduced administrative overhead by ~40% and eliminated "lost jig" incidents. Deployed to production via Docker with an automated CI/CD pipeline, giving me real-world DevOps experience.',
    tags: ['Blazor', '.NET 8', 'C#', 'SQL Server', 'Docker', 'QR Code', 'CI/CD', 'REST API'],
    externalLink: '/project/jig-ims',
  },
];

const ProjectCaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const project = allProjects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="cs-not-found">
        <h1>{t('case_study.project_not_found')}</h1>
        <Link to="/mywork_page" className="cs-back-btn">{t('case_study.back_to_projects')}</Link>
      </div>
    );
  }

  // Get localized properties
  const localizedTitle = t(`my_works_page.project${project.id}_title`, project.title);
  const localizedCategory = t(`my_works_page.project${project.id}_description`, project.category);
  const localizedIntro = t(`my_works_page.project${project.id}_details`, project.intro);
  const localizedCourse = t(`my_works_page.project${project.id}_course`, project.course);
  const localizedChallenge = t(`my_works_page.project${project.id}_challenge`, project.challenge);
  const localizedOutcome = t(`my_works_page.project${project.id}_outcome`, project.outcome);

  return (
    <div className="cs-container">
      {/* Hero */}
      <div className="cs-hero fade-up">
        <div className="cs-eyebrow">
          <span className="cs-category-badge">{localizedCategory}</span>
          <span className="cs-id-badge">#{String(project.id).padStart(2, '0')}</span>
        </div>
        <h1>{localizedTitle}</h1>
        <p className="cs-course">📚 {localizedCourse}</p>
        <p className="cs-intro">{localizedIntro}</p>
        <div className="cs-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="cs-tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Challenge */}
      <section className="cs-section fade-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="cs-section-title">{t('case_study.challenge_title')}</h2>
        <p>{localizedChallenge}</p>
      </section>

      {/* Architecture */}
      <section className="cs-section fade-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="cs-section-title">{t('case_study.architecture_title')}</h2>
        <div className="cs-arch-diagram">
          {project.architecture.map((node, i) => (
            <React.Fragment key={node.title}>
              <div className="cs-arch-box">
                <span className="cs-arch-icon">{node.icon}</span>
                <h3>{t(`my_works_page.project${project.id}_arch_${i}_title`, node.title)}</h3>
                <p>{t(`my_works_page.project${project.id}_arch_${i}_tech`, node.tech)}</p>
              </div>
              {i < project.architecture.length - 1 && (
                <div className="cs-arch-arrow">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="cs-section fade-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="cs-section-title">{t('case_study.features_title')}</h2>
        <div className="cs-features-grid">
          {project.features.map((f, i) => (
            <div key={f.title} className="cs-feature-card">
              <span className="cs-feature-icon">{f.icon}</span>
              <h4>{t(`my_works_page.project${project.id}_feat_${i}_title`, f.title)}</h4>
              <p>{t(`my_works_page.project${project.id}_feat_${i}_desc`, f.desc)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="cs-section fade-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="cs-section-title">{t('case_study.outcome_title')}</h2>
        <p>{localizedOutcome}</p>
      </section>

      {/* Footer */}
      <div className="cs-footer fade-up" style={{ animationDelay: '0.6s' }}>
        {project.externalLink && (
          <a href={project.externalLink} className="cs-detail-btn">
            {t('case_study.view_full_case_study')}
          </a>
        )}
        <Link to="/mywork_page" className="cs-back-btn">{t('case_study.back_to_projects')}</Link>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;
