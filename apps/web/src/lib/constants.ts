const DV = {
  "name": "Dominik Vach",
  "headline": "Founder & CEO at Forloop.ai | Ex-CTO",
  "location": "San Francisco Bay Area",
  "experience": [
    {
      "jobTitle": "Forloop.ai",
      "company": "Forloop.ai",
      "jobDates": "Feb 2025 - Present · 3 mos",
      "location": "Stockholm, Stockholm County, Sweden"
    },
    {
      "jobTitle": "Cohort Member",
      "company": "Cohort Member",
      "jobDates": "Sep 2020 - Jan 2021 · 5 mos",
      "location": "Berlín, Německo"
    },
    {
      "jobTitle": "Shipvio",
      "company": "Shipvio",
      "jobDates": "Jan 2020 - Jan 2021 · 1 yr 1 mo",
      "location": "Hlavní město Praha, Česká republika"
    },
    {
      "jobTitle": "11Hacks",
      "company": "11Hacks",
      "jobDates": "Prague",
      "location": "Jun 2019 - Oct 2019 · 5 mos"
    },
    {
      "jobTitle": ".NET Developer",
      "company": ".NET Developer",
      "jobDates": "Jun 2016 - Oct 2016 · 5 mos",
      "location": "Prague"
    }
  ],
  "education": [
    {
      "universityName": "Heidelberg University\nHeidelberg University",
      "degree": "Mathematics and Computer Science\nMathematics and Computer Science",
      "studyPeriod": "2018 - 2018"
    },
    {
      "universityName": "Charles University\nCharles University",
      "degree": "MSc., Mathematical and Computer Modelling, Faculty of Mathematics and Physics\nMSc., Mathematical and Computer Modelling, Faculty of Mathematics and Physics",
      "studyPeriod": "2016 - 2019"
    }
  ],
  "languages": [
    "Czech",
    "English"
  ],
  "profileImageUrl": null
} ;

const MZ = {
  "name": "Maciej Zębala",
  "headline": "Full-stack Developer | Next.js, React, Node.js",
  "location": "Cracow, Małopolskie, Poland",
  "experience": [
    {
      "jobTitle": "Senior Full-stack Developer",
      "company": "Senior Full-stack Developer",
      "jobDates": "Sep 2022 - Present · 2 yrs 8 mos",
      "location": "Los Angeles, Kalifornia, Stany Zjednoczone · Remote"
    },
    {
      "jobTitle": "Full-stack Developer",
      "company": "Full-stack Developer",
      "jobDates": "May 2022 - Sep 2022 · 5 mos",
      "location": "Singapur, Singapur · Remote"
    },
    {
      "jobTitle": "Pragmatic Coders",
      "company": "Pragmatic Coders",
      "jobDates": "Kraków, Woj. Małopolskie, Polska",
      "location": "Apr 2022 - May 2022 · 2 mos"
    },
    {
      "jobTitle": "Junior React Developer",
      "company": "Junior React Developer",
      "jobDates": "Apr 2021 - Jan 2022 · 10 mos",
      "location": "Sopot, Woj. Pomorskie, Polska · Remote"
    }
  ],
  "education": [
    {
      "universityName": "Jagiellonian University\nJagiellonian University",
      "degree": "Elektroniczne Przetwarzanie Informacji\nElektroniczne Przetwarzanie Informacji",
      "studyPeriod": "2018 - 2021"
    },
    {
      "universityName": "Krakow University of Economics\nKrakow University of Economics",
      "degree": "Magister (Mgr), Zarządzanie projektami\nMagister (Mgr), Zarządzanie projektami",
      "studyPeriod": "Oct 2022 - Jun 2024"
    }
  ],
  "languages": [],
  "profileImageUrl": "https://media.licdn.com/dms/image/v2/D4D03AQHr5d59GMGRvw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720606043405?e=1749686400&v=beta&t=pHflkpgg-f2BFjrF1ZfBR_-1rnHLC-bTjBfn60v70wA"
} ;


const LC = {
  "name": "Łukasz Cybulski",
  "headline": "Frontend Developer",
  "location": "Cracow, Małopolskie, Poland",
  "experience": [
    {
      "jobTitle": "Full-stack Developer",
      "company": "Full-stack Developer",
      "jobDates": "Jul 2023 - Present · 1 yr 10 mos",
      "location": "Los Angeles, California, US · Remote"
    },
    {
      "jobTitle": "Freelogo.dev",
      "company": "Freelogo.dev",
      "jobDates": "Jun 2023 - Present · 1 yr 11 mos",
      "location": "Remote"
    },
    {
      "jobTitle": "PortfolioQuiz",
      "company": "PortfolioQuiz",
      "jobDates": "Jan 2022 - Present · 3 yrs 4 mos",
      "location": "Jan 2022 - Present · 3 yrs 4 mos"
    },
    {
      "jobTitle": "Frontend Developer",
      "company": "Frontend Developer",
      "jobDates": "Aug 2021 - Jul 2023 · 2 yrs",
      "location": "Warszawa · Remote"
    }
  ],
  "education": [
    {
      "universityName": "Nicolaus Copernicus University\nNicolaus Copernicus University",
      "degree": "Inżynier (Inż.), ENGINEER’S COMPUTER SCIENCE (EXTRAMURAL STUDIES)\nInżynier (Inż.), ENGINEER’S COMPUTER SCIENCE (EXTRAMURAL STUDIES)",
      "studyPeriod": "2018 - 2022"
    },
    {
      "universityName": "Technical College of Jan and Jedrzej Sniadeccy in Grudziadz\nTechnical College of Jan and Jedrzej Sniadeccy in Grudziadz",
      "degree": "Technician, IT\nTechnician, IT",
      "studyPeriod": "2014 - 2018"
    }
  ],
  "languages": [],
  "profileImageUrl": "https://media.licdn.com/dms/image/v2/D4D03AQHlNj1fn4EdKQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723105410926?e=1749686400&v=beta&t=Geus8hq7msSpPMh8QL2okme-eRzNwQj4bYdSQF9RFIo"
} ;

export const LEGIT_FALLBACK = { 
  "ZEBALA": MZ,
  "ZĘBALA": MZ,
  "CYBULSKI": LC,
  "VACH": DV,
} as const;