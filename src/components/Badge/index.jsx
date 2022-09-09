import React from 'react';
import styles from './styles.module.css';
const Badge = (props) => {
  return (
    <div className={`text-xs text-weight-medium ${styles.container} ${props.className}`}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.09446 0.823237C7.75281 -0.274412 9.34355 -0.274412 10.0019 0.823237C10.4371 1.54881 11.3406 1.8424 12.1192 1.51119C13.297 1.01014 14.5839 1.94515 14.4714 3.22013C14.3969 4.06293 14.9554 4.83155 15.7799 5.02122C17.0273 5.30815 17.5189 6.82103 16.6784 7.78635C16.1228 8.42445 16.1228 9.37451 16.6784 10.0126C17.5189 10.9779 17.0273 12.4908 15.7799 12.7777C14.9554 12.9674 14.3969 13.736 14.4714 14.5788C14.5839 15.8538 13.297 16.7888 12.1192 16.2878C11.3406 15.9566 10.4371 16.2502 10.0019 16.9757C9.34355 18.0734 7.75281 18.0734 7.09446 16.9757C6.65928 16.2502 5.75571 15.9566 4.97716 16.2878C3.79937 16.7888 2.51243 15.8538 2.625 14.5788C2.69941 13.736 2.14098 12.9674 1.31644 12.7777C0.0690702 12.4908 -0.422496 10.9779 0.41799 10.0126C0.973574 9.37451 0.973574 8.42445 0.41799 7.78635C-0.422496 6.82103 0.0690703 5.30815 1.31644 5.02122C2.14098 4.83155 2.69941 4.06293 2.625 3.22013C2.51243 1.94515 3.79937 1.01014 4.97716 1.51119C5.75571 1.8424 6.65928 1.54881 7.09446 0.823237Z"
          fill="#E9AF53"
        />
        <path
          d="M12.9142 6.20583C12.8599 6.15115 12.7954 6.10776 12.7243 6.07814C12.6532 6.04853 12.577 6.03328 12.5 6.03328C12.423 6.03328 12.3467 6.04853 12.2757 6.07814C12.2046 6.10776 12.1401 6.15115 12.0858 6.20583L7.73999 10.5575L5.91416 8.72583C5.85785 8.67144 5.79139 8.62867 5.71856 8.59997C5.64572 8.57127 5.56795 8.55719 5.48968 8.55855C5.41141 8.5599 5.33417 8.57666 5.26237 8.60786C5.19058 8.63907 5.12563 8.68411 5.07124 8.74041C5.01685 8.79672 4.97409 8.86318 4.94538 8.93601C4.91668 9.00885 4.9026 9.08662 4.90396 9.16489C4.90531 9.24316 4.92207 9.3204 4.95328 9.3922C4.98448 9.46399 5.02952 9.52894 5.08582 9.58333L7.32582 11.8233C7.38005 11.878 7.44457 11.9214 7.51565 11.951C7.58674 11.9806 7.66298 11.9959 7.73999 11.9959C7.817 11.9959 7.89324 11.9806 7.96433 11.951C8.03541 11.9214 8.09993 11.878 8.15416 11.8233L12.9142 7.06333C12.9734 7.0087 13.0206 6.94241 13.0529 6.86862C13.0853 6.79482 13.102 6.71514 13.102 6.63458C13.102 6.55402 13.0853 6.47433 13.0529 6.40054C13.0206 6.32675 12.9734 6.26045 12.9142 6.20583Z"
          fill="#4B3786"
        />
      </svg>
      Star merchant
    </div>
  );
};

export default Badge;
