import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Bounded from '../section/Bounded'

const Footer = async () => {

  // fetching data from prismic 
  const res = createClient()
  const data = await res.getSingle('settings')

  return (
    <Bounded as={'footer'}>
      <div className='flex sm:flex-row flex-col justify-between items-center gap-6'>
        <Link href="/">
          <img src="logo.svg" alt={`${data.data.site_title}`} />
        </Link>

        <p className='text-xs'>©{new Date().getFullYear()} {data.data.site_title}</p>

        {/* mapping over navs  */}
        <ul className='flex'>
          <li>
            {data.data.navigation.map(item => (
              // using prismic link Component 
              <PrismicNextLink className='p-3' key={item.label} field={item.link}>
                {item.label}
              </PrismicNextLink>
            ))}
          </li>
        </ul>
      </div>
    </Bounded>
  )
}

export default Footer