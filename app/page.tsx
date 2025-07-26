import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <ul className="mb-8 list-disc pl-6 space-y-2">
        <li>I'm an astrophysicist by training. I prefer big ideas and hard problems</li>
        <li>Through line: I have built multiple companies which use machine learning and AI to scale human expertise and good taste</li>
        <li>Currently: Co-founder of Future, where we have scaled 1-on-1 coaching to improve the health and well-being of consumers around the world. We've built Future with Tom Brady, and we are backed by Kleiner Perkins, Andreessen Horowitz, Khosla Ventures, and others</li>
        <li>EIR at Khosla Ventures</li>
        <li>Co-founder of Sosh, a hyper-personalized concierge, acquired by Postmates</li>
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
