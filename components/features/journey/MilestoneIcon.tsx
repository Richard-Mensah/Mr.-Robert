import { Archive, BookOpen, Camera, Compass, FileText, Layers, Landmark, Mic, ScrollText, Send, Users, type LucideProps } from "lucide-react"

const ICONS = {
  pathfinder: FileText,
  steward: Landmark,
  catalyst: Layers,
  reader: BookOpen,
  listener: Mic,
  convener: Users,
  connector: Send,
  navigator: Compass,
  witness: Camera,
  storykeeper: ScrollText,
  curator: Archive,
}

type Props = LucideProps & {
  id: string
}

export default function MilestoneIcon({ id, ...props }: Props) {
  const Icon = ICONS[id as keyof typeof ICONS] ?? Compass
  return <Icon aria-hidden="true" strokeWidth={1.5} {...props} />
}
