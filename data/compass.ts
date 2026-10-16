import type { CompassLevel, CompassQuestion } from "@/types"

/** Reflective prompts, not a test. Each option maps to a stage of the youth development framework. */
export const COMPASS_QUESTIONS: CompassQuestion[] = [
  {
    prompt: "When you think about your future, you mostly…",
    options: [
      { label: "Am still figuring out what I'm good at", level: "discover" },
      { label: "Know my strengths and want to build them", level: "develop" },
      { label: "Need the right people and opportunities", level: "connect" },
      { label: "Want to take responsibility and lead others", level: "lead" },
      { label: "Am already working on a change in my community", level: "transform" },
    ],
  },
  {
    prompt: "Right now, what would help you most?",
    options: [
      { label: "An introduction or a stronger network", level: "connect" },
      { label: "Support to grow something I've started", level: "transform" },
      { label: "Someone to help me see my potential", level: "discover" },
      { label: "A real chance to lead a project", level: "lead" },
      { label: "Training, practice or a course", level: "develop" },
    ],
  },
  {
    prompt: "In a group project, you usually…",
    options: [
      { label: "Coordinate the team and keep it moving", level: "lead" },
      { label: "Watch, listen and learn how it works", level: "discover" },
      { label: "Push for a result that outlasts the project", level: "transform" },
      { label: "Take on a task that stretches my skills", level: "develop" },
      { label: "Bring in the people we need", level: "connect" },
    ],
  },
  {
    prompt: "Your relationship with your community is…",
    options: [
      { label: "Learning about its challenges", level: "develop" },
      { label: "Representing others or serving in a role", level: "lead" },
      { label: "Still exploring where I fit", level: "discover" },
      { label: "Connected to people who make things happen", level: "connect" },
      { label: "Leading an initiative there", level: "transform" },
    ],
  },
  {
    prompt: "Which sounds most like you?",
    options: [
      { label: "I want to leave things better than I found them.", level: "transform" },
      { label: "I want doors to open.", level: "connect" },
      { label: "I want to get better, deliberately.", level: "develop" },
      { label: "I want to know what I'm capable of.", level: "discover" },
      { label: "I want to be trusted to lead.", level: "lead" },
    ],
  },
]

/** A practical next step for each level, pointing to real parts of the site. */
export const COMPASS_NEXT_STEPS: Record<CompassLevel, { advice: string; label: string; href: string }> = {
  discover: {
    advice: "Start by naming your strengths and the change you care about. Small experiments reveal a lot.",
    label: "Read If I Knew Then",
    href: "/author",
  },
  develop: {
    advice: "Choose one skill to build deliberately this season, and find a way to practise it in public.",
    label: "Explore the leadership focus areas",
    href: "/leadership#focus",
  },
  connect: {
    advice: "Your next leap is likely through people. Turn introductions into relationships, and potential into proof.",
    label: "Get your Summit pass",
    href: "/tamale-youth-summit#pass",
  },
  lead: {
    advice: "Look for responsibility you can take on now: a team, a project, a seat where young voices are heard.",
    label: "See the partnership model",
    href: "/leadership#partners",
  },
  transform: {
    advice: "Bring others with you. The strongest change is designed and delivered by the community itself.",
    label: "Start a partnership conversation",
    href: "/contact?type=partnership#enquiry",
  },
}
