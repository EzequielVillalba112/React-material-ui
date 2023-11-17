import React from "react";
import { Route, Routes } from "react-router-dom";
import ContainerSx from "./ContainerSx/ContainerSx";
import TypographyMaterial from "./Typography/TypographyMaterial";
import BoxMaterial from "./Box/BoxMaterial";
import GridMaterial from "./Grid/GridMaterial";
import PracticaStyled from "./PracticaStyled/PracticaStyled";
import CardMaterial from "./Card/CardMaterial";
import NavBar from "./NavBar/NavBar";

export default function Page() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ContainerSx />} />
        <Route path="/container-sx" element={<ContainerSx />} />
        <Route path="/typografy" element={<TypographyMaterial />} />
        <Route path="/box" element={<BoxMaterial />} />
        <Route path="/grid" element={<GridMaterial />} />
        <Route path="/practica-styled" element={<PracticaStyled />} />
        <Route path="/card" element={<CardMaterial />} />
        <Route path="/navbar" element={<NavBar />} />
      </Routes>
    </>
  );
}
