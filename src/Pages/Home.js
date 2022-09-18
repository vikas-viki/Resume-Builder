import React from "react";
import Navbar from "../Components/Common/Navbar";
import "../Styles/Home.css";
import { templates } from "../Data/templates";
import BlackScreen from "../Components/BlackScreen";
import { Button, Typography, Stack} from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTemplate } from "../Redux/actions";

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
});

const Home = (props) => {
  const navigate = useNavigate();

  const navigateToFillDetails = (id) => {
    props.setSelectedTemplateId(id);
    navigate("/template/fill-details");
  };

  console.log(props.selectedTemplateId);

  return (
    <div className="home">
      <Navbar active={"Resume Templates"} />
      <div className="home-templates-cont">
        <Typography 
        variant='h2'
        component='h2'
        sx={{
          fontWeight: '500',
          fontSize:{
            xs: "23px",
            sm: "24px",
            md: "25px",
            lg: "26px",
            xl: "27px"
          }
        }}>Templates</Typography>
      <p className="template-select-text">Select a template to get started</p>
      {/* className="template-cont" */}
      <Stack sx={{
        width: "100%",
        display:'grid',
        gridTemplateColumns:{
          sm: '1fr 1fr ', 
          md: '1fr 1fr 0.5fr',
          lg: '1fr 1fr 0.5fr 0.5fr',
          xl:"1fr 1fr 1fr 0.5fr",
      
      },
        gridGap: "30px"
      }}>
        {templates.map((template) => {
          return (
            <div key={template.id} className="templates-img-cont">
              <img
                className="template-img"
                src={template.template_img}
                alt={template.template_name}
              />
              <BlackScreen />
              <Button
                className="use-template-btn"
                onClick={() => navigateToFillDetails(template.id)}
                size="medium"
                variant="contained">
                Use Template
              </Button>
            </div>
          );
        })}
      </Stack>
    </div>
    </div >
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
