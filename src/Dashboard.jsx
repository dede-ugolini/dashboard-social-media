import { Card, CardActionArea, CardContent, CardMedia, Paper, Stack, Typography } from "@mui/material";

import IconDown from '/icon-down.svg';
import FacebookIcon from '/icon-facebook.svg';
import InstagramIcon from '/icon-instagram.svg';
import TwitterIcon from '/icon-twitter.svg';
import IconUp from '/icon-up.svg';
import YoutubeIcon from '/icon-youtube.svg';

export default function Dashboard() {

  const OverviewRowOne = [
    { title: "Page Views", icon: FacebookIcon, data: "87", iconToday: IconUp, per: "3" },
    { title: "Likes", icon: FacebookIcon, data: "52", iconToday: IconDown, per: "2" },
    { title: "Likes", icon: InstagramIcon, data: "5462", iconToday: IconUp, per: "2257" },
    { title: "Profile Views", icon: InstagramIcon, data: "52", iconToday: IconUp, per: "1375" },
  ]

  const OverviewRowTwo = [
    { title: "Retweets", icon: TwitterIcon, data: "117", iconToday: IconUp, per: "303" },
    { title: "Likes", icon: TwitterIcon, data: "507", iconToday: IconUp, per: "553" },
    { title: "Likes", icon: YoutubeIcon, data: "107", iconToday: IconDown, per: "19" },
    { title: "Total Views", icon: YoutubeIcon, data: "1407", iconToday: IconDown, per: "12" },
  ]

  const Media = [
    { icon: FacebookIcon, nick: "nathanf", border: "hsl(208, 92%, 53%)", data: "1987", subtitle: "Followers", iconToday: IconUp, ntoday: "12" },
    { icon: TwitterIcon, nick: "nathanf", border: "hsl(203, 89%, 53%)", data: "1044", subtitle: "Followers", iconToday: IconUp, ntoday: "99" },
    { icon: InstagramIcon, nick: "realnathanf", data: "11K", subtitle: "Followers", iconToday: IconUp, ntoday: "1099" },
    { icon: YoutubeIcon, nick: "Nathan F.", border: "hsl(348, 97%, 39%)", data: "8239", subtitle: "Subscribers", iconToday: IconDown, ntoday: "144" },
  ]
  return (
    <>
      <Stack py={{ xs: 3, sm: 1 }} position="relative" top="-6rem" width="100%" justifyContent="center" alignItems={"center"}>
        <Stack spacing={5} direction={{ xs: "column", sm: "row" }} width="80%" justifyContent="center" alignItems="center">
          {Media.map((index) => {
            return (
              <Card sx={{ width: "100%" }}>
                <CardActionArea sx={{
                  borderTop: "5px solid",
                  borderImage: index.icon === InstagramIcon
                    ? "linear-gradient(to right, hsl(37, 97%, 70%) , hsl(5, 77%, 71%), hsl(329, 70%, 58%)) 1"
                    : "none",
                  borderColor: index.icon !== InstagramIcon
                    ? index.border
                    : undefined,
                  padding: 3,
                }}>
                  <CardMedia >
                    <Typography variant="body2" fontWeight="bold" sx={{ paddingTop: 3 }}>
                      <img src={index.icon} style={{ position: "relative", top: 5, left: -5 }} />@{index.nick}
                    </Typography>
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h2" fontWeight="bold">
                      {index.data}
                    </Typography>
                    <Typography variant="body2" sx={{ letterSpacing: 3 }}>
                      FOLLOWERS
                    </Typography>
                    <Stack sx={{ paddingTop: 3 }}>
                      <Typography variant="caption" sx={{ color: index.iconToday === IconDown ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)" }}>
                        <img src={index.iconToday} style={{ position: "relative", top: -3, left: -5 }} />{index.ntoday} Today
                      </Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })}
        </Stack >

        <Stack py={5} spacing={2} alignItems="start" width="80%">
          <Typography variant="h5" fontWeight="bold">
            Overview - Today
          </Typography>
        </Stack>

        <Stack width="80%">
          <Stack py={{ xs: 1, sm: 3 }} direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 5 }} alignItems="start">
            {OverviewRowOne.map((index) => {
              return (
                <Stack py={3} px={5} component={Paper} spacing={2} sx={{ flex: 1 }} width="100%">
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      {index.title}
                    </Typography>
                    <img src={index.icon} />
                  </Stack>
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography variant="h3" fontWeight="bold">
                      {index.data}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold" sx={{ alignContent: "end", color: index.iconToday === IconDown ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)" }}>
                      <img src={index.iconToday} style={{ position: "relative", top: -3, left: -5 }} />
                      {index.per}%
                    </Typography>
                  </Stack>
                </Stack>
              )
            })}
          </Stack>

          <Stack py={{ xs: 1, sm: 3 }} direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 5 }} alignItems="start">
            {OverviewRowTwo.map((index) => {
              return (
                <Stack py={3} px={5} component={Paper} spacing={2} sx={{ flex: 1 }} width="100%">
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      {index.title}
                    </Typography>
                    <img src={index.icon} />
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h3" fontWeight="bold">
                      {index.data}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold" sx={{ alignContent: "end", color: index.iconToday === IconDown ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)" }}>
                      <img src={index.iconToday} style={{ position: "relative", top: -3, left: -5 }} />
                      {index.per}%
                    </Typography>
                  </Stack>
                </Stack>
              )
            })}
          </Stack>
        </Stack>
      </Stack >
    </>
  );
}
