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
  },

  {
    id: "building-a-log-analyzer-bel-internship",
    title: "Building a Log Analyzer: My Cybersecurity Internship Project at Bharat Electronics",
    excerpt:
      "A defence PSU internship - notes on building an AI-powered log analyzer, the concepts I had to learn from scratch, and the mess I made along the way.",
    category: "tech",
    date: "June 19, 2026",
    readTime: "5 min",
    emoji: "🛡️",
    color: "from-slate-300 to-slate-400",
    featured: false,
    content: `
    After my GSoC journey, I wasn't sure what would come next. Turns out, it was something completely different - a cybersecurity-focused internship at Bharat Electronics, where I'm building a Log Analyzer that automatically scans system logs and flags suspicious or unusual activity.

    This post is about that journey so far - what the project actually does, the concepts I had to learn from scratch, and the (many) confusing moments I ran into along the way.

    What is a Log Analyzer, and Why Does It Matter?

    Every system - a laptop, a server, a network device - constantly generates logs: small text records of everything happening behind the scenes. Logins, errors, crashes, access attempts, all of it gets logged.

    The problem? These logs pile up fast, and going through them manually is slow and easy to get wrong. A suspicious login buried in thousands of lines can easily be missed.

    That's exactly the gap this project fills. The goal is simple to state, but interesting to build:

    Automatically read system logs, detect malfunctions or suspicious activity, and save the manual effort of going through them by hand.

    It's a small piece of a much bigger idea in cybersecurity - automated monitoring instead of manual checking.

    The Tech Stack I'm Using

    Once I had the idea clear, the next question was: how do I actually build this? After talking it through with my guide, I landed on:

    React - for the dashboard where results get displayed.
    Python (FastAPI) - for the backend that does the actual log processing.
    AI model - to help analyze patterns and flag anomalies intelligently, not just with rigid rules.

    Concepts I Had to Learn From Scratch

    1. Where do logs even come from?

    This was my first "wait, what?" moment. I assumed I'd need to create sample log files myself. Turns out - no. My own laptop is already generating logs constantly, stored in places like Windows Event Logs. The project uses these active, real logs instead of fake test data, which made it feel a lot more real (and a little more nerve-wracking).

    2. Automatic log fetching with Watchdog

    My guide pointed out something obvious in hindsight: manually uploading logs every time defeats the entire purpose of the project. The fix is a Python library called Watchdog.

    Watchdog basically acts like a security guard standing in front of a folder. The moment a new log file shows up or an existing one changes, Watchdog notices instantly and triggers code to handle it - no manual steps involved. Understanding this shifted how I thought about the whole pipeline: from "I fetch logs" to "logs fetch themselves, and I just process them."

    Difficulties I Faced

    I won't pretend this has been smooth. A few honest struggles so far:

    Backend confusion: Early on, I genuinely didn't understand the difference between "fetching" a log and "processing" it - I kept treating them as the same step. It took a few conversations with my guide to realize they're separate stages in the pipeline, and mixing them up would make the system messy and hard to scale.

    Figuring out the right data source: I initially assumed I'd need external or sample logs from somewhere online. Realizing the project wanted real, active logs from my own machine changed my whole approach to testing and made the setup feel a lot more practical.

    UI planning overwhelm: Since the dashboard is in React, I had to start thinking about how to display log data, alerts, and charts in a way that's actually useful - not just a dump of raw text. Deciding what information matters most for a quick glance versus a deep dive is harder than it sounds when you're new to dashboard design.

    Breaking the project into manageable pieces: With three different technologies involved (React, Python, AI), it was easy to feel stuck on "where do I even start?" Splitting the project into three clear phases - backend foundation, AI analysis, and frontend dashboard - made it feel far less overwhelming.

    What's Next

    Right now, I'm in the foundation phase - setting up the Python backend, getting Watchdog to monitor logs automatically, and parsing them into something structured. Once that's solid, the plan is to layer in AI-based analysis, and finally build out the React dashboard to tie it all together.

    This project has already taught me more about real-world system logs and automation than I expected going in. I'll be sharing more updates as each phase comes together - including the parts that go wrong, because those are usually where the actual learning happens.

    Currently a few weeks into my internship at Bharat Electronics, working on automated log analysis for cybersecurity. More updates coming soon.
  `
  }
];

export const categories = ["all", "tech", "daily", "learning", "lists", "reads"] as const;
export type Category = (typeof categories)[number];