import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Jockey Cock | Creating a FREE community of sex positive gay men
          through media, listings, and social connections
        </title>
      </Head>
      <div
        className={
          "uk-width-1-1 uk-section uk-flex uk-flex-center uk-flex-middle uk-background-cover"
        }
        style={{
          backgroundImage: "url('/images/splash.jpg');",
        }}
        data-uk-height-viewport={""}
      >
        <div className={"uk-container uk-container-large"}>
          <div
            className={"uk-child-width-1-2@s uk-flex-middle"}
            data-uk-grid={""}
          >
            <div>
              <h1 className={"uk-heading-medium"}>JOCKEY COCK</h1>
              <a
                className={"uk-button uk-button-primary uk-button-large"}
                onClick={() =>
                  alert(
                    "Early registration is coming soon! In the meantime, give me feedback!"
                  )
                }
              >
                Start your Profile
              </a>
            </div>
            <div>
              <p className={"uk-text-lead"}>
                Creating a FREE community of sex positive gay men through media,
                listings, and social connections
              </p>
              <p>
                Create a profile, post to the social media feed, check out gay
                listings, hookup, and make friends around you.
              </p>
              <h2>Make this Space Yours</h2>
              <p>
                It&apos;s complicated. Have a feature in mind or don&apos;t feel
                comfortable as part of our community? Email{" "}
                <a href={"mailto:topher@stupendousweb.com"}>
                  topher@stupendousweb.com
                </a>{" "}
                and I&apos;ll do my best to help you have fun and feel included!
              </p>
              <h2>Volunteer or Donate</h2>
              <p>
                Want to help see this free community grow? Email me to volunteer
                or donate!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
