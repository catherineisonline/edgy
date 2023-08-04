import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'How to Start an Instagram Blog',
    href: '/blog/how-to-start-an-instagram-blog',

    description:
      'Starting an Instagram blog is relatively easy and can be done in a few simple steps and some creativity as well',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    readingTime: '5 min',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'What to Post on Instagram',
    href: '/blog/what-to-post-on-instagram',
    description:
      'There are many different types of content that you can post on Instagram to engage with your followers and grow your following.',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Everything You Need To Know About Instagram Creator Studio',
    href: '/blog/wverything-you-need-to-know-about-instagram-creator-studio',

    description:
      'Instagram Creator Studio is a tool that allows creators and businesses to manage their Instagram content and account from a desktop computer.',
    date: 'Feb 12, 2023',
    datetime: '2023-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1505322747495-6afdd3b70760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: '20 Tactful Instagram Tips',
    href: '/blog/20-tactful-instagram-tips',

    description:
      'Here is a collection of 20 tactful Instagram tips that will helps you to grow engagement, increase authentic followers, create quality content and so on',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1539187577537-e54cf54ae2f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    readingTime: '5 min',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Instagram Marketing Resources for Businesses',
    href: '/blog/instagram-marketing-resources-for-businesses',

    description:
      'There are different Instagram marketing resources you need to be aware of in order to grow your Instagram and benefit the business',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1616469829935-c2f33ebd89b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to run an Instagram Contest?',
    href: '/blog/how-to-run-an-instagram-contest',
    description:
      'An Instagram contest is a promotional activity where users are asked to submit content (e.g. a photo, video, or text) or perform an action (e.g. like, comment, or share) in exchange for a chance to win a prize',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1562147458-0c12e8d29f50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    readingTime: '4 min',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to Get Followers on Instagram',
    href: '/blog/get-more-instagram-followers',

    description:
      'Ultimately, the most important thing in order to get followers on Instagram is to post content that is relevant and interesting to your target audience',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1588177806780-51d021f6b2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to Promote Your eCommerce Store on Instagram',
    href: '/blog/how-to-promote-your-ecommerce-store-on-instagram',
    description:
      'There are many ways to promote your store like optimizing your profile, using keywords in your bio and making your profile set to public.',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1564758596018-3e5b1f2340cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    readingTime: '4 min',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'A Beginner’s Guide to Instagram for Businesses',
    href: '/blog/how-to-use-instagram-for-business-a-beginners-guide/',

    description:
      'Instagram for business is a way for companies to promote their products or services on the popular social media platform.',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
    readingTime: '5 min',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to Start an Instagram Blog',
    href: '/blog/how-to-start-an-instagram-blog',

    description:
      'Starting an Instagram blog is relatively easy and can be done in a few simple steps and some creativity as well',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    readingTime: '5 min',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'What to Post on Instagram',
    href: '/blog/what-to-post-on-instagram',

    description:
      'There are many different types of content that you can post on Instagram to engage with your followers and grow your following.',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Everything You Need To Know About Instagram Creator Studio',
    href: '/blog/wverything-you-need-to-know-about-instagram-creator-studio',

    description:
      'Instagram Creator Studio is a tool that allows creators and businesses to manage their Instagram content and account from a desktop computer.',
    date: 'Feb 12, 2023',
    datetime: '2023-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1505322747495-6afdd3b70760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: '20 Tactful Instagram Tips',
    href: '/blog/20-tactful-instagram-tips',

    description:
      'Here is a collection of 20 tactful Instagram tips that will helps you to grow engagement, increase authentic followers, create quality content and so on',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1539187577537-e54cf54ae2f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    readingTime: '5 min',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Instagram Marketing Resources for Businesses',
    href: '/blog/instagram-marketing-resources-for-businesses',

    description:
      'There are different Instagram marketing resources you need to be aware of in order to grow your Instagram and benefit the business',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1616469829935-c2f33ebd89b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to run an Instagram Contest?',
    href: '/blog/how-to-run-an-instagram-contest',
    description:
      'An Instagram contest is a promotional activity where users are asked to submit content (e.g. a photo, video, or text) or perform an action (e.g. like, comment, or share) in exchange for a chance to win a prize',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1562147458-0c12e8d29f50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    readingTime: '4 min',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to Get Followers on Instagram',
    href: '/blog/get-more-instagram-followers',
    description:
      'Ultimately, the most important thing in order to get followers on Instagram is to post content that is relevant and interesting to your target audience',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1588177806780-51d021f6b2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to Promote Your eCommerce Store on Instagram',
    href: '/blog/how-to-promote-your-ecommerce-store-on-instagram',
    description:
      'There are many ways to promote your store like optimizing your profile, using keywords in your bio and making your profile set to public.',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1564758596018-3e5b1f2340cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    readingTime: '4 min',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'A Beginner’s Guide to Instagram for Businesses',
    href: '/blog/how-to-use-instagram-for-business-a-beginners-guide/',

    description:
      'Instagram for business is a way for companies to promote their products or services on the popular social media platform.',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
    readingTime: '5 min',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to Start an Instagram Blog',
    href: '/blog/how-to-start-an-instagram-blog',

    description:
      'Starting an Instagram blog is relatively easy and can be done in a few simple steps and some creativity as well',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    readingTime: '5 min',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'What to Post on Instagram',
    href: '/blog/what-to-post-on-instagram',

    description:
      'There are many different types of content that you can post on Instagram to engage with your followers and grow your following.',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Everything You Need To Know About Instagram Creator Studio',
    href: '/blog/wverything-you-need-to-know-about-instagram-creator-studio',

    description:
      'Instagram Creator Studio is a tool that allows creators and businesses to manage their Instagram content and account from a desktop computer.',
    date: 'Feb 12, 2023',
    datetime: '2023-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1505322747495-6afdd3b70760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: '20 Tactful Instagram Tips',
    href: '/blog/20-tactful-instagram-tips',

    description:
      'Here is a collection of 20 tactful Instagram tips that will helps you to grow engagement, increase authentic followers, create quality content and so on',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1539187577537-e54cf54ae2f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    readingTime: '5 min',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Instagram Marketing Resources for Businesses',
    href: '/blog/instagram-marketing-resources-for-businesses',

    description:
      'There are different Instagram marketing resources you need to be aware of in order to grow your Instagram and benefit the business',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1616469829935-c2f33ebd89b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to run an Instagram Contest?',
    href: '/blog/how-to-run-an-instagram-contest',
    description:
      'An Instagram contest is a promotional activity where users are asked to submit content (e.g. a photo, video, or text) or perform an action (e.g. like, comment, or share) in exchange for a chance to win a prize',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1562147458-0c12e8d29f50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    readingTime: '4 min',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to Get Followers on Instagram',
    href: '/blog/get-more-instagram-followers',

    description:
      'Ultimately, the most important thing in order to get followers on Instagram is to post content that is relevant and interesting to your target audience',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1588177806780-51d021f6b2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to Promote Your eCommerce Store on Instagram',
    href: '/blog/how-to-promote-your-ecommerce-store-on-instagram',
    description:
      'There are many ways to promote your store like optimizing your profile, using keywords in your bio and making your profile set to public.',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1564758596018-3e5b1f2340cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    readingTime: '4 min',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'A Beginner’s Guide to Instagram for Businesses',
    href: '/blog/how-to-use-instagram-for-business-a-beginners-guide/',

    description:
      'Instagram for business is a way for companies to promote their products or services on the popular social media platform.',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
    readingTime: '5 min',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function BlogPosts() {
  const ResetLocation = () => window.scrollTo(0, 0)
  return (
    <article className="relative max-w-7xl mx-auto">
      <section className="text-center">
        <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
          Edgy Blog
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Expand your brand's reach and get more followers with these tried and
          tested Instagram growth strategies.
        </p>
      </section>
      <section className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none ">
        {posts.map((post, index) => (
          <section
            key={index}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden "
          >
            <section className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={post.imageUrl}
                alt=""
              />
            </section>
            <section className="flex-1 bg-gray-900 p-6 flex flex-col justify-between">
              <section className="flex-1">
                <Link
                  onClick={ResetLocation}
                  to={post.href}
                  className="block mt-2"
                >
                  <p className="text-xl font-semibold text-white">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </Link>
              </section>
              <section className="mt-6 flex items-center">
                <section className="flex-shrink-0">
                  <span className="sr-only">{post.author.name}</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.author.imageUrl}
                    alt=""
                  />
                </section>
                <section className="ml-3">
                  <p className="text-sm font-medium text-white">
                    {post.author.name}
                  </p>
                  <section className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </section>
                </section>
              </section>
            </section>
          </section>
        ))}
      </section>
    </article>
  )
}
