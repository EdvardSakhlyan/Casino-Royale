import { ComponentType } from "react";
import { compose } from "../utils";
import withTranslation from "./withTranslation";

const withApp = (Component: ComponentType<any>) =>
  compose(withTranslation)(Component);
export default withApp;
