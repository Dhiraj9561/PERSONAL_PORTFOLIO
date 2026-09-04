// import React from "react";
// import { Helmet } from "react-helmet";
// import {
//   greeting,
//   seo,
//   socialMediaLinks,
//   experience,
//   contactPageData,
//   certifications,
// } from "../../portfolio.js";

// function SeoHeader() {
//   let sameAs = [];
//   socialMediaLinks
//     .filter(
//       (media) =>
//         !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
//     )
//     .forEach((media) => {
//       sameAs.push(media.link);
//     });

//   let mail = socialMediaLinks
//     .find((media) => media.link.startsWith("mailto"))
//     .link.substring("mailto:".length);
//   let job = experience.sections
//     ?.find((section) => section.work)
//     ?.experiences?.at(0);

//   let credentials = [];
//   certifications.certifications.forEach((certification) => {
//     credentials.push({
//       "@context": "https://schema.org",
//       "@type": "EducationalOccupationalCredential",
//       url: certification.certificate_link,
//       name: certification.title,
//       description: certification.subtitle,
//     });
//   });
//   const data = {
//     "@context": "https://schema.org/",
//     "@type": "Person",
//     name: greeting.title,
//     url: seo?.og?.url,
//     email: mail,
//     telephone: contactPageData.phoneSection?.subtitle,
//     sameAs: sameAs,
//     jobTitle: job.title,
//     worksFor: {
//       "@type": "Organization",
//       name: job.company,
//     },
//     address: {
//       "@type": "PostalAddress",
//       addressLocality: contactPageData.addressSection?.locality,
//       addressRegion: contactPageData.addressSection?.region,
//       addressCountry: contactPageData.addressSection?.country,
//       postalCode: contactPageData.addressSection?.postalCode,
//       streetAddress: contactPageData.addressSection?.streetAddress,
//     },
//     hasCredential: credentials,
//   };
//   return (
//     <Helmet>
//       <title>{seo.title}</title>
//       <meta name="description" content={seo.description} />
//       <meta property="og:title" content={seo?.og?.title} />
//       <meta property="og:type" content={seo?.og?.type} />
//       <meta property="og:url" content={seo?.og?.url} />
//       <script type="application/ld+json">{JSON.stringify(data)}</script>
//     </Helmet>
//   );
// }

// export default SeoHeader;





import React from "react";
import { Helmet } from "react-helmet";

import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  // Safe SEO fallback
  const safeSeo = seo || {
    title: "Dhiraj Rathod | Computer Science Student",
    description:
      "Dhiraj Rathod is a B.Tech Computer Science student interested in software development and web development.",
    og: {
      title: "Dhiraj Rathod Portfolio",
      type: "website",
      url: "",
    },
  };

  // Social media links
  const sameAs = (socialMediaLinks || [])
    .filter(
      (media) =>
        media.link &&
        !media.link.startsWith("tel") &&
        !media.link.startsWith("mailto")
    )
    .map((media) => media.link);

  // Email
  const emailObject = (socialMediaLinks || []).find(
    (media) => media.link && media.link.startsWith("mailto")
  );

  const mail = emailObject
    ? emailObject.link.substring("mailto:".length)
    : "";

  // Work experience
  // User currently has no professional work experience,
  // so we safely handle an empty experience section.
  const job = experience?.sections
    ?.find((section) => section.work)
    ?.experiences?.[0];

  // Certifications
  const credentials = [];

  if (certifications?.certifications) {
    certifications.certifications.forEach((certification) => {
      credentials.push({
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalCredential",
        url: certification.certificate_link,
        name: certification.title,
        description: certification.subtitle,
      });
    });
  }

  // Structured data
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",

    name: greeting?.title || "Dhiraj Rathod",

    url: safeSeo?.og?.url || "",

    email: mail,

    telephone: contactPageData?.phoneSection?.subtitle || "",

    sameAs: sameAs,

    jobTitle: job?.title || "Computer Science Student",

    ...(job
      ? {
          worksFor: {
            "@type": "Organization",
            name: job.company,
          },
        }
      : {}),

    address: {
      "@type": "PostalAddress",
      addressLocality:
        contactPageData?.addressSection?.locality || "",
      addressRegion:
        contactPageData?.addressSection?.region || "",
      addressCountry:
        contactPageData?.addressSection?.country || "",
      postalCode:
        contactPageData?.addressSection?.postalCode || "",
      streetAddress:
        contactPageData?.addressSection?.streetAddress || "",
    },

    hasCredential: credentials,
  };

  return (
    <Helmet>
      <title>{safeSeo.title}</title>

      <meta
        name="description"
        content={safeSeo.description}
      />

      <meta
        property="og:title"
        content={safeSeo?.og?.title || ""}
      />

      <meta
        property="og:type"
        content={safeSeo?.og?.type || "website"}
      />

      <meta
        property="og:url"
        content={safeSeo?.og?.url || ""}
      />

      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
}

export default SeoHeader;