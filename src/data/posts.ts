export type Post = {
  id: string;
  title: string;
  excerpt: string;
  category: "tech" | "daily" | "learning" | "lists" | "reads";
  date: string;
  readTime: string;
  image?: string;
  emoji?: string;
  color: string;        // tailwind gradient string for the thumb
  featured?: boolean;
  content: string;
};

export const posts: Post[] = [
  {
    id: "my-gsoc-journey-2026",
    title: "I Prepared Months for GSoC - But My Organization Didn't Even Show Up",
    excerpt:
      "A month-long experiment in productivity, muscle memory, and the eternal question: is the setup worth the hustle?",
    category: "tech",
    date: "March 18, 2026",
    readTime: "6 min",
    image: "/images/gsoc.webp",
    color: "from-brown-300 to-brown-400",
    featured: true,
    content: `
    I've been thinking a lot about slowness lately.

    I Prepared Months for GSoC - But My Organization Didn't Even Show Up !!
    I started preparing for GSoC around October-November 2025.
    At that point, I didn't randomly pick an organization. I already knew about Keploy-it was founded by alumni from my college, and it had been part of GSoC for the last 3-4 years. So in my head, it felt like a safe bet. I thought, "If I stay consistent here, I have a real shot."

    So I committed to it.

    I started exploring the codebase, trying to understand how things worked, where I could contribute, and slowly getting comfortable with the project.

    January: 
    Things started falling into place, by January 2026, I got more serious.
    I started contributing actively, raised around 4-5 PRs.
    Got 1 PR merged (a UI improvement),
    became active on Slack, having almost daily conversations.
    At that point, everything felt right.
    I wasn't just passively learning - I was involved. I was interacting with the community. I could see progress. Naturally, my confidence started building.
    I genuinely thought:
    "If I keep doing this, I might actually get selected."

    Then things started slowing down.
    After some time, I noticed something strange,
    mentors stopped reviewing PRs.
    At first, it didn't feel like a big deal. They mentioned they were busy with internal work, which made sense. Open source maintainers are often juggling a lot.
    So I waited.
    A few days turned into 2-3 weeks.

    No reviews! No progress!
    That's when I started getting uneasy.

    Out of curiosity (and a bit of concern), I decided to reach out to a few mentors on LinkedIn.
    I asked a simple question:
    "Is everything okay? Why are you guys not reviewing any PRs?"
    And that's when I got the response I wasn't expecting.
    They told me:
    "We don't know what's happening in Keploy for GSOC this year. You should look for backup organizations.”

    That hit hard.
    Because in my head, I wasn't just "trying out" Keploy.
    I had already invested months into it-from October to January.

    February 19 - The Reality Check !💔

    When Google released the official list of GSoC organizations on 19th Feb at 6 PM, I checked it at around 6:15.
    I still had a small hope.
    Then I searched.
    Once. Twice.
    Keploy wasn't there.
    And that moment… it just sank in.
    All that preparation, all those contributions, all that time-it suddenly felt like it had no direction.

    After that, I won't pretend I bounced back immediately.
    I didn't.
    I lost motivation.
    I tried to look into other organizations, but it wasn't the same.
    I had to start from scratch.
    I didn't have the same context or connection.
    And on top of that, college exams and assignments kicked in.
    It became overwhelming.
    And slowly, GSoC just… slipped away for me this year.

    What I Realized? 

    Looking back, this experience taught me things I wouldn't have learned otherwise.

    1. Never Rely on Just One Organization.

    I treated Keploy as my only path.
    That was my biggest mistake.
    No matter how confident you feel, GSoC has uncertainties you can't control-like whether an org even gets selected.

    2. Have a Backup Before You Need One.

    I only thought about backups after things started falling apart.
    By then, it was already late.
    If I could redo it, I would-
    Actively contribute to 2-3 orgs in parallel (even lightly).
    Keep options open.

    3. Effort Is Never Actually Wasted

    Even though Keploy wasn't listed, I still:

    Learned how to read a real-world codebase.
    Understood contribution workflows.
    Interacted with developers and mentors.
    That's not nothing.
    It just didn't convert into a GSoC selection-but it did build my foundation.

    Where I Stand Now?

    I didn't get into GSoC this time.
    Not because I didn't try
    Not because I didn't contribute
    But because something completely out of my control changed the path.
    And that's part of the journey too.
    Right now, I'm not starting from zero-I'm starting from experience.

    If You're Preparing for GSoC here's what I'd tell you:

    Don't bet everything on one organization.
    Start early, but also stay flexible.
    Talk to mentors-but also read between the lines.
    Always have a backup (even if you think you won't need it).

    It's a story I'll carry forward-and probably one that'll make more sense a year from now.


  `
  }
];

export const categories = ["all", "tech", "daily", "learning", "lists", "reads"] as const;
export type Category = (typeof categories)[number];
