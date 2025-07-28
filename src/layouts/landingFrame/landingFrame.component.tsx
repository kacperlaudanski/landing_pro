import { JSX } from 'react';
import { Outlet } from 'react-router';
import { siFacebook, siInstagram, siLinkerd, siX, siYoutube } from 'simple-icons';

import { Footer, Navbar } from '../../components';
import { useMenuOptions } from '../../hooks';
import { MenuOption } from '../../interfaces';

import Logo from './images/logo.svg';
import { ContentWrapper, Wrapper } from './landingFrame.styled';

export const LandingFrame: React.FC = (): JSX.Element => {
  const menuOptions: MenuOption[] = useMenuOptions();
  
  return (
    <Wrapper>
      <Navbar logo={Logo} options={menuOptions} />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Footer
        bottomBarText='© 2023 Lander. Designed by'
        highlightedText='TemplatesJungle'
        logo={Logo}
        socials={[
          { logo: siFacebook, path: '' },
          { logo: siInstagram, path: '' },
          { logo: siX, path: '' },
          { logo: siLinkerd, path: '' },
          { logo: siYoutube, path: '' },
        ]}
        supportingText='Lander best multi-purpose product landing page.'
      />
    </Wrapper>
  );
};
