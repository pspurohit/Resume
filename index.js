const exp = Math.floor(((new Date()).getFullYear()) - 2013);
export const data = {
    profile: {
        image: {
            'src': "./image/me2.png",
            'alt': 'My Profile Image'
        },
        data: {
            name: 'Soumya Sarthak Padhee',
            desg: 'Software Developer',
            briefDetail: {
                'born': 'July 1991',
                'email': 'soumya.sarthak.padhee@gmail.com',
                'phone': '+91-9652147435'
            },
            resume: {
                src: './data/SoumyaSarthakPadhee_Profile.docx',
                iconClass: 'fas fa-download',
                title: 'Download Resume'
            }
        }
    },
    social: [{
            title: 'LinkedIn',
            href: 'https://www.linkedin.com/in/soumyasarthakpadhee/',
            iconClass: 'fab fa-linkedin-in',
            color: '#007bb6'
        },
        {
            title: 'Twitter',
            href: 'https://twitter.com/hpsprmpsp',
            iconClass: 'fab fa-twitter',
            color: '#2caae1'
        },
        {
            title: 'Instagram',
            href: 'https://www.instagram.com/soumya.sarthak.padhee/',
            iconClass: 'fab fa-instagram',
            color: '#ce3c8e'
        },
        {
            title: 'Github',
            href: 'https://github.com/hpsprmpsp',
            iconClass: 'fab fa-github',
            color: 'white'

        }
    ],
    contacts: [{
            name: 'EMAIl',
            icon: 'far fa-envelope',
            value: 'soumya.sarthak.padhee@gmail.com'
        },
        {
            name: 'Phone',
            icon: 'fas fa-mobile-alt',
            value: '123456789'
        },
        {
            name: 'Skype',
            icon: 'fab fa-skype',
            value: 'hpsprmpsp'
        }
    ],
    personalInfo: {
        birthday: 'July 1991',
        marital: 'Married',
        nationality: 'Indian',
        skype: 'soumya.sarthak.padhee',
        phone: '123456789',
        email: 'soumya.sarthak.padhee@gmail.com'
    },
    about: "A dynamic professional with " + exp + "+ years of IT experience in <b>UI Development</b> looking for assignments in the domain of Software Development to deliver solutions for complex technical requirements. ",

    experience: {
        summary: [{
                label: "Experiance Summary",
                cont: [
                    exp + "+ years of total IT Experience, in <b>UI development</b>",
                    "Worked extensively in designing SPAs using HTML5/CSS3/JavaScript",
                    "Experienced in multiple JavaScript library, AngularJS 1.x, Bootstrap 3, Handlebars, JQuery",
                    "Experienced in designing small web application",
                    "Experienced in Node.js",
                    "Experienced in GIT",
                    "Average experience in Python, PHP",
                    "Average experience in Excel Macro using VBA"
                ]
            },
            {
                label: "Roles & Responsibilities",
                cont: [
                    "Currently working as Member of technical staff",
                    "Accomplished major role in design and implementation of interface for business logic and flow",
                    "Involved in Designed, development and deployment phase of the project",
                    "Involved in design discussion and documentation of the framework",
                    "Involved in Code review",
                    "Worked as an Individual Contributor for the assigned task"
                ]
            }
        ],

    },
    workExp: [{
            company: 'Riverbed Pvt Limited',
            location: 'Bengaluru, India',
            start: 'November 2019',
            end: 'Present',
            designation: 'Member of Technical Group',
            project: 'SCC',
            summary: 'SCC is a product developed using a native technology called Web3 consisting of Javascript, CSS, HTML, python'
        },
        {
            company: 'Riverbed Pvt Limited',
            location: 'Bengaluru, India',
            start: 'NOV 2017',
            end: 'Present',
            designation: 'Member of Technical Group',
            project: 'SCM',
            summary: 'SCM is a product developed using Handlebars, and Bootstrap, Perl to replace the CLI controller for different hardware.'
        },
        {
            company: 'Infosys Limited',
            location: 'Hyderabad, India',
            start: 'Septemebr 2012',
            end: 'Novmber 2017',
            designation: 'Technical Analyst',
            project: 'IPE',
            summary: 'I was responsible for keeping the environments up for floor management, keeping codes up-to-date. I was responsible for designing UI for automation.'
        },
        {
            company: 'Infosys Limited',
            location: 'Hyderabad, India',
            start: 'March 2015',
            end: 'November 2017',
            designation: 'Technical Analyst',
            project: 'VOY',
            summary: 'VOY was responsible for organizing different events inside Infosys. I was involved in designing pages for invitations, registration, score maintenance etc. I designed a website using PHP for real-e-state ads.'
        }
    ],
    education: [{
            degree: 'Bachelor of Engineering',
            inst: 'Veer Surendra Sai University of Technology, Burla',
            time: "2008 - 2012",
            major: 'Electronics and Telecommunication',
            mark: '7.03 CGPA'
        },
        {
            degree: 'Higher Secondary',
            inst: 'Central Board of Secondary Education',
            mark: '78.2%',
            time: "2008"
        },
        {
            degree: 'Secondary',
            inst: 'Central Board of Secondary Education',
            mark: '81.4%',
            time: "2006"
        }

    ],
    skills: [{
            current: 92,
            total: 100,
            color: '#3951cb',
            title: 'HTML'
        },
        {
            current: 90,
            total: 100,
            color: '#ed5f97',
            title: 'CSS'
        },
        {
            current: 95,
            total: 100,
            color: '#54d734',
            title: 'Javascript'
        },
        {
            current: 90,
            total: 100,
            color: '#dc46f0',
            title: 'Bootstrap'
        },
        {
            current: 85,
            total: 100,
            color: '#e4c91d',
            title: 'JS Libraries'
        },
        {
            current: 90,
            total: 100,
            color: '#1db4e4',
            title: 'NodeJS'
        }
    ]

};

var app = angular.module("myProfile", []);


app.controller("myProfile", function ($scope) {
    $scope.data = data;
});