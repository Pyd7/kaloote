
import imgPricing1 from 'assets/images/app/pricing/01.png';
import imgPricing2 from 'assets/images/app/pricing/02.png';
import imgPricing3 from 'assets/images/app/pricing/03.png';

const data = {
    pricings: [
      {
        thumb: imgPricing1,
        name: 'Free Plan',
        price: 'Free',
        description: 'Access All basic content',
        link: '#',
        btnText: 'Continue with Free Plan',
        services:[
            {
                content: 'Blog Posts',
                className: '--on'
            },
            {
                content: 'Posted Studies',
                className: '--on'
            }/* ,
            {
                content: 'SQL Database.',
                className: '--on'
            },
            {
                content: 'Speech & Text Analytics.',
                className: '--off'
            },
            {
                content: '24/7 Supports.',
                className: '--off'
            } */
        ]
      },/* {
        thumb: imgPricing2,
        name: 'Standard Plan',
        price: '$75.00',
        description: 'Lorem ipsum dolor sit amet consectetur elit, sed.',
        link: '#',
        btnText: 'Get Package',
        services:[
            {
                content: 'Push Notification.',
                className: '--on'
            },
            {
                content: 'Offline Synchronization.',
                className: '--on'
            },
            {
                content: 'SQL Database.',
                className: '--on'
            },
            {
                content: 'Speech & Text Analytics.',
                className: '--on'
            },
            {
                content: '24/7 Supports.',
                className: '--off'
            }
        ]
      }, */
      {
        thumb: imgPricing2,
        name: 'Premium Plan',
        price: '$9.99',
        description: 'Advanced Content Access',
        link: '#',
        btnText: 'Go Premium',
        services:[
            {
                content: 'Blog Posts',
                className: '--on'
            },
            {
                content: 'Posted Studies',
                className: '--on'
            },
            {
                content: 'Reseach Data',
                className: '--on'
            },
            {
                content: 'Data Vizualization',
                className: '--on'
            }/*,
            {
                content: '',
                className: ''
            } ,
            {
                content: '24/7 Supports.',
                className: '--on'
            } */
        ]
      },
      {
        thumb: imgPricing3,
        name: 'Enterprise Plan',
        price: 'Request',
        description: 'Consulting',
        link: '#',
        btnText: 'Contact Us to Get an Estimate',
        services:[
            {
                content: 'Blog Posts',
                className: '--on'
            },
            {
                content: 'Posted Studies',
                className: '--on'
            },
            {
                content: 'Reseach Data',
                className: '--on'
            },
            {
                content: 'Data Vizualization',
                className: '--on'
            },
            {
                content: 'Custom Report',
                className: '--on'
            }/* ,
            {
                content: '24/7 Supports.',
                className: '--on'
            } */
        ]
      }
      
    ]
    
  };
  export default data;
  