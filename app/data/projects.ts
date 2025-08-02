import wanderlost from "~/assets/wanderlost.png";
import raggpt from "~/assets/raggpt.jpeg";
import vidyut from "~/assets/vidyut.png";
import technix from "~/assets/technix23.png";

const projects = [
    {
        id: "1",
        title: "Maslo Consulting - HR Tech app",
        description:
            "AI driven POSH case management tool with special focus on process automation",
        image: "https://masloconsulting.com/wp-content/uploads/2022/12/Maslo-logo.png",
        link: "https://masloconsulting.com/",
        markdownContent: `
![Maslo Icon](https://masloconsulting.com/wp-content/uploads/2023/01/Maslo-1536x559.png)

# Maslo Consulting: AI Posh tool

This is a tool built for Maslo Consulting, a Hyderabad based HR consulting firm specializing in HR operations and compliance management. Powered by Django, the tool makes case management and POSH compliance a breeze. 

## Features

-   AI Chatbot to answer all your posh related queries
-   Collection of template of letters for various stages of the POSH process
-   Case Management for HR professionals, including AI driven suggestions along the way
- Learning and Communication management right within the tool

## Technical Details

- The tool is built using Django, and hosted on Azure
- It uses Azure Container registry to hold the dockerized app, a postgresSQL db, and azure app service run time.
- It also uses Azure OpenAI and Azure AI Search for AI features.
`,
    },
    {
        id: "2",
        title: "WanderLost India",
        description:
            "Website for WanderLost India, a travel agency based in Goa, showing their tours and locations",
        image: wanderlost,
        link: "https://wanderlostindia.com/",
        markdownContent: `
![WanderLost Icon](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmyaKwJGszEye-RAtTTfYxVLv4VcWxbc4E_Q&s)

# WanderLost India

Built the complete frontend for WanderLost India, a Goa based travel agency. This project involved a lot of effort building UI that was as close as possible to the designs and mockups shown to the client. It is built on the popular Javascript stack - NextJS, MongoDB, Express. During this project, I worked to make the site SEO friendly, and also mobile responsive for a seamless experience. Also built the admin site for data entry into the user facing website.

## Features

-   View all the upcoming trips by Wanderlost
-   Upon opening any trip get the complete details like the inclusions, exclusions, batches, iterinary etc. 
-   A contact/download iterinary model form
- Mobile first approach as the majority users would be hitting the site from the mobile itself.
- Easy to use admin panel with intuitive placement of options and buttons.

## Technical Details

- Since the site has a lot of images (travel website), and SEO is important, hence chose NextJS with image optimization features for faster load times and server side rendering.
- Used React Query to avoid unnecessary requests and also to cache results for a certain time frame. This overall improved the website performance.
- While the main site uses ChakraUI, the admin site is built using MUI (Material UI). Both of these are the major component libraries of the react ecosystem.
- The project is entirely built in Typescript over vanilla JS, for better type safety and editor suggestions.

Check out the website here: [WanderLost Website](https://www.wanderlostindia.com)
`,
    },
    {
        id: "4",
        title: "Vidyut",
        description:
            "An electricity billing and management system concept website",
        image: vidyut,
        link: "https://github.com/lolla-sai/Vidyut-Frontend",
        markdownContent: `
![Vidyut (OneShield Mini Project)](https://iamsailolla.netlify.app/assets/vidyut-BBGwYhMp.png)

# Vidyut (OneShield Mini Project)

Our implementation for OneShield's mini project competition during the joining initial days. It is a electicity billing management software concept, digitizing multiple steps of the process, such as applying for new connections, bill generation and calculation, reporting etc. Our team won the 2nd place for this.

## Features

**Consumer Side**

- New Consumer Application which is quick, and secured by OTP verification.
- Subsidized applications with proof documents upload is also allowed.
- Timely mails when bill is generated, bill is updated, or due date approaches
- Fetching Bills by entering bill ID
- A complaints page, to let consumers report any discrepencies in the bill.

**Admin Side**

- Clean and Consistent UI
- Generate bills for many consumers in one go, just by uploading a flat file (meter reading csv)
- Billing module generates a detailed bill transparently, for all types of consumers.
- Ability to search and filter applications by consumer ID
- Ability to view/edit, accept/reject with reason applications.
- View all your complaints in one place, accept the complaint and correct the bill meter reading or slab rates, or reject the complaint all together.
- Option to update slabs/rates, change fixed charges, set their validity from time to time.
- See all bills, update payment status

**Other Features**

- Dark theme support
- Keyboard Shortcut (Alt + A) to go to admin panel and (Ctrl + Shift + K) to toggle dark theme.

## Technical Details

This project uses NextJS with Firebase for quicker development. We have a middle layer (Node) which allows for better security. Form and Validation was done using react form.

## Tech Stack

**Client:** NextJS-13, Typescript, React Query, Chakra UI, EJS (for bill)

**Server:** Node, Express, Firebase, nodemailer, node-cron (For email sending cron jobs), logger for logging

## Project Architecture

![Architecture](https://i.ibb.co/jMzc8r8/Elec.png)

Check out the repo: [Vidyut Github](https://github.com/lolla-sai/Vidyut-Frontend)

`,
    },
    {
        id: "3",
        title: "RagGPT",
        description:
            "A RAG-based chatbot builder platform that answers on your data, built with Spring Boot",
        image: raggpt,
        link: "https://www.linkedin.com/posts/activity-7280105481551904768-vA_z?utm_source=share&utm_medium=member_desktop&rcm=ACoAACBfh24BjroQNHyPFTtzQc3Zxbv7HV2LusA",
        markdownContent: `
![Rag GPT](https://iamsailolla.netlify.app/assets/raggpt-Do_kNpFn.jpeg)

# RagGPT (Build Chatbots Fast)

RagGPT empowers users to effortlessly build custom, knowledge-backed chatbots without coding expertise. Simply upload knowledge, customize prompts, and deploy a secure, personalized chatbot on Azure that answers based on your data.

## Technical Details

RagGPT is built using Spring Boot (as the main backend), Python (FastApi) server for the AI operations, and Azure as the cloud, LLM and hosting provider.

Check out my linkedin post: [LinkedIn](https://www.linkedin.com/posts/activity-7280105481551904768-vA_z?utm_source=share&utm_medium=member_desktop&rcm=ACoAACBfh24BjroQNHyPFTtzQc3Zxbv7HV2LusA)
        
`,
    },
    {
        id: "5",
        title: "Technix 23",
        description:
            "Website for the Technix 23 event at GEC, with event details, registrations, etc.",
        image: technix,
        link: "https://technix23.vercel.app/",
        markdownContent: `
![Technix Logo](https://i.ibb.co/kQqg1F1/Technix-Logo.png)

# Technix 2023 Website

The official website for Technix 2023 Event, organized by the department of Computer Engineering, Goa College of Engineering, Ponda - Goa


## Features

- Appealing design
- Events page showing all event details in one place
- Countdown to the actual event
- Built with NextJS - performance first with features like \<Image/\> component, lazy loading etc
- Various other sections such as Footer (all contact details with google map embed), schedule table, navbars.
- Event Registeration with Luma
- animations with gsap (ScrollTrigger)


## Tech Stack

- NextJS-React
- TailwindCSS
- GSAP
- StyledComponents
- json for data handling
- lu.ma event pages


## Lessons Learned

While building this website, I acted as a dev lead, overseeing contributions by everyone, and integrating it into the incremental builds. In this process I learned team management, and working in teams.

I also learnt newer concepts of NextJS 13, including the latest \<Image/\> component, font rendering improvements, etc.

Together with my team, I managed to be a builder of a website that was viewed by students across colleges of Goa.

This is something I will always remember and be proud of!


Check out the archived website: [Technix 23 website](https://technix23.vercel.app/)
        
`,
    },
];

export default projects;
