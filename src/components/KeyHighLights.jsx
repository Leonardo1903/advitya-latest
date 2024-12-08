import { Carousel, Card } from "./ui/apple-cards-carousal";
import GradientText from "./ui/GradientText";
import SportsFest from "../assets/Sportsfest1.jpg";

export function KeyHighlights() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full md:py-20">
      <GradientText>
        <h1 className="text-4xl md:text-6xl md:mt-8 mt-0">KEY HIGHLIGHTS</h1>
      </GradientText>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-0 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "SportsFest",
    title: "You can do more with AI.",
    src: SportsFest,
    content: <DummyContent />,
  },
  {
    category: "SportsFest",
    title: "You can do more with AI.",
    src: SportsFest,
    content: <DummyContent />,
  },
  {
    category: "SportsFest",
    title: "You can do more with AI.",
    src: SportsFest,
    content: <DummyContent />,
  },
  {
    category: "Day-1",
    title: "Enhance your productivity.",
    // src: "./images/DSC00232.JPG",
    content: <DummyContent />,
  },
  {
    category: "Day-2",
    title: "Launching the new Apple Vision Pro.",
    // src: "./images/DSC_6664.JPG",
    content: <DummyContent />,
  },
  {
    category: "Day-3",
    title: "Maps for your iPhone 15 Pro Max.",
    // src: "./images/DSC_5602.JPG",
    content: <DummyContent />,
  },
];
