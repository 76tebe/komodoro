import TextareaAutosize from "@mui/material/TextareaAutosize";
import theme from "../theme/theme";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const StyledTextArea = styled(TextField)(() => ({
  position: "relative",
  width: "100%",
  padding: "12px 16px",
  backgroundColor: theme.palette.komodoro.bgPrimary,
  color: theme.palette.komodoro.accent,
  borderRadius: "0px",
  transitionDuration: "0s",
  border: "none",
  "&:before, &:after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    boxSizing: "content-box",
    pointerEvents: "none",
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

export default function Notes({ value, onChange }) {
  return (
    <StyledTextArea
      multiline
      variant="standard"
      aria-label="notes"
      placeholder="Jot down your task here"
      rows={3}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        "& .MuiInput-root": {
          fontSize: {
            xs: "1rem",
            sm: "1.5rem",
          },
          "&:before, &:after": {
            border: "none",
          },
          "&:hover": {
            "&:before": {
              border: "none",
            },
          },
        },
      }}
    />
  );
}
