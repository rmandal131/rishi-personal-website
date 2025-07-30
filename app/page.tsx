import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        About
      </h1>
      <ul className="mb-8 list-disc pl-6 space-y-2">
        <li>I'm an astrophysicist by training. I prefer big ideas and hard problems to opportunism</li>
        <li>I've built multiple companies which use machine learning and AI to scale human expertise and good taste</li>
        <li>Currently: Cofounder of Future, where we've scaled 1-on-1 coaching to improve the health of consumers around the world. We're building Future with Tom Brady, and we're backed by Kleiner Perkins, Andreessen Horowitz, Khosla Ventures, and others</li>
        <li>EIR at Khosla Ventures</li>
        <li>Cofounder of Sosh, a hyper-personalized concierge, backed by Sequoia Capital and Khosla Ventures, and acquired by Postmates</li>
        <li>Before: Google, Slide, NASA, Stanford University</li>
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
