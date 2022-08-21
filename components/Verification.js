import UIkit from "uikit";
import { useEffect } from "react";

export default function Verification() {
  useEffect(() => {
    UIkit.modal("#modal").show();
  }, []);

  return (
    <>
      <div id={"modal"} data-uk-modal={""}>
        <div
          className={"uk-modal-dialog uk-margin-auto-vertical uk-modal-body"}
        >
          <p>
            This site contains sexually explicit content. By using this site you
            testify that you are 18 years or older.
          </p>
          <p className={"uk-text-right"}>
            <button
              className={
                "uk-button uk-button-primary uk-margin-small-right  uk-modal-close"
              }
              type={"button"}
            >
              I agree
            </button>
            <a
              href={"https://stupendousweb.com"}
              className={"uk-button uk-button-secondary"}
            >
              Get me out of here!!!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
