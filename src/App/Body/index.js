import { useAPI } from "./useAPI";

const Body = () => {
  const rateData = useAPI();

  if(rateData.status==="loaded"){

  }else if(rateData.status==="error"){
    
  }
};

export default Body;
