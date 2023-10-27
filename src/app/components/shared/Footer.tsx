import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'

const Footer = async () => {

  // fetching data from prismic 
  const res = createClient()
  const data = await res.getSingle('settings')

  return (
    <footer>
      <Link href="/">{data.data.site_title}</Link>

      <p>©{ new Date().getFullYear() } {data.data.site_title}</p>

      {/* mapping over navs  */}
      <ul>
        <li>
          {data.data.navigation.map(item => (
            // using prismic link Component 
            <PrismicNextLink key={item.label} field={item.link}>{item.label}</PrismicNextLink>
          ))}
        </li>
      </ul>
    </footer>
  )
}

export default Footer