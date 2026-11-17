import Button from '@/components/ui/Button'
import PageBand from '@/components/ui/PageBand'

export default function NotFound() {
  return (
    <>
      <PageBand title="Page not found" variant="lost">
        <p>404. Sorry, that page doesn&apos;t exist or has moved.</p>
      </PageBand>
      <section className="shell py-16 md:py-24">
        <Button swatch="teal" href="/">
          Back to Home
        </Button>
      </section>
    </>
  )
}
