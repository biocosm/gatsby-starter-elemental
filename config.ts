const siteMetadata = {
    title: `INTERGALACTIC RAILROAD`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/logo.png`,
    titleImage: `/images/thewingsofth.jpg`,
    ogImage: `/images/logo.png`,
    twoColumnWall: false,
    cookiePolicy: true,
    introTag: `FAKE NEWS FROM OUTER SPACE`,
    description: `INTERGALACTIC RAILROAD appears to be a series of samizdat audio recordings made during the collapse of the USA. A darkly comic investigation of the accelerating catastrophes of the 21st century.`,
    about:
        "INTERGALACTIC RAILROAD is the official podcast of the Biocosmist Immortalists, the Anarchist Space Program, the Slime Accelerationists, the Blue-Green Environmentalists, the Fully Automated Luxury Gay Space Platform Communists, the Cybernetic Occultists, the Federated Hustle Syndicate, the Green Zone Terraforming and Ecological Services Co-operative, the Unarmed Corps of Genetic Engineers, the NFL-CIA, the People's Bureau of Interplanetary Transit, the Anarcho-Transhumanist Caucus, the Posthuman Rewilding Collective and the Global Consortium of Stateless Individuals. We can be your official podcast too, if you'll let us.",
    author: `@biocosmopolitan`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "PODCAST",
            url: "/portfolio",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {
            name: "GitHub",
            url: "https://github.com/akzhy/gatsby-starter-elemental",
        },
    ],
    social: [
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/biocosmopolitan",
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://youtube.com/biocosmopolitan",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "hi@akzhy.com",
        phone: "000-000-0000",
        address: "1234 \nLocation \nLocation",
    },
    disqus: " ",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
