import Bounded from "@/app/components/section/Bounded";
import Heading from "@/app/components/section/Heading";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `Feature`.
 */
export type FeatureProps = SliceComponentProps<Content.FeatureSlice>;

const Components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading className="text-center mb-12" as="h2" size="md">{children}</Heading>
  ),
  heading3: ({ children }) => (
    <Heading className="mb-3 font-medium sm:text-left text-center" as="h3" size="sm">{children}</Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
      {children}
    </p>
  ),

}

type iconType = {
  Callender: string,
  Bar: string,
  Centro: string,
  Sandwatch: string,
}

const iconObj: iconType = {
  Callender: "Calendar.png",
  Bar: "Chart.png",
  Centro: "Command.png",
  Sandwatch: "Hourglass.png",
}

/**
 * Component for "Feature" Slices.
 */
const Feature = ({ slice }: FeatureProps): JSX.Element => {
  return (
    <Bounded
      as={'section'}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={Components} field={slice.primary.heading} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {
          slice.items.map((item, key) => (
            <div key={key} className="max-w-xs grid sm:place-items-start place-items-center">
              {item.icon &&
                <Image className="mb-5" width={80} height={80} src={`/${iconObj[item.icon]}`} alt="" />
              }
              <PrismicRichText components={Components} field={item.heading} />
              <PrismicRichText components={Components} field={item.description} />
            </div>
          ))
        }
      </div>
    </Bounded >
  );
};

export default Feature;
