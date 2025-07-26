import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Hey there.
      </h1>
      <p className="mb-8">
        {`I'm an astrophysicist by training, and have built multiple companies which utilize machine learning and AI to scale human expertise and craftsmanship. Currently I am the co-founder of Future, where we have built and scaled 1-on-1 coaching to improve the health and well-being of consumers around the world. We have built Future with Tom Brady, and we are backed by Kleiner Perkins, Andreessen Horowitz, Khosla Ventures, and many more. Previously, I was the co-founder and CEO of Sosh, a hyper-personalized concierge which was acquired by Postmates. I have also held roles at Khosla Ventures, Google, Slide, NASA, and Stanford University.`}
      </p>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Selected Posts
      </h1>
      <div className="mb-8">
        <BlogPosts />
      </div>
    </section>
  )
}
