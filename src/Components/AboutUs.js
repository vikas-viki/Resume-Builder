import { Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { Box } from "@mui/system";
import Navbar from "../Components/Common/Navbar";

export default function ButtonMUI() {
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <Typography
          sx={{
            fontSize: {
              xs: "30px",
              sm: "45px",
              lg: "55px",
            },
          }}
          variant="h2"
        >
          Resume Builder
        </Typography>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "17px",
                sm: "23px",
                lg: "25px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",

                lg: "25px",
              },
            }}
          >
            <i>
              Resume Builder offers free, HR-approved resume templates to help
              you create a professional resume in minutes. Choose from several
              template options and even pre-populate a resume from your LinkedIn
              profile. Create an account to save your progress and multiple
              versions, plus download as a PDF.Resume Builder offers free,
              HR-approved resume templates to help you create a professional
              resume in minutes. Choose from several template options and even
              pre-populate a resume from your LinkedIn profile. Create an
              account to save your progress and multiple versions, plus download
              as a PDF.Resume Builder offers free, HR-approved resume templates
              to help you create a professional resume in minutes. Choose from
              several template options and even pre-populate a resume from your
              LinkedIn profile. Create an account to save your progress and
              multiple versions, plus download as a PDF.
            </i>
          </Typography>
          <Stack>
            <img
              src="https://media.istockphoto.com/vectors/people-vector-illustration-flat-cartoon-character-landing-page-vector-id1137470880?k=20&m=1137470880&s=612x612&w=0&h=G12BhLwmpqRaSnBY0S9SiJ1Ia1Ao5PjrLX1Y98KZ1vE="
              alt="img"
            />
          </Stack>
        </Stack>
        <Box mt="25px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                lg: "35px",
              },
              fontWeight: "400",
              color: "dark",
            }}
          >
            Share with your friends
          </Typography>
          <Box className="icons">
            <LinkedInIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <FacebookOutlinedIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="success"
            />
            <TwitterIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="info"
            />
            <EmailTwoToneIcon
              sx={{ fontSize: "40px", paddingLeft: "15px", color: "grey" }}
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
