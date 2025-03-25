import React from "react";
import styles from "./Review.module.css";

const reviews = [
  {
    title: "Great Experience!",
    body: "The service was amazing and the staff was very kind.",
    reviewer: "John Doe",
    date: "March 21, 2025",
    image: "/assets/Female.png",
  },
  {
    title: "Highly Recommended",
    body: "I had a smooth appointment booking process. Thanks!",
    reviewer: "Jane Smith",
    date: "March 18, 2025",
    image: "/assets/Female.png",
  },
  {
    title: "Wonderful Service",
    body: "The doctor was very professional and caring.",
    reviewer: "Alex Johnson",
    date: "March 15, 2025",
    image: "/assets/Female.png",
  },
];

export const Review = () => {
  return (
    <div className={styles.reviewContainer}>
      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <p className={styles.stars}>★★★★★</p>
          <h3 className={styles.title}>{review.title}</h3>
          <p className={styles.body}>{review.body}</p>
          <div className={styles.reviewer}>
            <img src={review.image} alt={review.reviewer} />
            <div>
              <p className={styles.name}>{review.reviewer}</p>
              <p className={styles.date}>{review.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
