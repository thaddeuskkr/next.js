export const dynamic = 'force-dynamic'

export default function ErrorTriggerPage() {
  throw new Error('triggered render error')
}
