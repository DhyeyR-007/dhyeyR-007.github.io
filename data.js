/* ==========================================================================
   SITE CONTENT — this is the only file you need to edit.
   --------------------------------------------------------------------------
   • Add a paper / project / news item: copy an existing { ... } block,
     paste it where you want it in the list, and change the text.
   • Leave a field as "" (empty) or delete it to hide it.
   • Images: drop the file into /assets and put its path in `image`,
     e.g. image: "assets/displace.png". GIFs and .mp4 videos work too
     (use `video: "assets/clip.mp4"`). Empty image = neutral placeholder.
   • `imageHover` (optional) swaps to a second image when the row is hovered.
   • Text fields accept HTML, so <a href="...">links</a> and <b>bold</b> work.
   • `short` (optional) is the label shown on the placeholder before you add an image.
   • Your name is bolded automatically in every author list.
   ========================================================================== */

window.SITE = {

  /* ---------------------------------------------------------------- PROFILE */
  profile: {
    name: "Dhyey Manish Rajani",
    photo: "https://avatars.githubusercontent.com/u/86003669?v=4", // or "assets/me.jpg"
    location: "Brisbane, Australia",
    timezone: "Australia/Brisbane",          // drives the live clock under your photo
    timezoneLabel: "AEST",

    // The typing line under your name
    typingPrefix: "Hi, I'm Dhyey — I work on ",
    typingPhrases: [
      "visual place recognition.",
      "robots that know where they are.",
      "knowing when to trust a match.",
      "localisation without GPS.",
      "adaptive imaging for eye surgery.",
      "SLAM in the dark."
    ],

    // Each string is one paragraph. HTML allowed.
    bio: [
      `I'm a PhD candidate at the <a href="https://research.qut.edu.au/qcr/">QUT Centre for Robotics</a>
       in Brisbane, supervised by <a href="https://research.qut.edu.au/centre-for-future-enterprise/people/michael-milford/">Prof. Michael Milford</a>
       and <a href="https://www.tobiasfischer.info/">Dr. Tobias Fischer</a>. I work on visual place recognition:
       helping robots recognise where they are from camera images alone, across changes in season, lighting
       and viewpoint, and deciding when a match is reliable enough to act on.`,

      `Before QUT, I was a research assistant in Dr. Mark Draelos's
       Image-Guided Medical Robotics Lab at the University of Michigan, building predictive adaptive-scanning
       OCT for robot-assisted eye surgery. I hold an MS in Robotics from the University of Michigan and a BE
       in Mechanical Engineering from the University of Mumbai.`,

      `I'm always happy to talk about research collaborations, so feel free to get in touch.`
    ],

    // Leave url "" to hide an icon.
    links: {
      email:    "dhyeymanish.rajani@hdr.qut.edu.au",
      github:   "https://github.com/DhyeyR-007",
      scholar:  "",   // paste your Google Scholar profile URL here
      linkedin: "https://au.linkedin.com/in/dhyey-rajani-1629881ab",
      cv:       "assets/CV.pdf"   // upload a CV *without* your home address/phone
    }
  },

  /* ------------------------------------------------------------------- NEWS
     Newest first. Only the first `newsVisible` show until "Show older" is clicked. */
  newsVisible: 5,
  news: [
    { date: "Jun 2026", text: `DisPlace, our multi-reference place recognition paper, is now on <a href="https://arxiv.org/abs/2605.30769">arXiv</a>.` },
    { date: "Feb 2026", text: `Preprint on picking reliable VPR operating points with quantile transfer is on <a href="https://arxiv.org/abs/2602.04401">arXiv</a>.` },
    { date: "Jan 2025", text: `Our adaptive-scanning OCT paper is published in <i>Biomedical Optics Express</i>.` },
    { date: "Oct 2024", text: `Started my PhD at the QUT Centre for Robotics in Brisbane.` },
    { date: "May 2024", text: `Presented low-latency surgical scene imaging at ARVO 2024 in Seattle.` },
    { date: "Jan 2024", text: `Presented adaptive scanning OCT at SPIE Photonics West 2024 in San Francisco.` },
    { date: "Dec 2023", text: `Graduated with an MS in Robotics from the University of Michigan (GPA 3.99/4.0).` }
  ],

  /* ----------------------------------------------------------- PUBLICATIONS
     topic   → used for the filter buttons above the list (any text you like)
     status  → small tag next to the venue, e.g. "Under review" (optional)
     highlight: true → gives the row a soft background (use for key papers) */
  publications: [
    {
      title: "DisPlace: Discriminative Place Projections for Multi-Reference Visual Place Recognition",
      url: "https://arxiv.org/abs/2605.30769",
      authors: "Dhyey Manish Rajani, Michael Milford, Tobias Fischer",
      venue: "arXiv preprint, 2026",
      status: "Under review, IEEE robotics journal",
      topic: "Place recognition",
      highlight: true,
      image: "",
      imageHover: "",
      video: "",
      tldr: "Fuses several reference traversals of the same route into one compact descriptor per place, by keeping the directions that separate places and discarding the ones that only reflect weather, lighting or viewpoint.",
      abstract: "",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2605.30769" },
        { label: "PDF",   url: "https://arxiv.org/pdf/2605.30769" },
        { label: "Code",  url: "" }
      ]
    },
    {
      short: "Quantile Transfer",
      title: "Quantile Transfer for Reliable Operating Point Selection in Visual Place Recognition",
      url: "https://arxiv.org/abs/2602.04401",
      authors: "Dhyey Manish Rajani, Michael Milford, Tobias Fischer",
      venue: "arXiv preprint, 2026",
      status: "Under review, IEEE robotics conference",
      topic: "Place recognition",
      highlight: true,
      image: "",
      tldr: "Picks the matching threshold that meets a precision target you set, using one short calibration run instead of hand-tuning.",
      abstract: "Visual Place Recognition performance critically depends on selecting an image matching threshold that balances precision and recall. Thresholds are typically hand-tuned offline and fixed during deployment, leading to degraded performance under environmental change. We propose a method that, given a user-defined precision requirement, automatically selects the operating point of a VPR system to maximise recall. The method uses a small calibration traversal with known correspondences and transfers thresholds to deployment via quantile normalisation of similarity score distributions.",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2602.04401" },
        { label: "PDF",   url: "https://arxiv.org/pdf/2602.04401" }
      ]
    },
    {
      short: "Predictive adaptive OCT",
      title: "Dynamics-aware Deep Predictive Adaptive Scanning Optical Coherence Tomography",
      url: "https://doi.org/10.1364/boe.545165",
      authors: "Dhyey Manish Rajani, Federico Seghizzi, Yang-Lun Lai, Koerner Gray Buchta, Mark Draelos",
      venue: "Biomedical Optics Express, 16(1), 2025",
      topic: "Medical imaging",
      image: "",
      tldr: "Predicts where a surgical scene will move next and scans only there, raising OCT frame rate by up to 40% without losing image quality.",
      abstract: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.1364/boe.545165" },
        { label: "Press", url: "https://robotics.umich.edu/news/2025/improving-the-frame-rate-versus-resolution-tradeoff-in-optical-tomography" }
      ]
    },
    {
      short: "Adaptive scanning OCT",
      title: "Adaptive Scanning OCT with Scene Prediction and Dynamics-aware Scans",
      url: "https://doi.org/10.1117/12.3005458",
      authors: "Dhyey Manish Rajani, Federico Seghizzi, Yang-Lun Lai, Koerner Gray Buchta, Mark Draelos",
      venue: "SPIE Photonics West, San Francisco, 2024",
      topic: "Medical imaging",
      image: "",
      tldr: "",
      links: [
        { label: "DOI", url: "https://doi.org/10.1117/12.3005458" }
      ]
    },
    {
      short: "Low-latency surgical imaging",
      title: "Low-latency Surgical Scene Imaging with Scene Prediction and Dynamics-aware Scans",
      url: "",
      authors: "Dhyey Manish Rajani, Federico Seghizzi, Yang-Lun Lai, Koerner Gray Buchta, Mark Draelos",
      venue: "ARVO Annual Meeting, Seattle, 2024 (IOVS 65(7))",
      topic: "Medical imaging",
      image: "",
      tldr: "",
      links: []
    },
    {
      title: "Twilight SLAM: Navigating Low-Light Environments",
      url: "https://arxiv.org/abs/2304.11310",
      authors: "Surya Pratap Singh, Billy Mazotti, Dhyey Manish Rajani, Sarvesh Mayilvahanan, Guoyuan Li, Maani Ghaffari",
      venue: "arXiv preprint, 2023",
      topic: "SLAM & 3D vision",
      image: "",
      tldr: "Tests which low-light image enhancers actually help visual SLAM in semi-dark and dark scenes.",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2304.11310" },
        { label: "Code",  url: "https://github.com/DhyeyR-007/Twilight-SLAM-Navigating-Low-Light-Environments" }
      ]
    },
    {
      title: "OriCon3D: Effective 3D Object Detection using Orientation and Confidence",
      url: "https://arxiv.org/abs/2304.14484",
      authors: "Dhyey Manish Rajani, Surya Pratap Singh, Rahul Kashyap Swayampakula",
      venue: "arXiv preprint, 2023",
      topic: "SLAM & 3D vision",
      image: "",
      tldr: "Recovers 3D boxes from a single image by regressing orientation and confidence, then fitting them to 2D box constraints. Evaluated on KITTI.",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2304.14484" }
      ]
    },
    {
      short: "ASV trajectory prediction",
      title: "A Contemporary Approach for Trajectory Prediction of Autonomous Surface Vessels Based on LSTM Neural Networks",
      url: "",
      authors: "Dhyey Manish Rajani", // TODO: add co-authors
      venue: "Smart Ship Technology, Royal Institution of Naval Architects, London, 2020",
      topic: "Other",
      image: "",
      tldr: "Kalman filter plus bidirectional LSTM predicting a vessel's path 30 minutes ahead with under 0.01 km path loss.",
      links: []
    }
  ],

  /* ------------------------------------------------------------- EXPERIENCE */
  experience: [
    {
      org: "QUT Centre for Robotics",
      role: "PhD candidate",
      place: "Brisbane, Australia",
      dates: "Oct 2024 – present",
      logo: "assets/QUT-Logo.png",
      text: "Visual place recognition for long-term robot localisation, with Prof. Michael Milford and Dr. Tobias Fischer."
    },
    {
      org: "Image-Guided Medical Robotics Lab, University of Michigan",
      role: "Robotics research assistant",
      place: "Ann Arbor, USA",
      dates: "Dec 2023 – Sep 2024",
      logo: "assets/UMich-Logo.png",
      text: "With Dr. Mark Draelos, built an OCT system for retinal surface reconstruction and tracking to guide robotic forceps and lasers in eye surgery, including next-frame prediction with causal motion segmentation and liquid neural networks."
    }
  ],

  /* --------------------------------------------------------------- PROJECTS */
  projects: [
    {
      short: "Martian terrain",
      title: "Multimodal Martian Terrain Classification",
      context: "With NASA JPL and Dr. Katherine Skinner, University of Michigan",
      image: "",
      text: "Fused rover audio and vision to auto-label terrain for semantic segmentation, using Siamese networks and audio diffusion models for blind source separation on limited JPL data.",
      links: []
    },
    {
      title: "BotLab: LiDAR-based Autonomous Navigation",
      context: "MS Robotics, University of Michigan",
      image: "",
      text: "Real-time LiDAR SLAM with Monte Carlo localisation, frontier exploration and tuned PID control for warehouse pick-and-place.",
      links: []
    },
    {
      title: "ArmLab: Vision-guided Manipulation",
      context: "MS Robotics, University of Michigan",
      image: "",
      text: "AprilTag-calibrated RGB-D block detection with sub-5 mm accuracy, plus forward and inverse kinematics and a state machine for sorting and stacking with a 5-DoF arm.",
      links: []
    },
    {
      short: "Robotic serpent",
      title: "Size-changing Robotic Serpent for Nuclear Pipe Inspection",
      context: "BE thesis, University of Mumbai",
      image: "",
      text: "Snake-inspired robot with monocular visual SLAM in ROS and vision-assisted size change, inspecting pipes of different diameters and orientations.",
      links: []
    },
    {
      short: "Missile guidance",
      title: "Planar Endoatmospheric Missile Guidance",
      context: "MATLAB",
      image: "",
      text: "Mid-air target pursuit and interception with full flight dynamics simulation.",
      links: [{ label: "Code", url: "https://github.com/DhyeyR-007/Planar-Endoatmospheric-Missile-Guidance" }]
    },
    {
      title: "Pose Graph SLAM",
      context: "Python",
      image: "",
      text: "2D and 3D pose graph SLAM with GTSAM and Gauss-Newton on g2o datasets.",
      links: [{ label: "Code", url: "https://github.com/DhyeyR-007/Pose-Graph-SLAM" }]
    },
    {
      title: "6D Pose Estimation",
      context: "Python",
      image: "",
      text: "PoseCNN-based pipeline for 6D object pose estimation.",
      links: [{ label: "Code", url: "https://github.com/DhyeyR-007/6D-Pose-Estimation" }]
    }
  ],

  /* -------------------------------------------------------------- EDUCATION */
  education: [
    {
      degree: "PhD, Electrical Engineering and Robotics",
      school: "Queensland University of Technology, Brisbane",
      dates: "2024 – present",
      note: "Supervised by Prof. Michael Milford and Dr. Tobias Fischer",
      logo: "assets/QUT-Logo.png"
    },
    {
      degree: "MS, Robotics",
      school: "University of Michigan, Ann Arbor",
      dates: "2022 – 2023",
      note: "GPA 3.99 / 4.0",
      logo: "assets/UMich-Logo.png"
    },
    {
      degree: "BE, Mechanical Engineering",
      school: "Dwarkadas J. Sanghvi College of Engineering, University of Mumbai",
      dates: "2018 – 2022",
      note: "CGPA 9.58 / 10",
      logo: ""
    }
  ],

  /* ---------------------------------------------------------------- HONOURS */
  honours: [
    "Gold and silver medals in India's national Robotics and Fuzzy Logic exams, IIT Kharagpur.",
    "3rd place at SAE AeroDesign East 2020, leading a team of 12 that built two RC aircraft.",
    "Vice-president of the city committee for SAE India and the Indian Society of Manufacturing Engineers, 2020–2022.",
    "2nd place in the 26 km TCS annual marathon, May 2021."
  ],

  /* ----------------------------------------------------------------- FOOTER */
  footer: `Last updated October 2026. Layout inspired by <a href="https://gokulbnr.github.io/">Gokul B. Nair</a> and <a href="https://jonbarron.info/">Jon Barron</a>.`
};
