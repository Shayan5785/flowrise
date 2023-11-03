import Bounded from "@/app/components/section/Bounded";
import Heading from "@/app/components/section/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="max-w-md text-lg font-body text-slate-600">
      {children}
    </p>
  ),
};

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={clsx("flex flex-col md:flex-row justify-center items-center gap-4 md:gap-40", 
      slice.variation === 'revert' && "md:flex-row-reverse"
      )}>
        <PrismicNextImage
          width={400}
          field={slice.primary.image} />
        <div>
          <PrismicRichText components={components} field={slice.primary.title} />
          <PrismicRichText components={components} field={slice.primary.text} />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
