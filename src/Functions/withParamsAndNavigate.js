import { useParams, useNavigate } from "react-router-dom";

const withParamsAndNavigate = (Component) => (props) => <Component {...props} params={useParams()} navigate={useNavigate()} />;

export default withParamsAndNavigate;
