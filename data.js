const eventData = [
    {
        id: "brain-blitz",
        title: "Brain Blitz",
        subtitle: "(Quiz)",
        icon: "fa-brain",
        description: "The Ultimate Quiz Challenge. A fast-paced event testing knowledge in GK, technology, science, and current affairs.",
        teamSize: "1 - 2 Members",
        rules: [
            "Consists of multiple rounds (Preliminary, Technical/GK).",
            "Includes Technical MCQs.",
            "No mobile phones or smart devices allowed.",
            "Teams must answer within time limits.",
            "Misconduct leads to disqualification."
        ],
        coordinators: [
            "Sathish S : 99949 77141",
            "Jeeva A : 98656 97423",
            "Danushree V S : 7418 952 261",
            "Yasiga R : 80123 08585 "

        ]
    },
    {
        id: "brandit",
        title: "BrandIt",
        subtitle: "(Ad Zap)",
        icon: "fa-bullhorn",
        description: "An on-spot advertising event where participants receive a brand/topic instantly and perform a short advertisement. Tests creativity, spontaneity, and acting skills.",
        teamSize: "1 - 3 Members",
        rules: [
            "Brand/Topic given on the spot (e.g., Canva).",
            "Only on-spot ideas allowed; no pre-prepared content.",
            "Preparation time: 5-10 minutes. Performance: 1-2 minutes.",
            "No props or external materials allowed.",
            "No offensive language or vulgarity.",
            "Performance must convey brand purpose, features, and target audience."
        ],
        coordinators: [
            "Kaliswary K: 70925 03705",
            "Sugumar M: 96293 41255",
            "Harini S: 93427 43614"
        ]
    },
    {
        id: "dance-competition",
        title: "Dance (Group/Single)",
        subtitle: "(Rhythm & Style)",
        icon: "fa-shoe-prints",
        description: "Express yourself through movement in our high-energy dance competition. Whether you are a solo performer or part of a crew, show us your rhythm and style.",
        teamSize: "Solo / Group (Max 5)",
        rules: [
            "Performance time: 3-5 minutes.",
            "Bring your music track in a pen drive in MP3 format.",
            "No offensive moves, lyrics, or costumes.",
            "Participants will be judged on choreography, energy, and expression.",
            "Judges' decision is final and binding."
        ],
        coordinators: [
            "SivaPrasath: 94432 56269",
            "Lipika S: 88385 84003",
            "Kaliswary K: 70925 03705"
        ]
    },
    {
        id: "fix-and-flex",
        title: "Fix and Flex",
        subtitle: "(Code Debugging)",
        icon: "fa-bug",
        description: "Project Debugging is a fun-filled technical event where debugging meets web design. Participants will be given a broken website (HTML, CSS, JavaScript) filled with bugs, alignment issues, and missing features. Mission: Find bugs, fix issues, and complete missing features.",
        teamSize: "Individual Participation",
        rules: [
            "Internet access will not be allowed.",
            "Each bug fix = 5 points, successful feature implementation = 10 points.",
            "Partial fixes earn partial points.",
            "Plagiarism or unfair practice leads to instant disqualification.",
            "Strict time limit: 1 hour.",
            "Judges' decision is final.",
            "Round 1: The Filter (Prelims) - MCQ (30 Mins). Top 30 advance.",
            "Round 2: The Fix-It Felix (Finals) - Debugging & Feature Building (1 Hour)."
        ],
        coordinators: [
            "Balaji Hariharan S: 87548 87575",
            "Jabastin A: 79046 86738"
        ]
    },
    {
        id: "innosell",
        title: "InnoSell",
        subtitle: "(Paper / Ideathon / Marketing)",
        icon: "fa-lightbulb",
        description: "InnoSell consists of three technical sub-events: Paper Presentation, Ideathon, and Marketing. Choose your arena and showcase your technical and business acumen.",
        teamSize: "Varies by Sub-event (2-3 Members)",
        rules: [
            "Participants are permitted to register for only one sub-event under InnoSell.",
            "All events and presentations must be technical in nature.",
            "----------------",
            "SUB-EVENT: PAPER PRESENTATION & IDEATHON",
            "Team Size: Max 2 members.",
            "Topic: Participants are free to select their own technical topic.",
            "Ideathon Requirement: Must be presented with a prototype or working model.",
            "----------------",
            "SUB-EVENT: MARKETING",
            "Team Size: Max 3 members.",
            "Requirement: Participants must market their own product."
        ],
        coordinators: [
            "Sam Anderson Y : 90038 54088 ",
            "Sugumar M : 96293 41255",
            "Deepsikha K : 95970 96605",
            "Ruchitha T U : 63747 78071"
        ]
    },
    {
        id: "talent-show",
        title: "Talent Show",
        subtitle: "(MIME . MIMICRY . INSTRUMENTAL . RAMP WALK)",
        icon: "fa-masks-theater",
        category: "NON-TECHNICAL",
        description: "Unleash your inner superstar! Show your talent in Mime (silent storytelling), Mimicry (celeb impressions), Instrumental Playing (live music), or Ramp Walk (fashion catwalk). One stage, many talents - dazzle the crowd!",
        teamSize: "Solo . Dual",
        rules: [
            "Participant must bring their own requirements (pendrive, instruments, properties) according to their events.",
            "Judges' decision is final and binding."
        ],
        coordinators: [
            "Lipika S: 88385 84003",
            "Kaliswary K: 70925 03705"
        ]
    },
    {
        id: "singing",
        title: "Singing",
        subtitle: "(SOLO . DUAL)",
        icon: "fa-microphone-alt",
        category: "NON-TECHNICAL",
        description: "Let your voice echo through the stars! Compete in Solo (single vocalist) or Dual (two vocalists) singing. Any language, any genre – classical, film, folk, or pop. The stage is yours, the mic is live!",
        teamSize: "1 - 2 Members",
        rules: [
            "Karaoke track should be submitted during registration or on pendrive.",
            "Time limit is 3-5 minutes."
        ],
        coordinators: [
            "Lipika S: 88385 84003",
            "Kaliswary K: 70925 03705"
        ]
    },
    {
        id: "dance",
        title: "Dance",
        subtitle: "(SOLO . DUAL)",
        icon: "fa-music",
        category: "NON-TECHNICAL",
        description: "Move to the rhythm, own the floor! Compete in Solo or Dual dance. Classical, contemporary, hip-hop, folk, or fusion – express yourself through every step, spin, and groove. Let the beat take control!",
        teamSize: "1 - 2 Members",
        rules: [
            "Audio tracks should be submitted on a pendrive.",
            "Performance must not exceed 5 minutes."
        ],
        coordinators: [
            "Lipika S: 88385 84003",
            "Kaliswary K: 70925 03705"
        ]
    }
];

const workshopData = [
    {
        id: "cyber-security-workshop",
        title: "Cyber Security Workshop",
        subtitle: "(Career Bootcamp)",
        icon: "fa-user-shield",
        description: "Join our intensive Cyber Security Workshop. Gain insights into the world of ethical hacking, threat landscapes, and career paths in security. Explore our club to stay updated with the latest in cyber defense.",
        teamSize: "Open Participation",
        rules: [
            "Participants must bring their own laptop for hands-on sessions.",
            "Free e-certificates will be provided to all registered participants.",
            "No prior experience required; beginners are welcome.",
            "Basic understanding of computers and the internet is recommended."
        ],
        coordinators: [
            "Elamugil: 88382 62412",
            "Karthikeyan P: 95667 23397"
        ],
        externalLink: "https://cih-club.vercel.app/",
        externalLinkText: "Explore Our Club"
    }
];

