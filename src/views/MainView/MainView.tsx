import React from "react";
import imageMain from "../../assets/images/ImagenMain.jpg";
import "./MainView.css";
import NavComponent from "../../components/layouts/NavComponents/NavComponent";
import InformationMainView from "../../components/layouts/InicioComponents/InformationMainView";

export const MainView = () => {
  return (
    <div className="body">
      <div className="column1">
        <NavComponent></NavComponent>
      </div>
      <div className="column2">
        <div className="background-column2"></div>
        <img className="imageMain" src={imageMain.src}></img>
      </div>
      <div className="column3">
        <InformationMainView></InformationMainView>
      </div>
    </div>
  );
};
export default MainView;
