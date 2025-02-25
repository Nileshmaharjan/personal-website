import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);
  const skills = {
    'Software Development': ['Python', 'Node.js', 'JavaScript', 'Vue.js', 'Express.js', 'Nuxt 3'],
    Databases: ['MongoDB', 'SQL', 'PostgreSQL', 'MySQL', 'Redis', 'MinIO', 'Elasticsearch'],
    'Cloud Services and DevOps': [
      'AWS Lambda',
      'Amazon S3',
      'EC2',
      'Azure VM',
      'Azure Blob Storage',
      'Docker',
      'Nginx Proxy Server',
      'GitHub Actions (CI/CD)',
      'Ubuntu (Linux)',
    ],
    'Data Science and Machine Learning': [
      'TensorFlow',
      'PyTorch',
      'Keras',
      'OpenCV',
      'Triton Inference Server',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'SciPy',
      'Matplotlib',
      'Seaborn',
      'Pillow',
    ],
    'Monitoring and Observability': ['Prometheus', 'Grafana'],
  };

  const renderSkills = () =>
    Object.keys(skills).map((category, index) => (
      <div key={index}>
        <h3>{category}</h3>

        <ul className="skills-list">
          {skills[category].map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
        <br></br>
      </div>
    ));

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I'm Nilesh and I enjoy creating things that live on the internet. My interest in
              artifical intelligence and software development started back in 2016 when I was an
              undergraduate student in Kathmandu University
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of working at few companies:{' '}
              <a href="https://www.m3sen.com/"> M3SEN Co. Ltd </a>,&nbsp;
              <a href="https://www.sevadevelopment.com/"> Seva Development </a>,&nbsp;
              <a href="https://rosebaycorporate.com/"> Rosebay Consulting Pvt Ltd</a>, &nbsp;
              <a href="https://ebpearls.com.au/">Ebpearls Pvt Ltd</a>,&nbsp;
              <a href="https://acsl.creatorlink.net/">IISL Lab</a>. My main focus these days is
              researching on computer vision, and deep learning algorithms.
            </p>

            <p>
              I also recently{' '}
              <a href="https://opg.optica.org/oe/viewmedia.cfm?uri=oe-31-19-31005&html=true">
                published a paper
              </a>{' '}
              that deals with image steganography using Deep Learning Techniques.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
            <br></br>
          </div>

          {renderSkills()}
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
