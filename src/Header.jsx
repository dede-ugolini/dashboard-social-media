import { Stack, Typography } from "@mui/material";
import { CustomSwitch } from "./CustomSwitch";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <>
      <Stack bgcolor='background.header' height={300} width="100%" justifyContent="center" alignItems="center">
        <Stack width="80%" direction={{ xs: "column", sm: "row" }} justifyContent="space-between">
          <Typography variant="h3" fontWeight="bold">
            Social Media Dashboard
          </Typography>
          <Stack alignItems="end">
            <CustomSwitch onChange={() => setDarkMode(!darkMode)}></CustomSwitch>
          </Stack>
        </Stack>
        <Stack width="80%">
          <Typography variant="h6" fontWeight="bold" sx={{ color: "hsl(228, 12%, 44%)" }}>
            Total Followers: 23,004
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}
