import React, {Component} from 'react';
import styled from 'styled-components';
import Form from './Form';
import Background from '../img/opensrc-waves-001.jpg';

const HeroSection = styled.div`
	background:url('${Background}');
    min-height:500px;
    height: 50vh;
    background-size:cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    position: relative;
	text-align: center;
	
`;

const HeroOverlay = styled.div`
	background: #00c6ff;
    background: -webkit-linear-gradient(to top, #0072ff, #00c6ff);
    background: linear-gradient(to top, #0072ffd9, #00c6ffcc);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 50px;
    
    h1 {
        color: #fff;
        padding-top: 50px;
        font-weight: 100;
    }
    
    p {
    	color: #eee;
    	font-weight: 100;
    	letter-spacing: 1px;
    }
`;

class Hero extends Component {
	render () {
		return (
			<HeroSection>
				<HeroOverlay>
					<h1>Contribute to Something Great.</h1>
					<p>Get started in the open source software community today!</p>
					<Form/>
				</HeroOverlay>
                <div style={{height:'140px'}}>
                    <div style={{width:'120%', marginLeft:'-20%', transform: 'rotate(180deg)', bottom: '-1px', position: 'absolute'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 120" preserveAspectRatio="none">
                            <g>
                                <path fill={"RGBA(255,255,255,1)"}
                                      d={"M1920,17.048028527351455 C1801.5298508185788,17.048028527351455 1694.3358622235698,97.19054629497234 1524.3299762437334,97.19054629497234 1363.4492636548953,97.19054629497234 1270.0457007107048,20.39581949203753 1080,20.39581949203753 926.0735867004571,20.39581949203753 839.77424465484,55.08133015261005 710.3934916753909,55.08133015261005 554.6219952289151,55.08133015261005 509.4291211172961,25.76375299432283 355.4089785796969,25.76375299432283 212.18047502617273,25.76375299432283 116.25406172662977,101.80712588838104 0,101.80712588838104 0,67.86554584166177 0,33.932772920830885 0,0 640,0 1280,0 1920,0 1920,5.676407133821026 1920,11.361621393530433 1920,17.048028527351455 z"}
                                      data-original={"M1920,5 C1808,5 1699,109 1526,109 C1365,109 1271,13 1080,13 C925,13 840.152,62 716,62 C565,62 521,13 377,13 C229,13 132,103 0,103 L0,0 L1920,0 L1920,5 Z"}/>
                                <path fill={"RGBA(255,255,255,1)"} opacity={"0.2"}
                                      d={"M1920,105.18950884489816 C1754.1952578242845,105.18950884489816 1660.2137643976682,10.794441825297845 1512.112345308628,10.794441825297845 1352.104320643726,10.794441825297845 1263.064197319216,74.5024707760761 1080,74.5024707760761 933.927778015882,74.5024707760761 837.0252776944413,4.465430564315909 669.3771592503939,4.465430564315909 478.6981458464739,4.465430564315909 424.77839249549385,119.14136085548617 197.45246434726172,119.14136085548617 89.13147775118178,119.14136085548617 1.0592557670637934,93.08024664901998 0,93.08024664901998 0,61.38352451489633 0,29.686802380772676 0,-2 640,-2 1280,-2 1920,-2 1920,33.72980953274971 1920,69.45961906549942 1920,105.18950884489816 z"}
                                      data-original={"M1920,106 C1753.761,106 1659.906,10 1512,10 C1352,10 1263,75 1080,75 C934,75 837,4 669,4 C478,4 424,120 196,120 C88,120 0,93 0,93 L0,-2 L1920,-2 L1920,106 Z"}/>
                            </g>
                            <g>
                                <path fill={"RGBA(255,255,255,0.001)"} opacity={"0.2"}
                                      d={"M1920,106 C1753.761,106 1659.906,10 1512,10 C1352,10 1263,75 1080,75 C934,75 837,4 669,4 C478,4 424,120 196,120 C88,120 0,93 0,93 L0,0 L1920,0 L1920,106 Z"}/>
                                <path fill={"#fbfbfb"}
                                      d={"M1920,5 C1808,5 1699,109 1526,109 C1365,109 1271,13 1080,13 C925,13 840.152,62 716,62 C565,62 521,13 377,13 C229,13 132,103 0,103 L0,-2 L1920,-2 L1920,5 Z"}/>
                            </g>
                        </svg>
                    </div>
                </div>
			</HeroSection>
		)
	}
}

export default Hero;