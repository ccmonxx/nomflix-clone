import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { HelmetProvider, Helmet } from "react-helmet-async";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.white.darker};
    color: black;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    line-height: 1.2;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const FontStyle = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Helmet>
		</HelmetProvider>
	);
};
