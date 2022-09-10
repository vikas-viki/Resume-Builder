import React from "react";
import Navbar from "../Components/Common/Navbar";
import "../Styles/Home.css";
import { templates } from "../Data/templates";
import BlackScreen from "../Components/BlackScreen";
import { Button } from "@mui/material";
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
        <h2 className="templates-heading">Templates</h2>
        <p className="template-select-text">Select a template to get started</p>
        <div className="template-cont">
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
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
