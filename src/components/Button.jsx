import ButtonBase from "@mui/material/ButtonBase";
import theme from "../theme/theme";

export default function Button({ children, iconOnly=false, ...props }) {
    return (
        <ButtonBase {...props} disableRipple={true} sx={{
            position: "relative",
            height: "4rem",
            minWidth: `${iconOnly == true ? "4rem" : "auto"}`,
            padding: "12px 16px",
            gap: "12px",
            backgroundColor: theme.palette.komodoro.bgPrimary,
            color: theme.palette.komodoro.accent,
            fontWeight: "700",
            borderRadius: "0px",
            boxShadow: `inset 6px 6px 0 0 ${theme.palette.komodoro.shadeLight}, inset -6px -6px 0 0 ${theme.palette.komodoro.shadeDark}`,
            transitionDuration: '0s',
            '&:hover': {
                boxShadow: `inset 6px 6px 0 0 ${theme.palette.komodoro.shadeLight}, inset -6px -6px 0 0 ${theme.palette.komodoro.shadeDark}`,
            },
            '&:active': {
                boxShadow: `inset 6px 6px 0 0 ${theme.palette.komodoro.shadeDark}`,
            },
            '&:before, &:after': {
                content: `''`,
                position: "absolute",
                width: "100%",
                height: "100%",
                boxSizing: "content-box"
            },
            '&:before': {
                top: "-6px",
                left: "0",
                borderTop: `6px ${theme.palette.komodoro.accent} solid`,
                borderBottom: `6px ${theme.palette.komodoro.accent} solid`
            },
            '&:after': {
                top: "0",
                left: "-6px",
                borderLeft: `6px ${theme.palette.komodoro.accent} solid`,
                borderRight: `6px ${theme.palette.komodoro.accent} solid`
            },
         }}>{children}</ButtonBase>
    )
}