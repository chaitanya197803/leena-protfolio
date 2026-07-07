import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Languages from '../components/Languages';
import Interests from '../components/Interests';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Leena Singh',
    'jobTitle': ['Content Writer', 'School Teacher', 'Computer Operator'],
    'alumniOf': {
      '@type': 'CollegeOrUniversity',
      'name': 'Bharti College, Durg',
    },
    'url': 'https://leenasingh.vercel.app',
    'telephone': '+916266435741',
    'email': 'ls1434626@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Durg',
      'addressRegion': 'Chhattisgarh',
      'addressCountry': 'India',
    },
    'description': 'Official portfolio of Leena Singh, B.Sc Graduate, Content Writer, School Teacher, and Computer Operator.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Languages />
      <Interests />
      <Achievements />
      <Contact />
    </>
  );
}
