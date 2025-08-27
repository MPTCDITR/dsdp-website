import React from "react";

interface RenderHTMLProps extends React.HTMLAttributes<HTMLDivElement> {
  html: string;
}
export default function RenderHTML({ html, ...props }: RenderHTMLProps) {
  return <div {...props} dangerouslySetInnerHTML={{ __html: html }}></div>;
}
