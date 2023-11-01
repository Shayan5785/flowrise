import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Bounded from '../section/Bounded'

const Header = async () => {

  // fetching data from prismic 
  const res = createClient()
  const data = await res.getSingle('settings')

  return (
    <Bounded as={'header'} className='py-4 md:py-6 lg:py-8'>
      <div className='flex gap-4 items-center justify-between sm:flex-row flex-col'>
      
        <Link href="/">
          <img src="logo.svg" alt={`${data.data.site_title}`} />
        </Link>

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

export default Header