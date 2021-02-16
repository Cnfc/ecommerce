import PageLayout from "layouts/PageLayout";
import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";

// use hoc for class based components
class LegacyWelcomeClass extends Component {
  render() {
    const { t } = this.props;
    return <h2>{t("title")}</h2>;
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);

// Component using the Trans component
function MyComponent() {
  return (
    <Trans i18nKey="description.part1">
      To get started, edit <code>src/App.js</code> and save to reload.
      <span>RELOAD</span>
    </Trans>
  );
}

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <PageLayout>
      <div>
        <div>
          <Welcome />

          <button type="button" onClick={() => changeLanguage("en")}>
            en
          </button>

          <button type="button" onClick={() => changeLanguage("it")}>
            it
          </button>

          <button type="button" onClick={() => changeLanguage("ru")}>
            ru
          </button>
        </div>
        <div>{t("description.part2")}</div>
        <MyComponent />
      </div>
    </PageLayout>
  );
}

function Multilang() {
  return <Page />;
}
export default Multilang;
