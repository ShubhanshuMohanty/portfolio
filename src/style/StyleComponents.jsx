import { styled } from "@mui/material";
import {Link as LinkComponent} from "react-router-dom";

export const Link = styled(LinkComponent)`
text-decoration: none;
color: White;
padding: 1rem;
font-size:22px;
&:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
`;