import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        About
      </h1>
      <ul className="mb-8 list-disc pl-6 space-y-2">
        <li>I'm an astrophysicist by training. I prefer big ideas to opportunism</li>
        <li>I've built several companies which use ML and AI to scale human expertise and good taste</li>
        <li>Currently: Co-founder of Future. Hyper-personalized coaching to improve the health and fitness of consumers around the world. We're building Future with Tom Brady, and backed by Kleiner Perkins, a16z, Khosla Ventures, and more</li>
        <li>2016: EIR at Khosla Ventures</li>
        <li>2015: Co-founder of Sosh, a hyper-personalized concierge, backed by Sequoia Capital and Khosla Ventures, and acquired by Postmates</li>
        <li>Before: Google, Slide, NASA, Physics at Stanford University</li>
      </ul>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Selected Posts
      </h1>
      <div className="mb-8">
        <BlogPosts />
      </div>
    </section>
  )
}
