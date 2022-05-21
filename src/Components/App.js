import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { IntlProvider } from "react-intl";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import withParamsAndNavigate from "../Functions/withParamsAndNavigate";

import HandleError from "./HandleError";
import Home from "../Screens/Home";

import LOCALES from "../Constants/Locales";
import MESSAGES from "../Constants/Messages";

class App extends Component {
  render() {
    let mdTheme = createTheme(this.props.theme);
    return <Home />;
  }
}

function mapStateToProps(state, props) {
  return {
    theme: state.configReducer.theme,
    locale: state.appReducer.locale,
  };
}
export default connect(mapStateToProps)(App);
// export default withParamsAndNavigate(connect(mapStateToProps)(App));
// // <HandleError>
//   {/* <IntlProvider messages={MESSAGES[this.props.locale]} locale={this.props.locale} defaultLocale={LOCALES.ENGLISH}>
//     <ThemeProvider theme={mdTheme}>
//       <CssBaseline />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//       </Routes>
//     </ThemeProvider>
//   </IntlProvider> */}
// // </HandleError>
