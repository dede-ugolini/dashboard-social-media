import { CardActionArea, Divider, Stack, Box, Paper, Typography, Card, CardContent, CardMedia, CardActions, CardHeader, Icon } from "@mui/material";

import FacebookIcon from '/icon-facebook.svg'
import InstagramIcon from '/icon-instagram.svg'
import TwitterIcon from '/icon-twitter.svg'
import YoutubeIcon from '/icon-youtube.svg'
import IconUp from '/icon-up.svg'

export default function Dashboard() {

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
                <Typography variant="h2" fontWeight="bold" sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3.0rem",
                    lg: "3.5rem",
                    xl: "5rem",
                  }
                }}>
                  1987
                </Typography>
                <Typography variant="body2" sx={{
                  fontSize: {
                    xs: "0.6rem",
                    sm: "0.8rem",
                    md: "0.9rem",
                    lg: "1.1rem",
                    xl: "1.2rem",
                    letterSpacing: "0.1rem",
                  }
                }}>
                  FOLLOWERS
                </Typography>
                <Typography variant="caption">
                  <img src={IconUp} style={{ position: "relative", top: -3, left: -5 }} />12 Today
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card raised sx={{ padding: 3, borderTop: "5px solid hsl(200, 89%, 53%)" }}>
            <CardActionArea>
              <CardMedia>
                <img src={TwitterIcon} />
                @nathanf
              </CardMedia>
              <CardContent>
                <Typography variant="h2" fontWeight="bold" sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3.0rem",
                    lg: "3.5rem",
                    xl: "5rem",
                  }
                }}>
                  1044
                </Typography>
                <Typography variant="body2" sx={{
                  fontSize: {
                    xs: "0.6rem",
                    sm: "0.8rem",
                    md: "0.9rem",
                    lg: "1.1rem",
                    xl: "1.2rem",
                    letterSpacing: "0.1rem",
                  }
                }}>
                  FOLLOWERS
                </Typography>
                <Typography variant="caption">
                  <img src={IconUp} style={{ position: "relative", top: -3, left: -5 }} />99 Today
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card raised sx={{ padding: 3, height: "100%", borderTop: "5px solid red" }} >
            <CardActionArea>
              <CardMedia>
                <img src={InstagramIcon} />
                @realnathanf
              </CardMedia>
              <CardMedia>
                <Typography variant="h2" fontWeight="bold" sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3.0rem",
                    lg: "3.5rem",
                    xl: "5rem",
                  }
                }}>
                  11K
                </Typography>
                <Typography variant="body2" sx={{
                  fontsize: {
                    xs: "0.6rem",
                    sm: "0.8rem",
                    md: "0.9rem",
                    lg: "1.1rem",
                    xl: "1.2rem",
                    letterSpacing: "0.1rem",
                  }
                }}>
                  FOLLOWERS
                </Typography>
                <Typography variant="caption">
                  <img src={IconUp} style={{ position: "relative", top: -3, left: -5 }} />1099 Today
                </Typography>
              </CardMedia>
            </CardActionArea>
          </Card>

          <Card raised sx={{ padding: 3, borderTop: "5px solid hsl(348, 97%, 39%)" }}>
            <CardActionArea>
              <CardMedia>
                <img src={YoutubeIcon} />
                Nathan F.
              </CardMedia>
              <CardContent>
                <Typography variant="h2" fontWeight="bold" sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3.0rem",
                    lg: "3.5rem",
                    xl: "4rem",
                  }
                }}>
                  8239
                </Typography>
                <Typography variant="body2" sx={{
                  fontsize: {
                    xs: "0.6rem",
                    sm: "0.8rem",
                    md: "0.9rem",
                    lg: "1.1rem",
                    xl: "1.2rem",
                    letterSpacing: "0.1rem",
                  }
                }}>
                  SUBSCRIBERS
                </Typography>
                <Typography variant="caption">
                  144 Today
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack >

        <Stack py={5} spacing={2} alignItems="start" width="80%">
          <Typography variant="h5" fontWeight="bold">
            Overview - Today
          </Typography>
        </Stack>

        <Stack py={3} direction="row" spacing={5} alignItems="start" width="80%">
          <Card raised>
            <CardActionArea>
              <CardMedia>
                <img src={FacebookIcon} />
                @nathanf
              </CardMedia>
              <CardContent>
                <Typography variant="h2" fontWeight="bold">
                  1987
                </Typography>
                <Typography variant="body2">
                  FOLLOWERS
                </Typography>
                <Typography variant="body2">
                  12 Today
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card raised>
            <CardActionArea>
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
                <Typography>
                  99 Today
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card raised>
            <CardActionArea>
              <CardMedia>
                <img src={InstagramIcon} />
                @realnathanf
              </CardMedia>
              <CardMedia>
                <Typography variant="h2" fontWeight="bold">
                  11K
                </Typography>
                <Typography variant="body2">
                  FOLLOWERS
                </Typography>
                <Typography variant="body2">
                  1099 Today
                </Typography>
              </CardMedia>
            </CardActionArea>
          </Card>

          <Card>
            <CardActionArea>
              <CardMedia>
                <img src={YoutubeIcon} />
                Nathan F.
              </CardMedia>
              <CardContent>
                <Typography variant="h2" fontWeight="bold">
                  8239
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  SUBSCRIBERS
                </Typography>
                <Typography variant="body" fontWeight="bold">
                  144 Today
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </Stack>

      </Stack >
    </>
  );
}
