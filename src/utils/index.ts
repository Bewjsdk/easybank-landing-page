import svg64 from "svg64";

export const svgToBase64 = (svg: string) => {
  return svg64(svg);
}