import FirstTeamReview from "./FirstTeamReview";
import styles from "./DoctorTestimonials.module.css";

const DoctorTestimonials = () => {
  return (
    <div className={styles.doctorTestimonials}>
      <div className={styles.testimonialHeader}>
        <h1 className={styles.whatPeopleAre}>
          What people are saying about our doctors
        </h1>
      </div>
      <div className={styles.doctorReviewList}>
        <div className={styles.doctorreviews}>
          <FirstTeamReview />
          <FirstTeamReview propPadding="var(--padding-14xl) var(--padding-6xl) var(--padding-155xl) var(--padding-13xl-1)" />
          <FirstTeamReview propPadding="var(--padding-14xl) var(--padding-7xl) var(--padding-155xl) var(--padding-12xl)" />
        </div>
      </div>
      <div className={styles.clinicTestimonials}>
        <div className={styles.clinicTestimonialHeader}>
          <button className={styles.previousbutton}>
            <div className={styles.label}>Doctor Reviews</div>
          </button>
          <div className={styles.clinicTestimonialTitle}>
            <h1 className={styles.whatPeopleAre1}>
              What people are saying about our clinics
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.clinicreviews}>
        <FirstTeamReview propPadding="var(--padding-14xl) var(--padding-11xl) var(--padding-155xl) var(--padding-13xl-1)" />
        <FirstTeamReview propPadding="var(--padding-14xl) var(--padding-11xl) var(--padding-155xl) var(--padding-13xl-1)" />
        <FirstTeamReview propPadding="var(--padding-14xl) var(--padding-12xl) var(--padding-155xl)" />
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <button className={styles.previousbutton1}>
              <div className={styles.label1}>Clinic Reviews</div>
            </button>
          <div className={styles.bottombar}>
            <div className={styles.items}>
              <div className={styles.aboutUs}>About Us</div>
              <div className={styles.emergencyNum}>Emergency Numbers</div>
              <div className={styles.reviews}>Reviews</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.termsOfUse}>Terms of Use</div>
            </div>
            <div className={styles.allRightsReserved}>
              © 2024, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorTestimonials;