import { LoadingScreenContainer } from "./style";
import { Puff } from "react-loader-spinner";

export default function LoadingScreen() {
  return (
    <>
      <LoadingScreenContainer>
        <Puff
          height="150"
          width="150"
          radius={1}
          color="#52b6ff"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </LoadingScreenContainer>
    </>
  );
}
