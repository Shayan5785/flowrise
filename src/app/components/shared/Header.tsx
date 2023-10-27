import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'

const Header = async () => {

  // fetching data from prismic 
  const res = createClient()
  const data = await res.getSingle('settings')

  return (
    <header>
      <Link href="/">{data.data.site_title}</Link>

      {/* mapping over navs  */}
      <ul>
        <li>
          {data.data.navigation.map(item => (
            // using prismic link Component 
            <PrismicNextLink key={item.label} field={item.link}>{item.label}</PrismicNextLink>
          ))}
        </li>
      </ul>
    </header>
  )
}

export default Header