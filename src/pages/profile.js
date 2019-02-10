import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Container from '../components/Container';
import Underline from '../components/Underline';
import Pill from '../components/Pill';
import Job from '../components/Job';
import Button from '../components/Button';
import FadeInImage from '../components/FadeInImage';

import marc from '../images/marc.svg';
import blocket from '../images/blocket.png';
import schibsted from '../images/schibsted.png';
import pixpro from '../images/pixpro.png';
import bytbil from '../images/bytbil.png';
import tripwell from '../images/tripwell.png';
import mojang from '../images/mojang.png';

import { media } from '../utils/cssVariables';

const Section = styled.section`
    text-align: center;
    padding-top: 100px;
    padding-bottom: 80px;

    ${media.lg`
        padding-top: 120px;
    `};
`;

const StyledFadeInImage = styled(FadeInImage)`
    display: block;
    margin: 50px auto;
    height: 300px;
`;

const Title = styled.h1`
    font-size: 48px;
    letter-spacing: -3px;

    ${media.lg`
        font-size: 80px;
    `};
`;

const StyledButton = styled(Button)`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;

    ${media.md`
        display: inline-block;
    `};
`;

const SubTitle = styled.h2`
    display: inline-block;
    font-size: 20px;
    margin-top: 48px;
    margin-bottom: 14px;
    line-height: 1.5;
    font-weight: 700;
`;

const StyledContainer = styled(Container)`
    ${media.md`
        width: 600px;
    `};
`;

const JobWrapper = styled.div`
    display: block;
`;

const Profile = React.memo(() => (
    <React.Fragment>
        <Helmet>
            <title>Profile</title>
        </Helmet>
        <Section>
            <StyledContainer>
                <Title>
                    <Underline>Profile</Underline>
                </Title>
                <StyledFadeInImage src={marc} alt="Marc Neander cartoon" />
                <SubTitle>
                    <Underline borderSize={3}>About</Underline>
                </SubTitle>
                <p>
                    Front-end engineer with 10 years of professional experience. I make{' '}
                    <Underline borderSize={2}>front-ends</Underline> with <strong>React</strong> and{' '}
                    <Underline borderSize={2}>back-ends</Underline> with <strong>Node.js</strong>. Passionate about
                    performance, aesthetics, user experience and accessibility. I’m a social and quality driven team
                    player. Able to lead projects and people.
                </p>
                <p>Off work I’m a dad, rock-climber, tech and golf enthusiast.</p>
                <SubTitle>
                    <Underline borderSize={3}>Skills</Underline>
                </SubTitle>
                <p>
                    Solid JavaScript, CSS & HTML foundation. I’m a problemsolver, performance optimizer and code quality
                    advocate. Smooth animations and pixel perfection is a given.
                </p>
                <p>
                    Excited about GraphQL, monitoring, error tracking, loging, tests, tooling and the developer
                    experience.
                </p>
                <p>
                    <Pill>React</Pill>
                    <Pill>React</Pill>
                    <Pill>Apollo</Pill>
                    <Pill>Redux</Pill>
                    <Pill>Immer</Pill>
                    <Pill>NodeJS</Pill>
                    <Pill>Jest</Pill>
                    <Pill>Cypress</Pill>
                    <Pill>Bootstrap</Pill>
                    <Pill>Sass</Pill>
                    <Pill>styled-components</Pill>
                    <Pill>Less</Pill>
                    <Pill>AngularJS</Pill>
                    <Pill>jQuery</Pill>
                    <Pill>Express</Pill>
                </p>
                <p>
                    <Pill>Docker</Pill>
                    <Pill>Webpack</Pill>
                    <Pill>Rollup</Pill>
                    <Pill>Lerna</Pill>
                    <Pill>Gatsby</Pill>
                    <Pill>ESLint</Pill>
                    <Pill>Stylelint</Pill>
                    <Pill>Prisma</Pill>
                    <Pill>DevTools</Pill>
                    <Pill>VSCode</Pill>
                    <Pill>Sublime</Pill>
                    <Pill>Vim</Pill>
                    <Pill>Sentry</Pill>
                    <Pill>Contentful</Pill>
                    <Pill>Netlify</Pill>
                    <Pill>Snyk</Pill>
                    <Pill>Greenkeeper</Pill>
                    <Pill>Travis</Pill>
                    <Pill>Jenkins</Pill>
                    <Pill>Datadog</Pill>
                    <Pill>Sumologic</Pill>
                    <br />
                    <Pill>...</Pill>
                </p>
                <SubTitle>
                    <Underline borderSize={3}>Experience</Underline>
                </SubTitle>
                <JobWrapper>
                    <Job
                        logo={mojang}
                        alt="Mojang Logo"
                        title="Front-end Developer"
                        location="Mojang AB"
                        duration="Jan 2019 - present"
                    >
                        <ul>
                            <li>Design new front-end stack and platform for the Minecraft launcher.</li>
                        </ul>
                    </Job>
                    <Job
                        logo={blocket}
                        alt="Blocket logo"
                        title="JavaScript Developer"
                        location="Blocket AB"
                        duration="Jan 2018 - Jan 2019"
                    >
                        <ul>
                            <li>Develop and maintain services, both front-end and back-end</li>
                            <li>Develop and deploy several new micro-services using Node.js, Express etc.</li>
                        </ul>
                    </Job>
                    <Job
                        logo={bytbil}
                        alt="Bytbil logo"
                        title="Front-end Developer"
                        location="Byt Bil Nordic AB"
                        duration="Sep 2016 – Jan 2018"
                    >
                        <ul>
                            <li>Develop and maintain a styleguide for use throughout the organization</li>
                            <li>Develop and maintain front-end for several systems</li>
                            <li>
                                Designing a new front-end platform using React, Redux, Express, Webpack, Docker etc.
                            </li>
                            <li>Ensure platform performance is optimized</li>
                        </ul>
                    </Job>
                    <Job
                        logo={tripwell}
                        alt="Tripwell logo"
                        title="Front-end Developer"
                        location="Tripwell AB"
                        duration="May 2016 – Sep 2016"
                    >
                        <ul>
                            <li>Develop and maintain front-end for Tripwell.com</li>
                        </ul>
                    </Job>
                    <Job
                        logo={schibsted}
                        alt="Schibsted logo"
                        title="Lead Front-end Developer"
                        location="SCM Ventures AB"
                        duration="Apr 2015 - May 2016"
                    >
                        <ul>
                            <li>Lead and advise small front-end team</li>
                            <li>Leading international collaboration with development team from Africa</li>
                            <li>Design and develop new front-end platform using Angular, gulp etc.</li>
                        </ul>
                    </Job>
                    <Job
                        logo={schibsted}
                        alt="Schibsted logo"
                        title="Front-end Developer"
                        location="SCM Ventures AB"
                        duration="Jan 2012 – Apr 2015"
                    >
                        <ul>
                            <li>Develop and maintain front-end for multisite classified platform</li>
                            <li>Deploy several new sites in different countries around the world</li>
                            <li>Performance enhance platform to serve countries with slow connection/featurephones</li>
                        </ul>
                    </Job>
                    <Job
                        logo={pixpro}
                        alt="PixPro logo"
                        title="Developer"
                        location="Pixpro Stockholm AB"
                        duration="Dec 2009 – Jun 2011"
                    >
                        <ul>
                            <li>Develop customized Joomla templates</li>
                            <li>Develop customized Joomla extensions</li>
                            <li>Debug and support customers with their Joomla website</li>
                        </ul>
                    </Job>
                </JobWrapper>
                <StyledButton component={Link} to="/contact" data-cy="contact-link">
                    Contact me
                </StyledButton>
            </StyledContainer>
        </Section>
    </React.Fragment>
));

export default Profile;
