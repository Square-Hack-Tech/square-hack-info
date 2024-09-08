import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";

import Router from "./router";
import i18n from "./translation";
import { Watermark } from "antd";

const App = () => (
  <BrowserRouter>
  <Watermark
  height={30}
  width={130}
  content="Square Hack"
  // image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
    </Watermark>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
