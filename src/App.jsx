import "./App.css";

const aboutParagraphs = [
  "Our indoor rink welcomes players, families, and guests year-round from across the greater Metro and Tri-State area.",
  "With over 200 spectator seats, a pro shop with rental skates, and a self-serve beer wall, Wings Arena is more than just a rink; it's a community destination for games, celebrations, and lasting memories.",
];

const dasherViews = [
  "Bleachers visibility",
  "LiveBarn visibility",
  "Balcony visibility",
  "Lobby visibility",
  "Flow room visibility",
];

const namingBenefits = [
  "Company name featured prominently on exterior building signage",
  "Logo and name displayed across digital platforms including website, social media, and email campaigns",
  "Recognition in select press, media, and advertising materials",
  "Branding opportunities on arena scoreboard, PA announcements, and in-venue displays",
  "Logo placement on facility maps, wayfinding signage, and print materials",
  "Exclusive naming-rights style partnership structure for a defined contract period",
];

const contactPeople = [
  {
    name: "Joe Wanderlingh",
    title: "Program Director",
    email: "jwanderlingh@wingsarena.com",
  },
  {
    name: "Francois Magnant",
    title: "Chief Executive Officer",
    email: "fmagnant@wingsarena.com",
    phone: "",
  },
];

function SectionTitle({ eyebrow, title, intro, align = "left" }) {
  return (
    <div className={`sectionTitle sectionTitle--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {intro ? <p className="sectionIntro">{intro}</p> : null}
    </div>
  );
}

function PlaceholderImage({ src, alt, className = "" }) {
  return (
    <div className={`imageFrame ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement.classList.add("imageFrame--placeholder");
        }}
      />
      <div className="imageFallback">Add image: {alt}</div>
    </div>
  );
}

function BrandLogo({ className = "", alt = "Wings Arena logo", src = "/images/wings-logo.png" }) {
  return (
    <div className={`brandLogoWrap ${className}`}>
      <img
        src={src}
        alt={alt}
        className="brandLogo"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement.classList.add("brandLogoWrap--fallback");
        }}
      />
      <span className="brandLogoFallback">WINGS ARENA</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="pageShell">
      <header className="coverSection">
        <div className="coverLeft">
          <div className="coverInner">
            <BrandLogo className="coverBrandLogo" />
            <p className="coverYear">2026-27</p>
            <h1>
              PARTNERSHIP
              <br />
              GUIDE
            </h1>
            <p className="coverFooter">
              Wings Arena Partnership Guide
              <br />
              Brand opportunities, facility visibility, and custom sponsorship
              placements.
            </p>
          </div>
        </div>

        <div className="sectionDivider coverDivider" />

        <div className="coverRight">
          <PlaceholderImage
            src="/images/cover-rink.jpg"
            alt="Cover rink image"
            className="coverImage"
          />
        </div>
      </header>

      <main className="mainContent">
        <section className="pageSection aboutSection">
          <div className="aboutTopImages">
            <PlaceholderImage
              src="/images/about-exterior.jpg"
              alt="Arena exterior"
              className="aboutTopImage"
            />
            <PlaceholderImage
              src="/images/about-player.jpg"
              alt="Youth hockey player"
              className="aboutTopImage"
            />
          </div>

          <div className="aboutBottom">
            <div className="aboutLeft">
              <BrandLogo className="patternBrandLogo" alt="Wings Arena logo in about section" src="/images/wings-logo-alt.png" />
              <h2 className="aboutUsHeading">ABOUT US</h2>
              <p className="aboutMission">OUR STORY & MISSION</p>
            </div>

            <div className="aboutRight">
              <p>
                Opened in 2025, Wings Arena was built around a simple mission:
                to <strong>bring people together</strong> to share the joy of
                ice sports,{" "}
                <strong>creating memories and connections</strong> in a
                friendly, welcoming environment.
              </p>
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="pageSection introBanner">
          <div className="introBannerOverlay">
            <h2>ADVERTISING OPPORTUNITIES</h2>
            <p>
              Explore a range of high-visibility partnership opportunities
              designed to connect your brand with players, families, guests, and
              the surrounding community.
            </p>
          </div>
        </section>

        <section className="pageSection splitFeatureSection">
          <div className="splitFeatureLeft">
            <SectionTitle
              eyebrow=""
              title="DASHER BOARDS"
              intro="Placed on the interior rink wall, dasher board placements help improve brand visibility, create memorability, and generate engagement."
            />

            <div className="contentStack">
              <div className="contentBlock">
                <h3>Dasher Zone 1</h3>
                <p>
                  Premium placement area with strong visibility from the
                  bleachers and mezzanine.
                </p>
              </div>

              <div className="contentBlock">
                <h3>Dasher Zone 2</h3>
                <p>
                  Additional high-visibility placement seen from the south-end
                  mezzanine and LiveBarn camera views.
                </p>
              </div>

              <div className="contentBlock">
                <h3>Creative Guidelines</h3>
                <p>
                  Artwork should be delivered in a high-quality production-ready
                  format sized appropriately for dasher placement.
                </p>
              </div>
            </div>
          </div>

          <div className="sectionDivider splitFeatureDivider" />

          <div className="splitFeatureRight">
            <PlaceholderImage
              src="/images/boards-main.jpg"
              alt="Dasher boards visibility examples"
              className="boardsHeroImage"
            />

            <div className="miniGrid">
              {dasherViews.map((view) => (
                <div className="miniCard" key={view}>
                  <span>{view}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pageSection splitFeatureSection splitFeatureSection--alt">
          <div className="visualStack">
            <div className="visualBlock">
              <div className="visualLabel">Package One</div>
              <PlaceholderImage
                src="/images/locker-room-door.png"
                alt="Locker room door branding"
                className="lockerImageTall"
              />
            </div>

            <div className="visualBlock">
              <div className="visualLabel visualLabel--secondary">Package Two</div>
              <PlaceholderImage
                src="/images/locker-room-interior.png"
                alt="Locker room interior branding"
                className="lockerImageWide"
              />
            </div>
          </div>

          <div className="sectionDivider splitFeatureDivider" />

          <div className="splitFeatureRightText">
            <SectionTitle
              eyebrow=""
              title="VISITOR LOCKER ROOM BRANDING RIGHTS"
              intro="Used by youth and adult players weekly, our visitor locker room branding opportunity is designed to build recognition and brand recall."
            />

            <div className="contentStack">
              <div className="contentBlock">
                <h3>Package 1</h3>
                <p>
                  Door signage, wall plate placement, and inclusion on the
                  digital schedule and locker room board.
                </p>
              </div>

              <div className="contentBlock">
                <h3>Package 2</h3>
                <p>
                  Includes all core Package 1 benefits, plus additional interior
                  branding opportunities such as wall graphics and color-based
                  visual integration.
                </p>
              </div>

              <div className="noteBlock">
                Custom creative execution can be tailored to fit your brand.
              </div>
            </div>
          </div>
        </section>

        <section className="pageSection splitFeatureSection">
          <div className="splitFeatureLeft">
            <SectionTitle
              eyebrow="Premier Opportunity"
              title="ARENA NAMING RIGHTS"
              intro="Our naming-rights partnership represents the highest-visibility brand opportunity at Wings Arena and can extend across major facility and marketing touchpoints."
            />

            <div className="benefitsCard">
              <h3>Comprehensive Benefits Include</h3>
              <ul>
                {namingBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>

            <p className="ctaInline">
              Contact us to explore this unique opportunity.
            </p>
          </div>

          <div className="sectionDivider splitFeatureDivider" />

          <div className="splitFeatureRight">
            <PlaceholderImage
              src="/images/naming-example.png"
              alt="Arena naming rights example"
              className="namingImage"
            />
            <div className="captionBox">
              Images shown are illustrative. Wings Arena can work with partners
              to customize branding placements and create a tailored
              sponsorship presentation.
            </div>
          </div>
        </section>

        <section className="pageSection splitFeatureSection splitFeatureSection--alt">
          <div className="splitFeatureLeft">
            <SectionTitle
              eyebrow="Digital Advertising"
              title="LOBBY TV ADVERTISING"
              intro="Reach visitors and families in high-traffic lobby, flow room, and mezzanine TV locations with premium digital advertising."
            />

            <div className="contentStack">
              <div className="contentBlock">
                <h3>Video Advertising</h3>
                <p>
                  Full-motion creative designed for digital rotation across
                  multiple in-facility TV displays.
                </p>
              </div>

              <div className="contentBlock">
                <h3>Static Image Advertising</h3>
                <p>
                  High-impact still creative sized for the arena’s TV display
                  network.
                </p>
              </div>

              <div className="noteBlock">
                Flexible scheduling may be available. Ad creative must align
                with Wings Arena content guidelines.
              </div>
            </div>
          </div>

          <div className="sectionDivider splitFeatureDivider" />

          <div className="splitFeatureRight">
            <PlaceholderImage
              src="/images/lobby-tv.png"
              alt="Lobby TV advertising examples"
              className="lobbyTvImage"
            />
          </div>
        </section>

        <section className="pageSection splitFeatureSection">
          <div className="splitFeatureLeft mediaLeft">
            <PlaceholderImage
              src="/images/locker-board.png"
              alt="Digital locker room board"
              className="lockerBoardImage"
            />
          </div>

          <div className="sectionDivider splitFeatureDivider" />

          <div className="splitFeatureRightText">
            <SectionTitle
              eyebrow="Digital Advertising"
              title="DIGITAL LOCKER ROOM BOARD"
              intro="Youth and adult players check the digital locker room board daily to find their assigned locker room, giving brand partners strong recurring visibility."
            />

            <div className="contentStack">
              <div className="contentBlock">
                <h3>"Presented By" Sponsorship</h3>
                <p>
                  Your brand wordmark can appear in the "presented-by" area of the
                  digital locker room assignment board, reinforcing visibility
                  with frequent facility users.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pageSection contactSection">
          <div className="contactImageWrap">
            <PlaceholderImage
              src="/images/contact-rink.png"
              alt="Rink interior contact section image"
              className="contactImage"
            />
          </div>

          <div className="sectionDivider splitFeatureDivider" />

          <div className="contactContent">
            <SectionTitle
              eyebrow="Get In Touch"
              title="CONTACT US"
              intro="Interested in a partnership, have questions, or want to propose a custom idea? Reach out to one of our contacts below."
            />

            <div className="contactList">
              {contactPeople.map((person) => (
                <div className="contactCard" key={person.email}>
                  <h3>
                    {person.name} <span>| {person.title}</span>
                  </h3>
                  <p>
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                    {person.phone ? ` | ${person.phone}` : ""}
                  </p>
                </div>
              ))}
            </div>

            <div className="generalInquiry">
              <p>
                For all general inquiries:
                <br />
                <a href="mailto:info@wingsarena.com">info@wingsarena.com</a> |
                (203) 357-1055 | 5 Barry Pl, Stamford, CT 06902
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}