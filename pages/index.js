import Head from "next/head";
import Footer from "../components/Footer";
import Verification from "../components/Verification";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Jockey Cock | Creating a FREE community of sex positive gay men
          through media, listings, and social connections
        </title>
      </Head>
      <Verification />
      <div
        className={
          "uk-width-1-1 uk-section uk-section-xlarge uk-flex uk-flex-center uk-flex-middle uk-background-cover"
        }
        style={{
          backgroundImage: "url('/images/splash.jpg');",
        }}
      >
        <div className={"uk-container uk-container-xsmall"}>
          <h1 className={"uk-heading-medium"}>JOCKEY COCK</h1>
          <p className={"uk-text-lead"}>
            Creating a FREE community of sex positive gay men through media,
            listings, and social connections
          </p>
          <p>
            Create a profile, share sexy media, check out gay listings, hookup,
            and make friends.
          </p>
        </div>
      </div>
      <div className={"uk-section uk-section-xlarge"}>
        <div className={"uk-container uk-container-xsmall"}>
          <h2>Make this Space Yours</h2>
          <p>
            It&apos;s complicated. Have a feature in mind or don&apos;t feel
            comfortable as part of our community? Please tell us about it on our{" "}
            <a href={"https://www.reddit.com/r/jockeycock"}>Reddit page</a>.
            I&apos;ll do my best to help you have fun and feel included!
          </p>
          <h2>Volunteer, Donate, or Sponsor!</h2>
          <p>
            Want to help see this free community grow? Email{" "}
            <a href={"mailto:topher@stupendousweb.com"}>
              topher@stupendousweb.com
            </a>{" "}
            to volunteer or donate!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
