import { Box, Card, CardActionArea, CardContent, CardMedia, Paper, Stack, Typography } from "@mui/material";

import IconDown from '/icon-down.svg';
import FacebookIcon from '/icon-facebook.svg';
import InstagramIcon from '/icon-instagram.svg';
import TwitterIcon from '/icon-twitter.svg';
import IconUp from '/icon-up.svg';
import YoutubeIcon from '/icon-youtube.svg';

export default function Dashboard() {

  const OverviewRowOne = [
    { title: "Page Views", icon: FacebookIcon, data: "87", per: "3" },
    { title: "Likes", icon: FacebookIcon, data: "52", per: "2" },
    { title: "Likes", icon: InstagramIcon, data: "5462", per: "2257" },
    { title: "Profile Views", icon: InstagramIcon, data: "52", per: "1375" },
  ]

  const OverviewRowTwo = [
    { title: "Retweets", icon: TwitterIcon, data: "117", per: "303" },
    { title: "Likes", icon: TwitterIcon, data: "507", per: "553" },
    { title: "Likes", icon: YoutubeIcon, data: "107", per: "19" },
    { title: "Total Views", icon: YoutubeIcon, data: "1407", per: "12" },
  ]

  return (
    <>
      <Stack position="relative" top="-4rem" width="100%" justifyContent="center" alignItems={"center"}>
        <Stack spacing={5} direction={{ xs: "column", sm: "row" }} width="80%" justifyContent="center" alignItems="center">
          <Card raised>
            <CardActionArea sx={{ borderTop: "5px solid hsl(208, 92%, 53%)", padding: 3, }}>
              <CardMedia >
                <img src={FacebookIcon} />
              </CardMedia>
              <CardContent>
                <Typography variant="h2" fontWeight="bold">
                  1987
                </Typography>
                <Typography variant="body2">
                  FOLLOWERS
                </Typography>

                <Stack sx={{ paddingTop: 3 }}>
                  <Typography variant="caption">
                    <img src={IconUp} style={{ position: "relative", top: -3, left: -5 }} />12 Today
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card raised>
            <CardActionArea sx={{ padding: 3, borderTop: "5px solid hsl(200, 89%, 53%)" }}>
              <CardMedia>
                <img src={TwitterIcon} />
                @nathanf
              </CardMedia>
              <CardContent>
                <Typography variant="h2" fontWeight="bold">
                  1044
                </Typography>
                <Typography variant="body2">
                  FOLLOWERS
                </Typography>

                <Stack sx={{ paddingTop: 3 }}>
                  <Typography variant="caption">
                    <img src={IconUp} style={{ position: "relative", top: -3, left: -5 }} />99 Today
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card raised>
            <CardActionArea sx={{ padding: 3, height: "100%", borderTop: "5px solid red" }}>
              <CardMedia>
                <img src={InstagramIcon} />
                @realnathanf
              </CardMedia>
              <CardContent>
                <Typography variant="h2" fontWeight="bold">
                  11K
                </Typography>
                <Typography variant="body2">
                  FOLLOWERS
                </Typography>
                <Stack sx={{ paddingTop: 3 }}>
                  <Typography variant="caption">
                    <img src={IconUp} style={{ position: "relative", top: -3, left: -5 }} />1099 Today
                  </Typography>

                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card raised>
            <CardActionArea sx={{ padding: 3, borderTop: "5px solid hsl(348, 97%, 39%)" }}>
              <CardMedia>
                <img src={YoutubeIcon} />
                Nathan F.
              </CardMedia>
              <CardContent>
                <Typography variant="h2" fontWeight="bold">
                  8239
                </Typography>
                <Typography variant="body2">
                  SUBSCRIBERS
                </Typography>
                <Stack sx={{ paddingTop: 3 }}>
                  <Typography variant="caption" color="secondary">
                    <img src={IconDown} style={{ position: "relative", top: -3, left: -5 }} />
                    144 Today
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack >

        <Stack py={5} spacing={2} alignItems="start" width="80%">
          <Typography variant="h5" fontWeight="bold">
            Overview - Today
          </Typography>
        </Stack>

        <Stack width="80%">
          <Stack py={3} direction="row" spacing={5} alignItems="start">
            {OverviewRowOne.map((index) => {
              return (
                <Stack py={3} px={5} component={Paper} spacing={2} sx={{ flex: 1 }}>
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
                    <Typography variant="body2" sx={{ alignContent: "end", }}>
                      <img src={IconDown} style={{ position: "relative", top: -3, left: -5 }} />
                      {index.per}
                    </Typography>
                  </Stack>
                </Stack>
              )
            })}
          </Stack>

          <Stack py={3} direction="row" spacing={5} alignItems="start">
            {OverviewRowTwo.map((index) => {
              return (
                <Stack py={3} px={5} component={Paper} spacing={2} sx={{ flex: 1 }}>
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
                    <Typography variant="body2" sx={{ alignContent: "end" }}>
                      <img src={IconDown} style={{ position: "relative", top: -3, left: -5 }} />
                      {index.per}
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
