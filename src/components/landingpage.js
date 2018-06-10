import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} >
                <Grid className='landing-grid' >
                    <Cell col={12}>
                        <img
                            src="https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdownload%2F2015%2F09%2F24%2F106432_user_512x512.png&f=1"
                            alt="avatar"
                            class="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full stack web developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>
                        
												<div className="social-links">
													{/* LinkedIn */}
													<a href="http://google.com" rel="noopener noreferrer" target="_blank">
														<i class="fab fa-linkedin"></i>
													</a>

													{/* Github */}
													<a href="http://github.com/zhaoyanxie/" rel="noopener noreferrer" target="_blank">
														<i class="fab fa-github-square"></i>
													</a>


												</div>
                        
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
