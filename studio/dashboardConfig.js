export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '629904fac27a0913fd078d23',
                  title: 'Sanity Studio',
                  name: 'dfc-studio',
                  apiId: '1c9854f0-1b68-484d-8eaa-f5f633ca4beb'
                },
                {
                  buildHookId: '629904fae160da03b9295e28',
                  title: 'Landing pages Website',
                  name: 'dfc-web',
                  apiId: '6028fbae-ede8-447d-8e2f-03ca8dbd8538'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/taylorhackbart/DFC',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://dfc-web.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
