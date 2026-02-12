import { Stack, Typography } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { CustomSwitch } from "./CustomSwitch";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <>
      <Stack bgcolor='background.header' height={300} width="100%" justifyContent="center" alignItems="center">
        <Stack width="80%" direction="row" justifyContent="space-between">
          <Typography variant="h4">
            Social Media Dashboard
          </Typography>
          <Stack alignItems="end">
            <CustomSwitch onChange={() => setDarkMode(!darkMode)}></CustomSwitch>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
