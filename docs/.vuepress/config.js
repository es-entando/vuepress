module.exports = {
    title: 'Entando | Getting Started Guide',
    description: 'Entando Tutorials',
    themeConfig: {
        repo: 'es-entando/docs',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Docs', link: 'http://docs.entando.com/' },
            { text: 'Getting Started', link: '/' },
            { text: 'Entando.com', link: 'http://www.entando.com' }
        ],
        serviceWorker: {
            updatePopup: true
        },
        sidebar: [
            ['/', 'Quick Start']
        ]
    }
}