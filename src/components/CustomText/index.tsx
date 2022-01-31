import styled from "styled-components";

type Textprops = {
  width?: any;
  margin?: any;
  padding?: any;
  fontSize?: any;
  fontWeight?: any;
  lineHeight?: any;
  color?: any;
  maxWidth?: any;
  align?: any;
  whiteSpace?: any;
  textOverflow?: any;
  overflow?: any;
  background?: any;
  cursor?: any;
};
export const Text = styled.span<Textprops>`
  width: ${(props) => props.width || "auto"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || 100};
  line-height: ${(props) => props.lineHeight || "1.5rem"};
  color: ${(props) => props.color || "white"};
  max-width: ${(props) => props.maxWidth || "auto"};
  text-align: ${(props) => props.align || "left"};
  white-space: ${(props) => props.whiteSpace || "none"};
  text-overflow: ${(props) => props.textOverflow || "none"};
  overflow: ${(props) => props.overflow || "none"};
  background: ${(props) => props.background || "none"};
  cursor: ${(props) => props.cursor || "unset"};
`;
