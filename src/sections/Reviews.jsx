
import { ArrowUpRight, Quote, Star } from "lucide-react";
import "./Reviews.css";

const JUSTDIAL_URL =
  "https://www.justdial.com/Warangal/Sai-Ratna-Nursing-Home-Main-Road-Opposite-Old-Bus-Stand-Bhupalapalli/9999PX870-X870-181030125637-E8V7_BZDET";

const reviews = [
  {
    name: "Nagarathnam Balijipalli",
    initial: "N",
    text: "My experience at Sai Ratna Nursing Home was excellent. The staff was very attentive and provided great customer service.",
  },
  {
    name: "Snigdha",
    initial: "S",
    text: "Sai Ratna Nursing Home is excellent! The staff is attentive and provides great customer service. The facilities are good, clean, and hygienic.",
  },
  {
    name: "Sita",
    initial: "S",
    text: "Sai Ratna Nursing Home in Bhupalapalli has excellent staff who are very responsive and provide gentle care. The pricing was reasonable.",
  },
  {
    name: "Rekha",
    initial: "R",
    text: "Sai Ratna Nursing Home is an excellent facility with a clean and hygienic environment. The staff is professional and caring.",
  },
];

export default function Reviews() {
  return (
    <section
      className="sr-reviews"
      id="reviews"
      aria-labelledby="sr-reviews-title"
    >
      <div className="sr-reviews-container">
        <div className="sr-reviews-topline">
          <span className="sr-reviews-kicker">
            <span className="sr-reviews-kicker-line" />
            PATIENT EXPERIENCES
          </span>
          <span className="sr-reviews-index">SAI RATHNA / 02</span>
        </div>

        <div className="sr-reviews-heading-row">
          <div className="sr-reviews-heading-copy">
            <p className="sr-reviews-overline">TRUST BUILT THROUGH CARE</p>
            <h2 id="sr-reviews-title" className="sr-reviews-title">
              Words that
              <br />
              <em>matter.</em>
            </h2>
          </div>

          <div className="sr-reviews-summary">
            <div className="sr-reviews-score">
              <span className="sr-reviews-score-number">4.4</span>
              <span className="sr-reviews-score-outof">/ 5</span>
            </div>

            <div className="sr-reviews-rating-meta">
              <div
                className="sr-reviews-stars"
                aria-label="Overall Justdial listing rating: 4.4 out of 5"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill={star <= 4 ? "currentColor" : "none"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p>87 ratings on Justdial</p>
            </div>
          </div>
        </div>

        <p className="sr-reviews-intro">
          A glimpse of the experiences shared by people who have visited
          Sai Rathna Nursing Home.
        </p>

        <div className="sr-reviews-list" aria-label="Patient review excerpts">
          {reviews.map((review, index) => (
            <article
              className="sr-review-card"
              key={review.name}
              style={{ "--sr-review-delay": `${index * 90}ms` }}
            >
              <div className="sr-review-card-top">
                <span className="sr-review-quote-icon" aria-hidden="true">
                  <Quote size={22} strokeWidth={1.4} />
                </span>
                <span className="sr-review-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="sr-review-text">“{review.text}”</p>

              <div className="sr-review-person">
                <span className="sr-review-avatar" aria-hidden="true">
                  {review.initial}
                </span>
                <div className="sr-review-person-copy">
                  <h3>{review.name}</h3>
                  <p>Review shared on Justdial</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="sr-reviews-bottom">
          <p>
            Review excerpts are shortened for display. Read the original
            listing for full context and the latest ratings.
          </p>

          <a
            className="sr-reviews-source-link"
            href={JUSTDIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Read all reviews</span>
            <ArrowUpRight size={17} strokeWidth={1.7} />
          </a>
        </div>

        <div className="sr-reviews-footerline">
          <span>EVERY EXPERIENCE MATTERS.</span>
         
           
        </div>
      </div>
    </section>
  );
}
