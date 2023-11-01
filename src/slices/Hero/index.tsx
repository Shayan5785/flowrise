import Bounded from "@/app/components/section/Bounded";
import Button from "@/app/components/section/Button";
import Heading from "@/app/components/section/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Component: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0" size="xl">{children}</Heading>
  ),

  paragraph: ({ children }) => (
    <p className="text-2xl font-normal -leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md">{children}</p>
  ),
}

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === 'default' && <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gri-col-1 place-items-center text-center">
            {/* why this component thins is working */}
            <PrismicRichText field={slice.primary.heading} components={Component} />
            <PrismicRichText field={slice.primary.tag_line} components={Component} />
            <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
              {slice.primary.button_label}
            </Button>
            <PrismicNextImage field={slice.primary.hero_image} className="drop-shadow-xl max-w-4xl w-full" />
          </div>
        </div>
      </Bounded>}

      {slice.variation === 'horizontal' && <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              {/* why this component thins is working */}
              <PrismicRichText field={slice.primary.heading} components={Component} />
              <PrismicRichText field={slice.primary.tag_line} components={Component} />
              <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
                {slice.primary.button_label}
              </Button>
            </div>
            <PrismicNextImage field={slice.primary.hero_image} className="drop-shadow-xl max-w-4xl w-full" />
          </div>
        </div>
      </Bounded>}
    </>
  );
};

export default Hero;
