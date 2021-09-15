import { HomeWrapper, H3, P, HomeDiv1 } from '@styles/Home.styled.js';
import {ReactComponent as AcxLightLogo} from '@assets/icons/acxLightLogo.svg';

const Home = () => {
    return (
        <HomeWrapper>
            <HomeDiv1>
                <div>
                    <AcxLightLogo/>
                </div>
                <H3>Welcome, we're AlphaCX!</H3>
                <P>Here's a few quick ways you can connect with us.</P>
            </HomeDiv1>
            <div></div>
        </HomeWrapper>
    )
}

export default Home
