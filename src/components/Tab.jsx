import { styled, Tab } from "@mui/material";
import theme from "../theme/theme";

const StyledTab = styled(Tab)(() => ({
  position: "relative",
  display: "inline-flex",
  padding: "12px 16px",
  height: "80px",
  backgroundColor: theme.palette.komodoro.bgPrimary,
  color: theme.palette.komodoro.accent,
  fontWeight: "normal",
  borderRadius: "0px",
  transitionDuration: "0s",
  border: "none",
  overflow: "visible",
  "&.Mui-selected": {
    fontWeight: "700",
  },
  "&:before, &:after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    boxSizing: "content-box",
    pointerEvents: "none",
    zIndex: "10",
  },
  "&:before": {
    top: "-6px",
    left: "0",
    borderTop: `6px ${theme.palette.komodoro.accent} solid`,
    borderBottom: `6px ${theme.palette.komodoro.accent} solid`,
  },
  "&:after": {
    top: "0",
    left: "-6px",
    borderLeft: `6px ${theme.palette.komodoro.accent} solid`,
    borderRight: `6px ${theme.palette.komodoro.accent} solid`,
  },
}));

export default function customTab(props) {
    return (
        <StyledTab disableRipple {...props} />
    )
}