module.exports = (options, context) => ({
    name: 'vuepress-plugin-minecraft-status',
    extendPageData($page) {
        const { frontmatter } = $page
        if (frontmatter.showButton) {
            frontmatter.navbarButtons = [
                {
                    icon: 'fa-solid fa-server',
                    // text: 'Status',
                    link: '/my-button-link',
                    target: '_self',
                    popover: {
                        title: 'My Button Popover',
                        content: '<p>My Button Popover Content</p>',
                    },
                },
                ...frontmatter.navbarButtons,
            ]
        }
    },
});