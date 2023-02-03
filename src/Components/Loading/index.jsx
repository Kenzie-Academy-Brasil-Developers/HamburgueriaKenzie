import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LoadingPage } from "../../style/loadingPage";

export default function Loading() {
  return (
    <LoadingPage>
      <AiOutlineLoading3Quarters />
      <p>Carregando...</p>
    </LoadingPage>
  );
}
