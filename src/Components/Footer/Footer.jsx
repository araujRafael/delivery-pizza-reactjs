import React from 'react'
// Styled
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconsLink,
} from './FooterElements'

function Footer({medias}) {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Pizza</SocialLogo>
            <SocialIcons>

              {
                medias.map((sm, index) => {
                  return (
                    <SocialIconsLink
                      key={index}
                      href={sm.href}
                      target={sm.target}
                      aria-label={sm.label}
                    >
                      {sm.icon}                      
                    </SocialIconsLink>
                  )
                })
              }

            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
