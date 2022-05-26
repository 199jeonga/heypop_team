import React, { useState } from 'react'
import styled from 'styled-components'
import SearchBoxInner from './SearchBoxInner'

function HeaderBox() {
    const HeaderArea = styled.div`
        background: ${({ theme }) => theme.colors.black};
        z-index: 20000;
        height: 40px;
        padding: 0px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        color: ${({ theme }) => theme.colors.white};
    `
    const HeaderInnerDiv = styled.div`
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
    const HeaderMenuPartDiv = styled.div`
        position: relative;
        margin-right: -10px;
        margin-left: -10px;
    `
    const MenuNavUlDiv = styled.div`
        width: 100%;
        display: inline-block;
    `
    const IconImg = styled.img`
        width: 24px;
        height: 24px;
        top: 8px;
        position: relative;
        cursor: pointer;
    `
    const HomeIconImg = styled(IconImg)`
        position: absolute;
        left: -30px;
        ${({ theme }) => theme.media.mob} {
            left: 10px;
        }
    `
    const InstagramIconImg = styled(IconImg)`
        position: absolute;
        right: -30px;
        display: none;
        ${({ theme }) => theme.media.pc} {
            display: inline-block;
        }
    `
    const MainNavUl = styled.ul`
        font-size: 33px;
        font-weight: bold;
        width: 100%;
        cursor: pointer;
        display: inline-block;
    `
    const SubNavUl = styled.ul`
        font-size: 15px;
        color: ${({ theme }) => theme.colors.white};
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
            padding-left: 70px;
        }
        li {
            &:first-child {
                padding-left: 10px;
            }
        }
    `
    const MainNavDiv = styled.div`
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
    const NavListLi = styled.li`
        display: inline-block;
        margin-right: 16px;
    `
    const MainNavListLi = styled(NavListLi)`
        margin-right: 3px;
        &:hover {
            color: ${({ theme }) => theme.colors.point};
            transition-duration: 0.5s;
            opacity: 1;
        }
    `
    const MainNavListMenuLi = styled(NavListLi)`
        ${({ theme }) => theme.media.pc} {
            display: none;
        }
    `
    const BackgroundBlurDiv = styled.div`
        position: fixed;
        z-index: 1;
        top: 70px;
        bottom: 0;
        left: 0;
        right: 0;
        background: #000;
        -moz-opacity: 0.3;
        -khtml-opacity: 0.3;
        -webkit-opacity: 0.3;
        opacity: 0.3;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);
        filter: alpha(opacity=30);
    `
    const SearchAreaDiv = styled.div`
        padding-top: 0;
        z-index: 10;
        position: fixed;
        left: 0;
        right: 0;
        top: 40px;
        background: #000;
    `
    const SearchInnerDiv = styled.div`
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    `
    const SearchInputPartDiv = styled.div`
        ${({ theme }) => theme.media.pc} {
            padding: 70px 130px;
        }
        ${({ theme }) => theme.media.lap} {
            padding: 70px 90px;
        }
        ${({ theme }) => theme.media.tab} {
            padding: 70px 90px;
        }
        ${({ theme }) => theme.media.mob} {
            padding: 30px 15px 1px;
        }
        max-width: 1440px;
        margin-right: auto;
        margin-left: auto;
    `
    const SearchInputInnerDiv = styled.div`
        padding: 0px 20px 30px;
        margin: 0 auto;
        flex: 0 0 100%;
        max-width: 100%;
        ${({ theme }) => theme.media.pc} {
            flex: 0 0 25%;
            max-width: 50%;
        }
        ${({ theme }) => theme.media.lap} {
            flex: 0 0 50%;
            max-width: 50%;
        }
    `
    const SearchInput = styled.input`
        width: 100%;
        border-bottom: 2px solid #fff !important;
        padding-bottom: 20px;
        background-image: url(${process.env
            .PUBLIC_URL}/images/icon_navi_search.png) !important;
        background-size: 40px 40px !important;
        background-repeat: no-repeat !important;
        background-position: 0 -5px !important;
        padding-left: 50px;
        font-weight: 700;
        font-size: 18px;
        color: #fff;
        border: none;
        background: transparent;
    `
    const SearchInnerContainerDiv = styled.div`
        ${({ theme }) => theme.media.pc} {
            display: flex;
        }
        ${({ theme }) => theme.media.lap} {
            display: flex;
        }
    `
    const SearchInnerContentDiv = styled.div`
        display: inline-block;
        padding-right: 10px;
        padding-left: 10px;
        max-width: 50%;
        ${({ theme }) => theme.media.pc} {
            max-width: 25%;
        }
        ${({ theme }) => theme.media.lap} {
            max-width: 25%;
        }
        ${({ theme }) => theme.media.tab} {
            padding-top: 60px;
        }
        ${({ theme }) => theme.media.mob} {
            padding-bottom: 30px;
        }
    `
    const MenuAreaDiv = styled.div`
        position: unset;
        top: 0;
        height: 100vh;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        z-index: 13;
        overflow-y: hidden;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        font-size: 16px;
        ul {
            font-size: 22px;
        }
    `
    const MenuInnerDiv = styled.div`
        text-align: center;
        img {
            display: inline-block;
        }
    `
    const MenuUlPartDiv = styled.div`
        padding-top: calc(50vh - 40px);
    `
    const MenuIconPartDiv = styled.div`
        padding-top: 40vh;
    `
    const [showSearchBox, setShowSearchBox] = useState(false)
    const searchBoxToggle = () => setShowSearchBox(!showSearchBox)
    const [showMenuBox, setShowMenuBox] = useState(false)
    const searchMenuToggle = () => setShowMenuBox(!showMenuBox)
    return (
        <HeaderArea>
            {showSearchBox && <BackgroundBlurDiv />}
            <HeaderInnerDiv>
                <HeaderMenuPartDiv>
                    <HomeIconImg
                        alt="home"
                        src={`${process.env.PUBLIC_URL}/images/icon_home.png`}
                    />

                    <MenuNavUlDiv>
                        <SubNavUl>
                            <NavListLi>LOGIN</NavListLi>
                            <NavListLi>SIGNUP</NavListLi>
                            <NavListLi>
                                <span
                                    role="none"
                                    onClick={searchBoxToggle}
                                    onKeyDown={searchBoxToggle}
                                >
                                    {showSearchBox ? (
                                        <IconImg
                                            alt="close"
                                            src={`${process.env.PUBLIC_URL}/images/navi_top_search_close.png`}
                                        />
                                    ) : (
                                        <IconImg
                                            alt="search"
                                            src={`${process.env.PUBLIC_URL}/images/icon_navi_search.png`}
                                        />
                                    )}
                                    SEARCH
                                </span>
                            </NavListLi>

                            <MainNavListMenuLi>
                                <span
                                    role="none"
                                    onClick={searchMenuToggle}
                                    onKeyDown={searchMenuToggle}
                                >
                                    <IconImg
                                        alt="menu"
                                        src={`${process.env.PUBLIC_URL}/images/icon_navi_menu.png`}
                                    />
                                    MENU
                                </span>
                            </MainNavListMenuLi>
                        </SubNavUl>
                        <MainNavDiv>
                            <MainNavUl>
                                <MainNavListLi>Design,</MainNavListLi>
                                <MainNavListLi>Art,</MainNavListLi>
                                <MainNavListLi>Living,</MainNavListLi>
                                <MainNavListLi>Style,</MainNavListLi>
                                <MainNavListLi>Food,</MainNavListLi>
                                <MainNavListLi>Stories,</MainNavListLi>
                                <MainNavListLi>Store,</MainNavListLi>
                                <MainNavListLi>About,</MainNavListLi>
                                <MainNavListLi>Newsletter</MainNavListLi>
                            </MainNavUl>
                        </MainNavDiv>
                    </MenuNavUlDiv>
                    <InstagramIconImg
                        alt="instagram"
                        src={`${process.env.PUBLIC_URL}/images/icon_instagram.png`}
                    />
                </HeaderMenuPartDiv>
            </HeaderInnerDiv>
            {showSearchBox && (
                <SearchAreaDiv>
                    <SearchInnerDiv>
                        <SearchInputPartDiv>
                            <SearchInputInnerDiv>
                                <SearchInput
                                    type="search"
                                    placeholder="팝업 스토어, 전시, 레트로, 컬렉션, 취향"
                                />
                            </SearchInputInnerDiv>
                            <SearchInnerContainerDiv>
                                <SearchInnerContentDiv>
                                    <SearchBoxInner />
                                </SearchInnerContentDiv>
                                <SearchInnerContentDiv>
                                    <SearchBoxInner />
                                </SearchInnerContentDiv>
                                <SearchInnerContentDiv>
                                    <SearchBoxInner />
                                </SearchInnerContentDiv>
                                <SearchInnerContentDiv>
                                    <SearchBoxInner />
                                </SearchInnerContentDiv>
                            </SearchInnerContainerDiv>
                        </SearchInputPartDiv>
                    </SearchInnerDiv>
                </SearchAreaDiv>
            )}
            {showMenuBox && (
                <MenuAreaDiv>
                    <MenuInnerDiv>
                        <MenuUlPartDiv>
                            <MainNavUl>
                                <MainNavListLi>Design,</MainNavListLi>
                                <MainNavListLi>Art,</MainNavListLi>
                                <MainNavListLi>Living,</MainNavListLi>
                                <MainNavListLi>Style,</MainNavListLi>
                                <MainNavListLi>Food,</MainNavListLi>
                                <MainNavListLi>Stories,</MainNavListLi>
                                <MainNavListLi>Store,</MainNavListLi>
                                <MainNavListLi>About,</MainNavListLi>
                                <MainNavListLi>Newsletter</MainNavListLi>
                            </MainNavUl>
                        </MenuUlPartDiv>
                    </MenuInnerDiv>
                    <MenuInnerDiv>
                        <MenuIconPartDiv>
                            <IconImg
                                alt="instagram"
                                src={`${process.env.PUBLIC_URL}/images/icon_instagram.png`}
                            />
                        </MenuIconPartDiv>
                    </MenuInnerDiv>
                </MenuAreaDiv>
            )}
        </HeaderArea>
    )
}

export default HeaderBox
