import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Image = styled.img`
  padding: 20px;
  height: 60%;
  width: 60%;
`

export const About = styled.div`
  text-align: center;
  color: ${themeGet("colors.white")};;
  font-size: 17px;
  width: 40%;
  padding: 20px;
`

export const Arrow = styled.div`
  position: relative;
  margin-top: 40px;
  color: ${themeGet("colors.white")};;
  width: 40px;
  height: 40px;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yOTMuNzUxLDQ1NS44NjhjLTIwLjE4MSwyMC4xNzktNTMuMTY1LDE5LjkxMy03My42NzMtMC41OTVsMCwwYy0yMC41MDgtMjAuNTA4LTIwLjc3My01My40OTMtMC41OTQtNzMuNjcyICBsMTg5Ljk5OS0xOTBjMjAuMTc4LTIwLjE3OCw1My4xNjQtMTkuOTEzLDczLjY3MiwwLjU5NWwwLDBjMjAuNTA4LDIwLjUwOSwyMC43NzIsNTMuNDkyLDAuNTk1LDczLjY3MUwyOTMuNzUxLDQ1NS44Njh6Ii8+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjIwLjI0OSw0NTUuODY4YzIwLjE4LDIwLjE3OSw1My4xNjQsMTkuOTEzLDczLjY3Mi0wLjU5NWwwLDBjMjAuNTA5LTIwLjUwOCwyMC43NzQtNTMuNDkzLDAuNTk2LTczLjY3MiAgbC0xOTAtMTkwYy0yMC4xNzgtMjAuMTc4LTUzLjE2NC0xOS45MTMtNzMuNjcxLDAuNTk1bDAsMGMtMjAuNTA4LDIwLjUwOS0yMC43NzIsNTMuNDkyLTAuNTk1LDczLjY3MUwyMjAuMjQ5LDQ1NS44Njh6Ii8+DQo8L3N2Zz4=');
  background-size: contain;
  animation: bounce 2s infinite;
  @keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`

export const Testimonials = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  min-height: 500px;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${themeGet("colors.white")};;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  padding: 5em;
`

export const Title = styled.div`
  text-align: center;
  font-size: ${themeGet("fonts.title.size")};
  font-family: ${themeGet("fonts.title.family")};
  font-weight: ${themeGet("fonts.title.weight")};
  line-height: ${themeGet("fonts.title.lineHeight")};
  letter-spacing: ${themeGet("fonts.title.letterSpacing")};
  color: ${themeGet("colors.textTitle")};
  padding: 5vh 0;
`;

export const WhiteBgTitle = styled.div`
  text-align: center;
  font-size: ${themeGet("fonts.title.size")};
  font-family: ${themeGet("fonts.title.family")};
  font-weight: ${themeGet("fonts.title.weight")};
  line-height: ${themeGet("fonts.title.lineHeight")};
  letter-spacing: ${themeGet("fonts.title.letterSpacing")};
  color: ${themeGet("colors.textTitle")};
  padding: 5vh 0;
  width: 100%;
  background-color: ${themeGet("colors.white")};
`

export const Subtitle = styled.div`
  text-align: center;
  font-size: ${themeGet("fonts.subtitle.size")};
  font-family: Gravity-Light;
  font-weight: ${themeGet("fonts.subtitle.weight")};
  line-height: ${themeGet("fonts.subtitle.lineHeight")};
  letter-spacing: ${themeGet("fonts.subtitle.letterSpacing")};
  color: ${themeGet("colors.textSubtitle")};
`;

export const Button = styled.div`
  text-align: center;
  font-size: 1.5em;
  color: ${themeGet("colors.silver")};
  font-family: sans-serif;
  margin: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const CallListContainer = styled.div`
  margin-top: 30px;
`;
