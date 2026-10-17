import type { Photo, Story, StoryCategory } from "@/types"

/**
 * Real photography from Robert's work. Every story summary describes only what the
 * photographs and event banners show. Add `figures` to a story only once a source confirms them.
 *
 * To add a photo: put the file in /public/images/<story>/ and add a row to PHOTOS.
 */

export const STORY_CATEGORIES: { slug: StoryCategory; label: string }[] = [
  { slug: "summits", label: "Summits" },
  { slug: "speaking", label: "Speaking" },
  { slug: "community", label: "Community" },
  { slug: "programmes", label: "Programmes" },
  { slug: "profile", label: "Books & portrait" },
]

export const STORIES: Story[] = [
  {
    slug: "tamale-youth-summit-2026",
    title: "Tamale Youth Summit 2026",
    category: "summits",
    context: "Founded and convened by Robert · Tamale",
    summary:
      "The 2026 edition of the summit Robert founded brought young delegates, guests and partners together in Tamale. Robert addressed the hall from the TYS26 stage and sat among the delegates.",
    cover: "tamale-youth-summit-2026-07",
    impact: true,
  },
  {
    slug: "north-east-youth-summit-2026",
    title: "North East Youth Summit 2026",
    category: "summits",
    context: "National Youth Authority · North East Regional Directorate",
    summary:
      "Held under the theme “From Potential to Power: Changing the Narrative of North East”, the summit gathered young people and officials. Robert addressed delegates and presented a citation on stage.",
    cover: "north-east-youth-summit-2026-01",
    impact: true,
  },
  {
    slug: "national-youth-month-2026",
    title: "National Youth Month clean-up",
    category: "community",
    context: "2026 National Youth Month Celebration · North East Region",
    summary:
      "Robert joined young volunteers for a clean-up exercise, clearing drains, market stalls and roadsides with shovels, brooms and wheelbarrows.",
    cover: "national-youth-month-2026-08",
    impact: true,
  },
  {
    slug: "national-apprenticeship",
    title: "Skills for Prosperity",
    category: "programmes",
    context: "National Apprenticeship Programme · North East Region",
    summary:
      "Robert spoke at the matriculation and induction ceremony for apprentices and master craft persons, and at the accreditation training for master craft persons.",
    cover: "national-apprenticeship-01",
    impact: true,
  },
  {
    slug: "dream-big-campus-tour",
    title: "Value & Vision Campus Tour",
    category: "speaking",
    context: "Dream Big Foundation",
    summary:
      "On the campus tour Robert spoke to students in their lecture rooms and presented copies of his book If I Knew Then.",
    cover: "dream-big-campus-tour-03",
    impact: true,
  },
  {
    slug: "youth-peace-security",
    title: "Youth, Peace and Security",
    category: "programmes",
    context: "Regional youth consultation",
    summary:
      "Robert engaged young people at a regional consultation on the development of the National Action Plan on Youth, Peace and Security.",
    cover: "youth-peace-security-01",
    impact: true,
  },
  {
    slug: "tamale-youth-summit-2025",
    title: "Tamale Youth Summit 2025",
    category: "summits",
    context: "Founded and convened by Robert · Tamale",
    summary: "A full hall of young people for the 2025 edition, with Robert speaking directly to the room.",
    cover: "tamale-youth-summit-2025-01",
    impact: true,
  },
  {
    slug: "young-innovators-tech-summit",
    title: "Young Innovators Tech Summit",
    category: "summits",
    context: "With the Cardano Foundation",
    summary: "A summit for young innovators on blockchain, artificial intelligence and the digital future, where Robert spoke.",
    cover: "young-innovators-tech-summit-01",
    impact: true,
  },
  {
    slug: "red-stop-walk",
    title: "Red Stop · Walk 4 Life",
    category: "community",
    context: "Community walk",
    summary: "Robert walked through town with young people and community members in Red Stop and Walk 4 Life T-shirts.",
    cover: "red-stop-walk-01",
    impact: true,
  },
  {
    slug: "school-mentorship",
    title: "In the classroom",
    category: "community",
    context: "Secondary school session",
    summary: "Robert sat with secondary school students in a small circle, listening and talking with them.",
    cover: "school-mentorship-02",
    impact: true,
  },
  {
    slug: "drug-abuse-prevention-forum",
    title: "Drug abuse prevention forum",
    category: "programmes",
    context: "Youth forum",
    summary: "Robert spoke to young people at a forum on drug abuse prevention.",
    cover: "drug-abuse-prevention-forum-01",
    impact: true,
  },
  {
    slug: "nugs-uds",
    title: "NUGS at UDS",
    category: "speaking",
    context: "National Union of Ghana Students · University for Development Studies",
    summary: "Robert addressed a NUGS Central Committee gathering at the University for Development Studies, where he studied.",
    cover: "nugs-uds-01",
    impact: true,
  },
  {
    slug: "uds-address",
    title: "Back at UDS",
    category: "speaking",
    context: "University for Development Studies",
    summary: "Robert addressed an audience at his alma mater, speaking from the lectern and among the crowd.",
    cover: "uds-address-07",
    impact: true,
  },
  {
    slug: "iaas-seminar-26",
    title: "IAAS Seminar '26",
    category: "speaking",
    context: "Seminar",
    summary: "Robert spoke at the IAAS Seminar '26 and shared his book If I Knew Then with the audience.",
    cover: "iaas-seminar-26-01",
    impact: true,
  },
  {
    slug: "talks-and-engagements",
    title: "Talks and engagements",
    category: "speaking",
    context: "REALM, Breakthrough Worship Encounter and more",
    summary: "From REALM to the Breakthrough Worship Encounter, Robert speaks wherever young people gather.",
    cover: "talks-and-engagements-03",
    impact: true,
  },
  {
    slug: "books",
    title: "Beyond Handshakes",
    category: "profile",
    context: "A book by Robert Kampi Laari",
    summary: "From Potential to Proof — Networking for Career & Life Progress.",
    cover: "books-01",
    impact: false,
  },
  {
    slug: "portrait",
    title: "Portrait",
    category: "profile",
    context: "Robert Kampi Laari",
    summary: "Studio portrait.",
    cover: "portrait-01",
    impact: false,
  },
]

export const PHOTOS: Photo[] = [
  { id: "tamale-youth-summit-2026-01", story: "tamale-youth-summit-2026", src: "/images/tamale-youth-summit-2026/tamale-youth-summit-2026-01.jpg", width: 523, height: 391, alt: "Guests seated in the front row at the Tamale Youth Summit 2026", credit: "OnGod Studios" },
  { id: "tamale-youth-summit-2026-02", story: "tamale-youth-summit-2026", src: "/images/tamale-youth-summit-2026/tamale-youth-summit-2026-02.jpg", width: 523, height: 391, alt: "A packed hall of young delegates at the Tamale Youth Summit 2026", credit: "OnGod Studios" },
  { id: "tamale-youth-summit-2026-03", story: "tamale-youth-summit-2026", src: "/images/tamale-youth-summit-2026/tamale-youth-summit-2026-03.jpg", width: 1280, height: 853, alt: "Delegates and guests filling the Tamale Youth Summit 2026 hall" },
  { id: "tamale-youth-summit-2026-04", story: "tamale-youth-summit-2026", src: "/images/tamale-youth-summit-2026/tamale-youth-summit-2026-04.jpg", width: 523, height: 391, alt: "Robert addressing the Tamale Youth Summit 2026 from the stage beside the TYS26 sign", credit: "OnGod Studios" },
  { id: "tamale-youth-summit-2026-05", story: "tamale-youth-summit-2026", src: "/images/tamale-youth-summit-2026/tamale-youth-summit-2026-05.jpg", width: 523, height: 391, alt: "Robert speaking at the lectern in front of the Tamale Youth Summit 2026 banner", credit: "OnGod Studios" },
  { id: "tamale-youth-summit-2026-06", story: "tamale-youth-summit-2026", src: "/images/tamale-youth-summit-2026/tamale-youth-summit-2026-06.jpg", width: 523, height: 391, alt: "Delegates listening in the Tamale Youth Summit 2026 hall", credit: "OnGod Studios" },
  { id: "tamale-youth-summit-2026-07", story: "tamale-youth-summit-2026", src: "/images/tamale-youth-summit-2026/tamale-youth-summit-2026-07.jpg", width: 1200, height: 800, alt: "Robert seated among young delegates in Tamale Youth Summit T-shirts", credit: "Elpis Photography" },
  { id: "tamale-youth-summit-2026-08", story: "tamale-youth-summit-2026", src: "/images/tamale-youth-summit-2026/tamale-youth-summit-2026-08.jpg", width: 1200, height: 800, alt: "Rows of delegates seated at the Tamale Youth Summit 2026", credit: "Elpis Photography" },
  { id: "tamale-youth-summit-2026-09", story: "tamale-youth-summit-2026", src: "/images/tamale-youth-summit-2026/tamale-youth-summit-2026-09.jpg", width: 523, height: 391, alt: "Robert speaking, microphone in hand, in front of the Tamale Youth Summit banner", credit: "OnGod Studios" },
  { id: "tamale-youth-summit-2026-10", story: "tamale-youth-summit-2026", src: "/images/tamale-youth-summit-2026/tamale-youth-summit-2026-10.jpg", width: 1200, height: 800, alt: "Guests and delegates seated in the Tamale Youth Summit 2026 hall", credit: "Elpis Photography" },
  { id: "north-east-youth-summit-2026-01", story: "north-east-youth-summit-2026", src: "/images/north-east-youth-summit-2026/north-east-youth-summit-2026-01.jpg", width: 1280, height: 793, alt: "Robert in front of the North East Youth Summit 2026 banner" },
  { id: "north-east-youth-summit-2026-02", story: "north-east-youth-summit-2026", src: "/images/north-east-youth-summit-2026/north-east-youth-summit-2026-02.jpg", width: 1280, height: 853, alt: "Robert presenting a citation on stage at the North East Youth Summit 2026" },
  { id: "north-east-youth-summit-2026-03", story: "north-east-youth-summit-2026", src: "/images/north-east-youth-summit-2026/north-east-youth-summit-2026-03.jpg", width: 1280, height: 853, alt: "Young people and officials seated at the North East Youth Summit 2026" },
  { id: "north-east-youth-summit-2026-04", story: "north-east-youth-summit-2026", src: "/images/north-east-youth-summit-2026/north-east-youth-summit-2026-04.jpg", width: 1280, height: 885, alt: "Robert addressing the North East Youth Summit 2026 from the lectern" },
  { id: "north-east-youth-summit-2026-05", story: "north-east-youth-summit-2026", src: "/images/north-east-youth-summit-2026/north-east-youth-summit-2026-05.jpg", width: 908, height: 1280, alt: "Robert seated among guests at the North East Youth Summit 2026" },
  { id: "north-east-youth-summit-2026-06", story: "north-east-youth-summit-2026", src: "/images/north-east-youth-summit-2026/north-east-youth-summit-2026-06.jpg", width: 1280, height: 788, alt: "Robert speaking in front of the North East Youth Summit 2026 banner" },
  { id: "national-youth-month-2026-01", story: "national-youth-month-2026", src: "/images/national-youth-month-2026/national-youth-month-2026-01.jpg", width: 523, height: 391, alt: "Robert clearing refuse into a wheelbarrow during the youth clean-up exercise" },
  { id: "national-youth-month-2026-02", story: "national-youth-month-2026", src: "/images/national-youth-month-2026/national-youth-month-2026-02.jpg", width: 523, height: 391, alt: "Robert working with a shovel and wheelbarrow at the youth clean-up" },
  { id: "national-youth-month-2026-03", story: "national-youth-month-2026", src: "/images/national-youth-month-2026/national-youth-month-2026-03.jpg", width: 523, height: 391, alt: "Robert digging out a roadside drain during the youth clean-up" },
  { id: "national-youth-month-2026-04", story: "national-youth-month-2026", src: "/images/national-youth-month-2026/national-youth-month-2026-04.jpg", width: 523, height: 391, alt: "Young volunteers in high-visibility vests carrying brooms at the clean-up" },
  { id: "national-youth-month-2026-05", story: "national-youth-month-2026", src: "/images/national-youth-month-2026/national-youth-month-2026-05.jpg", width: 523, height: 391, alt: "Robert with young people holding the 2026 National Youth Month banner" },
  { id: "national-youth-month-2026-06", story: "national-youth-month-2026", src: "/images/national-youth-month-2026/national-youth-month-2026-06.jpg", width: 523, height: 391, alt: "Robert clearing weeds from a drain alongside volunteers" },
  { id: "national-youth-month-2026-07", story: "national-youth-month-2026", src: "/images/national-youth-month-2026/national-youth-month-2026-07.jpg", width: 523, height: 391, alt: "Robert and volunteers with shovels beside a refuse truck" },
  { id: "national-youth-month-2026-08", story: "national-youth-month-2026", src: "/images/national-youth-month-2026/national-youth-month-2026-08.jpg", width: 523, height: 391, alt: "Robert and young volunteers behind the 2026 National Youth Month Celebration, North East Region banner" },
  { id: "national-youth-month-2026-09", story: "national-youth-month-2026", src: "/images/national-youth-month-2026/national-youth-month-2026-09.jpg", width: 523, height: 391, alt: "Robert clearing a market stall area with a volunteer" },
  { id: "national-youth-month-2026-10", story: "national-youth-month-2026", src: "/images/national-youth-month-2026/national-youth-month-2026-10.jpg", width: 523, height: 391, alt: "Robert sweeping a market alley with volunteers" },
  { id: "national-youth-month-2026-11", story: "national-youth-month-2026", src: "/images/national-youth-month-2026/national-youth-month-2026-11.jpg", width: 523, height: 391, alt: "Robert and a volunteer shovelling refuse beside a truck" },
  { id: "national-apprenticeship-01", story: "national-apprenticeship", src: "/images/national-apprenticeship/national-apprenticeship-01.jpg", width: 1280, height: 853, alt: "Robert speaking at the matriculation and induction ceremony for apprentices and master craft persons" },
  { id: "national-apprenticeship-02", story: "national-apprenticeship", src: "/images/national-apprenticeship/national-apprenticeship-02.jpg", width: 1280, height: 853, alt: "Dignitaries seated at the apprenticeship matriculation ceremony" },
  { id: "national-apprenticeship-03", story: "national-apprenticeship", src: "/images/national-apprenticeship/national-apprenticeship-03.jpg", width: 1280, height: 853, alt: "Robert seated at the apprenticeship matriculation ceremony" },
  { id: "national-apprenticeship-04", story: "national-apprenticeship", src: "/images/national-apprenticeship/national-apprenticeship-04.jpg", width: 1280, height: 853, alt: "Robert speaking at the master craft person accreditation training" },
  { id: "national-apprenticeship-05", story: "national-apprenticeship", src: "/images/national-apprenticeship/national-apprenticeship-05.jpg", width: 1280, height: 853, alt: "Robert addressing participants at the accreditation training" },
  { id: "dream-big-campus-tour-01", story: "dream-big-campus-tour", src: "/images/dream-big-campus-tour/dream-big-campus-tour-01.jpg", width: 1280, height: 853, alt: "Students responding with raised hands during the Value and Vision Campus Tour" },
  { id: "dream-big-campus-tour-02", story: "dream-big-campus-tour", src: "/images/dream-big-campus-tour/dream-big-campus-tour-02.jpg", width: 1268, height: 846, alt: "Robert presenting a copy of If I Knew Then to a student on the campus tour" },
  { id: "dream-big-campus-tour-03", story: "dream-big-campus-tour", src: "/images/dream-big-campus-tour/dream-big-campus-tour-03.jpg", width: 1280, height: 853, alt: "Robert presenting If I Knew Then to a student at the Dream Big Foundation campus tour" },
  { id: "dream-big-campus-tour-04", story: "dream-big-campus-tour", src: "/images/dream-big-campus-tour/dream-big-campus-tour-04.jpg", width: 1280, height: 853, alt: "Robert speaking to students in a lecture room" },
  { id: "dream-big-campus-tour-05", story: "dream-big-campus-tour", src: "/images/dream-big-campus-tour/dream-big-campus-tour-05.jpg", width: 1280, height: 853, alt: "Robert gesturing as he speaks to students" },
  { id: "dream-big-campus-tour-06", story: "dream-big-campus-tour", src: "/images/dream-big-campus-tour/dream-big-campus-tour-06.jpg", width: 1280, height: 853, alt: "Robert making a point to a student audience" },
  { id: "dream-big-campus-tour-07", story: "dream-big-campus-tour", src: "/images/dream-big-campus-tour/dream-big-campus-tour-07.jpg", width: 1280, height: 853, alt: "Robert speaking with a microphone in a classroom" },
  { id: "dream-big-campus-tour-08", story: "dream-big-campus-tour", src: "/images/dream-big-campus-tour/dream-big-campus-tour-08.jpg", width: 1280, height: 853, alt: "Robert speaking at the lectern during the campus tour" },
  { id: "youth-peace-security-01", story: "youth-peace-security", src: "/images/youth-peace-security/youth-peace-security-01.jpg", width: 523, height: 391, alt: "Robert speaking at the regional youth consultation on Youth, Peace and Security" },
  { id: "youth-peace-security-02", story: "youth-peace-security", src: "/images/youth-peace-security/youth-peace-security-02.jpg", width: 523, height: 391, alt: "Robert engaging participants at the Youth, Peace and Security consultation" },
  { id: "tamale-youth-summit-2025-01", story: "tamale-youth-summit-2025", src: "/images/tamale-youth-summit-2025/tamale-youth-summit-2025-01.jpg", width: 1200, height: 800, alt: "Robert addressing a full hall at the Tamale Youth Summit 2025", credit: "Elpis Photography" },
  { id: "tamale-youth-summit-2025-02", story: "tamale-youth-summit-2025", src: "/images/tamale-youth-summit-2025/tamale-youth-summit-2025-02.jpg", width: 1200, height: 800, alt: "Delegates in the hall at the Tamale Youth Summit 2025", credit: "Elpis Photography" },
  { id: "tamale-youth-summit-2025-03", story: "tamale-youth-summit-2025", src: "/images/tamale-youth-summit-2025/tamale-youth-summit-2025-03.jpg", width: 1200, height: 800, alt: "Young delegates listening at the Tamale Youth Summit 2025", credit: "Elpis Photography" },
  { id: "young-innovators-tech-summit-01", story: "young-innovators-tech-summit", src: "/images/young-innovators-tech-summit/young-innovators-tech-summit-01.jpg", width: 864, height: 1050, alt: "Robert speaking at the Young Innovators Tech Summit, held with the Cardano Foundation" },
  { id: "red-stop-walk-01", story: "red-stop-walk", src: "/images/red-stop-walk/red-stop-walk-01.jpg", width: 1280, height: 853, alt: "Robert walking with participants in Red Stop and Walk 4 Life T-shirts" },
  { id: "red-stop-walk-02", story: "red-stop-walk", src: "/images/red-stop-walk/red-stop-walk-02.jpg", width: 1280, height: 853, alt: "Robert seated with community members during the walk" },
  { id: "red-stop-walk-03", story: "red-stop-walk", src: "/images/red-stop-walk/red-stop-walk-03.jpg", width: 1280, height: 853, alt: "Participants walking through town during the Walk 4 Life" },
  { id: "red-stop-walk-04", story: "red-stop-walk", src: "/images/red-stop-walk/red-stop-walk-04.jpg", width: 1280, height: 853, alt: "Robert greeting participants during the walk" },
  { id: "red-stop-walk-05", story: "red-stop-walk", src: "/images/red-stop-walk/red-stop-walk-05.jpg", width: 1280, height: 853, alt: "Robert walking with the group along a community road" },
  { id: "school-mentorship-01", story: "school-mentorship", src: "/images/school-mentorship/school-mentorship-01.jpg", width: 1280, height: 854, alt: "Robert seated among students during a school session" },
  { id: "school-mentorship-02", story: "school-mentorship", src: "/images/school-mentorship/school-mentorship-02.jpg", width: 1280, height: 854, alt: "Robert in conversation with schoolgirls seated in a circle" },
  { id: "school-mentorship-03", story: "school-mentorship", src: "/images/school-mentorship/school-mentorship-03.jpg", width: 1280, height: 854, alt: "Robert listening as a student speaks during the session" },
  { id: "drug-abuse-prevention-forum-01", story: "drug-abuse-prevention-forum", src: "/images/drug-abuse-prevention-forum/drug-abuse-prevention-forum-01.jpg", width: 1095, height: 1280, alt: "Robert speaking at the lectern of a drug abuse prevention forum" },
  { id: "drug-abuse-prevention-forum-02", story: "drug-abuse-prevention-forum", src: "/images/drug-abuse-prevention-forum/drug-abuse-prevention-forum-02.jpg", width: 1053, height: 1280, alt: "Robert addressing participants at a drug abuse prevention forum" },
  { id: "nugs-uds-01", story: "nugs-uds", src: "/images/nugs-uds/nugs-uds-01.jpg", width: 1080, height: 720, alt: "Robert at the University for Development Studies lectern at a NUGS gathering" },
  { id: "nugs-uds-02", story: "nugs-uds", src: "/images/nugs-uds/nugs-uds-02.jpg", width: 1080, height: 720, alt: "Robert speaking at the University for Development Studies lectern" },
  { id: "nugs-uds-03", story: "nugs-uds", src: "/images/nugs-uds/nugs-uds-03.jpg", width: 864, height: 1080, alt: "Robert addressing the NUGS Central Committee meeting" },
  { id: "uds-address-01", story: "uds-address", src: "/images/uds-address/uds-address-01.jpg", width: 815, height: 1141, alt: "Robert speaking with passion in a University for Development Studies hall" },
  { id: "uds-address-02", story: "uds-address", src: "/images/uds-address/uds-address-02.jpg", width: 815, height: 1141, alt: "Robert addressing the audience at the University for Development Studies" },
  { id: "uds-address-03", story: "uds-address", src: "/images/uds-address/uds-address-03.jpg", width: 815, height: 1141, alt: "Robert speaking in front of the high table at the University for Development Studies" },
  { id: "uds-address-04", story: "uds-address", src: "/images/uds-address/uds-address-04.jpg", width: 1230, height: 820, alt: "Robert gesturing toward the audience from the University for Development Studies lectern" },
  { id: "uds-address-05", story: "uds-address", src: "/images/uds-address/uds-address-05.jpg", width: 789, height: 1104, alt: "Robert at the University for Development Studies lectern" },
  { id: "uds-address-06", story: "uds-address", src: "/images/uds-address/uds-address-06.jpg", width: 855, height: 1196, alt: "Robert smiling at the University for Development Studies lectern" },
  { id: "uds-address-07", story: "uds-address", src: "/images/uds-address/uds-address-07.jpg", width: 1155, height: 825, alt: "Robert speaking among the audience beneath drapes in Ghana's national colours" },
  { id: "uds-address-08", story: "uds-address", src: "/images/uds-address/uds-address-08.jpg", width: 1155, height: 825, alt: "Robert speaking to the audience at the University for Development Studies" },
  { id: "iaas-seminar-26-01", story: "iaas-seminar-26", src: "/images/iaas-seminar-26/iaas-seminar-26-01.jpg", width: 853, height: 1280, alt: "Robert speaking with energy at the IAAS Seminar '26" },
  { id: "iaas-seminar-26-02", story: "iaas-seminar-26", src: "/images/iaas-seminar-26/iaas-seminar-26-02.jpg", width: 853, height: 1280, alt: "Robert holding up copies of If I Knew Then at the IAAS Seminar '26" },
  { id: "talks-and-engagements-01", story: "talks-and-engagements", src: "/images/talks-and-engagements/talks-and-engagements-01.jpg", width: 1280, height: 853, alt: "Robert speaking with a microphone under a red and green canopy" },
  { id: "talks-and-engagements-02", story: "talks-and-engagements", src: "/images/talks-and-engagements/talks-and-engagements-02.jpg", width: 1280, height: 853, alt: "Robert addressing students seated in a hall" },
  { id: "talks-and-engagements-03", story: "talks-and-engagements", src: "/images/talks-and-engagements/talks-and-engagements-03.jpg", width: 1280, height: 914, alt: "Robert speaking on stage at REALM" },
  { id: "talks-and-engagements-04", story: "talks-and-engagements", src: "/images/talks-and-engagements/talks-and-engagements-04.jpg", width: 1280, height: 914, alt: "Robert speaking at REALM, with guests seated at the high table" },
  { id: "talks-and-engagements-05", story: "talks-and-engagements", src: "/images/talks-and-engagements/talks-and-engagements-05.jpg", width: 1080, height: 720, alt: "Robert speaking on stage at the Breakthrough Worship Encounter" },
  { id: "talks-and-engagements-06", story: "talks-and-engagements", src: "/images/talks-and-engagements/talks-and-engagements-06.jpg", width: 1080, height: 720, alt: "Robert smiling on stage at the Breakthrough Worship Encounter" },
  { id: "talks-and-engagements-07", story: "talks-and-engagements", src: "/images/talks-and-engagements/talks-and-engagements-07.jpg", width: 853, height: 1280, alt: "Robert speaking at a lectern draped in white" },
  { id: "talks-and-engagements-08", story: "talks-and-engagements", src: "/images/talks-and-engagements/talks-and-engagements-08.jpg", width: 853, height: 1280, alt: "Robert addressing an audience from a lectern" },
  { id: "books-01", story: "books", src: "/images/books/books-01.jpg", width: 1024, height: 1280, alt: "The front cover of Beyond Handshakes by Robert Kampi Laari" },
  { id: "books-02", story: "books", src: "/images/books/books-02.jpg", width: 1024, height: 1280, alt: "Stacked copies of Beyond Handshakes" },
  { id: "books-03", story: "books", src: "/images/books/books-03.jpg", width: 900, height: 1125, alt: "Beyond Handshakes opened to show the About the Author and About the Book panels" },
  { id: "portrait-01", story: "portrait", src: "/images/portrait/portrait-01.jpg", width: 948, height: 1280, alt: "Studio portrait of Robert Kampi Laari, smiling with his arms folded" },
]

const PHOTO_BY_ID = new Map(PHOTOS.map((photo) => [photo.id, photo]))
const STORY_BY_SLUG = new Map(STORIES.map((story) => [story.slug, story]))

export function getPhoto(id: string): Photo {
  const photo = PHOTO_BY_ID.get(id)
  if (!photo) throw new Error(`Unknown photo: ${id}`)
  return photo
}

export function getStory(slug: string): Story | undefined {
  return STORY_BY_SLUG.get(slug)
}

export function photosForStory(slug: string): Photo[] {
  return PHOTOS.filter((photo) => photo.story === slug)
}

export const IMPACT_STORIES = STORIES.filter((story) => story.impact)

export const COLLECTION_STORAGE_KEY = "rkl-moments"
