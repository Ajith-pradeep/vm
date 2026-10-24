export type TimelineEntry = {
  id: string;
  year: string;
  title: string;
  description: string;
  sourceNote?: string;
};

/**
 * Entries limited to publicly reported milestones from government and reputable news sources.
 * Do not invent offices, dates, or electoral outcomes.
 */
export const timeline: TimelineEntry[] = [
  {
    id: "1958",
    year: "1958",
    title: "Born in Kannur district",
    description:
      "Born on 12 December 1958 at Eranholi, Thalassery, to Vannathanveetil Gopalan and Nampally Vellamvelly Devaki Amma.",
    sourceNote: "MEA profile / public biographical records",
  },
  {
    id: "1978-1983",
    year: "1978–1983",
    title: "ABVP organisational beginnings",
    description:
      "Served as ABVP Taluk President in Thalassery (1978), Kannur District Secretary (1979), and State Joint Secretary (1980), before becoming State Organising Secretary in 1983.",
  },
  {
    id: "1994-1996",
    year: "1994–1996",
    title: "All India General Secretary, ABVP",
    description:
      "Appointed All India General Secretary of the Akhil Bharatiya Vidyarthi Parishad and worked from Mumbai during this period.",
  },
  {
    id: "1999-2004",
    year: "1999–2004",
    title: "Nehru Yuva Kendra leadership",
    description:
      "Served as Vice Chairman of Nehru Yuva Kendra (1999–2002) and later as Director General (2002–2004) under the Ministry of Youth Affairs and Sports.",
    sourceNote: "Ministry of External Affairs profile",
  },
  {
    id: "2006-2010",
    year: "2006–2010",
    title: "Vice President, BJP Kerala",
    description:
      "Served as BJP Kerala Vice President with a focus on organisational training of party workers and local body representatives.",
  },
  {
    id: "2010-2015",
    year: "2010–2015",
    title: "President, BJP Kerala",
    description:
      "Elected State President of the Bharatiya Janata Party in Kerala in 2010 and re-elected for a second term in 2013, serving until 2015.",
  },
  {
    id: "2018",
    year: "2018",
    title: "Elected to Rajya Sabha",
    description:
      "Elected to the Rajya Sabha from Maharashtra in April 2018 and later nominated to parliamentary committees including the Standing Committee on External Affairs.",
    sourceNote: "MEA profile",
  },
  {
    id: "2019-2024",
    year: "2019–2024",
    title: "Union Minister of State",
    description:
      "Sworn in as Union Minister of State on 30 May 2019. Served as MoS for External Affairs and Parliamentary Affairs until 11 June 2024. Appointed Government Deputy Chief Whip in the Rajya Sabha in June 2019.",
  },
  {
    id: "2026",
    year: "2026",
    title: "Elected MLA, Kazhakootam",
    description:
      "Elected to the Kerala Legislative Assembly from Kazhakootam as a Bharatiya Janata Party candidate, securing 46,564 votes according to Election Commission of India results.",
    sourceNote: "Election Commission of India",
  },
];
