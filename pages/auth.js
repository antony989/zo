import React, { useEffect } from "react";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction
} from "next-firebase-auth";

import firebase from "../common/firebase"
import { CanvasContextContainer, CanvasGrid, CanvasLayout, CanvasLoginLogoWrap, CanvasPanel, CardLayoutLoginContainer, CardLayoutLoginWrap, Context, ContextHeader, ContextImage, LoginCanvas, LoginCanvasSection, LoginCardFooter, LoginCardLayout, LoginWrap, Route, Spectrum, LoginH1, LoginCardSection, SocialButton, SocialLabel, LoginFooterDiv, LoginSocialBar, LoginSubTitle, ContextH1, CardMainSection } from "../assets/pageStyles/loginStyles"
import Layout from "../components/Layout";
const Login = (props) => {
    const db = firebase.firestore();
    const GoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const uid = res.user.uid;
            const userData = {
                uid: res.user.uid,
                email: res.user.email,
                displayName: res.user.displayName,
                photoURL: res.user.photoURL
            }
            db.collection("users")
                .doc(uid)
                .set(userData);
        })
    }

    return (
        <Layout title="CONNECT - 로그인 또는 가입">
            <LoginWrap>
                <Spectrum>
                    <LoginCanvas>
                        <LoginCanvasSection>
                            <CanvasLayout>
                                <CanvasGrid>
                                    <CanvasLoginLogoWrap>
                                        <CanvasContextContainer>
                                            <CanvasContextContainer>
                                                <Context>
                                                    <ContextHeader>
                                                        <ContextImage src={"/logo_small.png"}/>
                                                    </ContextHeader>
                                                </Context>
                                            </CanvasContextContainer>
                                        </CanvasContextContainer>
                                    </CanvasLoginLogoWrap>
                                    <CanvasPanel>
                                        <Route>
                                            <CardMainSection>
                                                <CardLayoutLoginWrap>
                                                    <CardLayoutLoginContainer>
                                                        <LoginCardLayout>
                                                            <header>
                                                                <ContextH1>CONNECT</ContextH1>
                                                                <LoginH1>로그인</LoginH1>
                                                                <LoginSubTitle>지도 기반 SNS "CONNECT"</LoginSubTitle>
                                                            </header>
                                                            <LoginSocialBar>소셜로그인</LoginSocialBar>
                                                            <LoginCardSection>
                                                                <section>
                                                                    <SocialButton className="social_svg" onClick={GoogleLogin}>
                                                                        <svg
                                                                        viewBox="0 0 1152 1152"
                                                                        aria-hidden="true"
                                                                        className="prefix__spectrum-Icon prefix__spectrum-Icon--sizeS prefix__SocialButton-Icon"
                                                                        >
                                                                            <path
                                                                                d="M1055.994 594.42a559.973 559.973 0 00-8.86-99.684h-458.99V683.25h262.28c-11.298 60.918-45.633 112.532-97.248 147.089v122.279h157.501c92.152-84.842 145.317-209.78 145.317-358.198z"
                                                                                fill="#4285f4"
                                                                            />
                                                                            <path
                                                                                d="M588.144 1070.688c131.583 0 241.9-43.64 322.533-118.07l-157.5-122.28c-43.64 29.241-99.463 46.52-165.033 46.52-126.931 0-234.368-85.728-272.691-200.919H152.636v126.267c80.19 159.273 245 268.482 435.508 268.482z"
                                                                                fill="#34a853"
                                                                            />
                                                                            <path
                                                                                d="M315.453 675.94a288.113 288.113 0 010-185.191V364.482H152.636a487.96 487.96 0 000 437.724z"
                                                                                fill="#fbbc05"
                                                                            />
                                                                            <path
                                                                                d="M588.144 289.83c71.551 0 135.792 24.589 186.298 72.88l139.78-139.779C829.821 144.291 719.504 96 588.143 96c-190.507 0-355.318 109.21-435.508 268.482L315.453 490.75c38.323-115.19 145.76-200.919 272.691-200.919z"
                                                                                fill="#ea4335"
                                                                            />
                                                                        </svg>
                                                                        <SocialLabel>
                                                                            Google로 시작하기
                                                                        </SocialLabel>
                                                                    </SocialButton>
                                                                    <SocialButton className="social_svg facebook">
                                                                        <svg
                                                                        viewBox="0 0 36 36"
                                                                        aria-hidden="true"
                                                                        className="prefix__spectrum-Icon prefix__spectrum-Icon--sizeS prefix__SocialButton-Icon"
                                                                        >
                                                                        <path d="M2 3v30a1 1 0 001 1h16.092V21.607h-4.169v-4.828h4.17v-3.556c0-3.45 2.012-6.049 5.209-6.37a34.474 34.474 0 014.736.176v4.32h-2.565c-1.016 0-2.385.424-2.385 1.531 0 .888-.008 3.831-.008 3.9h4.782l-.622 4.83h-4.16V34H33a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1z" />
                                                                        </svg>
                                                                        <SocialLabel>
                                                                            Facebook으로 시작하기
                                                                        </SocialLabel>
                                                                    </SocialButton>
                                                                </section>
                                                            </LoginCardSection>
                                                            <LoginCardFooter>
                                                                <LoginFooterDiv>
                                                                    CONNECT
                                                                </LoginFooterDiv>
                                                            </LoginCardFooter>
                                                        </LoginCardLayout>
                                                    </CardLayoutLoginContainer>
                                                </CardLayoutLoginWrap>
                                            </CardMainSection>
                                        </Route>
                                    </CanvasPanel>
                                </CanvasGrid>
                            </CanvasLayout>
                        </LoginCanvasSection>
                    </LoginCanvas>
                </Spectrum>
            </LoginWrap>
        </Layout>
    )
}
export const getServerSideProps = withAuthUserTokenSSR()();
export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
    whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
    whenUnauthedAfterInit: AuthAction.RENDER,
})(Login);