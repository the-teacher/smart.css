import { type ReactNode } from "react";
import "@smart.css/UI.scss";

const MainContent = ({ children }: { children: ReactNode }) => (
  <main className="holy-grail--content pt0">{children}</main>
);

export default MainContent;
