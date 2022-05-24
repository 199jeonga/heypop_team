import React from 'react'
import styled from 'styled-components'

function HeaderBox() {
    const HeaderWrapper = styled.div`
        background: ${({ theme }) => theme.colors.black};
        z-index: 20000;
        height: 40px;
        padding: 0px;
        color: white;
    `
    const HeaderContainer = styled.div`
        max-width: 1440px;
        width: 100%;
        padding-right: 130px;
        padding-left: 130px;
        margin-right: auto;
        margin-left: auto;
        ${({ theme }) => theme.media.mob} {
            padding-right: 15px;
            padding-left: 15px;
        }
    `
    const HeaderRow = styled.div`
        position: relative;
        margin-right: -10px;
        margin-left: -10px;
    `
    const MenuNav = styled.div`
        width: 100%;
        display: inline-block;
    `
    const Icon = styled.img`
        width: 24px;
        height: 24px;
        top: 8px;
        position: relative;
        cursor: pointer;
    `
    const HomeIcon = styled(Icon)`
        position: absolute;
        left: -30px;
        ${({ theme }) => theme.media.mob} {
            left: 10px;
        }
    `
    const InstagramIcon = styled(Icon)`
        position: absolute;
        right: -30px;
        display: none;
        ${({ theme }) => theme.media.pc} {
            display: inline-block;
        }
    `
    const MainNav = styled.ul`
        font-size: 33px;
        font-weight: bold;
        width: 100%;
        cursor: pointer;
        display: inline-block;
    `
    const SubNav = styled.ul`
        color: white;
        position: absolute;
        font-weight: bold;
        cursor: pointer;
        top: 0;
        right: 0;
        ${({ theme }) => theme.media.pc} {
            left: 0;
        }
        ${({ theme }) => theme.media.mob} {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            width: 100%;
            padding-left: 50px;
        }
    `
    const MainNavWrap = styled.div`
        text-align: right;
        ${({ theme }) => theme.media.mob} {
            display: none;
        }
        ${({ theme }) => theme.media.tab} {
            display: none;
        }
        ${({ theme }) => theme.media.lap} {
            display: none;
        }
    `
    const NavList = styled.li`
        display: inline-block;
        margin-right: 16px;
    `
    const MainNavList = styled(NavList)`
        margin-right: 3px;
        &:hover {
            color: ${({ theme }) => theme.colors.point};
            transition-duration: 0.5s;
            opacity: 1;
        }
    `
    const MainNavListMenu = styled(NavList)`
        ${({ theme }) => theme.media.pc} {
            display: none;
        }
    `

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderRow>
                    <HomeIcon
                        alt="home"
                        src={`${process.env.PUBLIC_URL}/images/icon_home.png`}
                    />

                    <MenuNav>
                        <SubNav>
                            <NavList>LOGIN</NavList>
                            <NavList>SIGNUP</NavList>
                            <NavList>
                                <Icon
                                    alt="search"
                                    src={`${process.env.PUBLIC_URL}/images/icon_navi_search.png`}
                                />
                                SEARCH
                            </NavList>

                            <MainNavListMenu>
                                <Icon
                                    alt="menu"
                                    src={`${process.env.PUBLIC_URL}/images/icon_navi_menu.png`}
                                />
                                MENU
                            </MainNavListMenu>
                        </SubNav>
                        <MainNavWrap>
                            <MainNav>
                                <MainNavList>Design,</MainNavList>
                                <MainNavList>Art,</MainNavList>
                                <MainNavList>Living,</MainNavList>
                                <MainNavList>Style,</MainNavList>
                                <MainNavList>Food,</MainNavList>
                                <MainNavList>Stories,</MainNavList>
                                <MainNavList>Store,</MainNavList>
                                <MainNavList>About,</MainNavList>
                                <MainNavList>Newsletter</MainNavList>
                            </MainNav>
                        </MainNavWrap>
                    </MenuNav>
                    <InstagramIcon
                        alt="instagram"
                        src={`${process.env.PUBLIC_URL}/images/icon_instagram.png`}
                    />
                </HeaderRow>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default HeaderBox
